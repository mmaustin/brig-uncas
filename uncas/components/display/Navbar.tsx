'use client';

import { links } from "@/constants/captiveArray";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="items-center mx-8 w-full backdrop-blur-xl">
      <div className="flex justify-between items-center mb-8 w-full h-full">
        <h1 className="">
          <Link href={'/'} className="text-2xl text-yellow-300 font-extrabold font-serif uppercase text-white" >Brig Uncas</Link>
        </h1>    
        <nav className="flex gap-6">
          {links.map((link, i) => {
            return (
              <Link key={i} href={link.path} className={`${link.path === pathName && " text-lg text-yellow-300 no-underline font-extrabold font-serif uppercase"} text-white text-sm font-light font-serif`}>{link.name}</Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
export default Navbar;