import React from 'react'
import { FaHtml5 } from 'react-icons/fa'

const CardsHTML = ({level}) => {
  return (
    <div class="max-w-md py-4 px-8 bg-white/30 shadow-lg rounded-lg my-20 ">
            <div class="flex justify-center md:justify-end -mt-16 text-black z-[2]">
                <FaHtml5 size={100} />
            </div>
            <div>
                <h2 class="text-gray-800 text-3xl text-center font-semibold">HTML5</h2>
            </div>
            <p className='text-2xl font-semibold text-center'> {level} </p>
    </div>
  )
}

export default CardsHTML