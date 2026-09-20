import React from 'react'
import CountUp from 'react-countup'

const OverviewCounter = () => {
  return (
    <>
        <div className='dark:bg-slate-900'>
            <section className='container h-12 md:h-32 p-3 '>
                <div className='grid grid-cols-3 divide-x divide-green-700 mx-auto w-full md:max-w-[800px] shadow-lg bg-white -translate-y-20 md:-translate-y-20  dark:bg-slate-900 p-2 my-6
                md:p-8  dark:text-white/70'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-sm font-bold text-secondary dark:text-white sm:text-lg md:text-3xl'>
                            <CountUp end={145} suffix="+" duration={2.75}/>
                        </h1>
                        <p className='text-ColorForText dark:text-white'>Clients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-sm font-bold text-secondary dark:text-white sm:text-lg md:text-3xl'>
                            <CountUp end={4} suffix="+" duration={2.75}/>
                        </h1>
                        <p className='text-ColorForText dark:text-white'>fournisseurs</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-sm font-bold text-secondary dark:text-white sm:text-lg md:text-3xl'>
                            <CountUp end={11} suffix="+" duration={2.75}/>
                        </h1>
                        <p className='text-ColorForText dark:text-white'>Articles</p>
                    </div>
                </div>
            </section>
        </div>

    </>

  )
}

export default OverviewCounter