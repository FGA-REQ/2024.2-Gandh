import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TelaInicial from './Components/TelaInicial';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';


function App() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
