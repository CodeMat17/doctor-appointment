import { CalendarCheck, CalendarCheckIcon, CalendarDaysIcon, Check, Search, SquareCheckBigIcon } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className='py-20 px-4 bg-gray-100 dark:bg-slate-800'>
      <div className='max-w-7xl mx-auto'>
        <p className='text-center'>Howit works</p>
        <p className='text-3xl text-center font-semibold'>
          4 easy steps to get your solution
        </p>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className=' flex gap-4'>
            <div className='relative flex items-center justify-center  w-[120px]  aspect-square bg-slate-300 dark:bg-slate-900 flex-shrink-0 rounded-2xl shadow-md shadow-blue-400'>
              <Search className='text-blue-500 w-10 h-10' />
              <div className='absolute -top-4 left-0 flex items-center justify-center w-14 h-14 text-blue-600 bg-gray-100 dark:bg-slate-800 rounded-full'>
                1
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>
                Search for your favourite doctor
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                deleniti, maiores alias eveniet molestiae quae illo aut
                reprehenderit beatae cupiditate ducimus! Voluptatem accusamus ab
                vitae.
              </p>
            </div>
          </div>

          <div className='border flex gap-4'>
            <div className='relative flex items-center justify-center  w-[120px]  aspect-square bg-slate-300 dark:bg-slate-900 flex-shrink-0 rounded-2xl shadow-md shadow-blue-400'>
              <CalendarDaysIcon className='text-blue-500 w-10 h-10' />
              <div className='absolute -top-4 left-0 flex items-center justify-center w-14 h-14 text-blue-600 bg-gray-100 dark:bg-slate-800 rounded-full'>
                2
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>
                Schedule Appointment
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                deleniti, maiores alias eveniet molestiae quae illo aut
                reprehenderit beatae cupiditate ducimus! Voluptatem accusamus ab
                vitae.
              </p>
            </div>
          </div>

          <div className='border flex gap-4'>
            <div className='relative flex items-center justify-center  w-[120px]  aspect-square bg-slate-300 dark:bg-slate-900 flex-shrink-0 rounded-2xl shadow-md shadow-blue-400'>
              <CalendarCheck className='text-blue-500 w-10 h-10' />
              <div className='absolute -top-4 left-0 flex items-center justify-center w-14 h-14 text-blue-600 bg-gray-100 dark:bg-slate-800 rounded-full'>
                3
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>
                Confirm doctor&apos;s profile
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                deleniti, maiores alias eveniet molestiae quae illo aut
                reprehenderit beatae cupiditate ducimus! Voluptatem accusamus ab
                vitae.
              </p>
            </div>
          </div>

          <div className='border flex gap-4'>
            <div className='relative flex items-center justify-center  w-[120px]  aspect-square bg-slate-300 dark:bg-slate-900 flex-shrink-0 rounded-2xl shadow-md shadow-blue-400'>
              <SquareCheckBigIcon className='text-blue-500 w-10 h-10' />
              <div className='absolute -top-4 left-0 flex items-center justify-center w-14 h-14 text-blue-600 bg-gray-100 dark:bg-slate-800 rounded-full'>
                4
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Get Your Solution</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                deleniti, maiores alias eveniet molestiae quae illo aut
                reprehenderit beatae cupiditate ducimus! Voluptatem accusamus ab
                vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
