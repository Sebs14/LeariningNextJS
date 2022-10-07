import Image from 'next/image'
import React from 'react'
import MyImg from '../public/my-photo-2.png'

const AboutMe = () => {
  return (
    <div id='aboutme' className='max-w-[1240px] mx-auto'>
        
        <h1 className='text-2xl font-bold text-center py-2 underline underline-offset-8'>About Myself</h1>  
        
        <div className='md:flex justify-center items-center p-16'>
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center outline outline-gray-600 max-w-[300px] md:max-w-[400px] md:min-w-[400px]'>
                <Image src={MyImg} />
                </div>
            </div>
            <div className='flex-wrap justify-center items-center text-justify pt-8 md:pl-8'>
                <h2 className='font-semibold text-2xl text-center pb-8'>Informatics Engineering student</h2>
                <p className='text-xl'>Hi, My name is Sebastián Flores I'm currently a fourth year student from the Informatics Engineering career at Universidad Centroamericana José Simeon Cañas.</p>
                <p className='text-xl pt-2 '>I'm 21 years old and since I remember I've always dreamed to became a professional on this area, and now I know I have potential to accomplish this dream. </p>
                <p className='text-xl pt-2 '> I want to especialize myself on Front-end development as my professional career.</p>
            </div>
        </div>
    </div>
    
  )
}

export default AboutMe