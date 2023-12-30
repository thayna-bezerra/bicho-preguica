import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import abada from "../assets/abada.png"

export function EventShirtSurvey(){  
  const [opcoesAbada, setOpcoesAbada] = useState(['Abadá 1', 'Abadá 2', 'Abadá 3', 'Abadá 4']);
  const [voto, setVoto] = useState('');
  const [resultados, setResultados] = useState<Record<string, number>>({});
  
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
          <h2>Escolha seu Abadá</h2>
          <ul>
            {opcoesAbada.map((opcao, index) => (
              <li key={index}>
                <button onClick={() => setVoto(opcao)}>{opcao}</button>
              </li>
            ))}
          </ul>
          <button onClick={handleVoto}>Votar</button>

          <h3>Resultados:</h3>
          
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
              <Bar dataKey="value" fill="#rgba(75,192,192,0.4)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    )
}

{/*

          <div className="flex flex-col items-center text-white">
            <p className="uppercase text-lg">
              Vote e escolha no abadá do 
            </p>
            <p className="text-lg md:text-2xl font-bold">
              BICHO PREGUIÇA
            </p>
          </div>
  
          <div>
            <div className="lg:flex lg:flex-items grid grid-cols-2 gap-x-10 gap-y-6">
              <img src={abada} alt="abada1" />
              <img src={abada} alt="abada2" />
              <img src={abada} alt="abada3" />
              <img src={abada} alt="abada4" />
            </div>
          </div>
  
          <div>
            <button className="rounded-full m-4 px-8 py-2 font-bold text-sm md:text-lg uppercase text-white bg-pink-bp">
              Confirmar escolha
            </button>
          </div>
*/}