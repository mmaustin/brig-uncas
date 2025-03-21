import { FaCopyright } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 xl:py-12 text-white bg-green-800/80 lg:h-full flex justify-center items-center mt-10 mb-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0 text-white flex flex-row justify-center items-center gap-6">
            <p className="hover:text-red-700/60"><a href="mailto:mccrayaustin@ymail.com"><FaEnvelope /></a></p>
            <p className="hover:text-red-700/60"><a href="tel:19736340148"><FaPhoneAlt /></a></p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 mb-4 md:mb-0">
            <FaCopyright className="rounded-lg w-4 h-4 text-white/70" />
            <p className="text-xs text-white">{year}</p>
            <p className="text-xs text-white">McCray Austin</p>
          </div>
          <div className="">
            Something Goes Here
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;