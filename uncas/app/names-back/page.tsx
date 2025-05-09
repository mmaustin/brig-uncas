'use client';

import ShowCarousel from "@/components/display/ShowCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { transportedHumansBack } from "@/constants/captiveArray";
import Image from "next/image";
import manifest from '@/public/manifest-6.png';

const NamesBack = () => {
  return (
    <section className="w-full h-[650px] md:h-[550px]">
      <div className=" w-inherit h-full mx-10 flex flex-col justify-center  md:flex-wrap md:justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center font-serif italic text-sm w-[275px] sm:w-[400px] md:w-[425px] lg:w-[500px] text-white/80 bg-green-800/80 mx-2"><span className="text-yellow-300">*</span> No. / Name of Negroes / Age / Feet / Inches / Colour / Remarks</div>
          <Image
            className="h-[200px] w-[275px] sm:h-[250px] sm:w-[400px] md:h-[375px] md:w-[425px] lg:w-[500px]"
            src={manifest}
            alt="Manifest Back Left"
            priority
            height={265}
            width={198}
          />
        </div>
        <section className="h-[250px] w-[200px] my-8 flex justify-center items-center bg-green-800/80 rounded-lg">
          <Carousel className="w-36 sm:w-44 mt-4">
            <CarouselContent>
              {transportedHumansBack.map((person, i) => {
                return <CarouselItem key={i} className="text-white/80 capitalize font-serif italic text-lg font-bold opacity "><ShowCarousel captive={person} /></CarouselItem>
              })}
            </CarouselContent>
            <CarouselPrevious className="opacity-30" />
            <CarouselNext className="opacity-30" />
          </Carousel>
        </section>
      </div>
    </section>
  )
}
export default NamesBack;