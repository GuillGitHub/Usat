import React from 'react';
import { Numero, Infos, IndContainer, NomeIndicador, Icone } from './styles';

function Indicador({ nomeind, numero, icone, indColor }) {
  return (
    <IndContainer indColor={indColor}>
      <Numero>{numero}</Numero>
      <Infos>
        <NomeIndicador>{nomeind}</NomeIndicador>
        <Icone>
          <img src={icone} alt="" />
        </Icone>
      </Infos>
    </IndContainer>
  );
}

export default Indicador;

