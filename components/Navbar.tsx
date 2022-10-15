import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import LogoARS from '../public/LogoARS.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed left-0 right-0 w-full z-10">
      <div className="max-w-[1240px] m-auto flex justify-between items-center px-4  ">
        <div className="">
          <Image src={LogoARS} width={200} height={120} />
        </div>
        <ul className="hidden sm:flex ">
          <li className="p-4 ">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="p-4">
            <Link href={'/'}>Trabalhos</Link>
          </li>
          <li className="p-4">
            <Link href={'/'}>Parcerias</Link>
          </li>
          <li className="p-4">
            <Link href={'/'}>Contato</Link>
          </li>
        </ul>

        {/* MOBILE */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-white" size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>

        {/* MOBILE MENU */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-[#003D58] text-center easy-in duration-300'
              : 'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#003D58] text-center easy-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl text-white">
              <Link href={'/'}>Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl text-white">
              <Link href={'/'}>Trabalhos</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl text-white">
              <Link href={'/'}>Parcerias</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl text-white">
              <Link href={'/'}>Contatos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
