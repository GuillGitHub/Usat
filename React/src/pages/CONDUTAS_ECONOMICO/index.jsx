import React from 'react';
import Eixo from '../../components/Eixo';
import Indicadores from '../../components/Indicadores';
import { Container, Fundo, ContainerIndicadores } from './styles';
import IconeEixo from '../../imagens/IconeEixoEconomico.svg';

const numeroInicial = 6;
const numeracao = Array.from({ length: 1 }, (_, i) => numeroInicial + i); //alterar para numero de indicadores

const Titulo = "CONDUTAS";
const NomeEixo = "ECONÔMICO";
const CorEixo = '#54C0A5';
const TitulosIndicadores = [
    'CUSTOS E INOVAÇÃO'
];
const CoresIndicadores = ['#FFAF22'];
const IconesIndicadores = numeracao.map(numeracao => require(`../../imagens/Condutas_${numeracao}.svg`));

const CONDUTAS_ECONOMICO = () => {
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
  
export default CONDUTAS_ECONOMICO;