import Image from "next/image";
import DesktopMobileComponents from "./DesktopMobileComponents";
import DesktopNavLinks from "./DesktopNavLinks";

const NavBar = () => {
  return (
    <div className='p-4 sticky top-0 z-50 bg-[#397ea0]/20 backdrop-filter backdrop-blur-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='border p-1 rounded-full shadow-lg dark:shadow-md shadow-black dark:shadow-gray-400 bg-gray-100'>
          <Image
            priority
            alt='logo'
            width={40}
            height={40}
            src='/logo.jpeg'
            className='rounded-full overflow-hidden'
          />
        </div>
        <DesktopNavLinks />
        <DesktopMobileComponents />
      </div>
    </div>
  );
};

export default NavBar;
