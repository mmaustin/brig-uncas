'use client'
import { links } from "@/constants/captiveArray";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const MobileNav = () => {

  const pathName = usePathname();

  return (
    <nav className="w-full flex justify-around items center">
      <h1 className="">
        <Link href={'/'} className="text-lg font-extrabold font-serif uppercase" >Brig Uncas</Link>
      </h1>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-xs font-extrabold font-serif">Navigate</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-sm font-serif">Pages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {links.map((link, i) => {
              return <DropdownMenuItem key={link.name} asChild>
                <Link key={i} href={`${link.path}`} className={`${link.path === pathName && " no-underline  font-serif bg-slate-200"} text-xs font-light font-serif`}>{link.name}</Link>
              </DropdownMenuItem>
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
export default MobileNav;