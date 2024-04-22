'use client';

import AccommodationCard from '@/components/AccommodationCard';
import Link from 'next/link';
import { useAccommodationStore } from '@/store';
import { Typography } from '@mui/material';

function Home() {
  const { accommodations } = useAccommodationStore();

  const maxWidth =
    accommodations.length >= 4 ? 'max-w-[1920px]' : 'max-w-[1720px]';

  return (
    <main>
      <div className="bg-gray-300 py-4 mb-8 shadow-lg text-white">
        <div className="container mx-auto flex justify-center">
          <Link href={`/`}>
            <Typography className="px-4 cursor-pointer text-blue-600 hover:text-blue-500">
              Home
            </Typography>
          </Link>
          <Link href={`/my-reservations`}>
            <Typography className="px-4 cursor-pointer text-black hover:text-gray-700">
              My reservations
            </Typography>
          </Link>
        </div>
      </div>
      <div
        className={`${maxWidth} mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-24 gap-4 px-24`}
      >
        {accommodations.map((accommodation) => (
          <div key={accommodation.id}>
            <Link href={`/book/${accommodation.id}`} passHref>
              <AccommodationCard accommodation={accommodation} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
