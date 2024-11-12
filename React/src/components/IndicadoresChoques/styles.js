import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 4px; /* centralizar indicadores */
  display: flex;
  align-items: center;
`;

export const IndicadorContainer = styled.div`
  left: 21px;
  display: flex;
  align-items: center;
  background-color: #F2F2F2;
  width: 511px;
  height: 59px;
  border-radius: 20px;
  cursor: pointer; /* clicavel ao passar o mouse em cima */
  position: relative;
`;

export const IconeContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor}; /* permite receber cor personalizada externamente */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 71px;
  height: 69px;
  border-radius: 20px;
  position: absolute;
  z-index: 1;
`;

export const Texto = styled.span`
  margin-left: 65px;
	font-size: 22px;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
  color: #000000;
  &:hover {
        text-decoration: underline; /* texto sublinhado ao passar o mouse */
`;
