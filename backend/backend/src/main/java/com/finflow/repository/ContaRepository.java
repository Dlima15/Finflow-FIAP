package com.finflow.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finflow.model.Conta;

public interface ContaRepository extends JpaRepository<Conta, Long> {
    Optional<Conta> findByNumero(String numero);
}
