import React from 'react';
import { Numero, IconeContainer, NomeIndicador } from './styles';

function Indicador({ nomeind, numero, icone, indColor }) {
  return (
    <IconeContainer indColor={indColor}>
        <Numero>{numero}</Numero>
        <NomeIndicador>{nomeind}</NomeIndicador>
        <img src={icone} alt="" />
    </IconeContainer>
  );
}

export default Indicador;

