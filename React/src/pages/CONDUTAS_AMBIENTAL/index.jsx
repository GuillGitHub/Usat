import React from 'react';
import Eixo from '../../components/Eixo';
import Indicadores from '../../components/Indicadores';
import { Container, Fundo, ContainerIndicadores } from './styles';
import IconeEixo from '../../imagens/IconeEixoAmbiental.svg';

const numeroInicial = 1;
const numeracao = Array.from({ length: 5 }, (_, i) => numeroInicial + i); //alterar para numero de indicadores

const Titulo = "CONDUTAS";
const NomeEixo = "AMBIENTAL";
const CorEixo = '#99D631';
const TitulosIndicadores = [
    'SÍTIO (LOCAL) E DESENVOLVIMENTO SUSTENTÁVEL',
    'ÁGUA',
    'CONSUMO DE MATERIAIS, RECURSOS E ECONOMIA CIRCULAR',
    'ENERGIA',
    'QUALIDADE AMBIENTAL INTERIOR',
];
const CoresIndicadores = ['#FFF61B', '#6CA2DA', '#C6A460', '#FFAF22', '#A2BC72' ];
const IconesIndicadores = numeracao.map(numeracao => require(`../../imagens/Condutas_${numeracao}.svg`));

const CONDUTAS_AMBIENTAL = () => {
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
  
export default CONDUTAS_AMBIENTAL;