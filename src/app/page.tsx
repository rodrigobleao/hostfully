'use client';

import AccommodationCard from '@/components/AccommodationCard';
import Link from 'next/link';
import { useAccommodationStore } from '@/store';
import MenuComponent, { MenuOptions } from '@/components/Menu';

function Home() {
  const { accommodations } = useAccommodationStore();

  const maxWidth =
    accommodations.length >= 4 ? 'max-w-[1920px]' : 'max-w-[1720px]';

  return (
    <main className="flex flex-col justify-center">
      <MenuComponent active={MenuOptions['/']} />
      <div
        className={`${maxWidth} mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8 gap-3`}
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
