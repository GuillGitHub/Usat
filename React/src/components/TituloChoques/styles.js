import styled from "styled-components";

export const Container = styled.div`
  width: 1106px;
	height: 213px;
  position: relative;
  grid-column: span 2; /* perimitir que ignore a organizacao de colunas */
`;

export const Header = styled.div`
  top: 53px;
  width: 1106px;
	height: 160px;
  border-radius: 20px;
  background-color: #f5fbea;
  position: absolute;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* sombra - extra, ver se eh realmente necessario */
  font-family: Inter;
`;

export const Ilust = styled.div`
  position: absolute;
  top: -53px;
  padding: 10px;
  z-index: 2;

  img {
    width: 236px;
    height: 236px;
  }
`;

export const Titulo = styled.div`
  width: 100%;
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

export const Texto = styled.div`
  padding: 20px 250px; /* limitar espaco ocupado pelo texto */
  color: #1D1D1D;
  font-size: 15px;
  font-weight: 300;
  text-align: left;
  z-index: 1;
`;
