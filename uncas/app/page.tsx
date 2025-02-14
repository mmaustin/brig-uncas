'use client';

// import Image from "next/image";
// import manifest from '@/assets/manifest-8.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShowCarousel, { ShowDisplay } from "@/components/display/ShowCarousel";
//import { useState } from "react";

const testArray = [
  'person one',
  'person two',
  'person three'
];

export default function Home() { 

  // const [num, setNum] = useState(0);
  // console.log(num);
  
  const changeState = () => {
    console.log('apple');
    
    // if(num !== testArray.length-1){
    //   setNum(num + 1);
    // }
  }

  let displayIndex = 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="h-screen w-full my-8 flex justify-center items-center">
        <div className="bg-[url(@/assets/manifest-8.png)] bg-cover bg-center h-full w-full flex justify-center items-center">
          <Carousel className=" w-52">
            <CarouselContent>
              {testArray.map((person, i) => {
                displayIndex = i;
                return <CarouselItem key={i} className="capitalize font-serif italic text-white opacity-45"><ShowCarousel arrIndex={i}/></CarouselItem>
              })}
              {/* <CarouselItem className="capitalize font-serif">in rememberance of Name who never got a chance to shine</CarouselItem>
              <CarouselItem>Item Two</CarouselItem>
              <CarouselItem>Item Three</CarouselItem> */}
            </CarouselContent>
            <CarouselPrevious className="opacity-30"/>
            <CarouselNext className="opacity-30"/>
          </Carousel>
        </div>
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