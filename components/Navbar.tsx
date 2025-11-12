import React from 'react'
import Image from "next/image"
import logo from "../public/images/logo-n.jpeg"
import Link from 'next/link';

function Navbar() {




    const links = [
    { name: 'Home', to: '/#home' },
    { name: 'Service', to: '/#service' },
    { name: 'Treats', to: '/treats' },
    { name: 'Rates', to: '/#pricing' },
    { name: 'Blogs', to: '/blog' },
    { name: 'Contact', to: '/#contact' },
    { name: 'About', to: '/#about' },
    { name: 'Login', to: "/login"}
  ];

  return (
    <div className='flex justify-between p-4 bg-black/70 fixed top-0 left-0 w-full z-50'>
        <div className='flex items-center gap-2 '>
            <Image
            src={logo}
            alt='logo'
            className='w-16 h-16'
            />
            <h1 className='text-yellow-500 font-bold text-2xl'>F3 SPORTS CENTER</h1>
        </div>

        <ul className='flex items-center gap-10 px-4 w-auto'>
            <li className='text-lg font-semibold hover:bg-yellow-500 p-2 rounded-lg cursor-pointer'><a href="/#home">Home</a></li>
            <li className='text-lg font-semibold hover:bg-yellow-500 p-2 rounded-lg cursor-pointer'><a href="/#service">Service</a></li>
            <li className='text-lg font-semibold hover:bg-yellow-500 p-2 rounded-lg cursor-pointer'><Link href="/treats">Treats</Link></li>
            <li className='text-lg font-semibold hover:bg-yellow-500 p-2 rounded-lg cursor-pointer'><a href="/#pricing">Pricing</a></li>
            <li className='text-lg font-semibold hover:bg-yellow-500 p-2 rounded-lg cursor-pointer'><Link href="/blog">Blogs</Link></li>
            <li className='text-lg font-semibold hover:bg-yellow-500 p-2 rounded-lg cursor-pointer'><a href="/#contact">Contact</a></li>
            <li className='text-lg font-semibold hover:bg-yellow-500 p-2 rounded-lg cursor-pointer'><a href="/#about">About</a></li>
            <li className='text-lg font-semibold hover:bg-yellow-500 p-2 rounded-lg cursor-pointer'><Link href="/login">Login</Link></li>
        </ul>
        
    </div>
  )
}

export default Navbar