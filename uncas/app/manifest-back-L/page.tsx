import Image from "next/image"
import manifest from '@/assets/manifest-6.png';
import manifestA from '@/assets/manifest-7.png';


const ManifestBackLeft = () => {
  return (
    <div className="h-[500px] w-full flex justify-center items-center gap-8 border border-blue-700">
      <div className="container justify-center items-center grid md:grid-cols-2 gap-8 border border-green-600">
        {/* <div className="border w-10">words for words</div>
        <div className="border w-10">words for words</div> */}
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
      {/* <div className="grid md:grid-cols-2 container justify-center items-center gap-8 border border-red-500"> */}
      {/* </div> */}
    </div>
  )
}
export default ManifestBackLeft;