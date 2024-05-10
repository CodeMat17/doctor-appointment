"use client";

import React from "react";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const globalMenu = [
  {
    title: "Doctors",
    services: [
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
    ],
  },
  {
    title: "Top Booked",
    services: [
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
    ],
  },
  {
    title: "Specialists",
    services: [
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
    ],
  },
  {
    title: "Symptoms",
    services: [
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
      {
        title: "teleHealth",
        slug: "tele health",
        desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
      },
    ],
  },
];

const GlobalRootMenu = () => {
  return (
    <div className='sticky top-20 z-40 py-1 flex items-center justify-center mx-auto bg-gray-400 dark:bg-gray-500 '>
      <NavigationMenu>
        <NavigationMenuList className='grid grid-cols-2 sm:grid-cols-4'>
          {/* ==================== */}
          {globalMenu.map((menu, i) => (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger className='bg-inherit'>
                {menu.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-full mx-auto gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                  {menu.services.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`/services${component.slug}`}>
                      {component.desc}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}

          {/* ============================ */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default GlobalRootMenu;
