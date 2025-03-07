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

const HumanCargo = () => {
  return (
    <section>
      <div className=" w-full container">      
        <div className="">
          <Image
            alt="Manifest Background"
            src={manifest}
            placeholder="blur"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              position: 'absolute',
              width: '100%',
              height: '750px'
            }}
          />
        </div>
        <section className="h-[450px] w-screen my-8 flex justify-center items-center border border-red-500">
          <Carousel className="w-36 sm:w-52 sm:mt-4">
            <CarouselContent>
              {transportedHumans.map((person, i) => {
                return <CarouselItem key={i} className="capitalize font-serif italic text-lg font-bold opacity"><ShowCarousel  captive={person} /></CarouselItem>
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
export default HumanCargo;

