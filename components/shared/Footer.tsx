import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
         <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image 
                  src="/assets/images/logo-icon.svg"  
                  alt="logo"
                  width={28}
                  height={28}
                />
            </Link>
            <div className='text-center text-sm'>
            <p>Recruitment Company Limited 2024</p>
            <p>Company no. 12345678</p>
            </div>
            <div className='text-center text-sm'>
                <p>180 old street</p>
                <p>London</p>
                <p>EC1V 2PA</p>
                <p>0207 635 2121</p>
            </div>
    </footer>
  )
}

export default Footer