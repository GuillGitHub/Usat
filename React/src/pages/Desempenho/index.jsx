import React from 'react'
import Button from "../../components/Button";
import Desempenho_Imagem from '../../imagens/Imagem_Desempenho.png';
import Desempenho_Imagem2 from '../../imagens/Imagem_Desempenho_2.png';
import Estrutura_urbana_Imagem from '../../imagens/EU_Ilustracao.png';
import Condutas_Imagem from '../../imagens/Condutas_Ilustracao.png';
import { Container, ContainerEixo, ContainerTitulo, Horizontal, Label, ContainerCinza} from './styles';


const Desempenho = () => {
    return (
      <Container>
          <ContainerTitulo>
              <Label cor="var(--white)" align="center">Desempenho</Label>
          </ContainerTitulo>

          <Horizontal>

            <ContainerEixo>
              <Label cor="#1D1D1D" tamanho="20" align="left"> Feedback do cidadão(aplicativo)</Label>
              <div style={{ position: 'absolute', bottom: '20px', left: '20%' }}>
              <img src={Desempenho_Imagem}  style={{ width: '80%', maxWidth: '300px' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '150px', left: '20%' }}>
              <img src={Desempenho_Imagem2}  style={{ width: '80%', maxWidth: '300px' }} />
              </div>
            </ContainerEixo>

            <div style={{ padding:'15x', display: 'flex', alignItems: 'center' }}>
            <ContainerCinza>
                <Label cor="var(--moss-green)" tamanho="48" align="center"> Condutas </Label>
                <div style={{position: 'absolute', bottom: '270px', left: '20%' }}>
                    <Label cor="var(--moss-green)" tamanho="20" align="center"> Lagoa da conceição  </Label>
                    <Label cor="var(--moss-green)" tamanho="20" align="center"> Média geral: 4,5  </Label>
                </div>
                <div style={{position: 'absolute', bottom: '200px', left: '20%' }}>
                    <Button>Acessar Avaliação</Button>
                </div>
                <div style={{position: 'absolute', bottom: '10px', left: '15%' }}>
                    <img src={Condutas_Imagem}  style={{ width: '80%', maxWidth: '300px' }} />
                </div>
            </ContainerCinza>
    

            <ContainerCinza>
                <Label cor="var(--moss-green)" tamanho="48" align="center"> Estrutura urbana </Label>
                <div style={{position: 'absolute', bottom: '270px', left: '20%' }}>
                    <Label cor="var(--moss-green)" tamanho="20" align="center"> Lagoa da conceição  </Label>
                    <Label cor="var(--moss-green)" tamanho="20" align="center"> Média geral: 4,5  </Label>
                </div>
                <div style={{position: 'absolute', bottom: '200px', left: '20%' }}>
                    <Button>Acessar Avaliação</Button>
                    </div>
                <div style={{position: 'absolute', bottom: '10px', left: '15%' }}>
                    <img src={Estrutura_urbana_Imagem}  style={{ width: '80%', maxWidth: '300px' }} />
                </div>
            </ContainerCinza>
            </div>
          </Horizontal>
      </Container>
    )
  }


export default Desempenho;