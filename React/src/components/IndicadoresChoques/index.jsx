import React from 'react';
import { IndicadorContainer, IconeContainer, Texto } from './styles';

function Indicador({ titulo, icone, bgColor }) {
  return (
    <IndicadorContainer>
      <IconeContainer bgColor={bgColor}>
        <img src={icone} alt="" />
      </IconeContainer>
      <Texto>{titulo}</Texto>
    </IndicadorContainer>
  );
}

export default Indicador;

