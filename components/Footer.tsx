import Image from 'next/image'
import React from 'react'
import LogoWhite from '/public/LogoMin.png'

export const Footer = () => {
  return (
    <div className="bg-[#18475D] ">
      <div className="max-w-[1240px] m-auto flex justify-between items-center px-4 h-20 ">
        <div className="flex  items-center">
          <Image src={LogoWhite} width={60} height={60} alt={''} />
        </div>
        <div className="text-white flex items-center">
          <p className="text-sm flex sm:flex-row flex-col">
            <span>ARS Soluções Engenharia 2023 - &nbsp;</span>
            <span> Todos os direitos reservados </span>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  )
}
