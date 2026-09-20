// import React from 'react'
import React, { useState } from 'react';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';

const ResoponsiveMenu = ({showMenu, onNavigate }) => {
      const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div 
        className={ `${ 
        showMenu ? "left-0":"-left-[100%]" 
        } h-screen w-[75%] bg-primary dark:bg-slate-900 dark:text-white fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-ColorOfText`} >
        <div>
            {/* <div className="flex items-center justify-start gap-3">
                <FaUserCircle size={50}/>
                <div>
                    <h1>Tabet Ali</h1>
                    <h1 className="text-sm text-secondary"> Premium user</h1>
                </div>
            </div> */}
            <nav className="mt-5">
                <ul className="sapce-y-4 text-xl">
                    <li> <a href="#"onClick={() => onNavigate("home")} className="cursor-pointer hover:text-secondary"> Accueil</a></li>
                    {/* 
                    Dropdown 
                    <li className="cursor-pointer select-none">
                        <div
                            onClick={() => setOpenDropdown(!openDropdown)}
                              className="flex items-center gap-2"
                        >
                        <span>Produits NutriPaht</span>
                        <FaCaretDown
                             className={`transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`}
                        />
                        </div>

                        
                        <div
                               className={`overflow-hidden transition-all duration-300 ${openDropdown ? 'max-h-40 mt-3' : 'max-h-0'}`}
                        >
                            <ul className="pl-6 space-y-3 text-base text-ColorOfText">
                                <li className=" hover:text-secondary">Services</li>
                                <li className=" hover:text-secondary">About Us</li>
                                <li className=" hover:text-secondary">Privacy Policy</li>
                            </ul>
                        </div>
                     </li>

                      */}
                      <li> <a href="#"onClick={() => onNavigate("products")} className="cursor-pointer hover:text-secondary"> Produits</a></li>
                    <li> <a href="#" onClick={() => onNavigate("contact")} className="cursor-pointer hover:text-secondary">Contact</a></li>
                    <li> <a href="#" onClick={() => onNavigate("aboutus")} className="cursor-pointer hover:text-secondary">À propos</a></li>
                    <li> <a href="#" onClick={() => onNavigate("privacy")} className=" felx cursor-pointer hover:text-secondary">Confidentialité</a></li>
                </ul>
            </nav>

        </div>
        <div className="footer">
            <h1>° 2025 all right reserved</h1>
        </div>
    </div>  
  );
};
export default ResoponsiveMenu