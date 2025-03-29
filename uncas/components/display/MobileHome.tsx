import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import houseOne from '@/public/house-1.png';
import houseTwo from '@/public/house-2.png';
import houseThree from '@/public/house-3.png';
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";


const MobileHome = () => {
  return (
    <div className="sm:hidden w-full h-full flex flex-col justify-center items-center text-lg font-serif gap-6">
      <Popover>
        <PopoverTrigger>
          <Image
            className="h-[250px] w-[200px]"
            src={houseOne}
            alt="Manifest Back Left"
            priority
            height={265}
            width={198}
          />
        </PopoverTrigger>
        <PopoverContent className={cn("bg-slate-400 flex justify-center items-center h-auto w-auto m-0 p-0 z-0")}>
          <ScrollArea className="h-[100px] w-[200px] my-0 flex justify-center items-center bg-green-800/80 rounded-lg">
            <section className="m-2">
              <div className="text-sm text-white/80 font-serif font-semibold italic">
                <span className="not-italic font-normal">1315 Duke Street, Alexandria, Virginia.</span>  The offices of Franklin & Armfield were once located in this building.  The building was purchased by the city of Alexandria in 2020.  Two years later, it was reopened as Freedom House Museum.
              </div>
            </section>
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
            <section className="m-2">
              <div className="text-sm text-white/80 font-serif font-semibold italic">
                <span className="not-italic font-normal">Union soldiers at 1315 Duke Street ≈ 1862.</span>  Price, Birch, and Company, another domestic slave trading firm, operated out of the building once used by Franklin & Armfield.  Armfield, upon Franklin&apos;s retirement, sent the firm&apos;s last shipment of slaves to New Orleans in 1836.
              </div>
            </section>
          </ScrollArea>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Image
            className="h-[200px] w-[275px]"
            src={houseTwo}
            alt="Manifest Back Left"
            priority
            height={265}
            width={198}
          />
        </PopoverTrigger>
        <PopoverContent className={cn("bg-slate-400 flex justify-center items-center h-auto w-auto m-0 p-0 z-0")}>
          <ScrollArea className="h-[100px] w-[200px] my-0 flex justify-center items-center bg-green-800/80 rounded-lg">
            <section className="m-2">
              <div className="text-sm text-white/80 font-serif font-semibold italic">
                <span className="not-italic font-normal">Union soldiers milling about, 1861.</span>  The featureless white structure is where the enslaved were held, as they awaited shipment away from everything they had ever known and to the horrific realities of the cotton South.
              </div>
            </section>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  )
}
export default MobileHome;