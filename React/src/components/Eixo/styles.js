import styled from "styled-components";

export const Titulo = styled.div`
width: 1095px;
height: 59px;
background-color: #597D1C;
color: #FFF;
text-align: center;
font-size: 48px;
font-weight: 700;
position: relative;
z-index: 1;
border-radius: 20px;
`;

export const Fundo = styled.div`
width: 382px;
height: 540px;
top: 26px;
border-radius: 40px;
background-color: #9AD6321F;
position: absolute;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* sombra - extra, ver se eh realmente necessario */
display: flex;
flex-direction: column;
`;

export const NomeEixo = styled.div`
font-size: 28px;
font-weight: 700;
line-height: 30px;
text-align: left;
color: #597D1C;
`;

export const HeaderEixo = styled.div`
padding: 57px 25px 0px;
display: flex;
align-items: center;
`;

export const IconeContainer = styled.div`
background-color: ${({ bgColor }) => bgColor}; /* permite receber cor personalizada externamente */
display: flex;
align-items: center;
justify-content: center;
width: 65px;
height: 65px;
border-radius: 28.48px;
margin-right: 13px;
`;

export const Conteudo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-grow: 1;
padding: 20px 25px 40px;
`;

export const Texto = styled.div`
  color: #1D1D1D;
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  line-height: 20px;
`;

export const Ilust = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 279px;
    height: 200px;
  }
`;