import { Swiper, SwiperSlide } from "swiper/react";


import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";

import Image from "next/image";
import { ourServices } from '../services';

export function OurJobs() {

  function reduceText(text: string) {
    if (text.length > 70) {
      return text.substring(0, 70)
    }
    return text
  }

  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2,
          }
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {ourServices.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col">
                <div className="rounded-lg overflow-hidden">
                  <Image width={350} height={200} src={item.image} alt="" />
                </div>
                <strong className="mt-3 text-xl w-[350px]">{item.title}</strong>
                <span className=" w-[350px] h-12">{reduceText(item.description)}</span>
                <div className="rounded-md px-16 mt-3 py-3 bg-[#18475D] w-fit text-white hover:bg-[#569DB2] mb-8 cursor-pointer mx-auto">
                  <Link href={`servicos/${item.title.toLocaleLowerCase()}`}>
                    Saiba mais
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
};