import React from 'react'
import Card from './soft_skills/SoftCard'

const SoftSkills = () => {
  return (
    <div id='aboutme' className='max-w-[1240px] mx-auto'>
        
        <h1 className='text-2xl font-bold text-center py-16 underline underline-offset-8 text-black'>Soft Skills</h1>  
        
        <div className='flex justify-center items-center p-4'>
            <div className='flex-wrap justify-center items-center text-justify'>                
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Card softskill='TEAM WORK' level='100' />
                  <Card softskill='COMMUNICATION' level='90' />
                  <Card softskill='PROBLEM SOLVING' level='80' />
                  <Card softskill='LIFELONG LEARNER' level='85' />
                  <Card softskill='OWNERSHIP' level='90' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default SoftSkills