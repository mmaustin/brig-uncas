//import Image from "next/image";
//import manifest from '@/assets/manifest-1.png';
//import { Accordion } from "@/components/ui/accordion";


export default function Home() {
  return (
    <section className="h-screen w-full my-8 flex justify-center items-center">
      <div className="bg-[url(@/assets/manifest-1.png)] bg-cover bg-center h-full w-full m-8">
        
        {/* <Image
          className="object-cover"
          src={manifest}
          alt="manifest page 1"
        /> */}
      </div>
    </section>
  );
};

//  <Image
//           className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
//           src={profileForm}
//           alt="create author profile form"
//           priority
//           height={265}
//           width={198}
//         />