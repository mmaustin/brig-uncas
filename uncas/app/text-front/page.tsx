'use client';

import Image from "next/image";
import manifest from '@/public/manifest-8.png';
import { ScrollArea } from "@/components/ui/scroll-area";
import { frontpageText } from "@/constants/captiveArray";


const TextFront = () => {
  return (
    <section className="w-full h-[650px] md:h-[550px]">
      <div className=" w-inherit h-full mx-10 flex flex-col justify-center  md:flex-wrap md:justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center font-serif italic text-sm w-[275px] sm:w-[400px] md:w-[400px] lg:w-[500px] text-white/80 bg-green-800/80 mx-2">
            No. / Name of Negroes / Age / Feet / Inches / Colour / Remarks
            <span className="text-yellow-300">*</span>
          </div>
          <Image
            className="h-[200px] w-[275px] sm:h-[250px] sm:w-[400px] md:h-[355px] md:w-[400px] lg:h-[375px] lg:w-[500px]"
            src={manifest}
            alt="Manifest Back Left"
            priority
            height={265}
            width={198}
          />
        </div>
        <ScrollArea className="h-[250px] w-[200px] sm:w-[250px] md:w-[250px] lg:w-[300px] my-8 flex justify-center items-center bg-green-800/80 rounded-lg">
          {frontpageText.map((text, i) => (
            <section key={i} className="m-2">
              <div key={i} className="text-sm text-white/80 font-serif font-semibold italic">
                <span className="text-yellow-300">*</span> {text}
              </div>
              {i !== 2 &&
                <div className="my-2 border"></div>
              }
            </section>
          ))}
        </ScrollArea>
      </div>
    </section>
  )
}
export default TextFront;