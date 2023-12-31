import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import menu from "../assets/icon-menu.png"

export function Header() {
    const [menuState, setMenuState] = useState('menu');
  

    function toggleMenu() {
        const list = document.querySelector('ul');
        if (menuState === 'menu') {
          setMenuState('close');
          list?.classList.add('top-[80px]', 'opacity-100');
        } else {
          setMenuState('menu');
          list?.classList.remove('top-[80px]', 'opacity-100');
        }
      }
    

    return (
        <div className="bg-white h-24 w-full px-4 md:px-20 flex items-center justify-between">
            <div className="order-1 md:order-2">
                <div> 
                    <span className="w-[32px] cursor-pointer md:hidden block">
                    
                    <img
                    onClick={toggleMenu}
                    src={menu}
                    alt="icon menu"
                    className={menuState === 'close' ? 'menu-open' : ''}
                    />
                    </span>
                </div>
                
                <ul className="text-lg md:text-base gap-10 font-bold text-yellow-bp tracking-1.3 text-uppercase mt-4 md:mt-0 tracking-1.3 md:flex md:items-center z-10  md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className="my-6 md:my-0">
                        <a href="#inicio" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
                            INÍCIO
                        </a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a href="#votacao" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
                            VOTAÇÃO
                        </a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a href="#sobre" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
                            SOBRE NÓS
                        </a>
                    </li>
                    <li className="my-6 md:my-0 ">
                        <a href="#galeria" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
                            GALERIA
                        </a>
                    </li>
                    <li className="block md:hidden text-pink-bp my-6 md:my-0">
                        <Link to="/cadastro">
                            <a className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
                                CADASTRE-SE
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="order-2 md:order-1"> 
                <a href="/" className="">
                    <img className="w-24 md:h-auto" src={logo} alt="logo-bicho-preguiça" />
                </a>
            </div>

            <div className="order-3 flex gap-11 justify-around">
                <Link to="/cadastro">
                    <button
                        className="hidden rounded-md font-semibold md:block uppercase bg-pink-bp text-white p-3"
                    >
                        Cadastre-se
                    </button>
                </Link>
            </div>      


    </div>
    )
}