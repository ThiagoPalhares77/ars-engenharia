import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import LogoARS from '../public/LogoARS.png'

export const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="fixed top-0 right-0 left-0 bg-white w-full z-10">
      <div className="max-w-[1240px] m-auto flex justify-between items-center px-4">
        <div className="py-1">
          <Image src={LogoARS} width={220} height={80} alt="" />
        </div>
        <ul className="hidden sm:flex ">
          <li className="p-4 ">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="p-4">
            <Link href={'/#Services'}>Serviços</Link>
          </li>
          <li className="p-4">
            <Link href={'/#Clients'}>Clientes</Link>
          </li>
          <li className="p-4">
            <Link href={'/#Contact'}>Entre em contato</Link>
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
              ? 'sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-[#003D58] text-center easy-in duration-500'
              : 'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#003D58] text-center easy-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl text-white">
              <Link href={'/'}>Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl text-white">
              <Link href={'/#Services'}>Serviços</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl text-white">
              <Link href={'/#Clients'}>Clientes</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl text-white">
              <Link href={'/#Contact'}>Entre em contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
