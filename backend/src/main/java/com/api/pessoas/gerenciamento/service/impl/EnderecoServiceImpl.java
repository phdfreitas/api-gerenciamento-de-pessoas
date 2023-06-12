package com.api.pessoas.gerenciamento.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.pessoas.gerenciamento.model.Endereco;
import com.api.pessoas.gerenciamento.model.Pessoa;
import com.api.pessoas.gerenciamento.model.enums.TipoEndereco;
import com.api.pessoas.gerenciamento.repository.EnderecoRepository;
import com.api.pessoas.gerenciamento.service.EnderecoService;
import com.api.pessoas.gerenciamento.service.PessoaService;

@Service
public class EnderecoServiceImpl implements EnderecoService{

    private EnderecoRepository enderecoRepository;

    private PessoaService pessoaService;

    public EnderecoServiceImpl(EnderecoRepository enderecoRepository, PessoaService pessoaService) {
        this.enderecoRepository = enderecoRepository;
        this.pessoaService = pessoaService;
    }

    @Override
    public Pessoa adicionaNovoEndereco(Endereco endereco, Long idPessoa) {      
        Pessoa pessoa = pessoaService.consultaPessoa(idPessoa);
        
        if(endereco.getTipoEndereco() == null){
            endereco.setTipoEndereco(TipoEndereco.SECUNDARIO);
        }
        
        endereco.setPessoa(pessoa);
        pessoa.getEnderecos().add(endereco);
        
        enderecoRepository.save(endereco);

        return pessoaService.salvaPessoa(pessoa);
    }

    @Override
    public List<Endereco> listaEnderecos(Long idPessoa) {
        return pessoaService.consultaPessoa(idPessoa).getEnderecos();
    }


    
}
