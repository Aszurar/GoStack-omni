import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './router';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
