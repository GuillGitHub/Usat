import React from 'react';
import Eixo from '../../components/Eixo';
import Indicadores from '../../components/Indicadores';
import { Container, Fundo, ContainerIndicadores } from './styles';
import IconeEixo from '../../imagens/EU_EixoEconomico.svg';

const numeroInicial = 20;
const numeracao = Array.from({ length: 6 }, (_, i) => numeroInicial + i); //alterar para numero de indicadores

const Titulo = "ESTRUTURA URBANA";
const NomeEixo = "EIXO ECONÔMICO";
const CorEixo = '#54C0A5';
const TitulosIndicadores = [
    'IMPACTO ECONÔMICO',
    'ESTRUTURA ECONÔMICA',
    'GOVERNANÇA',
    'FRAMEWORK INSTITUCIONAL',
    'CAPACIDADE INSTITUCIONAL',
    'COMUNIDADE'
];
const CoresIndicadores = ['#E9E228', '#9AD632', '#C6A460', '#E2AC3E', '#A8B0B8', '#A2CCF2' ]
const IconesIndicadores = numeracao.map(numeracao => require(`../../imagens/EU_${numeracao}.svg`));

const EU_ECONOMICO = () => {
    return (
      <ul>
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
                    numero={indice}
                    icone={IconesIndicadores[indice]}
                    indColor={CoresIndicadores[indice]}
                    />
                ))}
                </ContainerIndicadores>
            </Container>
        </Fundo>
      </ul>
    );
  };
  
export default EU_ECONOMICO;