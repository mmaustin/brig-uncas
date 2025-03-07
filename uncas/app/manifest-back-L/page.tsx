import Image from "next/image"
import manifest from '@/assets/manifest-6.png';
import manifestA from '@/assets/manifest-7.png';
//import { Carousel, CarouselContent,CarouselItem, CarouselNext,CarouselPrevious, } from "@/components/ui/carousel";


const ManifestBackLeft = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mx-10 justify-center items-center ">
      <Image
        className="h-[200px] w-[275px] sm:h-[250px] sm:w-[400px] md:h-[375px] md:w-[575px]"
        src={manifest}
        alt="Manifest Back Left"
        priority
        height={265}
        width={198}
      />
      <Image
        className="h-[200px] w-[275px] sm:h-[250px] sm:w-[400px] md:h-[375px] md:w-[575px]"
        src={manifestA}
        alt="Manifest Back Left"
        priority
        height={265}
        width={198}
      />
    </div>
  )
}
export default ManifestBackLeft;