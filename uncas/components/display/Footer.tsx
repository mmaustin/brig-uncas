import { externalSources } from "@/constants/captiveArray";
import Link from "next/link";
import { FaCopyright } from "react-icons/fa";
import { TbSlashes } from "react-icons/tb";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 xl:py-12 text-white bg-green-800/80 lg:h-full flex justify-center items-center mt-10 mb-0">
      <div className="w-[90%] flex justify-between items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          <div className="">
            <Link href={'/'} className="text-xs text-yellow-300 font-extrabold font-serif uppercase text-white" >Brig Uncas</Link>
          </div>
          <div className="w-[200px] flex flex-row justify-center items-center gap-2 mb-4 md:mb-0">
            <FaCopyright className="rounded-lg w-4 h-4 text-white/70" />
            <p className="text-xs text-white">{year}</p>
            <p className="text-xs text-white">McCray Austin</p>
          </div>
          <nav className="flex gap-2">
            {
              externalSources.map((address, i) => {
                return (
                  <Link key={i} href={address.path} target="_blank">
                    <TbSlashes />
                  </Link>
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