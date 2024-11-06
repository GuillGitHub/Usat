import React from "react";
import { Container, Header, Ilust, Titulo, Texto } from "./styles";
import Ilustracao from '../../imagens/Choques_Ilustracao.svg';

const PainelChoques = () => {
  return (
    <Container>
      <Ilust>
          <img src={Ilustracao} alt="" />
      </Ilust>
      <Header>
        <Titulo>CHOQUES</Titulo>
        <Texto>Texto explicativo</Texto>
      </Header>
    </Container>
  );
};

export default PainelChoques;
