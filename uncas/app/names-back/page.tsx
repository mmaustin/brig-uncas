'use client';

import ShowCarousel from "@/components/display/ShowCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { transportedHumans } from "@/constants/captiveArray";
import Image from "next/image";
import manifest from '@/public/manifest-8.png';

const NamesBack = () => {
  return (
    <section className="w-full h-[550px]">
      <div className=" w-inherit h-full mx-10 flex flex-col justify-center  md:flex-wrap md:justify-around items-center border border-green-500">
        <div className="">
          <Image
            className="h-[200px] w-[275px] sm:h-[250px] sm:w-[400px] md:h-[375px] md:w-[425px] lg:w-[500px] border border-red-600"
            src={manifest}
            alt="Manifest Back Left"
            priority
            height={265}
            width={198}
          />
        </div>
        <section className="h-[250px] w-[200px] my-8 flex justify-center items-center">
          <Carousel className="w-36 sm:w-44 sm:mt-4">
            <CarouselContent>
              {transportedHumans.map((person, i) => {
                return <CarouselItem key={i} className="capitalize font-serif italic text-lg font-bold opacity"><ShowCarousel captive={person} /></CarouselItem>
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