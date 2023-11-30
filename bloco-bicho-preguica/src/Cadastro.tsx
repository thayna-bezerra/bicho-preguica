import React, { useState } from 'react';
import upload from "./assets/upload.png"

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [participouAnteriormente, setParticipouAnteriormente] = useState(false);
  const [anosParticipacaoAnteriores, setAnosParticipacaoAnteriores] = useState('');
  const [foto, setFoto] = useState<File | null>(null);

  const handleParticipouAnteriormenteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParticipouAnteriormente(e.target.value === 'Sim');
  };

  const handleAnosParticipacaoAnterioresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnosParticipacaoAnteriores(e.target.value);
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setFoto(reader.result as string || null);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar dados do formulário
    // ...

    // Resetar o formulário após o envio
    setNome('');
    setEmail('');
    setTelefone('');
    setParticipouAnteriormente(false);
    setAnosParticipacaoAnteriores('');
    setFoto(null);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center font-Outfit text-white bg-gradient-to-r from-gray-400 to-gray-500">
      <section className="flex flex-col w-[900px] justify-center rounded-lg bg-black shadow-xl p-9 relative section-border">
        
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center mb-8">
            <p>
              CADASTRE-SE
            </p>
            <p className="text-2xl mt-2">
              FAÇA PARTE DO BLOCO <span className="font-bold">BICHO PREGUIÇA</span>
            </p>
          </div>

          <div className="pb-7">
            <label>Nome Completo:</label>
            <input 
              type="text" 
              placeholder="Insira o seu nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              className="w-full px-3 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-pink-bp"
            />
          </div>

          <div className="flex gap-6 pb-9">
            <div className="w-4/5">
              <label>E-mail:</label>
              <input 
                type="email" 
                placeholder="Insira o seu e-mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full pr-6 px-3 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-pink-bp"
              />
            </div>

            <div className="w-3/5">
              <label>Telefone para contato:</label>
              <input
                type="tel"
                placeholder="(99) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-pink-bp"
              />
            </div>
          </div>

          <div className="flex gap-6 mb-10">
            <div className="w-4/5">
              <p className="mb-2">
                Já participou de edições anteriores?
              </p>
              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="radio"
                    value="Não"
                    checked={!participouAnteriormente}
                    onChange={handleParticipouAnteriormenteChange}
                    className="mr-2"
                  />
                  Não
                </label>
                
                <label className="flex">
                  <input 
                    type="radio" 
                    value="Sim" 
                    checked={participouAnteriormente} 
                    onChange={handleParticipouAnteriormenteChange} 
                    className="mr-2"
                  />
                  Sim

                  {participouAnteriormente && (
                    <input
                      type="text"
                      placeholder="Insira os anos que tenha participado (ex: 2018, 2019)"
                      value={anosParticipacaoAnteriores}
                      onChange={handleAnosParticipacaoAnterioresChange}
                      className="ml-4 w-full text-sm text-white bg-black border-b border-white outline-none focus:border-blue-500"
                    />
                  )}
                </label>
              </div>
            </div>

            <div className="w-3/5">
              <label className="">
                Deseja trabalhar na produção do nosso bloco?
              </label>
              <select 
                value={anosParticipacaoAnteriores} 
                onChange={(e) => setAnosParticipacaoAnteriores(e.target.value)}
                className="w-full mt-2 px-3 py-2 rounded-md bg-white text-gray-800 border border-gray-600"
              >
                <option value="Não tenho interesse">Não tenho interesse</option>
                <option value="Sim, quero ser um colaborador">Sim, quero ser um colaborador</option>
              </select>
            </div>
          </div>

          <div className="flex gap-6 mb-11">
            <div className="w-4/6">
              <label className="font-medium text-base">
                Compartilhe uma foto memorável da concentração do nosso bloco de carnaval.
              </label>
              <p className="pt-3 text-xs">
                Faça o upload de uma foto da concentração que represente a alegria e a atmosfera festiva 
                do nosso bloco, independentemente do ano em que tenha sido tirada. Sua foto pode ser usada 
                em nosso mural e para material de divulgação.
              </p>
            </div>
            <div className="w-2/6 relative border-dashed border-2 border-gray-400 p-4 rounded-md bg-black cursor-pointer">
              <div className="flex items-center justify-center">
              {foto ? (
                <img
                  src={foto}
                  className="w-32 h-32 object-cover rounded-md"
                />
                ) : (
                  <img className="w-5" src={upload} alt="" />
                )}
              </div>
              <p className="mt-1 text-sm text-gray-600">Drag and drop files here</p>
              <p className="text-xs text-gray-500 mt-2">or</p>
              <label
                htmlFor="uploadInput"
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                Browse Files
              </label>
              <input
                id="uploadInput"
                type="file"
                onChange={handleFotoChange}
                className="hidden"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center bg-white opacity-50 py-2 px-4 rounded-md text-black text-base font-medium hover:opacity-80 focus:outline-none focus:ring focus:ring-blue-bp"   
          >
            Finalizar Cadastro
          </button>
        </form>

      </section>
    </div>
  );
};

export default Cadastro;
