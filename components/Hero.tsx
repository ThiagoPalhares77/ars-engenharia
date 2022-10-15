import React from 'react'

export const Hero = ({ heading, message }) => {
  return (
    <div className=" h-screen bg-fixed bg-center bg-cover  bg-[url('/hero-pattern.png')]">
      <div className="absolute top-0 left-0 right-0 bottom-0 sm:bg-gradient-to-r sm:from-black/95 sm:to-transparent smm:bg-black/70  ">
        <div className="p-5 text-white z-[2] mt-[15rem] sm:mr-[45rem]">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
        </div>
      </div>
    </div>
  )
}
