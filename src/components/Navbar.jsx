import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`
    ${styles.paddingX}
    w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto
'>
        <Link to={'/'} onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }} className='flex item-center gap-2'>
          <img src={logo} className='w-9 object-contain' alt="" />
          <p className='text-white text-[18px] font-bold cursor-pointer '>Chetan <span className='sm:block hidden'>| Baliyan</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {
              setActive(link.title)
            }}>
              <a href={`#${link.id}`}>{link.title}</a>

            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img onClick={() => setToggle(!toggle)} src={toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer ' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar