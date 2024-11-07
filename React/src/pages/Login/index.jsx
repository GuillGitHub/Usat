import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, ContainerForm, Copy, Form, Label, LogoContainer } from './styles';
import { Link } from 'react-router-dom'; 
import logo from '../../imagens/logo.png';

const Login = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <ContainerForm>
        <h2>Acesse sua conta</h2>
        <p>Entre com seu email e senha!</p>
        <Form>
          <Label>E-mail</Label>
          <Input type="text" placeholder="Informe seu E-mail" />
          <Label>Senha</Label>
          <Input type="password" placeholder="Informe sua Senha" />
          <Button>Fazer Login</Button>
          <Copy>
            <li><Link to="/cadastro"><span> Não tem cadastro? </span></Link></li>
          </Copy>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;



//<li><Link to="/cadastro"><span> Não tem cadastro? </span></Link></li>