import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
        <header className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image 
                  src="/assets/images/logo.png"  
                  alt="logo"
                  width={200}
                  height={80}
                />
            </Link>
            <Link href='/about'>
               <p className='p-16-semibold'>About Us</p>
            </Link>
        </header>
  )
}

export default Header