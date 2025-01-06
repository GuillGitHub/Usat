import styled from 'styled-components';

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const Slide = styled.div`
    padding: 220px 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.bgImage});
    width: 100%;
    height: 400px;
    transition: opacity 0.5s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`;

export const NavigationButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.7); 
    color: rgba(255, 255, 255, 0.7); 
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
`;