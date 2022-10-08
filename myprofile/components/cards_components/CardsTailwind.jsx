import React from 'react'
import { FaWind } from 'react-icons/fa'

const CardsTailwind = ({level}) => {
  return (
    <div class="max-w-md py-4 px-8 bg-white/30 shadow-lg rounded-lg my-20 hover:bg-white">
            <div class="flex justify-center md:justify-end -mt-16 text-black z-[2]">
                <FaWind size={100} />
            </div>
            <div className='flex justify-center items-center'>
                <h2 class="text-black text-3xl text-center font-semibold">Tailwind</h2>
            </div>
            <div className='flex justify-center items-center text-black pt-2'>
              <div className="radial-progress" style={{ "--value": "90", "--size": "6rem", "--thickness": "0.5rem" }}><p className='font-bold text-2xl'>{level}</p></div>
            </div>
    </div>
  )
}

export default CardsTailwind