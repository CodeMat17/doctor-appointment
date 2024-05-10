import Image from "next/image";

type SimpleImageProps = {
  href: string;
  Alt: string;
  imgSrc: string;
};

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}

      <section className='dark:bg-gray-600 py-4 '>
        <p className='text-center'>Trusted by</p>
        <div className='container mx-auto mt-3'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full px-4'>
              <div className='flex flex-wrap items-center justify-center'>
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg'
                />
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg'
                />
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg'
                />
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }: SimpleImageProps) => {
  return (
    <>
      <a
        href={href}
        className='mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]'>
        <Image priority src={imgSrc} alt={Alt} width={40} height={40} className='w-full h-10' />
      </a>
    </>
  );
};
