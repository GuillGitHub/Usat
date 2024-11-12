import React from 'react';
import { Titulo, Fundo, NomeEixo, IconeContainer, Conteudo, Texto, Ilust, HeaderEixo } from './styles';
import Ilustracao from '../../imagens/EU_Ilustracao.png';

function Eixo({ titulo, nomeeixo, iconeeixo, bgColor }) {
    return (
      <ul>
        <Titulo>{titulo}</Titulo>
        <Fundo>
          <HeaderEixo>
            <IconeContainer bgColor={bgColor}>
              <img src={iconeeixo} alt="" />
            </IconeContainer>
            <NomeEixo><p>EIXO</p><p>{nomeeixo}</p></NomeEixo>
          </HeaderEixo>
          <Conteudo>
            <Texto>Resumo do eixo.</Texto>
            <Ilust>
              <img src={Ilustracao} alt="" />
            </Ilust>
          </Conteudo>
        </Fundo>
      </ul>
    );
  }
  
export default Eixo;