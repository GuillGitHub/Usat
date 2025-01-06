import React from 'react'
import {Container, Text} from './styles'
import {Carrossel} from '../../components/Carrossel';

const numeracao = Array.from({ length: 8 }, (_, i) => 1 + i); //alterar para numero de indicadores
const ImagensSlides = numeracao.map(numeracao => require(`../../imagens/PlaceHolder${numeracao}.png`));


const Banner = () => {
  return (
    <Carrossel images = {ImagensSlides}>
        <Text>
          <h2>Plataforma de gestão da sustentabilidade</h2>
          <p>Visamos monitorar e auxiliar o planejamento urbano e formulação de políticas públicas sustentáveis</p>
          <span> Veja mais sobre </span>
        </Text>
    </Carrossel>
    /*<Container>
        <Text>
          <h2>Plataforma de gestão da sustentabilidade</h2>
          <p>Visamos monitorar e auxiliar o planejamento urbano e formulação de políticas públicas sustentáveis</p>
          <span> Veja mais sobre </span>
        </Text>
    </Container>*/
  )
}

export default Banner;