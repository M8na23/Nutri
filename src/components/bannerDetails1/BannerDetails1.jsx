import React from 'react'

const BannerDetails1 = ({reverse,onNavigate }) => {
  return (
    <section className='bg-green-100/20 dark:bg-gray-900 dark:text-white'>
        <div className='container flex flex-col items-center justify-center py-10 px-2 md:h-[500px]'>
            <div className='grid grid-cols-1  items-center gap-15 md:grid-cols-2'>
                {/* text container */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left 
                        ${
                            reverse ? "md:order-last" : ""
                        }`}
                >
                    <h1 className='text-2xl md:text-3xl text-ColorForText dark:text-white'>
                        Des engrais naturels pour des récoltes savoureuses et saines.
                    </h1>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Nos engrais biologiques sont conçus pour les maraîchers, arboriculteurs et producteurs soucieux de la qualité. Ils favorisent une croissance saine, une meilleure résistance aux maladies et des fruits plus riches en goût.

                    </p>
                    <div>
                        <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4 text-ColorForText dark:text-white'>
                            <li className='font-medium'> Idéal pour fruits, légumes et cultures biologiques </li>
                            <li className='font-medium'> Composés naturels et biodégradables</li>
                            <li className='font-medium'> Améliorent la rétention d’eau et la vie microbienne du sol </li>
                        </ul>
                    </div>
                    <button onClick={() => onNavigate("contact")} className='btn-primary'>Contactez-nous dès maintenant</button>
                </div>
                {/* img container */}
                <div 
                    data-aos="fade-Left"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className={reverse ? "order-1":""}>
                    <img 
                        src="images\image3.png" 
                        alt="not found" 
                        className='mx-auto w-full p-4 md:max-w-[250px]'/>
                </div>


                
            </div>

            
        </div>
    </section>
  )
}

export default BannerDetails1