import React from 'react'
import CardJS from './cards_components/CardsJS'
import CardHTML from './cards_components/CardsHTML'

const LanguagesSkills = () => {
  return (
    <div className='p-8 bg-fixed h-screen bg-center bg-cover custom-img'>
    
      <h2 className='font-semibold text-2xl text-center underline text-white'>Software Languages & Skills </h2>
      <div className=''>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 p-4'>
          <CardJS level='65 %'/>
          <CardHTML level='80 %'/>
          <CardHTML level='80 %'/>
        </div>
      </div>
      
    </div>
  )
}

export default LanguagesSkills