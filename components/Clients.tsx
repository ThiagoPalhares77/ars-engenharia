import Image from 'next/image'
import React from 'react'
import LogoExemple from '/public/ClientsLogo/logoexemple.png'

export const Clients = () => {
  return (
    <div id="Clients" className=" pt-24">
      <h1 className="mb-10 text-center text-3xl font-bold text-[#18475D]">
        Alguns Clientes:
      </h1>
      <ul className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 mx-10">
        <li>
          <Image src={LogoExemple} />
        </li>
        <li>
          <Image src={LogoExemple} />
        </li>
        <li>
          <Image src={LogoExemple} />
        </li>
        <li>
          <Image src={LogoExemple} />
        </li>
        <li>
          <Image src={LogoExemple} />
        </li>
        <li>
          <Image src={LogoExemple} />
        </li>
      </ul>
    </div>
  )
}
