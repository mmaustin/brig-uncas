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
    <nav className="border">
      <DropdownMenu>
        <DropdownMenuTrigger >Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Routes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {links.map((link, i) => {
            return <DropdownMenuItem key={link.name} asChild>
              <Link key={i} href={`${link.path}`} className={`${link.path === pathName && "text-xs no-underline font-extrabold font-serif"} text-xs text font-light font-serif`}>{link.name}</Link>
            </DropdownMenuItem>
          })}
        </DropdownMenuContent>
      </DropdownMenu>

    </nav>
  )
}
export default MobileNav;