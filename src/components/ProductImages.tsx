'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/23859342/pexels-photo-23859342/free-photo-of-natureza-primavera-mola-flora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/11386688/pexels-photo-11386688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/31080449/pexels-photo-31080449/free-photo-of-lindas-flores-de-cerejeira-na-primavera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/2183863/pexels-photo-2183863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className='h-[500px] relative'>
        <Image
          src={images[index].url}
          alt=''
          fill
          sizes='50vw'
          className='object-cover rounded-md'
        />
      </div>
      <div className='flex justify-between gap-4 mt-8'>
        {images.map((img, i) => (
          <div
            className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=''
              fill
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
