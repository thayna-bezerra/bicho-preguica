import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import abada from "../assets/facebook.png"

export function EventShirtSurvey(){  
  const [opcoesAbada, setOpcoesAbada] = useState(['Abadá 1', 'Abadá 2', 'Abadá 3', 'Abadá 4']);
  const [voto, setVoto] = useState('');
  const [resultados, setResultados] = useState<Record<string, number>>({});

  // Mapa entre opções de abadá e URLs das imagens correspondentes
  const imagensOpcoesAbada: Record<string, string> = {
    'Abadá 1': "https://www.trindadeuniformes.com.br/wp-content/uploads/2021/12/produto-abada-carnaval-02.png",
    'Abadá 2': "https://www.trindadeuniformes.com.br/wp-content/uploads/2021/12/produto-abada-carnaval-03.png",
    'Abadá 3': "https://www.trindadeuniformes.com.br/wp-content/uploads/2021/12/produto-abada-carnaval-02.png",
    'Abadá 4': "https://www.trindadeuniformes.com.br/wp-content/uploads/2021/12/produto-abada-carnaval-03.png",
  };

  useEffect(() => {
    // Obter resultados da enquete ao carregar o componente
    obterResultados();
  }, []);

  const obterResultados = async () => {
    try {
      const response = await axios.get('http://localhost:3001/resultados');
      setResultados(response.data);
    } catch (error) {
      console.error('Erro ao obter resultados:', error);
    }
  };

  const handleVoto = async () => {
    try {
      await axios.post('http://localhost:3001/votar', { opcao: voto });
      obterResultados(); // Atualizar resultados após votar
    } catch (error) {
      console.error('Erro ao enviar voto:', error);
    }
  };
  
  const data = Object.keys(resultados).map((categoria) => ({
    category: categoria,
    value: resultados[categoria],
  }));

    return(
        <div id="votacao" className="flex flex-col justify-center items-center gap-5 bg-blue-bp h-auto p-4 mt-2">
          <div className="flex flex-col items-center text-white">
            <p className="uppercase text-lg">
              Vote e escolha no abadá do 
            </p>
            <p className="text-lg md:text-2xl font-bold">
              BICHO PREGUIÇA
            </p>
          </div>
          
          <ul className="lg:flex lg:flex-items grid grid-cols-2 gap-x-10 gap-y-6">
            {opcoesAbada.map((opcao, index) => (
              <li key={index} className="flex items-center">
                <button onClick={() => setVoto(opcao)}>{opcao}</button>
                <img src={imagensOpcoesAbada[opcao]} alt={`Imagem ${opcao}`} className="w-52 h-52"/>
              </li>
            ))}
          </ul>

          <div>
            <button onClick={handleVoto} className="rounded-full m-4 px-8 py-2 font-bold text-sm md:text-lg uppercase text-white bg-pink-bp">
              Confirmar escolha
            </button>
          </div>

          <h3 className="uppercase text-lg text-white font-semibold">Resultados:</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#336dd8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    )
}

{/*
          <div>
            <div className="lg:flex lg:flex-items grid grid-cols-2 gap-x-10 gap-y-6">
              <img src={abada} alt="abada1" />
              <img src={abada} alt="abada2" />
              <img src={abada} alt="abada3" />
              <img src={abada} alt="abada4" />
            </div>
          </div>
  
*/}