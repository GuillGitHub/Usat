import React from 'react';
import TituloChoques from '../../components/TituloChoques';
import IndicadoresChoques from '../../components/IndicadoresChoques';
import { Fundo, Container } from './styles';

const numeracao = Array.from({ length: 7 }, (_, i) => i + 1); //alterar para numero de indicadores

const TitulosIndicadores = [
    'INOVAÇÕES TECNOLÓGICAS',
    'MUDANÇAS NA LEGISLAÇÃO', 
    'MUDANÇAS NO PERFIL DO CIDADÃO',
    'MUDANÇAS NO ECOSSISTEMA',
    'MUDANÇAS SOCIAIS', 
    'OUTRAS MUDANÇAS', 
    'AÇÃO GOVERNAMENTAL'
];
const CoresIndicadores = ['#FBAA37', '#EFED7E', '#54C0A5', '#678DC9', '#00B36A', '#597D1C', '#A56736'];
const IconesIndicadores = numeracao.map(numeracao => require(`../../imagens/Choques_${numeracao}.svg`));
//importar os icones e guarda-los numa lista

const Choques = () => {
  return (
    <ul>
      <Fundo>
        <Container>
            <TituloChoques />
            {TitulosIndicadores.map((tituloInd, indice) => (
                <IndicadoresChoques
                titulo={tituloInd}
                icone={IconesIndicadores[indice]}
                bgColor={CoresIndicadores[indice]}
                />
            ))}
        </Container>
      </Fundo>  
    </ul>
  );
};

export default Choques;