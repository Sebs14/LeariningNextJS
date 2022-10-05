import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaMobile, FaSearchLocation } from 'react-icons/fa'
import MyPhoto from '../public/my-photo-1.jpg'

const Hero = ({heading, message, mail, phone, place }) => {
  return (
    <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        <div className='flex-wrap md:flex  items-center justify-center p-5 text-white z-[2]  mt-[-10rem]'>
          <div>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <div className='flex pt-2'>
              <FaEnvelope size={25}/>
              <p className='pl-2 text-xl'>{mail}</p>
            </div>
            <div className='flex pt-2'>
              <FaMobile size={25}/>
              <p className='pl-2 text-xl'>{phone}</p>
            </div>
            <div className='flex pt-2'>
              <FaSearchLocation size={25}/>
              <p className='pl-2 text-xl'>{place}</p>
            </div>
          </div>
          <div className=' pl-10 w-[50%]'>
            <Image src={MyPhoto} className='rounded-full '/>
          </div>
        </div>
    </div>
  )
}

export default Hero