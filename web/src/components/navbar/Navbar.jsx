import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import openMenu from '../../assets/img/open-menu.png';
import closeMenu from '../../assets/img/close-menu.svg';

function Navbar() {

  return (
    <nav className='bg-accent/70 p-4 sm:flex items-center justify-between'>

        <div className='flex justify-between'>
          <Link to="/">
            <img src={logo} alt="Logo" className='w-10' />
          </Link>
          <button className='text-gray-700 cursor-pointer sm:hidden'>
            <img src={ openMenu } alt="Logo" className='w-10 h-10' />
          </button>
        </div>

    
      <ul className='flex flex-col items-start mt-3 gap-2 sm:flex-row'>
        <li className='text-gray-600 cursor-pointer hover:bg-gray-200 hover:font-bold w-full text-left rounded px-2'>About us</li>
        <li className='text-gray-600 cursor-pointer hover:bg-gray-200 hover:font-bold  w-full text-left rounded px-2'>Rehoming</li>
        <li className='text-gray-600 cursor-pointer hover:bg-gray-200 hover:font-bold  w-full text-left rounded px-2'>Volunteer</li>
        <li className='text-gray-600 cursor-pointer hover:bg-gray-200 hover:font-bold  w-full text-left rounded px-2'>Donate</li>
        <li className='text-gray-600 cursor-pointer hover:bg-gray-200 hover:font-bold  w-full text-left rounded px-2'><Link to="/login">Login</Link></li>
      </ul>
      
    </nav>
  )
}

export default Navbar