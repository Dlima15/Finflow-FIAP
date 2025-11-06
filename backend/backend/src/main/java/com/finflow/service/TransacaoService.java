package com.finflow.service;

import com.finflow.model.Conta;
import com.finflow.model.Transacao;
import com.finflow.repository.ContaRepository;
import com.finflow.repository.TransacaoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
public class TransacaoService {

    private final TransacaoRepository transacaoRepository;
    private final ContaRepository contaRepository;

    public TransacaoService(TransacaoRepository transacaoRepository, ContaRepository contaRepository) {
        this.transacaoRepository = transacaoRepository;
        this.contaRepository = contaRepository;
    }

    public List<Transacao> listarTodas() {
        return transacaoRepository.findAll();
    }

    public Transacao buscarPorId(Long id) {
        return transacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transação não encontrada com ID: " + id));
    }

    @Transactional
    public Transacao criar(Long contaId, Transacao transacao) {
        Conta conta = contaRepository.findById(contaId)
                .orElseThrow(() -> new RuntimeException("Conta não encontrada com ID: " + contaId));

        // Atualiza saldo da conta automaticamente
        if ("debito".equalsIgnoreCase(transacao.getTipo())) {
            conta.setSaldo(conta.getSaldo().subtract(transacao.getValor()));
        } else if ("credito".equalsIgnoreCase(transacao.getTipo())) {
            conta.setSaldo(conta.getSaldo().add(transacao.getValor()));
        }

        transacao.setConta(conta);
        contaRepository.save(conta);
        return transacaoRepository.save(transacao);
    }

    @Transactional
    public Transacao atualizar(Long id, Transacao dados) {
        Transacao existente = buscarPorId(id);
        existente.setTipo(dados.getTipo());
        existente.setValor(dados.getValor());
        existente.setDescricao(dados.getDescricao());
        existente.setDataHora(dados.getDataHora());
        return transacaoRepository.save(existente);
    }

    @Transactional
    public void deletar(Long id) {
        if (!transacaoRepository.existsById(id)) {
            throw new RuntimeException("Transação não encontrada com ID: " + id);
        }
        transacaoRepository.deleteById(id);
    }
}
