import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import Whatsapp from '../public/MediaIcons/whatsapp.png'
import Instagram from '../public/MediaIcons/instagram.png'
import Email from '../public/MediaIcons/email.png'

export const Contact = () => {
  const [fields, setFields] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })
  function handleInputChange(event) {
    fields[event.target.name] = event.target.value
    setFields(fields)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(fields)
  }

  return (
    <div id="Contact" className="p-4 pt-24">
      <h1 className="text-3xl font-bold text-[#18475D] text-center p-4">
        Entre em contato com a gente:
      </h1>
      <form onSubmit={handleFormSubmit} className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            onChange={handleInputChange}
            className="border shadow-lg p-3"
            type="text"
            placeholder="Nome"
            name="nome"
            id="nome"
          />
          <input
            onChange={handleInputChange}
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
        </div>
        <input
          onChange={handleInputChange}
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Assunto"
          id="assunto"
          name="assunto"
        />
        <textarea
          onChange={handleInputChange}
          className="border shadow-lg p-3 w-full"
          name="mensagem"
          id="mensagem"
          cols={30}
          rows={10}
          placeholder={'Mensagem'}
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2 hover:bg-[#5c9ab2] hover:text-white transition-500">
          Enviar
        </button>
        <div>
          <h2 className="text-xl font-bold text-[#18475D] text-center p-4">
            Ou entre em contato por nossas redes socias:
          </h2>
          <div className="flex gap-3 items-center justify-center">
            <Link href="/">
              <a>
                <Image
                  src={Whatsapp}
                  height="53"
                  width="53"
                  alt="Whatsapp Logo"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={Instagram} alt="Instagram Logo" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={Email} height="55" width="55" alt="Email Logo" />
              </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
