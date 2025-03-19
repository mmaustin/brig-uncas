//'use client';

import Image from "next/image";
import manifest from '@/public/manifest-6.png';
import { ScrollArea } from "@/components/ui/scroll-area";
import { backpageText } from "@/constants/captiveArray";

const TextBack = () => {
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
        <ScrollArea className="h-[250px] w-[200px] sm:w-[250px] my-8 flex justify-center items-center bg-green-800/80 rounded-lg">
          {backpageText.map((text, i) => (
            <section key={i} className="m-2">
              <div key={i} className="text-sm text-my-beige font-serif font-semibold">
                {text}
              </div>
              {i !== 1 && 
                <div className="my-2 border"></div>
              }
            </section>
          ))}
        </ScrollArea>
      </div>
    </section>
  )
}
export default TextBack;