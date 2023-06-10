package com.api.pessoas.gerenciamento.service;

import com.api.pessoas.gerenciamento.model.Endereco;
import com.api.pessoas.gerenciamento.model.Pessoa;

import java.util.List;
import java.util.Optional;

public interface PessoaService {

    Pessoa salvaPessoa(Pessoa pessoa);
    List<Pessoa> listaDePessoas();
    Pessoa consultaPessoa(Long id);
    Optional<Pessoa> findByEmail(String email);
    Pessoa atualizaDadosPessoa(Long id, Pessoa pessoa);
    Pessoa adicionaNovoEndereco(Endereco endereco, Long idPessoa);
    List<Endereco> listaEnderecos(Long idPessoa);

    byte[] gerarRelatorioPessoas() throws Exception;
    byte[] gerarRelatorioEnderecoPessoa(Long idPessoa) throws Exception;
}
