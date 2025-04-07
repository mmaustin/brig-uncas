import { externalSources } from "@/constants/captiveArray";
import Link from "next/link";
import { FaCopyright } from "react-icons/fa";
import { GiSail } from "react-icons/gi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 xl:py-12 text-white bg-green-800/80 lg:h-full flex justify-center items-center mt-10 mb-0">
      <div className="w-[90%] flex justify-between items-center">
        <div className="w-full flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between items-center">
          {/* <div className="w-full flex flex-row justify-between items-center"> */}
          <div className="">
            <Link href={'/'} className="text-base text-yellow-300 font-extrabold font-serif uppercase text-white" >Brig Uncas</Link>
          </div>
          <div className="w-[200px] flex flex-row justify-center items-center gap-2 ">
            <FaCopyright className="rounded-lg w-4 h-4 text-white/70" />
            <p className="text-base text-white">{year}</p>
            <p className="text-base text-white">McCray Austin</p>
          </div>
          <nav className="flex flex-row justify-center items-end gap-2">
            <span className="text-xs font-serif text-yellow-300 uppercase">sources:</span>
            {
              externalSources.map((address, i) => {
                return (
                  <TooltipProvider key={i}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link key={i} href={address.path} target="_blank" >
                          <GiSail className="text-xl hover:text-yellow-300" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>{address.source}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })
            }
          </nav>
        </div>
      </div>
    </footer>
  )
}
export default Footer;