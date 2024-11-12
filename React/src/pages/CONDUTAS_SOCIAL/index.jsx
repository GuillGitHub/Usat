import React from 'react';
import Eixo from '../../components/Eixo';
import Indicadores from '../../components/Indicadores';
import { Container, Fundo, ContainerIndicadores } from './styles';
import IconeEixo from '../../imagens/IconeEixoSocial.svg';

const numeroInicial = 7;
const numeracao = Array.from({ length: 3 }, (_, i) => numeroInicial + i); //alterar para numero de indicadores

const Titulo = "CONDUTAS";
const NomeEixo = "SOCIAL";
const CorEixo = '#E2AC3E';
const TitulosIndicadores = [
    'SOCIAL',
    'QUALIDADE DO ESPAÇO',
    'ADAPTAÇÃO ÀS ALTERAÇÕES CLIMÁTICAS'
];
const CoresIndicadores = ['#AE60C2', '#54C0A5', '#FFAF22'];
const IconesIndicadores = numeracao.map(numeracao => require(`../../imagens/Condutas_${numeracao}.svg`));

const CONDUTAS_SOCIAL = () => {
    return (
      <Fundo>
          <Container>
              <Eixo
              titulo={Titulo}
              nomeeixo={NomeEixo}
              iconeeixo={IconeEixo}
              bgColor={CorEixo}
              />
              <ContainerIndicadores>
                   {TitulosIndicadores.map((nomeIndic, indice) => (
                  <Indicadores
                  nomeind={nomeIndic}
                  numero={numeroInicial + indice}
                  icone={IconesIndicadores[indice]}
                  indColor={CoresIndicadores[indice]}
                  />
              ))}
              </ContainerIndicadores>
          </Container>
      </Fundo>
    );
  };
  
export default CONDUTAS_SOCIAL;