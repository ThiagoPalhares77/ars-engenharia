import React from 'react'

export const Contact = () => {
  return (
    <div className=" m-auto p-4 h-screen">
      <h1 className="text-3xl font-bold text-[#18475D] text-center p-4">
        Entre em contato com a gente
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Nome"
          />
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Assunto"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder={'Mensagem'}
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2 hover:bg-[#5c9ab2] hover:text-white transition-500">
          Enviar
        </button>
      </form>
    </div>
  )
}
