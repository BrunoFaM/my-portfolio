import React from 'react'

function ContactSection() {
  return (
    <main>
      <form className="bg-gray-500 text-black flex flex-col p-4 gap-2" action="">
        <div className="flex gap-1 flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            className="self-center w-[80%]"
            placeholder="Ingrese su nombre"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <label className="block" htmlFor="correo">
            Email
          </label>
          <input
            className="self-center w-[80%]"
            placeholder="Ingrese su Correo"
            type="email"
            id="correo"
            name="email"
            required
          />
        </div>
        <div className="flex gap-1 flex-col">
          <label className="block" htmlFor="msg">
            Mensaje
          </label>
          <textarea
            className="self-center w-[80%]"
            required
            placeholder="Ingrese su mensaje"
            name="message"
            id="msg"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  )
}

export default ContactSection