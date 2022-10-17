import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NR12 from '../public/nr12.png'
import metalimg from '../public/metal.png'
import NR11 from '../public/nr11.png'
import parkimg from '../public/park.png'
import reportimg from '../public/report.png'

export const Services = () => {
  return (
    <div id="Services" className="my-10  ">
      <div className="pt-20">
        <div className="my-5 flex justify-center">
          <h1 className=" text-5xl font-bold text-[#003D58]"> Serviços </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              NR12 Máquinas e Equipamentos
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={NR12} />
            </div>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              NR11 Sistema Transportador{' '}
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={NR11} />
            </div>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              Estruturas Metálicas
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={metalimg} />
            </div>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              Plano de Manutenção Operação e Controle
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={NR12} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              Auto de Vistoria do Corpo de Bombeiros
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={NR12} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              Auto de Vistoria do Corpo de Bombeiros
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={NR12} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>

          {/* CARD 7 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              Auto de Vistoria do Corpo de Bombeiros
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={NR12} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>

          {/* CARD 8 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              Auto de Vistoria do Corpo de Bombeiros
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={NR12} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>

          {/* CARD 9 */}
          <div className="m-6 bg-[#DEDEDE] border-solid border-2 border-[#1B1735] rounded-lg shadow-xl hover:scale-110 ease-in transition-800">
            <h2 className="text-center m-2 font-bold text-lg">
              Auto de Vistoria do Corpo de Bombeiros
            </h2>
            <div className="text-center">
              {' '}
              <Image width={80} height={80} src={NR12} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quod quo adipisci recusandae labore eligendi atque! Blanditiis
              quia natus quidem eius. Ratione est molestiae amet officiis
              laboriosam eligendi fuga consectetur.
            </p>
            <div className="flex content-center justify-center">
              <button className=" text-white bg-[#003D58] rounded-2xl px-2 py-1 my-4 hover:bg-[#579DB6]">
                <Link href={'/'}> Saiba Mais </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
