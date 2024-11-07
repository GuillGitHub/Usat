import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --primary: #F9F9F9; 
        --secondary: #15181C;
        --yellow: #F9F472;
        --gray: #D9D9D9;
        --blue: #6699FF;
        --green: #98D731;
        --lime: #CCFF66;
        --white: #FFF;
        --light-gray: #E8E9EB;
        --brown: #AD682F;
        --moss-green:#597D1C;
        --dark-green:#02AA5D;
        --cyan: #4ACCAA;
        --orange: #FFAF22; 


    }

    body{
        background-color: var(--primary);
        color: var(--secondary);
        font-size: 1.5rem;
        font-weight: 400;
    }
    .dosis-400{
        font-family: "Dosis", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
    ul, nav{list-style-type: none;}
    a{text-decoration: none;}
`;