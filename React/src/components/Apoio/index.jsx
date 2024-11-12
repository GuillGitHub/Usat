import React, { Fragment } from "react";
import { Container, Item } from "./styles";
import Logo from '../../imagens/logo.png';
import Casan from '../../imagens/Casan.png';
import Fapesc from '../../imagens/Fapesc.png';
import UFSC from '../../imagens/UFSC.png';
import { FaFacebook, FaGooglePlus, FaInstagram } from "react-icons/fa"

const Apoio = () => {
    return (
        <Fragment>
            <Container>
                <Item>
                    <h3>Realização e apoio</h3>
                    <ul>
                        <img src={Fapesc} align="center" alt=""/>
                        <img src={Casan} align="center" alt=""/>
                        <img src={UFSC} align="center" alt=""/>
                    </ul>
                </Item>
            </Container>
        </Fragment>
    )
}

export default Apoio;