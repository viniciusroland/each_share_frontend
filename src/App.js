import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import GlobalStyle from "./styles/global"
import Routes from './router'
import Header from './components/Header';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
