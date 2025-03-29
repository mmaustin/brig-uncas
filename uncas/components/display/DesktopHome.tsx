import Image from "next/image";
import houseOne from '@/public/house-1.png';
import houseTwo from '@/public/house-2.png';
import houseThree from '@/public/house-3.png';


const DesktopHome = () => {
  return (
    <div className="hidden sm:flex w-full h-full mt-0 flex-col justify-center items-center text-lg font-serif gap-6">
      <div className="container flex flex-row justify-around items-center">
        <Image
          className="h-[250px] w-[180px]"
          src={houseOne}
          alt="Manifest Back Left"
          priority
          height={265}
          width={198}
        />
        <div className="w-[50%] font-sans italic font-semibold sm:text-base lg:text-lg">
          <span className="not-italic font-normal">1315 Duke Street, Alexandria, Virginia.</span>  The offices of Franklin & Armfield were once located in this building.  The building was purchased by the city of Alexandria in 2020.  Two years later, the building was reopened as Freedom House Museum.
        </div>
      </div>
      <div className="container flex flex-row justify-around items-center">
        <div className="w-[50%] font-sans italic font-semibold sm:text-base lg:text-lg">
          <span className="not-italic font-normal">Union soldiers at 1315 Duke Street ≈ 1862.</span>  Price, Birch, and Company, another domestic slave trading firm, operated out of the building once used by Franklin & Armfield.  Armfield, upon Franklin&apos;s retirement, sent the firm&apos;s last shipment of slaves to New Orleans in 1836.
        </div>
        <Image
          className="h-[200px] w-[275px]"
          src={houseThree}
          alt="Manifest Back Left"
          priority
          height={265}
          width={198}
        />
      </div>
      <div className="container flex flex-row justify-around items-center">
        <Image
          className="h-[200px] w-[275px]"
          src={houseTwo}
          alt="Manifest Back Left"
          priority
          height={265}
          width={198}
        />
        <div className="w-[50%] font-sans italic font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore qui doloremque cumque iste sed, ducimus placeat blanditiis necessitatibus quod exercitationem a nesciunt, odit laborum! Reprehenderit repudiandae consequatur sint beatae laudantium?
        </div>
      </div>
    </div>
  )
}
export default DesktopHome;