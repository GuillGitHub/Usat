import React from 'react';
import { Titulo, Fundo, NomeEixo, IconeContainer, Ilust } from './styles';
import Ilustracao from '../../imagens/EU_Ilustracao.png';

function Eixo({ titulo, nomeeixo, iconeeixo, bgColor }) {
    return (
      <ul>
        <Titulo>{titulo}</Titulo>
        <Fundo>
            <IconeContainer bgColor={bgColor}>
                <img src={iconeeixo} alt="" />
            </IconeContainer>
            <NomeEixo>{nomeeixo}</NomeEixo>
            <Ilust>
                <img src={Ilustracao} alt="" />
            </Ilust>
        </Fundo>
      </ul>
    );
  }
  
export default Eixo;