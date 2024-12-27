import React from 'react';
import Eixo from '../../components/Eixo';
import Indicadores from '../../components/Indicadores';
import { Container, Fundo, ContainerIndicadores } from './styles';
import IconeEixo from '../../imagens/IconeEixoAmbiental.svg';
import Ilustracao from '../../imagens/EU_Ilustracao.png';


const numeroInicial = 1;
const numeracao = Array.from({ length: 9 }, (_, i) => numeroInicial + i); //alterar para numero de indicadores

const Titulo = "ESTRUTURA URBANA";
const NomeEixo = "AMBIENTAL";
const CorEixo = '#99D631';
const TitulosIndicadores = [
    'ATMOSFERA E CLIMA',
    'ECOLOGIA',
    'USO DA TERRA E INFRAESTRUTURA VERDE',
    'RECURSOS, TECNOLOGIA E ENERGIA',
    'ÁGUA E DESPERDÍCIO DE ÁGUA',
    'DESASTRES NATURAIS',
    'GERENCIAMENTO DE RESÍDUOS SÓLIDOS',
    'AMBIENTE CONSTRUÍDO',
    'GERENCIAMENTO DE MATERIAIS'
];
const CoresIndicadores = ['#E9E228', '#9AD632', '#729535', '#E2AC3E', '#6CA3DA', '#AEAEAE', '#AE9D79',
  '#D1C5AD', '#4E8C79' ];
const IconesIndicadores = numeracao.map(numeracao => require(`../../imagens/EU_${numeracao}.svg`));

const EU_AMBIENTAL = () => {
    return (
      <Fundo>
          <Container>
              <Eixo
              titulo={Titulo}
              nomeeixo={NomeEixo}
              iconeeixo={IconeEixo}
              bgColor={CorEixo}              
              imagem = {Ilustracao}
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
  
export default EU_AMBIENTAL;