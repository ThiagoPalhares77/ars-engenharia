import Image from 'next/image'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import LogoExemple from '/public/ClientsLogo/logoexemple.png'

export const Clients = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  }
  return (
    <motion.div
      id="Clients"
      className="pt-24"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h1 className="mb-10 text-center text-3xl font-bold text-[#18475D]">
        Alguns Clientes:
      </h1>
      <motion.ul
        className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 mx-10"
        variants={cardVariants}
      >
        <li>
          <Image src={LogoExemple} alt={''} />
        </li>
        <li>
          <Image src={LogoExemple} alt={''} />
        </li>
        <li>
          <Image src={LogoExemple} alt={''} />
        </li>
        <li>
          <Image src={LogoExemple} alt={''} />
        </li>
        <li>
          <Image src={LogoExemple} alt={''} />
        </li>
        <li>
          <Image src={LogoExemple} alt={''} />
        </li>
      </motion.ul>
    </motion.div>
  )
}
