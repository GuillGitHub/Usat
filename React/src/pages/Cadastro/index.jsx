import React from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label, LogoContainer} from './styles';
import logo from '../../imagens/logo.png';

const Cadastro = () => {
  return (
    <Container>
      <table border = "0">
        <tr>
          <td align = "left">
        <LogoContainer>
          <img src={logo} align = "left" alt="Logo" />
        </LogoContainer>
        </td>
        <td>
        <ContainerForm>
        <h2>Crie sua conta</h2>
        <p>Cadastre-se para acessar a plataforma!</p>
            <Form>
                <Label>Nome de usuário</Label>
                <Input type='text' placeholder='Crie seu nome' />
                <Label>CEP</Label>
                <Input type='text' placeholder='Informe seu CEP' />
                <Label>E-mail</Label>
                <Input type='text' placeholder='Informe seu E-mail'/>
                <Label>Senha</Label>
                <Input type='text' placeholder='Informe sua Senha' />
                <Label> Confirmar senha</Label>
                <Input type='text' placeholder='Confirme sua Senha'/>
                <Button>Fazer Cadastro</Button>
            </Form>
        </ContainerForm>
        </td>
        </tr>
        </table>
    </Container>
  )
}

export default Cadastro;