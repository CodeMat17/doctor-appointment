"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { HospitalIcon } from "lucide-react";

type DoctorsProps = {
  image: string;
  name: string;
  hospital: string;
}[];

const DoctorsCard = ({ doctors }: { doctors: DoctorsProps }) => {
  // console.log(dr)

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors: DoctorsProps = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className='text-3xl text-center mt-8'>Your Favourite Doctors</h1>
        <div className='max-w-md mx-auto mt-6'>
          <Input
            type='search'
            onChange={handleSearch}
            placeholder='Find doctor by name or hospital'
            className='rounded-full'
          />
        </div>
        <div className='mt-12'>
          {filteredDoctors && filteredDoctors.length < 1 ? (
            <div className='text-center text-red-500'>
              Not found. Check your spelling and try again
            </div>
          ) : (
            <div className='w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredDoctors.map((dr, i) => (
                <div key={i}>
                  <div className='rounded-xl border bg-white dark:bg-gray-800 dark:shadow-zinc-700 shadow-md hover:shadow-lg dark:bg-dark-2 p-7'>
                   
                    <Image
                      alt='doctors profile'
                      priority
                      width={70}
                      height={70}
                      src={dr.image}
                      className='rounded-2xl mb-3'
                    />

                    <h4 className='mb-0.5 text-2xl font-semibold text-dark dark:text-white'>
                      {dr.name}
                    </h4>
                    <p className='text-gray-500 flex gap-3'>
                    <HospitalIcon className="w-5 h-5" />  {dr.hospital}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
