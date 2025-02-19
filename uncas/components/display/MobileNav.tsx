'use client'
import { links } from "@/constants/captiveArray";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {

  const pathName = usePathname();

  return (
    <nav className="h-auto w-[275px]">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="">Page Links</AccordionTrigger>
          <AccordionContent >
            <div className="w-full flex flex-wrap justify-between">
              {links.map((link, i) => {
                return <div key={link.name} className=" w-[135px]">
                  <Link key={i} href={`${link.path}`} className={`${link.path === pathName && " text-red-500/60 text-xs no-underline font-light"} mt-2 text-xs`}>{link.name}</Link>
                </div>
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  )
}
export default MobileNav;