import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import FooterLinks from './FooterLinks'

const Footer = ({ onNavigate }) => {
    const importantLinks = [
    {   
        name: "Accueil", 
        path: "home" 
    },
    {   
        name: "À propos", 
        path: "aboutus" 
    },
    {   
        name: "Produits", 
        path: "nosProduits" 
    },
    ];

    const Links = [
    {   
        name: "Politique de Confidentialité",
        path: "privacy" 
    },
    {   
        name: "Contactez nous", 
        path: "contact" 
    },
    {   
        name: "À propos de nous", 
        path: "aboutus" 

    },
    ];

  return (
    <>
    
    <footer className='text-white -t-3xl bg-gradient-to-r  from-[#55C593FF]  to-[#55C593FF]/80  
                        dark:from-slate-900 dark:to-[#55C593FF]  '>
        <div className=' mx-auto max-w-[1200px] p-4'>
            {/* footer contain section */}
                <div className='grid py-5 md:grid-cols-3 gap-3'>
                    <div className='px-4 py-8'>
                        <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl'>

                            <a href="/#home" className='flex items-center '>
                            <img
                            src="images/logo.png"
                            alt="NutriPhat Logo"
                            className="w-10 h-12 object-contain"
                            />
                                Nutri
                                <span className='inline-block font-bold text-primary'>Phat</span>
                            </a>
                        </h1>
                        <p className=''>
                            NutriPhat–L'excellence au service de l'agriculture.
                            Qualité, performance et proximité pour un avenir durable.{""}
                        </p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow/>
                            <p>Annaba,Algerie</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            {/* <FaLocationArrow/> */}
                            <FaMobileAlt/>
                            <p>+213 770907065</p>
                    </div>
                        
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
                    <div className='px-4 py-8'>
                        <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                            Liens utiles
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            <FooterLinks links={importantLinks} onNavigate={onNavigate} />
                        </ul>
                    </div>
                    <div className='px-4 py-8'>
                        <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                            Liens
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            <FooterLinks links={Links} onNavigate={onNavigate} />
                        </ul>
                    </div>
                    <div className='px-4 py-8'>
                        <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                            Suivez-nous
                        </h1>
                        <div className='flex flex-col gap-3 '>
                            <h1> Recevez nos conseils agricoles et offres exclusives.</h1>
                            <input type="text" placeholder='Email' className='rounded-full px-3 py-1 text-ColorForText focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary'/>
                            <div className='flex gap-3 mt-6 items-center'> 
                                <a href="#"className='duration-200 hover:scale-105'>
                                    {/* <FaInstagram className='text-3xl'/> */}
                                </a>
                                <a href="https://www.facebook.com/EurlNutriphat"className='duration-200 hover:scale-105'>
                                    <FaFacebook className='text-3xl'/>
                                </a>
                                <a href="https://www.linkedin.com/company/nutriphat/"className='duration-200 hover:scale-105'>
                                    <FaLinkedin className='text-3xl'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer copy right section */}
            <div className='bottom-footer'>
                <p className='border-t-2 border-gray-300/50 py-6 text-center'>Copyright © 2025. All right reserved.</p>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer