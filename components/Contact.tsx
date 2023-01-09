import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import Whatsapp from '../public/MediaIcons/whatsapp-msg.png'
import Instagram from '../public/MediaIcons/instagram.png'
import Email from '../public/MediaIcons/email.png'
import { sendContactForm } from '../lib/api'

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

  async function handleFormSubmit(event) {
    event.preventDefault()
    try {
      await sendContactForm(fields)
      alert('Mensagem enviada com sucesso')
    } catch {
      alert('Erro ao enviar a mensagem')
    }
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
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold text-[#18475D] text-center p-4">
            Ou pelo Whatsapp:
          </h2>

          <Link href="/">
            <a>
              <Image
                src={Whatsapp}
                height="199"
                width="398"
                alt="Whatsapp Logo"
              />
            </a>
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#18475D] text-center p-4">
            Telefone para contato: (31)99999-9999
          </h2>
        </div>
      </form>
    </div>
  )
}
