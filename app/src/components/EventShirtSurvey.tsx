import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomModal from '../CustomModal'

export function EventShirtSurvey() {
  const [opcoesAbada, setOpcoesAbada] = useState(['Abadá 1', 'Abadá 2', 'Abadá 3', 'Abadá 4']);
  const [voto, setVoto] = useState('');
  const [resultados, setResultados] = useState<Record<string, number>>({});
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
  const [votou, setVotou] = useState(false);

  const [botaoHabilitado, setBotaoHabilitado] = useState(!localStorage.getItem('email')); // Inicialmente habilitado se não houver userId no localStorage
  const [modalOpen, setModalOpen] = useState(false)

  const imagensOpcoesAbada: Record<string, string> = {
    'Abadá 1': "https://www.trindadeuniformes.com.br/wp-content/uploads/2021/12/produto-abada-carnaval-02.png",
    'Abadá 2': "https://www.trindadeuniformes.com.br/wp-content/uploads/2021/12/produto-abada-carnaval-03.png",
    'Abadá 3': "https://www.trindadeuniformes.com.br/wp-content/uploads/2021/12/produto-abada-carnaval-02.png",
    'Abadá 4': "https://www.trindadeuniformes.com.br/wp-content/uploads/2021/12/produto-abada-carnaval-03.png",
  };

  useEffect(() => {
    obterResultados();
  })

  /* 
  useEffect(() => {
    const userId = localStorage.getItem('email');
    if (userId) {
      setBotaoHabilitado(false);
    } else {
      setBotaoHabilitado (true);
    }
  }, [votou]);*/

  const obterResultados = async () => {
    try {
      const response = await axios.get('https://api-ptcy.onrender.com/resultados');
      setResultados(response.data);
    } catch (error) {
      console.error('Erro ao obter resultados:', error);
    }
  };
  
  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }


  const handleVoto = async () => {
    if(!voto) {
      alert("Selecione uma opção de abadá antes de confirmar o voto.");
      return;
    }  
    // Verificar se o usuário está cadastrado no localStorage
    const userId = localStorage.getItem('email');
    if (!userId) {
      // Se o usuário não estiver cadastrado, exibir o modal
      setModalOpen(true);
      return;
    }
    
    try {
      await axios.post('https://api-ptcy.onrender.com/votar', { opcao: voto });
      obterResultados();
      setVotou(true);
    } catch (error) {
      console.error('Erro ao enviar voto:', error);
    }
  };

  const data = Object.keys(resultados).map((categoria) => ({
    category: categoria,
    value: resultados[categoria],
  }));

  return (
    <div id="votacao" className="flex flex-col justify-center items-center gap-5 bg-blue-bp h-auto p-4 mt-2">
      <div className="flex flex-col items-center text-white">
        <p className="uppercase text-lg">Vote e escolha no abadá do</p>
        <p className="text-lg md:text-2xl font-bold">BICHO PREGUIÇA</p>
      </div>

      <ul className="lg:flex lg:flex-items grid grid-cols-2 gap-x-10 gap-y-6">
        {opcoesAbada.map((opcao, index) => (
          <li key={index} className="flex flex-col items-center">
            <button
              onClick={() => {
                if (!votou) {
                  setVoto(opcao);
                  setImagemSelecionada(opcao);
                }
              }}
              className={`sm:w-52 sm:h-52 ${imagemSelecionada === opcao ? 'border-8 rounded-md border-pink-bp' : ''}`}
              disabled={votou}
            >
              <img
                src={imagensOpcoesAbada[opcao]}
                alt={`Imagem ${opcao}`}
                className={`w-full h-full ${imagemSelecionada === opcao ? 'selecionado' : ''}`}
              />
            </button>
            <p className="mt-2 text-center text-white">{opcao}</p>
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={handleVoto}
          className={`rounded-full m-4 px-8 py-2 font-bold text-sm md:text-lg uppercase text-white ${
            votou ? 'bg-gray-500' : 'bg-pink-bp'
          }`}
          disabled={!botaoHabilitado || !voto}
        >
          {votou ? 'Voto Confirmado' : 'Confirmar escolha'}
        </button>
      </div>

      {votou && (
        <>
          <h3 className="uppercase text-lg text-white font-semibold">Resultados:</h3>
          <ResponsiveContainer width="80%" height={230}>
            <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" tick={{ fill: '#fff' }} />
              <Tooltip />
              <Bar dataKey="value" fill="#FF0066" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}

        <CustomModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
