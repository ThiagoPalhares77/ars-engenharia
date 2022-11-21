import Image from 'next/image'
import { useRouter } from 'next/router'

import { ourServices } from '../../services'

export default function Service() {
  const router = useRouter()
  const { slug } = router.query

  const service = ourServices.find(
    (item) => item.title.toLocaleLowerCase() === slug
  )

  return (
    <>
      {service !== undefined && (
        <div className="mt-24">
          <Image
            height={350}
            width={500}
            src={service.image1}
            alt={service.title}
          />
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      )}
    </>
  )
}
