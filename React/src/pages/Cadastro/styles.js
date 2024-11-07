import styled from "styled-components";

export const LogoContainer = styled.div`
  margin-right: 40px; /* Espaço entre o logo e o formulário */
  display: flex;
  justify-content: center;
  align-items: center;
  img{
        width: 700px;
    }
`;

export const Container = styled.div`
    padding: 100px 150px;
    display: flex;
    justify-content:center;
    flex-direction: row;
    h2{
        font-size: 1.875rem;
    }
    p{
        font-size:1.2rem;
        margin-bottom: 15px;

    }

`
export const ContainerForm = styled.div`
    padding: 35px;
    width: 370px;
    background-color: var(--white)

`

export const Form = styled.div`
    width: 100%;

`

export const Label = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-weight: 500;

`

