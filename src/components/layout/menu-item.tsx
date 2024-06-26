"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type MenuItemProps = {
  label: string;
  href: string;
  permissions: string[];
  icon?: string;
  children?: MenuItemProps[];
};

export default function MenuItem({
  label,
  href,
  permissions,
  icon,
  children,
}: MenuItemProps) {
  const pathname = usePathname();

  return (
    <section>
      {href && !children ? (
        <Link href={href}>
          <div
            className={`flex flex-grow gap-4 items-center px-4 py-2 hover:no-underline hover:bg-primary-500 hover:text-slate-300 transition-all rounded ${
              pathname === href ? "bg-primary-500" : ""
            }`}
          >
            <Icon icon={icon!} className="h-4 w-4" />
            {label}
          </div>
        </Link>
      ) : (
        <Accordion type="single" collapsible className="text-white">
          <AccordionItem
            value="item-1"
            className="border-b-0 text-white no-underline"
          >
            <AccordionTrigger
              className={`flex flex-grow gap-4 hover:no-underline hover:bg-primary-500 rounded items-center px-4 py-2 text-white justify-between hover:text-slate-300 ${
                pathname === href ? "bg-primary-500" : ""
              }`}
            >
              <div className="flex gap-4">
                <Icon icon={icon!} className="h-4 w-4" />
                {label}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              {children && (
                <div className="ml-4">
                  {children.map((child, index) => (
                    <MenuItem key={index} {...child} />
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </section>
  );
}
