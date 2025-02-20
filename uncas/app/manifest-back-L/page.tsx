import Image from "next/image"
import manifest from '@/assets/manifest-6.png';
import manifestA from '@/assets/manifest-7.png';


const ManifestBackLeft = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        className="h-[175px] w-[275px]"
        src={manifest}
        alt="Manifest Back Left"
        priority
        height={265}
        width={198}
      />
      <Image
        className="h-[275px] w-[275px] mt-8"
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