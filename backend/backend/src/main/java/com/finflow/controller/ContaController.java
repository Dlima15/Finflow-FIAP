package com.finflow.controller;

import com.finflow.model.Conta;
import com.finflow.service.ContaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/contas")
@CrossOrigin(origins = "*") // permite acesso do React
public class ContaController {

    private final ContaService contaService;

    public ContaController(ContaService contaService) {
        this.contaService = contaService;
    }

    // ✅ LISTAR TODAS AS CONTAS
    @GetMapping
    public ResponseEntity<List<Conta>> listarTodas() {
        return ResponseEntity.ok(contaService.listarTodas());
    }

    // ✅ BUSCAR CONTA POR ID
    @GetMapping("/{id}")
    public ResponseEntity<Conta> buscarPorId(@PathVariable Long id) {
        Conta conta = contaService.buscarPorId(id);
        return ResponseEntity.ok(conta);
    }

    // ✅ CRIAR NOVA CONTA VINCULADA A UM CLIENTE
    @PostMapping("/cliente/{clienteId}")
    public ResponseEntity<Conta> criarConta(
            @PathVariable Long clienteId,
            @RequestBody Conta conta) {

        Conta novaConta = contaService.criar(clienteId, conta);
        return ResponseEntity
                .created(URI.create("/api/contas/" + novaConta.getId()))
                .body(novaConta); // retorna 201 Created
    }

    // ✅ ATUALIZAR CONTA EXISTENTE
    @PutMapping("/{id}")
    public ResponseEntity<Conta> atualizarConta(
            @PathVariable Long id,
            @RequestBody Conta conta) {

        Conta atualizada = contaService.atualizar(id, conta);
        return ResponseEntity.ok(atualizada);
    }

    // ✅ DELETAR CONTA
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarConta(@PathVariable Long id) {
        contaService.deletar(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}
