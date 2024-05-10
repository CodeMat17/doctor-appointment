"use client";

import { useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import { MobileDrawer } from "./MobileDrawer";

const DesktopMobileComponents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-center gap-4'>
      <ThemeToggle />
      <div className='flex items-center gap-4'>
        <div className='hidden md:block '>
          <Button variant='outline' className='rounded-full shadow-md'>
            Login
          </Button>
        </div>
        <div className='md:hidden border'>
          {/* <Popover>
            <PopoverTrigger
              onClick={toggleMenu}
              className={`transition-all transform duration-300 ${
                isOpen ? " rotate-180" : ""
              }`}>
              {isOpen ? (
                <X className='w-7 h-7 text-red-600' />
              ) : (
                <AlignRight className='w-7 h-7' />
              )}
            </PopoverTrigger>
            <PopoverContent className='mr-4'>
              Place content for the popover here.
            </PopoverContent>
          </Popover> */}
          <MobileDrawer />
        </div>
      </div>
    </div>
  );
};

export default DesktopMobileComponents;
