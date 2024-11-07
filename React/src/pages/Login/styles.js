import styled from "styled-components";

export const Container = styled.div`
  padding: 200px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  margin-right: 40px; /* Espaço entre o logo e o formulário */
  display: flex;
  justify-content: center;
  align-items: center;
  img{
        width: 700px;
    }
`;

export const ContainerForm = styled.div`
  padding: 35px;
  width: 370px;
  background-color: var(--white);
`;

export const Form = styled.div`
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Copy = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
