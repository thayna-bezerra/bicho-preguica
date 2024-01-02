import React from 'react'
import { Link } from 'react-router-dom';

import mascara from './assets/mascara.png'

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top sm:max-w-lg sm:w-full">
          <div className="bg-pink-bp">
            <div className="px-4 py-4 sm:px-6">
              <h3 className="text-lg leading-6 text-center font-bold text-white">
                Seu cadastro foi realizado com sucesso!
              </h3>
            </div>
          </div>

          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="flex items-center justify-center pb-3">
              <img
                src={mascara}
                alt="Imagem de confirmação"
              />
            </div>
            <p className="text-gray-700 text-center">
              Esperamos que você se divirta em nosso bloco!
            </p>
            <div className="mt-4 text-center">
                <Link to="/">
                    <button
                        onClick={onClose}
                        className="mr-3 px-4 py-2 font-semibold text-white bg-purple-bp opacity-70 rounded hover:bg-blue-bp focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Voltar para Tela Principal
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomModal
