import Image from 'next/image'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import Client1 from '/public/ClientsLogo/apia.jpg'
import Client2 from '/public/ClientsLogo/GERAÇÕES.png'
import Client3 from '/public/ClientsLogo/LDC.png'
import Client4 from '/public/ClientsLogo/OFI.png'
import Client5 from '/public/ClientsLogo/RUOCCO.png'
import Client6 from '/public/ClientsLogo/SICOOB.png'
import Client7 from '/public/ClientsLogo/VINA.png'

export const Clients = () => {
  const cardVariants: Variants = {
    offscreen: {
      x: [-700]
    },
    onscreen: {
      x: 0,
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
        className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 mx-10 gap-2"
        variants={cardVariants}
      >
        <li>
          <Image src={Client1} alt={''} />
        </li>
        <li>
          <Image src={Client2} alt={''} />
        </li>
        <li>
          <Image src={Client3} alt={''} />
        </li>
        <li>
          <Image src={Client7} alt={''} />
        </li>
        <li>
          <Image src={Client5} alt={''} />
        </li>
        <li>
          <Image src={Client6} alt={''} />
        </li>
        <li>
          <Image src={Client4} alt={''} width={120} height={120} />
        </li>
      </motion.ul>
    </motion.div>
  )
}
