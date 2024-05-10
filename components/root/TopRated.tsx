import { TopRatedTabs } from "@/components/root/TopRatedTabs";



const TopRated = () => {
  return (
    <section className='pb-12 pt-20 px-4 bg-gray-100 dark:bg-gray-950 lg:pb-[90px] lg:pt-[120px]'>
      <div className=''>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-12 max-w-xl text-center lg:mb-20'>
              <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
                Top-rated Medical Facilities and Doctors.
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                Choose from our top rated
              </p>
            </div>
          </div>
        </div>

        {/* =============================== */}
        <div className='w-full max-w-6xl mx-auto flex justify-center'>
          <TopRatedTabs />
        </div>

        {/* =============================== */}
      </div>
    </section>
  );
};

export default TopRated;


