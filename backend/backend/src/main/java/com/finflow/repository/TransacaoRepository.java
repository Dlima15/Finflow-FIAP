package com.finflow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finflow.model.Transacao;

public interface TransacaoRepository extends JpaRepository<Transacao, Long> { }
