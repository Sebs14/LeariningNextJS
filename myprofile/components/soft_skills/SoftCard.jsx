import React from 'react'

const SoftCard = ({softskill, level}) => {
  return (
    <div class=" max-w-md py-4 p-16 bg-sky-900/80 shadow-lg rounded-lg my-8 mx-8">
        <div className='flex-wrap justify-center items-center '>
            <h2 class="text-white text-2xl text-center font-semibold">{softskill}</h2>
            <h3 className='text-white text-2xl text-center pt-2'>{level} %</h3>
        </div>
        <div className='flex justify-center items-center p-4'>
            <progress className="progress w-56 bg-black/30" value={level} max="100"></progress>
        </div>
    </div>
  )
}

export default SoftCard