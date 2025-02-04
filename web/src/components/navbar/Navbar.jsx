import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import openMenu from '../../assets/img/open-menu.png';
import closeMenu from '../../assets/img/close-menu.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-accent/70 p-4 sm:flex items-center justify-between'>

        <div className='flex justify-between'>
          <Link to="/">
            <img src={logo} alt="Logo" className='w-10' />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-700 sm:hidden'>
            <img src={`${isOpen? closeMenu : openMenu }`} alt="Logo" className='w-10 h-10' />
          </button>
        </div>
    
      <ul className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
        <li className='text-gray-600  hover:bg-gray-200 hover:font-bold w-full text-left rounded px-2'>About us</li>
        <li className='text-gray-600 hover:bg-gray-200 hover:font-bold  w-full text-left rounded px-2'>Rehoming</li>
        <li className='text-gray-600 hover:bg-gray-200 hover:font-bold  w-full text-left rounded px-2'>Volunteer</li>
        <li className='text-gray-600 hover:bg-gray-200 hover:font-bold  w-full text-left rounded px-2'>Donate</li>
        <li className='text-gray-600 hover:bg-gray-200 hover:font-bold  w-full text-left rounded px-2'>Login</li>
      </ul>
      
    </nav>
  )
}

export default Navbar