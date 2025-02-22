'use client';

import { links } from "@/constants/captiveArray";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col justify-center items-center w-full rounded-full backdrop-blur-xl">
      <div className="flex flex-row justify-between items-center mb-8 w-full">
        <h1 className="">
          <Link href={'/'} className="text-2xl font-extrabold font-serif uppercase" >Brig Uncas</Link>
        </h1>
        <div className="">
          Links To Something
        </div>
      </div>
      <nav className="flex gap-8">
        {links.map((link, i) => {
          return (
            <Link key={i} href={link.path} className={`${link.path === pathName && " text-xs no-underline font-extrabold font-serif uppercase"} text-xs text font-light font-serif`}>{link.name}</Link>
          )
        })}
      </nav>
        {/* {pathName === '/human-cargo' && 
          <div className="h-8 w-full border">Number Name Age Feet Inches Colour</div>
        } */}
    </div>
  )
}
export default Navbar;