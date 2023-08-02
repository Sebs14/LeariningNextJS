import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [colorText, setColorText] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('white')
                setColorText('black')
            } else {
                setColor('transparent')
                setColorText('white')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className=' w-screen sm:max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
                <h1 style={{color: `${colorText}`}} className='font-bold text-4xl'>SF</h1>
            </Link>
            <ul className='hidden sm:flex '>
                <li style={{color: `${colorText}`}} className='p-4'>
                    <a href='#'>Home</a>
                </li>
                <li style={{color: `${colorText}`}} className='p-4'>
                    <a href='/#aboutme'>About me</a>
                </li>
                <li style={{color: `${colorText}`}} className='p-4'>
                    <a href='/#work'>Skills</a>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='sm:block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20} style={{color: `${colorText}`}} /> : <AiOutlineMenu size={20} style={{color: `${colorText}`}}  />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[200%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#aboutme'>About me</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#work'>Skills</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar