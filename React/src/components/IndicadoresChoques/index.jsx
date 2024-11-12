import React from 'react';
import { Container, IndicadorContainer, IconeContainer, Texto } from './styles';

function Indicador({ titulo, icone, bgColor }) {
  return (
    <Container>
      <IconeContainer bgColor={bgColor}>
        <img src={icone} alt="" />
      </IconeContainer>
      <IndicadorContainer>
        <Texto>{titulo}</Texto>
      </IndicadorContainer>
    </Container>
  );
}

export default Indicador;

