import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export const OtherJobs = () => {
  return (
    <div className="bg-[#18475d] py-10 mt-10 text-white">
      <h1 className="text-3xl font-bold  text-center ">
        Demais áreas de atuação:
      </h1>
      <ul className="flex sm:justify-around sm:flex-row flex-col pl-3 pt-5 ">
        <div>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">Elevadores</span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">Escada Rolantes</span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">Andaimes</span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">
              Equipamentos odonto - médico - hospitalares
            </span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">Galpões e similares</span>
          </li>
        </div>
        <div>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">Tendas e Toldos</span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">Linha de vida</span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">NR 13</span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">Consultorias</span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <span>
              <AiFillCheckCircle size={20} />
            </span>
            <span className="text-xl">Serviços de engenharia em geral</span>
          </li>
        </div>
      </ul>
    </div>
  )
}
