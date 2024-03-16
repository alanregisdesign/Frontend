import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Header from '/src/components/Header';
import axios from 'axios';

const FormularioCadastro = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    font-size: 16px;

    &:focus {
    outline: none;
    border-color: #007bff;
    }
`;

const Button = styled.button`
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
    background-color: #0056b3;
    }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GeneroWrapper = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    wrap: nowrap;
    align-items: center;
    justify-content: space-between;
`;

const GeneroTitle = styled.h4`
`;

const GeneroSelect = styled.select`
    width: 100%;
    margin-left: 10px;
    margin-top: 3px;
`;

const Cadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/usuarios', data)
      .then(response => {
        alert('Usuário cadastrado com sucesso!');
      })
      .catch(error => {
        alert('Erro ao cadastrar usuário:', error);
        console.error('Erro ao cadastrar usuário:', error);
      });
  };

  return (
    <div>
        <Header />
        <Title>Cadastro</Title>
        <FormularioCadastro onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder="CPF" {...register("cpf", { required: true })} />
            {errors.cpf && <span>Campo obrigatório</span>}

            <Input type="text" placeholder="Nome" {...register("nome", { required: true })} />
            {errors.nome && <span>Campo obrigatório</span>}

            <Input type="text" placeholder="Idade" {...register("idade")} />

            <Input type="text" placeholder="Cidade" {...register("cidade")} />

            <Input type="text" placeholder="Bairro" {...register("bairro")} />

            <GeneroWrapper>
                <GeneroTitle>Gênero:</GeneroTitle>

                <GeneroSelect {...register("genero")}>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outros">Outros</option>
                <option value="prefiro-nao-responder">Prefiro não responder</option>
                </GeneroSelect>
            </GeneroWrapper>

            <Button type="submit">Cadastrar</Button>
        </FormularioCadastro>
    </div>
  );
}

export default Cadastro;
