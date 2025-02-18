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
import manifest from '@/assets/manifest-8.png';
//h-[725px] w-full

const HumanCargo = () => {
  return (
    <div className="">
      {/* <div className=" h-[725px] w-full flex flex-col justify-center items-center bg-[url(@/assets/manifest-8.png)] bg-cover bg-center mt-8"> */}
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
      <section className="h-screen w-screen my-8 flex justify-center items-center">
        {/* <div className=" h-full w-full flex justify-center items-center border border-fuchsia-600"> */}
        <Carousel className="mt-4 w-52">
          <CarouselContent>
            {transportedHumans.map((person, i) => {
              return <CarouselItem key={i} className="capitalize font-serif italic text-lg font-bold opacity"><ShowCarousel captive={person} /></CarouselItem>
            })}
          </CarouselContent>
          <CarouselPrevious className="opacity-30" />
          <CarouselNext className="opacity-30" />
        </Carousel>
        {/* </div> */}
      </section>
      {/* </div> */}
    </div>
  )
}
export default HumanCargo;

