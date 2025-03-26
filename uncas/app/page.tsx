import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import houseThree from '@/public/house-3.png';
import Image from "next/image";



export default function Home() {

  return (
    <div className="w-full h-screen flex justify-center items-center text-lg font-serif">
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
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

    </div>
  );
};
