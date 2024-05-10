"use client                                              ";

import { ShieldCheckIcon, UserCheckIcon } from "lucide-react";
import Image from "next/image";
import SearchBar from "../SearchBar";
import HeroTextTransition from "./HeroTextTransition";

const TEXTS = [
  "Anesthesiologist",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Gynaecologist",
  "Ophthalmologist",
  "Pediatrician",
  "Urologist",
];

const HeroSection = () => {
  return (
    <div className='px-4 py-12 sm:py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-evenly bg-[#d7e5ec] dark:bg-gray-950'>
      <div className='w-full md:max-w-sm lg:max-w-[50%] xl:max-w-[40%] space-y-3'>
        <h1 className='text-5xl xl:text-6xl font-semibold'>
          <span className='text-[#397ea0] '>Book</span> your{" "}
          <span className=' text-[#397ea0]'>favourite</span>{" "}
          <HeroTextTransition TEXTS={TEXTS} />
          now for a <span className='text-[#397ea0]'>session</span>
        </h1>

        <p className='text-lg text-gray-500 w-full'>
          Regular doctor visits are crucial for early detection and treatment of
          health issues, which can improve outcomes and potentially save lives.
          Your doctor is waiting.
        </p>
        <SearchBar />
        {/* <div className='w-full md:max-w-lg flex flex-col lg:flex-row items-center gap-4 lg:gap-0 sm:justify-between'>
          <Button variant='outline' className='text-red-500 bg-inherit'>
            <SirenIcon className='mr-3 text-red-500 animate-pulse' /> I need a
            doctor urgently!
          </Button>
          <div className='text-sm flex items-center gap-4 py-2 px-4 rounded-full bg-gray-300 dark:bg-gray-900 text-gray-500 dark:text-gray-400'>
            <section className='flex flex-col justify-center items-center'>
              <p className='font-semibold text-blue-500'>320</p>
              <p className='font-light'>Active Doctors</p>
            </section>
            <section className='flex flex-col justify-center items-center'>
              <p className='font-semibold text-blue-500'>1010</p>
              <p className='font-light'>Active Patients</p>
            </section>
          </div>
        </div> */}
        <p className='text-sm'>move this lin to top</p>
      </div>

      <div className='relative rounded-3xl aspect-square '>
        <Image
          priority
          width={500}
          height={500}
          alt='hero image'
          src='/dr_1.webp'
          className=' aspect-square'
        />
        <div className='absolute bottom-4 right-0 bg-blue-600 text-white px-3 py-2 rounded-md animate-bounce-slow flex items-center gap-3'>
          <div className='flex justify-center items-center w-12 h-12 bg-blue-900 rounded-full'>
            <UserCheckIcon className='text-white' />
          </div>
          Regular Check-up
        </div>

        <div className='absolute bottom-40 right-0 bg-gray-200 dark:bg-gray-700 px-3 py-4 rounded-xl animate-bounce-slower flex flex-col items-center gap-3 border shadow-lg shadow-blue-400'>
          <ShieldCheckIcon className='text-blue-500 text-3xl w-16 h-16' />

          <p>Health is wealth</p>
          <p className='bg-blue-600 text-white px-3 py-2 rounded-full'>
            Book Now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
