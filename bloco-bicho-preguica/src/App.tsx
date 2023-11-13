import React from 'react';
import './index.css';
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import abada from './assets/abada.png'
import patrocinador from './assets/patrocinador.png'
import menu from './assets/icon-menu.png'
import sobre from './assets/sobre-nos.png'
import bg from './assets/bg.png'

export function App() {
  return (
    <>
      <div className="bg-white p-4 flex items-center justify-between">
        <div>
          <img className='w-28' src={logo} alt="logo-bicho-preguiça" />
        </div>
        <div>
          <img className='w-9' src={menu} alt="" />
        </div>
      </div>

      <div className='h-36'>
        <img className='object-cover w-full h-full' src={banner} alt="banner" />
      </div>

      <div className="flex flex-col justify-center items-center gap-5 bg-blue-bp h-auto p-4 mt-2">
        <div className="flex flex-col items-center text-white">
          <p className="uppercase text-sm">
            Vote e escolha no abadá do 
          </p>
          <p className="text-lg font-bold">
            BICHO PREGUIÇA
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            <img src={abada} alt="abada1" />
            <img src={abada} alt="abada2" />
            <img src={abada} alt="abada3" />
            <img src={abada} alt="abada4" />
          </div>
        </div>

        <div>
          <button className="rounded-full m-4 px-8 py-2 font-bold text-xs uppercase text-white bg-pink-bp">
            Confirmar escolha
          </button>
        </div>
      </div>

      <div className="bg-pink-bp h-auto flex flex-col justify-center items-center gap-5 p-4">
        <div>
          <p className="uppercase text-lg font-bold text-white">
            Patrocinadores oficiais
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            <img className="w-1/2 object-contain" src={patrocinador} alt="patrocinador1" />
            <img className="w-1/2 object-contain" src={patrocinador} alt="patrocinador2" />
          </div>
        </div>

      </div>

      <div className="bg-purple-bp h-auto flex justify-center p-1">
        <button className="uppercase rounded-xl font-extrabold text-2xl w-full h-full p-3 bg-yellow-bp text-white border-2 border-purple-bp">
          <span className="text-xs font-bold text-pink-bp">Clique aqui</span><br />
          Seja um<br/> patrocinador
        </button>
      </div>


      <div className="bg-blue-bp h-auto flex flex-col justify-center items-center gap-5">
        <div className="text-white text-center">
          <p className="uppercase text-lg pb-2 font-bold text-white">
            Sobre nós
          </p>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure incidunt nulla obcaecati nobis sunt excepturi quas perferendis doloremque quia, dolorum expedita! Ipsum molestiae magni minima? Voluptatum, eligendi sint? Sed?</p>
        </div>
        <div className="w-full">
          <img className="w-full h-full object-cover" src={sobre} alt="sobre nos" />
        </div>

      </div>


      <img className="bg-cover h-screen w-screen" src={bg} alt="" />

      <div className='bg-yellow-bp h-auto flex flex-col justify-center items-center gap-5 p-4 mt-3'>
        <div className="bg-pink-bp h-auto flex flex-col justify-center items-center gap-5 p-4">
          <div>
            <p className="uppercase text-lg font-bold text-white">
              Galeria
            </p>
          </div>
          <div>
          </div>
        </div>

        <div className="bg-blue-bp h-auto flex flex-col justify-center items-center gap-5 p-4">
          <p>cabeçalho</p>
        </div>
      </div>
    </>
  );
}
