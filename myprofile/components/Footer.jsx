import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded"> 
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link href='https://github.com/Sebs14'><FaGithub size={24}/></Link> 
                    <Link href='https://www.linkedin.com/in/sebastán-flores-iraheta-84a63024b/'><FaLinkedin size={24}/></Link> 
                    <Link href='https://www.instagram.com/sebasflores__/'><FaInstagram size={24}/></Link> 
                </div>
            </div> 
            <div>
                <p>Copyright © 2022 - All right reserved by Sebastián Flores</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer