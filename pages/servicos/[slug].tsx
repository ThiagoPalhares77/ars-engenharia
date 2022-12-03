import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Footer } from '../../components/Footer'

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
        <div className="my-28 md:mx-20">
          <section className="grid md:grid-cols-2 grid-row">
            <div className="border-solid border-2 border-[#5c9ab2] h-[352px] w-[502px] hover:scale-105 duration-500 ease-in-out">
              <Image
                height={350}
                width={500}
                src={service.image2}
                alt={service.title}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#18475D] text-center p-4">
                {service.title}
              </h1>
              <p>{service.description}</p>
              <Link href={'/#Contact'}>
                <a href="">
                  <button className="border shadow-lg p-3 w-full mt-2 bg-[#18475d] text-white hover:bg-[#5c9ab2] transition-500">
                    Entre em contato agora!
                  </button>
                </a>
              </Link>
            </div>
          </section>
          <section className="grid md:grid-cols-2 grid-row mt-10 gap-3">
            <div>
              {service.importance && (
                <>
                  <h2 className="text-2xl font-bold text-[#18475D] p-4">
                    Importância:
                  </h2>
                  <p>{service.importance}</p>
                </>
              )}
              {service.advantagesTextBefore && (
                <div>
                  <h2 className="text-2xl font-bold text-[#18475D] p-4">
                    Vantagens:
                  </h2>
                  <ul className="list-disc">
                    {service.advantagesTextBefore.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {service.listWithTextBefore && (
                <div>
                  <h2 className="text-2xl font-bold text-[#18475D] p-4">
                    Benefícios:
                  </h2>
                  <ul className="list-disc">
                    {service.listWithTextBefore.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {service.benefits && (
                <div>
                  <h2 className="text-2xl font-bold text-[#18475D] p-4">
                    Benefícios:
                  </h2>
                  <ul className="list-disc">
                    {service.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {service.structuresTypes && (
                <div>
                  <h2 className="text-2xl font-bold text-[#18475D] p-4">
                    Tipos de Estruturas:
                  </h2>
                  <ul className="list-disc">
                    {service.structuresTypes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-bold text-[#18475D] p-4">
                  Como podemos te ajudar:
                </h2>
                <ul className="list-disc">
                  {service.howCanIHelpYou.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-solid border-2 border-[#5c9ab2] h-[352px] w-[502px] hover:scale-105 duration-500 ease-in-out">
              <Image
                height={350}
                width={500}
                src={service.image3}
                alt={service.title}
              />
            </div>
          </section>
        </div>
      )}
      <Footer />
    </>
  )
}
