import React from 'react'

const SimpleBanner = ({ onNavigate }) => {
  return (
    <div className='bg-primary dark:bg-slate-900'>
        <div 
            data-aos="fade-up"
            className='container py-8 md:py-12'>
        <div className='grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8'>
            <div className='px-2'>
 <              iframe 
                    className='aspect-video w-full' 
                    src="images\NutriPhat.mp4" 
                    title='Youtube video player' 
                    frameBorder="0"
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen>
                 </iframe>
            </div>
            <div className='order-2 flex flex-col items-center gap-4 text-center text-ColorForText dark:text-white md:col-span-2 md:items-start md:text-left'> 
                <h1 className='text-3xl font-bold'>
                    Des solutions conçues pour vos cultures
                </h1>
                <p>
                    Des solutions fiables, performantes et pensées pour accompagner chaque agriculteur vers une production durable.
                </p>
                <button className='btn-outline '>
                    <a  href="#"onClick={() => onNavigate("aboutus")}>En savoir plus</a>
                    </button>
            </div>

        </div>
        </div>
    </div>
  )
}
export default SimpleBanner