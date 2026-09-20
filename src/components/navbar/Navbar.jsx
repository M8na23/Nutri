import React, { useEffect } from 'react';
import { useState } from 'react';
import { BiPhoneCall, BiSolidSun, BiSolidMoon  } from "react-icons/bi";
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { PiFileRsThin } from 'react-icons/pi';
import { Si30Secondsofcode } from 'react-icons/si';
import ResoponsiveMenu from './ResoponsiveMenu';

const Navbar = ({ onNavigate }) => {
    const[theme,setTheme]= useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"):"light"
    );
    const [showMenu, setShowMenu] = useState(false);
    const element = document.documentElement;
    

    useEffect(()=>{
        if(theme=="dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else {
            element.classList.remove("dark");
            localStorage.removeItem("theme");
        }

    },[theme])
    
    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    }


  return (
    <>
        <header className="relative top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[1px] border-primary">
            <nav className="container flex items-center justify-between h-[70px] py-2 px-2 ">
                {/*logo section*/}
                <div className='text-2xl md:text-3xl text-white'>
                    
                    <a href="#"onClick={() => onNavigate("home")}  className="flex items-center ">

                        {""}
                        Nutri<span className="inline-block font-bold text-primary">Phat</span></a>
                </div>
                {/*Desktop menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-10">
                        <li className="group relative cursor-pointer">
                           <a href="#"onClick={() => onNavigate("home")} className="flex items-center gap-[2px] h-[72px]">
                             Accueil
                             <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                             </span>
                           </a>
                           {/*drop down section  -left-9 z-[99999] hiden w-[150px] bg-secondary dark:text-white/80 p-2 text-white group-hover:block */}
                           <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white rounded-md shadow-md p-2 text-ColorForText dark:bg-slate-900 dark:text-white group-hover:block">
                                <ul className="space-y-3">
                                    <li className="p-1 hover:bg-green-200 dark:hover:bg-secondary"><a href="#"onClick={() => onNavigate("nosProduits")}>Nos Produits </a></li>
                                    <li className="p-1 hover:bg-green-200 dark:hover:bg-secondary"><a href="#"onClick={() => onNavigate("aboutus")}>À propos de NutriPhat </a></li>
                                    <li className="p-1 hover:bg-green-200 dark:hover:bg-secondary"> <a href="#"onClick={() => onNavigate("privacy")}>Politique de Confidentialité</a></li>
                                </ul>
                           </div>

                        </li>
                        
                        <li className="group  cursor-pointer">
                           <a href="#" className="flex items-center gap-[2px] h-[72px]">
                             Produits {""}
                             <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                             </span>
                           </a>
                           {/* dropdown full width section*/ }
                            <div className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white dark:bg-slate-900 dark:text-white text-ColorForText shadow-2xl group-hover:block transition-all duration-300 ease-in-out">
                                <div className="grid grid-cols-3 gap-1 p-6">
                                    {/* Left image */}
                                    <div className="overflow-hidden rounded-xl ">
                                        <img 
                                            src="images/farmerusingfertilizer.png" 
                                            alt="not found" 
                                            className="max-h-[350px] w-full duration-300 -mt-14 rounded-xl"
                                        />
                                    </div>

                                    {/* Right content */}
                                    <div className="col-span-2 space-y-3">
                                        <h1 className="text-2xl font-semibold pb-3">Produits NutriPhat</h1>
                                        <p className="text-sm text-slate-600 dark:text-white/80 leading-relaxed">
                                            Chez NutriPhat, nous proposons une gamme complète de produits fertilisants adaptés à tous les types de cultures. Nos produits sont conçus pour améliorer la croissance des plantes, enrichir le sol et maximiser le rendement agricole, tout en respectant l'environnement.
                                        </p>

                                        {/* Products grid */}
                                        <div className="grid grid-cols-4 gap-4 mt-4">
                                            {/* Column 1 */}
                                            <div>
                                                <h1 className="pb-1 text-xl font-semibold">Produits Foliaires</h1>
                                                <ul className="space-y-2">
                                                    <li onClick={() => onNavigate("products",1)} className="cursor-pointer hover:text-secondary transition-colors duration-200">NPK 20-20-20</li>
                                                    <li onClick={() => onNavigate("products",3)} className="cursor-pointer hover:text-secondary transition-colors duration-200">Potasse 50% SOP</li>
                                                    <li onClick={() => onNavigate("products",5)} className="cursor-pointer hover:text-secondary transition-colors duration-200">Acide phosphorique</li>
                                                    <li onClick={() => onNavigate("products",15)} className="cursor-pointer hover:text-secondary transition-colors duration-200">Sulfate de Fer</li>

                                                </ul>
                                            </div>

                                            {/* Column 2 */}
                                            <div>
                                                <h1 className="pb-1 text-xl font-semibold">Produits Foliaires</h1>
                                                <ul className="space-y-2">
                                                    <li onClick={() => onNavigate("products",6)} className="cursor-pointer hover:text-secondary transition-colors duration-200">Potasse 60% KCL</li>
                                                    <li onClick={() => onNavigate("products",7)} className="cursor-pointer hover:text-secondary transition-colors duration-200">NPK 13-03-43</li>
                                                    <li onClick={() => onNavigate("products",8)} className="cursor-pointer hover:text-secondary transition-colors duration-200">MAP 12-61</li>
                                                    <li onClick={() => onNavigate("products",9)} className="cursor-pointer hover:text-secondary transition-colors duration-200">Sulfate de magnésium hydraté</li>
                                                </ul>
                                            </div>

                                            {/* Column 3 */}
                                            <div>
                                                <h1 className="pb-1 text-xl font-semibold">Produits Granulé</h1>
                                                <ul className="space-y-2">
                                                    <li onClick={() => onNavigate("products",2)} className="cursor-pointer hover:text-secondary transition-colors duration-200">NPK 15-15-15</li>
                                                    <li onClick={() => onNavigate("products",13)} className="cursor-pointer hover:text-secondary transition-colors duration-200">PK 20-25</li>
                                                    <li onClick={() => onNavigate("products",4)} className="cursor-pointer hover:text-secondary transition-colors duration-200">Urée 46%</li>
                                                    <li onClick={() => onNavigate("products",12)} className="cursor-pointer hover:text-secondary transition-colors duration-200">MAP 12-52</li>
                                                    <li onClick={() => onNavigate("products",14)} className="cursor-pointer hover:text-secondary transition-colors duration-200">TSP 0-0-46</li>
                                                </ul>
                                            </div>

                                            {/* Column 4 */}
                                            <div>
                                                <h1 className="pb-1 text-xl font-semibold">Produits Organique </h1>
                                                <ul className="space-y-2">
                                                    <li onClick={() => onNavigate("products",10)} className="cursor-pointer hover:text-secondary transition-colors duration-200">ELMIZANE PHOSPHATE MINERAL</li>
                                                    <li onClick={() => onNavigate("products",11)} className="cursor-pointer hover:text-secondary transition-colors duration-200">CERYS 10-5-10-10</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </li>
                        <li> <a href="#" onClick={() => onNavigate("contact")} className="cursor-pointer"> Contact</a>
                            </li>
                        <li>
                            <div className="flex items-center gap-4">
                                <div>
                                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90"/>
                                </div>
                            <div>
                                    <p>Contactez-nous</p>
                                    <p>
                                        <a href="tel:+213 0770907065">+213 770907065</a>
                                    </p>
                            </div>
                            </div>

                        </li>
                        {/*light and dark mode switcher */}
                        {
                            theme == "dark"?(
                                <BiSolidSun className="text-2xl" onClick={()=> setTheme("light")}/>
                            ):(
                                <BiSolidMoon className="text-2xl" onClick={()=> setTheme("dark")}/>
                            )
                        }
                        
                        
                    </ul>
                </div>
                {/*Mobile menu header */}
                <div className="flex items-center gap-4 md:hidden">
                    
                    {
                        theme == "dark"?(
                            <BiSolidSun className="text-2xl" onClick={()=> setTheme("light")}/>
                        ):(
                            <BiSolidMoon className="text-2xl" onClick={()=> setTheme("dark")}/>
                        )
                    }
                    {showMenu ? 
                        <HiMenuAlt1
                        onClick={toggleMenu}
                        className="cursor-pointer transition-all"
                        size={30} 
                        /> : 
                        <HiMenuAlt3
                        onClick={toggleMenu}
                        className="cursor-pointer transition-all"
                        size={30}
                         />}

                </div>

            </nav>
        </header>
        {/*Mobile menu header */}
        <ResoponsiveMenu  showMenu={showMenu} onNavigate={onNavigate} />

        </>

  );
};

export default Navbar;