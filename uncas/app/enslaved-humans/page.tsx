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

const EnslavedHumans = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url(@/assets/manifest-8.png)] bg-cover bg-center mt-8">
      <section className="h-screen w-screen my-8 flex justify-center items-center">
        {/* <div className=" h-full w-full flex justify-center items-center border border-fuchsia-600"> */}
          <Carousel className="w-52">
            <CarouselContent>
              {transportedHumans.map((person, i) => {
                return <CarouselItem key={i} className="capitalize font-serif italic text-lg font-bold opacity"><ShowCarousel captive={person}/></CarouselItem>
              })}
            </CarouselContent>
            <CarouselPrevious className="opacity-30"/>
            <CarouselNext className="opacity-30"/>
          </Carousel>
        {/* </div> */}
      </section>
      {/* <div className="mt-10">
        <ShowDisplay />
        <Image
          className="h-[275px] w-[275px]"
          src={manifest}
          alt="create author profile form"
          priority
          height={265}
          width={198}
        />
      </div> */}
    </div>
  )
}
export default EnslavedHumans;


//  <Image
//           className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
//           src={profileForm}
//           alt="create author profile form"
//           priority
//           height={265}
//           width={198}
//         />