package com.finflow.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.finflow.model.Cliente;
import com.finflow.model.Conta;
import com.finflow.repository.ClienteRepository;
import com.finflow.repository.ContaRepository;

@Service
public class ContaService {

    private final ContaRepository contaRepository;
    private final ClienteRepository clienteRepository;

    public ContaService(ContaRepository contaRepository, ClienteRepository clienteRepository) {
        this.contaRepository = contaRepository;
        this.clienteRepository = clienteRepository;
    }

    // ========================
    // MÉTODOS CRUD PRINCIPAIS
    // ========================

    public List<Conta> listarTodas() {
        return contaRepository.findAll();
    }

    public Conta buscarPorId(Long id) {
        return contaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Conta não encontrada com ID: " + id));
    }

    @Transactional
    public Conta criar(Long clienteId, Conta conta) {
        Cliente cliente = clienteRepository.findById(clienteId)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado com ID: " + clienteId));

        conta.setCliente(cliente);
        return contaRepository.save(conta);
    }

    @Transactional
    public Conta atualizar(Long id, Conta dadosAtualizados) {
        Conta contaExistente = buscarPorId(id);

        contaExistente.setTipo(dadosAtualizados.getTipo());
        contaExistente.setAgencia(dadosAtualizados.getAgencia());
        contaExistente.setNumero(dadosAtualizados.getNumero());
        contaExistente.setSaldo(dadosAtualizados.getSaldo());

        return contaRepository.save(contaExistente);
    }

    @Transactional
    public void deletar(Long id) {
        if (!contaRepository.existsById(id)) {
            throw new RuntimeException("Conta não encontrada com ID: " + id);
        }
        contaRepository.deleteById(id);
    }
}
