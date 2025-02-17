import Image from "next/image"
import manifest from '@/assets/manifest-2.png';


const ManifestFrontLeft = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Image
        className="h-[375px] w-[375px]"
        src={manifest}
        alt="Manifest Front Left"
        priority
        height={265}
        width={198}
      />
    </div>
  )
}
export default ManifestFrontLeft