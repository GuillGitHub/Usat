import React from 'react';
import {
    BrowserRouter, 
    Routes, 
    Route
} from "react-router-dom"
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Error from "../components/Error";
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Choques from '../pages/Choques';
import Conduta_Ambiental from '../pages/Conduta_Eixo_Ambiental';
import Conduta_Social from '../pages/Conduta_Eixo_Social';
import Conduta_Econômico from '../pages/Conduta_Eixo_Econômico';
import Desempenho from '../pages/Desempenho';
import EU_AMBIENTAL from '../pages/EU_AMBIENTAL';
import EU_SOCIOCULTURAL from '../pages/EU_SOCIOCULTURAL';
import EU_ECONOMICO from '../pages/EU_ECONOMICO';

const RouterApp = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/choques" element={<Choques />} />
            <Route path="/conduta-economico" element={<Conduta_Econômico/>} />
            <Route path="/conduta-social" element={<Conduta_Social/>} />
            <Route path="/conduta-ambiental" element={<Conduta_Ambiental/>} />
            <Route path="/desempenho" element={<Desempenho />} />
            <Route path="/eu-ambiental" element={<EU_AMBIENTAL/>} />
            <Route path="/eu-sociocultural" element={<EU_SOCIOCULTURAL/>} />
            <Route path="/eu-economico" element={<EU_ECONOMICO/>} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>

  );
};

export default RouterApp;