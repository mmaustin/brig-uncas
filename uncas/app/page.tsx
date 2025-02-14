'use client';

import Image from "next/image";
import manifest from '@/assets/manifest-8.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";


const testArray = [
  'person one',
  'person two',
  'person three'
];

export default function Home() {

  const [num, setNum] = useState(0);
  console.log(num);  

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="h-screen w-full my-8 flex justify-center items-center">
        <div className="bg-[url(@/assets/manifest-8.png)] bg-cover bg-center h-3/4 w-3/4 m-8 flex justify-center items-center">
          <Carousel className="bg-chart-4/30 w-52">
            <CarouselContent>
              {testArray.map((person, i) => {
                return <CarouselItem key={i}>{person}</CarouselItem>
              })}
              {/* <CarouselItem className="capitalize font-serif">in rememberance of Name who never got a chance to shine</CarouselItem>
              <CarouselItem>Item Two</CarouselItem>
              <CarouselItem>Item Three</CarouselItem> */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <div className="mt-10">
        <Image
          className="h-[275px] w-[275px]"
          src={manifest}
          alt="create author profile form"
          priority
          height={265}
          width={198}
        />
      </div>
    </div>
  );
};

//  <Image
//           className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
//           src={profileForm}
//           alt="create author profile form"
//           priority
//           height={265}
//           width={198}
//         />