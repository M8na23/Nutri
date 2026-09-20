import React from 'react'
import Aos from "aos"
// bg-gradient-to-r  from-[#D6FDEE]  to-[#ffffffff]
const Hero = () => {
  return (
    <div className=" min-h-[350px] md:h-[450px] flex items-center   bg-gradient-to-r  from-[#55C593FF]  to-[#55C593FF]/80 pt-20 
                        dark:from-slate-900 dark:to-[#55C593FF]  ">
        <section className='container flex flex-col items-center justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white dark:text-white '>
                {/* hero text container */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="400"
                    data-aos-once="true"
                     className='flex flex-col items-center text-center text-white gap-5 md:items-start md:text-left'>
                    <h1 className='text-5xl font-bold'>NuriPhat</h1>
                    <p>  Qualité, performance et écoute au cœur de l'agriculture
                    </p>
                    <div className='space-x-4'>
                        <button className=' btn-primary '>
                             <a href="#banner-section">Voir plus</a>
                        </button>
                        {/* <button className=' btn-outline '>
                            Get Started
                        </button> */}
                    </div>
                </div>
                {/* hero image container */}
                <div 
                    data-aos="fade-left"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className='flex justify-center md:justify-end mx-auto max-w-xs p-11'>
                    <img src="/images/image1.png" alt="Not Found" className="w-full max-w-sm object-contain " />
                </div>
                

            </div>
        </section>
    </div>
  

  );
};

export default Hero