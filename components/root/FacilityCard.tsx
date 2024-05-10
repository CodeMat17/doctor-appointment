import { facilities } from "@/data";
import Image from "next/image";

const FacilityCard = () => {

  return (
    <div className='w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {facilities.map((facility, i) => (
        <div key={i}>
          <div className='rounded-xl border bg-white dark:bg-gray-800 dark:shadow-zinc-700 shadow-md hover:shadow-lg dark:bg-dark-2 p-7'>
            <div className='mb-3 flex h-[100px] w-[100px] items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-700'>
              <Image
                alt='facility icon'
                priority
                width={50}
                height={50}
                src={`/facility_icons${facility.icon}`}
              />
           
            </div>
            <h4 className='mb-1 text-xl font-semibold text-dark dark:text-white'>
              {facility.title}
            </h4>
            <p className='text-sm text-gray-500'>
              {facility.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacilityCard;
