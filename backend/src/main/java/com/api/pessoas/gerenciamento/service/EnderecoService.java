package com.api.pessoas.gerenciamento.service;

import java.util.List;

import com.api.pessoas.gerenciamento.model.Endereco;
import com.api.pessoas.gerenciamento.model.Pessoa;

public interface EnderecoService {
    
    Pessoa adicionaNovoEndereco(Endereco endereco, Long idPessoa);
    List<Endereco> listaEnderecos(Long idPessoa);

}
