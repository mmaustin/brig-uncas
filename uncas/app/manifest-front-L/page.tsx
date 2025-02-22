import Image from "next/image"
import manifest from '@/assets/manifest-8.png';


const ManifestFrontLeft = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
    <div className="h-[100%] w-[100%] flex justify-center items-center mx-4">
      <Image
        className="h-[200px] w-[275px] sm:h-[300px] sm:w-[375px] md:h-[375px] md:w-[575px]"
        src={manifest}
        alt="Manifest Front Left"
        priority
        height={265}
        width={198}
      />
    </div>
    </div>
  )
}
export default ManifestFrontLeft