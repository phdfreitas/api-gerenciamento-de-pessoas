package com.api.pessoas.gerenciamento.repository;

import com.api.pessoas.gerenciamento.model.Pessoa;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    public Optional<Pessoa> findByEmail(String email);

    /*@Query("select p from Pessoa p join fetch p.roles where p.email=(:email)")
    public Pessoa findByEmail(@Param("email") String email);*/
}
