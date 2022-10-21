import Image from "next/image"
import { useRouter } from "next/router"

import { ourServices } from "../../services"

export default function Service() {

  const router = useRouter()
  const { slug } = router.query

  const service = ourServices.find((item) => item.title.toLocaleLowerCase() === slug)

  return (
    <>
      {service !== undefined && (
        <div className="mt-24">
          <Image src={service.image} alt={service.title} />
          <h1>Titulo do serviço: {service.title}</h1>
          <p>Descrição do serviço: {service.description}</p>
        </div>
      )}
    </>
  )
}