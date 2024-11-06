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
display: flex;
width: 382px;
height: 540px;
top: 26px;
border-radius: 40px;
background-color: #9AD6321F;
position: absolute;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* sombra - extra, ver se eh realmente necessario */
flex-direction: column;
`;

export const NomeEixo = styled.div`
padding: 72px 100px; /* limitar espaco ocupado pelo texto */
transform: translate(5px, -75px);
font-size: 28px;
font-weight: 700;
line-height: 30px;
text-align: left;
color: #597D1C;
`;

export const IconeContainer = styled.div`
background-color: ${({ bgColor }) => bgColor}; /* permite receber cor personalizada externamente */
display: flex;
align-items: center;
justify-content: center;
transform: translate(25px, 57px);
width: 65px;
height: 65px;
border-radius: 28.48px;
`;

export const Ilust = styled.div`
  padding: 30px 45px;

  img {
    width: 279px;
    height: 200px;
  }
`;