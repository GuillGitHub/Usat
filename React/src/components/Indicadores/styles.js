import styled from 'styled-components';

export const Numero = styled.span`
    transform: translate(-50px, 10px);
    width: 31px;
    height: 45px;
	font-size: 32px;
	font-weight: 700;
	line-height: 16px;
	text-align: left;
    color: #fff;
`;

export const IconeContainer = styled.div`
  background-color: ${({ indColor }) => indColor}; /* permite receber cor personalizada externamente */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 157px;
  height: 154px;
  border-radius: 20px;
  cursor: pointer;
`;

export const NomeIndicador = styled.span`
	font-size: 15px;
	font-weight: 700;
	line-height: 16px;
	text-align: center;
    color: #fff;
    &:hover {
        text-decoration: underline; /* texto sublinhado ao passar o mouse */
`;
