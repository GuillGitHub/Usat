import styled from 'styled-components';

export const Numero = styled.div`
    padding: 15px 10px 0px;
	font-size: 32px;
	font-weight: 700;
	line-height: 16px;
    color: #fff;
`;

export const IndContainer = styled.div`
  background-color: ${({ indColor }) => indColor}; /* permite receber cor personalizada externamente */
  width: 157px;
  height: 154px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const Infos = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
flex-grow: 1;
text-align: center;
`;

export const NomeIndicador = styled.div`
	font-size: 15px;
	font-weight: 700;
	line-height: 16px;
    color: #fff;

    &:hover {
        text-decoration: underline; /* texto sublinhado ao passar o mouse */
`;

export const Icone = styled.div`
`;