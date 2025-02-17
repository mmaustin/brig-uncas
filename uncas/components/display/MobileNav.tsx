'use client'
import { links } from "@/constants/captiveArray";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Link from "next/link";


const MobileNav = () => {
  return (
    <nav>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger >All</AccordionTrigger>
          <AccordionContent >
            {links.map((link, i) => {
              return <div key={link.name} className="">
                <Link key={i} href={`${link.path}`} className="mt-2 capitalize">{link.name}</Link><br />
              </div>
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  )
}
export default MobileNav;