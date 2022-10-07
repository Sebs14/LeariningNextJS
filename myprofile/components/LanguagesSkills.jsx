import React from 'react'
import CardJS from './cards_components/CardsJS'
import CardHTML from './cards_components/CardsHTML'
import CardReact from './cards_components/CardsReact'
import CardNext from './cards_components/CardsNext'
import CardJava from './cards_components/CardsJava'
import CardTail from './cards_components/CardsTailwind'
import { FaHtml5 } from 'react-icons/fa';

const LanguagesSkills = () => {
  return (
    <div className='p-8 bg-fixed h-screen bg-center bg-cover custom-img'>
    
      <h2 className='font-semibold text-2xl text-center underline text-white'>Software Languages & Skills </h2>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-32'>
          <CardJS level='65 %'/>
          <CardHTML level='80 %'/>
          <CardReact level='70 %'/>
          <CardNext level='65 %'/>
          <CardJava level='50 %'/>
          <CardTail level='90 %'/>
        </div>
      </div>
      
    </div>
  )
}

export default LanguagesSkills