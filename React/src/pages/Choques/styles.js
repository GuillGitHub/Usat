import styled from "styled-components";

export const Fundo = styled.div`
background-color: #fff;
min-height: 100vh;
font-family: Inter;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 545px); /* 2 colunas de tamanho igual */
    gap: 20px;
    /* justify-content: flex-start; */
    left: 90px; /* distancia para igualar o design, principalmente considerando a posterior adicao da barra lateral */
    top: 181px;
    position: absolute;
`;