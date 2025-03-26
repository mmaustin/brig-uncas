import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import houseThree from '@/public/house-3.png';
import houseOne from '@/public/house-1.png';
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { frontpageText } from "@/constants/captiveArray";



export default function Home() {

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-lg font-serif gap-6">
      <Popover>
        <PopoverTrigger>
          <Image
            className="h-[200px] w-[150px]"
            src={houseOne}
            alt="Manifest Back Left"
            priority
            height={265}
            width={198}
          />
        </PopoverTrigger>
        <PopoverContent className={cn("bg-slate-400 flex justify-center items-center h-auto w-auto m-0 p-0 z-0")}>
          <ScrollArea className="h-[100px] w-[200px] my-0 flex justify-center items-center bg-green-800/80 rounded-lg">
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
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Image
            className="h-[200px] w-[275px]"
            src={houseThree}
            alt="Manifest Back Left"
            priority
            height={265}
            width={198}
          />
        </PopoverTrigger>
        <PopoverContent className={cn("bg-slate-400 flex justify-center items-center h-auto w-auto m-0 p-0 z-0")}>
          <ScrollArea className="h-[100px] w-[200px] my-0 flex justify-center items-center bg-green-800/80 rounded-lg">
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
        </PopoverContent>
      </Popover>

    </div>
  );
};
