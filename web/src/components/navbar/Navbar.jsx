import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import openMenu from '../../assets/img/open-menu.png';
import closeMenu from '../../assets/img/close-menu.svg';
import { AuthContext } from '../../contexts/AuthStore';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const renderNavLinkClassName = ({ isActive }) => isActive ? 'underline decoration-2 underline-offset-4 font-medium text-black text-gray-600 md:hover:bg-gray-200 md:hover:font-bold w-full text-left md:text-center rounded md:rounded-none p-2 md:p-4' : 'text-gray-600 md:hover:bg-gray-200 md:hover:font-bold w-full text-left md:text-center rounded md:rounded-none p-2 md:p-4';
  
  const { user } = useContext(AuthContext);

  return (
    <nav className='bg-accent/70 p-2 md:p-0'>
      <div className=' md:grid md:grid-cols-[auto_2fr] lg:grid-cols-[2fr_4fr] gap-18 md:w-[90%] md:mx-auto '>

        <div className='flex justify-between'>
          <Link to="/">
            <img src={logo} alt="Logo" className='w-10' />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-700 md:hidden'>
            <img src={`${isOpen? closeMenu : openMenu }`} alt="Logo" className='w-10 h-10' />
          </button>
        </div>
    
      <ul className={`${isOpen ? "block my-2 sm:my-0 " : "hidden"} md:grid grid-cols-5 gap-2`}>
      <NavLink to="/about" className={renderNavLinkClassName}><li >About us</li></NavLink>
      <NavLink to="/animals" className={renderNavLinkClassName}><li >Rehoming</li></NavLink>
      <NavLink to="/" className={renderNavLinkClassName}><li >Volunteer</li></NavLink>
      <NavLink to="/donate" className={renderNavLinkClassName}><li >Donate</li></NavLink>

      { (user?.email) ? (
        <li className="flex items-center">
          <NavLink to="/profile" className={renderNavLinkClassName}>{user.email}</NavLink>
          <NavLink to="/logout"><img src={logo} className='w-8 aspect-square mx-4'></img></NavLink>
        </li>
        ) : (
          <NavLink to="/login" className={renderNavLinkClassName}>
          <li>LOGIN
          <i></i>
        </li></NavLink>
        
          
        ) }
      
      </ul>

      </div>
    </nav>
  )
}

export default Navbar