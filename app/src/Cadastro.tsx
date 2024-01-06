import React, { useState } from 'react';
import InputMask from 'react-input-mask'
import CustomModal from './CustomModal'

import upload from "./assets/file.png"
import bg from "./assets/bg.png"
import mascara from './assets/mascara.png'

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [participouAnteriormente, setParticipouAnteriormente] = useState(false);
  const [anosParticipacaoAnteriores, setAnosParticipacaoAnteriores] = useState('');
  const [trabalharNoBloco, setTrabalharNoBloco] = useState('');
  const [foto, setFoto] = useState<File | null>(null); 

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleAnosParticipacaoAnterioresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnosParticipacaoAnteriores(e.target.value);
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const files = e.target.files;

    if (files && files.length > 0 ) {
      Array.from(files).forEach((file) => {
        // Criar um objeto URL temporário para a imagem
        const temporaryURL = URL.createObjectURL(file);

        // Criar um objeto Image
        const img = new Image();

        // Definir o URL da imagem no objeto Image
        img.src = temporaryURL;

        // Evento de carregamento da imagem
        img.onload = function () {
          setFoto(file);

          // Limpar o objeto URL temporário após usar
          URL.revokeObjectURL(temporaryURL);
        };
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('telefone', telefone);
    formData.append('participou_anteriormente', participouAnteriormente ? '1' : '0');
    formData.append('anos_participacao_anteriores', anosParticipacaoAnteriores);
    formData.append('trabalhar_no_bloco', trabalharNoBloco);
    
    if (foto) {
      formData.append('foto', foto);
    }
  
    try {
      const response = await fetch('https://api-ptcy.onrender.com/cadastro', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        openModal()

        localStorage.setItem('telefone', telefone);
        console.log(localStorage);
        
        console.log('Cadastro realizado com sucesso!');
        console.log("Dados recebidos:", {
          nome,
          email,
          telefone,
          participouAnteriormente,
          anosParticipacaoAnteriores,
          trabalharNoBloco,
        });

        setNome('');
        setEmail('');
        setTelefone('');
        setParticipouAnteriormente(false);
        setAnosParticipacaoAnteriores('');
        setFoto(null);
      } else {
        console.error('Erro ao cadastrar usuário:', response.statusText);
        console.log(response)
      }
    } catch (error) {
      console.error('Erro ao realizar a requisição:', error);
    }
  };
  

  return (
    <div className="relative bg-cover md:flex w-full md:h-screen justify-center items-center text-white" style={{ backgroundImage: `url(${bg})` }}>
      <section className="flex flex-col w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 justify-center rounded-lg bg-white bg-opacity-50 shadow-xl py-8 px-4 sm:px-8 md:px-16 relative section-border">
        <form onSubmit={handleSubmit} action="https://api-ptcy.onrender.com/cadastro" method="post" encType="multipart/form-data">
          <div className="flex flex-col items-center justify-center mb-8">
            <p>
              CADASTRE-SE
            </p>
            <p className="text-2xl mt-2 font-semibold">
              FAÇA PARTE DO BLOCO <span className="font-bold">BICHO PREGUIÇA</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pb-9">
            <div className="w-full sm:w-4/5">
              <label>Nome Completo:</label>
              <input 
                type="text" 
                placeholder="Insira o seu nome" 
                required
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                className="mt-2 w-full px-3 py-2 rounded-md bg-white text-gray-800  focus:outline-none focus:ring focus:ring-pink-bp"
              />
            </div>
            <div className="w-full sm:w-3/5">
              <label>Telefone para contato:</label>
              <InputMask
                mask="(99) 99999-9999"
                type="tel"
                id="phone"
                name="telefone"
                placeholder="Digite seu número de telefone"
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="mt-2 w-full px-3 py-2 rounded-md bg-white text-gray-800  focus:outline-none focus:ring focus:ring-pink-bp"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pb-9">
            <div className="w-full sm:w-4/5">
              <label>E-mail:</label>
              <input 
                type="email" 
                placeholder="Insira o seu e-mail" 
                required
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full mt-2 px-3 py-2 rounded-md bg-white text-gray-800   focus:outline-none focus:ring focus:ring-pink-bp"
              />
            </div>

            <div className="w-full sm:w-3/5">
              <p className="mb-2">
                Já participou de edições anteriores?
              </p>
              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="radio"
                    value="Não"
                    checked={!participouAnteriormente}
                    onChange={() => setParticipouAnteriormente(false)}
                    className="mr-2"
                  />
                  Não
                </label>
                
                <label className="flex">
                  <input 
                    type="radio" 
                    value="Sim" 
                    checked={participouAnteriormente} 
                    onChange={() => setParticipouAnteriormente(true)} 
                    className="mr-2"
                  />
                  Sim

                  {participouAnteriormente && (
                    <input
                      type="text"
                      placeholder="Insira os anos que tenha participado (ex: 2018, 2019)"
                      value={anosParticipacaoAnteriores}
                      onChange={handleAnosParticipacaoAnterioresChange}
                      className="ml-4 w-full text-sm text-white placeholder:text-white bg-transparent border-b border-white outline-none "
                    />
                  )}
                </label>
              </div>
            </div>
          </div>

          {/** <div className="flex flex-col sm:flex-row gap-6 mb-10">
            <div className="w-full sm:w-4/5">
              
            </div>

            <div className="w-full sm:w-3/5">
              <label className="">
                Deseja trabalhar na produção do nosso bloco?
              </label>
              <select 
                value={trabalharNoBloco} 
                required
                onChange={(e) => setTrabalharNoBloco(e.target.value)}
                className="w-full mt-2 px-3 py-2 rounded-md bg-white text-gray-500"
              >
                <option value="Não tenho interesse">Não tenho interesse</option>
                <option value="Sim, quero ser um colaborador">Sim, quero ser um colaborador</option>
              </select>
            </div>
          </div>*/}

          <div className="flex flex-col sm:flex-row gap-6 mb-11">
            <div className="w-full sm:w-4/6">
              <label className="font-semibold text-lg">
                Compartilhe uma foto memorável da concentração do nosso bloco de carnaval.
              </label>
              <p className="pt-3 text-sm">
                Faça o upload de uma foto da concentração que represente a alegria e a atmosfera festiva 
                do nosso bloco, independentemente do ano em que tenha sido tirada. Sua foto pode ser usada 
                em nosso mural e para material de divulgação.
              </p>
            </div>
            <div className="w-full sm:w-2/6 relative border-dashed border-2 border-white p-4 rounded-md bg-white bg-opacity-30 cursor-pointer">
              <div className="flex items-center justify-center">
                <img src={foto ? typeof foto === "string" ? foto : URL.createObjectURL(foto) : upload} />
              </div>

              <p className="flex justify-center m-2 text-sm text-gray-600">
                {'Adicione sua foto aqui!'}
              </p>

              <label
                htmlFor="uploadInput"
                className="mt-2 flex items-center justify-center bg-gray-500 hover:bg-gray-700 text-white text-sm font-semibold py-1 px-2 rounded cursor-pointer"
              >
                Enviar arquivo
              </label>

              <input
                id="uploadInput"
                name="uploadInput"
                type="file"
                onChange={handleFotoChange}
                className="hidden"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full uppercase flex items-center justify-center bg-white opacity-70 py-4 px-4 rounded-md text-gray-600 text-base font-bold hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-bp"   
          >
            Finalizar Cadastro
          </button>
          
        </form>
        <CustomModal 
          isOpen={modalOpen} 
          onClose={closeModal} 
          imagem={mascara}
          title={"Seu cadastro foi realizado com sucesso!"} 
          description={"Esperamos que você se divirta em nosso bloco!"}
          textBtn={"Voltar para Tela Principal"}
          linkRota={"/"}
        />
      </section>
    </div>
  );
};

export default Cadastro;
