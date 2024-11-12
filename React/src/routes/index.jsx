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
import CONDUTAS_AMBIENTAL from '../pages/CONDUTAS_AMBIENTAL';
import CONDUTAS_SOCIAL from '../pages/CONDUTAS_SOCIAL';
import CONDUTAS_ECONOMICO from '../pages/CONDUTAS_ECONOMICO';
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
            <Route path="/conduta-economico" element={<CONDUTAS_ECONOMICO/>} />
            <Route path="/conduta-social" element={<CONDUTAS_SOCIAL/>} />
            <Route path="/conduta-ambiental" element={<CONDUTAS_AMBIENTAL/>} />
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