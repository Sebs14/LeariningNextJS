import React from 'react'
import { FaWind } from 'react-icons/fa'

const CardsTailwind = ({level}) => {
  return (
    <div class="max-w-md py-4 px-8 bg-white/30 shadow-lg rounded-lg my-20 ">
            <div class="flex justify-center md:justify-end -mt-16 text-black z-[2]">
                <FaWind size={100} />
            </div>
            <div>
                <h2 class="text-gray-800 text-3xl text-center font-semibold">Tailwind</h2>
            </div>
            <p className='text-2xl font-semibold text-center'> {level} </p>
    </div>
  )
}

export default CardsTailwind