// src/App.tsx
import React from 'react';
import './index.css'; // Certifique-se de importar o arquivo de estilos do Tailwind

function App() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Meu Projeto React com Tailwind</h1>
      <p className="text-lg">Bem-vindo ao meu aplicativo!</p>
      <button className="bg-green-500 text-white px-3 py-2 mt-4 hover:bg-green-600">Clique Aqui</button>
    </div>
  );
}

export default App;
