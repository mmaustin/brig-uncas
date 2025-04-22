import { externalSources } from "@/constants/captiveArray";
import Link from "next/link";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 xl:py-12 text-white bg-green-800/80 lg:h-full flex justify-center items-center mt-10 mb-0">
      <div className="w-[90%] flex justify-between items-center">
        <div className="w-full flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between items-center">
          <div className="w-[200px] text-center">
            <Link href={'/'} className="text-base text-yellow-300 font-extrabold font-serif uppercase text-white" >Brig Uncas</Link>
          </div>
          <div className="w-[200px] flex flex-row justify-center items-center gap-2">
            <FaCopyright className="rounded-lg w-4 h-4 text-white/70" />
            <p className="text-sm md:text-base text-white">{year}</p>
            <p className="text-sm md:text-base text-white">McCray Austin</p>
          </div>
          <nav className="flex flex-row justify-center items-center sm:flex-col gap-3 sm:gap-1 w-auto sm:w-[200px]">
            {
              externalSources.map((address, i) => {
                return (
                  <figure key={i} className="m">
                    <Link key={i} href={address.path} target="_blank" >
                      <figcaption className="text-[10px] text-yellow-300">{address.source}</figcaption>
                    </Link>
                  </figure>
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