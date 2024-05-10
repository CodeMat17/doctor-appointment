"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hospital, PillIcon, StethoscopeIcon, SyringeIcon } from "lucide-react";
import {doctors} from '@/data'
import DoctorsCard from "./DoctorsCard";
import FacilityCard from "./FacilityCard";

export function TopRatedTabs() {
 

  return (
    <Tabs defaultValue='facilities' className='w-full'>
      <TabsList className='grid w-full grid-cols-3 '>
        <TabsTrigger value='facilities' className=''>
          Top Facilities
        </TabsTrigger>
        <TabsTrigger value='doctors'>Top Doctors</TabsTrigger>
        <TabsTrigger value='others'>Others</TabsTrigger>
      </TabsList>

      <TabsContent value='facilities'>
       <FacilityCard />
      </TabsContent>

      <TabsContent value='doctors'>
        <DoctorsCard doctors={doctors} />
      </TabsContent>
      <TabsContent value='others'>
        {/* <div className='w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, i) => (
            <div key={i}>
              <div className='rounded-xl border bg-white dark:bg-gray-800 p-10 dark:shadow-zinc-700 shadow-md hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10'>
                <div className='mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-700'>
                  {i === 0 && <StethoscopeIcon />}
                  {i === 1 && <SyringeIcon />}
                  {i === 2 && <PillIcon />}
                </div>
                <h4 className='mb-[14px] text-2xl font-semibold text-dark dark:text-white'>
                  {service.title}
                </h4>
                <p className='text-body-color dark:text-dark-6'>
                  {service.details}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        OTHERS coming soon
      </TabsContent>
    </Tabs>
  );
}
