import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

const SearchBar = () => {
  return (
    <div className='pt-1 w-full'>
      <div className='relative mt-2 shadow-sm rounded-full overflow-hidden'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <SearchIcon className='text-[#397ea0]' />
        </div>
        <input
          type='text'
          name='price'
          id='price'
          className='block w-full rounded-full border-0 py-[14px] pl-12 pr-32 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Search by categories'
        />

        <div className='absolute inset-y-0 right-2 flex items-center'>
          <Button className='rounded-full overflow-hidden px-7 bg-[#397ea0] hover:bg-blue-950 text-white'>
            Search
          </Button>
        </div>
      </div>
  
    </div>
  );
};

export default SearchBar;
