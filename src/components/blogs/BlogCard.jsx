import React from 'react'

const BlogCard = ({Img}) => {
  return (
    <>
      <div className='p-4 shadow-lg transition-all text-ColorForText duration-500 hover:shadow-xl dark:bg-slate-900 dark:text-white'>
        <div className='overflow-hidden'>
          <img 
            src={Img} 
            alt="No image"
            className='mx-auto h-[250px] w-[200px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110' />
        </div>
        <div className='flex justify-between pt-2 '>
          {/* <p >MAP 21.61.00</p> */}
          <p className='line-clamp-1'> type of engrais </p>
        </div>
        <div className='space-y-2 py-3'>
          <h1 className='line-clamp-1 text-secondary font-bold'> MAP 21.61 </h1>
          <p className='line-clamp-2'>Source concentrée de phosphore et d'azote ammoniacal.Favorise la germination et le développement racinaire.</p>
        </div>
      </div>
    </>
  )
}
export default BlogCard