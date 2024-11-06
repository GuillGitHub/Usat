import styled from 'styled-components';

export const IndicadorContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #F2F2F2;
  width: 511px;
  height: 59px;
  border-radius: 20px;
  cursor: pointer; /* clicavel ao passar o mouse em cima */
`;

export const IconeContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor}; /* permite receber cor personalizada externamente */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  width: 71px;
  height: 69px;
  border-radius: 20px;
`;

export const Texto = styled.span`
  font-family: Inter;
	font-size: 22px;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
  color: #000000;
  &:hover {
        text-decoration: underline; /* texto sublinhado ao passar o mouse */
`;
