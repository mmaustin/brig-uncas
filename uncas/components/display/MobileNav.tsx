'use client'
import { links } from "@/constants/captiveArray";
//import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
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
      {/* <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="">Page Links</AccordionTrigger>
          <AccordionContent >
            <div className="w-full flex flex-wrap justify-between">
              {links.map((link, i) => {
                return <div key={link.name} className=" w-[135px]">
                  <Link key={i} href={`${link.path}`} className={`${link.path === pathName && "text-xs no-underline font-extrabold font-serif"} text-xs text font-light font-serif`}>{link.name}</Link>
                </div>
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Routes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {links.map((link, i) => {
            return <DropdownMenuItem key={link.name}>
              <Link key={i} href={`${link.path}`} className={`${link.path === pathName && "text-xs no-underline font-extrabold font-serif"} text-xs text font-light font-serif`}>{link.name}</Link>
            </DropdownMenuItem>
          })}
          {/* <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>

    </nav>
  )
}
export default MobileNav;