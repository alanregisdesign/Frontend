import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import Header from '/src/components/Header';

const LoginForm = styled.form`
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

const ButtonCadastro = styled.button`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:3000/visitantes/login', data)

        .then(response => {
            localStorage.setItem('token', response.data.token);
        })
        .catch(error => {
            alert('Erro ao efetuar login:', error);
            console.error('Erro ao efetuar login:', error);
        });
  };

  return (
    <div>
        <Header />
        <Title>Efetue o seu login para continuar</Title>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder="CPF" {...register("cpf", { required: true })} />
            {errors.cpf && <span>Campo obrigatório</span>}
            
            <Input type="password" placeholder="Senha" {...register("senha", { required: true })} />
            {errors.senha && <span>Campo obrigatório</span>}

            <Button type="submit">Entrar</Button>
            <ButtonCadastro type="button">Cadastrar</ButtonCadastro>
        </LoginForm>
    </div>
  );
}

export default Login;
