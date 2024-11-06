import React from 'react';
import Eixo from '../../components/Eixo';
import Indicadores from '../../components/Indicadores';
import { Container, Fundo, ContainerIndicadores } from './styles';
import IconeEixo from '../../imagens/EU_EixoSocioCultural.svg';

const numeroInicial = 10;
const numeracao = Array.from({ length: 10 }, (_, i) => numeroInicial + i); //alterar para numero de indicadores

const Titulo = "ESTRUTURA URBANA";
const NomeEixo = "EIXO SOCIOCULTURAL";
const CorEixo = '#E2AC3E';
const TitulosIndicadores = [
    'BEM-ESTAR SOCIAL',
    'CONFORTO E SAÚDE',
    'DESIGN, RELAÇÕES E LAYOUT URBANO',
    'SIGNIFICADO ESTÉTICO E VISUAL',
    'CONECTIVIDADE E TRANSPORTE',
    'INFRAESTRUTURA SOCIOCULTURAL',
    'INFRAESTRUTURA BÁSICA',
    'SEGURANÇA E SEGURIDADE',
    'HERANÇA E CULTURA DA COMUNIDADE LOCAL',
    'EDUCAÇÃO'
];
const CoresIndicadores = ['#E9E228', '#BED19E', '#ECE076', '#54C0A5', '#6CA3DA',
    '#AABBD6', '#8E8D89', '#907CBA', '#A56736', '#FFAF22' ]
const IconesIndicadores = numeracao.map(numeracao => require(`../../imagens/EU_${numeracao}.svg`));

const EU_SOCIOCULTURAL = () => {
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
  
export default EU_SOCIOCULTURAL;