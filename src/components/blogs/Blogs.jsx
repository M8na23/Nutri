import React from 'react'
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blogs/blog1.png"
import Img2 from "../../assets/blogs/blog2.png"
import Img3 from "../../assets/blogs/blog3.png"

const Blogs = () => {
  return (
    <>
        <div className=' dark:bg-gray-900'>
            <section data-aos="fade-up" className='container mb-10 py-8'>
                <h1 className='mb-8 py-2 pl-2 text-center text-ColorForText text-3xl font-bold dark:text-white'>Our latests products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3'>
                    <BlogCard Img={Img1}/>
                    {/* <BlogCard Img={Img2}/> */}
                    <BlogCard Img={Img3}/>
                </div>  
            </section>
        </div>

    </>
  )
}

export default Blogs