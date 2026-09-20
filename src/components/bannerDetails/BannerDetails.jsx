import React from 'react'

const BannerDetails = ({reverse,onNavigate }) => {
  return (
    <section id="banner-section" className='bg-green-100/20 dark:bg-gray-900 dark:text-white'>
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
                        Des engrais qui nourrissent vos récoltes.
                    </h1>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Chez NutriPhat, nous développons des engrais performants pour les cultures de plein champ. Nos solutions améliorent la structure du sol, stimulent la croissance des plantes et maximisent les rendements.
                    </p>
                    <div>
                        <ul className='flex list-inside list-disc flex-col gap-2 md:gap-2 text-ColorForText dark:text-white'>
                            <li className='font-medium'> Nutrition équilibrée pour toutes les étapes de croissance </li>
                            <li className='font-medium'> Formules testées et validées par des experts agronomes </li>
                            <li className='font-medium'> Adaptés aux grandes cultures : céréales, légumes, fourrages </li>
                        </ul>
                    </div>
                    <button onClick={() => onNavigate("nosProduits")} className='btn-primary'>Découvrir nos produits</button>
                </div>
                {/* img container */}
                <div 
                    data-aos="fade-left"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className={reverse ? "order-1":""}>
                    <img 
                        src="images\farmeracueil.png" 
                        alt="not found" 
                        className='mx-auto w-full p-4 md:max-w-[450px]'/>
                </div>


                
            </div>

            
        </div>
    </section>
  )
}

export default BannerDetails