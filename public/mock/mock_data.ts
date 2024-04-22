export type AccommodationMockData = {
  accommodationId: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  unavailableDates: {
    start: string;
    end: string;
  }[];
};

export const mock: AccommodationMockData[] = [
  {
    accommodationId: '5512ed7c-2484-4fb3-90e9-9ad08d9314fe',
    title: 'Beachfront Villa with Pool',
    description:
      'Indulge in luxury in our beachfront villa. With its private pool, stunning ocean views, and spacious interiors, this luxurious retreat is the perfect destination for a tropical getaway.',
    price: 4504,
    rating: 50,
    unavailableDates: [
      {
        start: '2024-04-25',
        end: '2024-04-28',
      },
      {
        start: '2024-04-30',
        end: '2024-05-07',
      },
      {
        start: '2024-05-18',
        end: '2024-05-22',
      },
      {
        start: '2024-06-02',
        end: '2024-06-09',
      },
      {
        start: '2024-06-11',
        end: '2024-06-19',
      },
      {
        start: '2024-06-29',
        end: '2024-07-02',
      },
      {
        start: '2024-07-05',
        end: '2024-07-06',
      },
      {
        start: '2024-07-09',
        end: '2024-07-12',
      },
      {
        start: '2024-07-24',
        end: '2024-08-01',
      },
      {
        start: '2024-08-09',
        end: '2024-08-15',
      },
      {
        start: '2024-08-25',
        end: '2024-09-01',
      },
    ],
  },
  {
    accommodationId: '6ee95fcc-935d-4cca-885f-f90a5d44ff14',
    title: 'Tropical Bungalow with Ocean Views',
    description:
      'Escape to our tropical bungalow and immerse yourself in paradise. With its ocean views, lush surroundings, and serene atmosphere, this cozy retreat offers the ultimate tropical experience.',
    price: 8500,
    rating: 41,
    unavailableDates: [
      {
        start: '2024-05-01',
        end: '2024-05-06',
      },
      {
        start: '2024-05-15',
        end: '2024-05-21',
      },
      {
        start: '2024-05-29',
        end: '2024-05-30',
      },
      {
        start: '2024-06-09',
        end: '2024-06-12',
      },
      {
        start: '2024-06-14',
        end: '2024-06-17',
      },
      {
        start: '2024-06-25',
        end: '2024-07-06',
      },
      {
        start: '2024-07-16',
        end: '2024-07-17',
      },
      {
        start: '2024-07-22',
        end: '2024-07-26',
      },
      {
        start: '2024-08-01',
        end: '2024-08-08',
      },
      {
        start: '2024-08-17',
        end: '2024-08-18',
      },
      {
        start: '2024-08-26',
        end: '2024-09-05',
      },
      {
        start: '2024-09-16',
        end: '2024-09-25',
      },
      {
        start: '2024-10-01',
        end: '2024-10-05',
      },
      {
        start: '2024-10-08',
        end: '2024-10-19',
      },
      {
        start: '2024-10-28',
        end: '2024-11-07',
      },
      {
        start: '2024-11-09',
        end: '2024-11-15',
      },
      {
        start: '2024-11-17',
        end: '2024-11-27',
      },
      {
        start: '2024-12-01',
        end: '2024-12-03',
      },
      {
        start: '2024-12-13',
        end: '2024-12-22',
      },
      {
        start: '2024-12-29',
        end: '2025-01-05',
      },
    ],
  },
  {
    accommodationId: 'b3205b31-d659-4f4a-b86b-adef363dc38d',
    title: 'Brazilian Beach House with Private Beach Access',
    description:
      'Experience the beauty of Brazil in our beach house. With its private beach access, tropical gardens, and Brazilian-inspired decor, this charming retreat offers the perfect blend of luxury and relaxation.',
    price: 3803,
    rating: 45,
    unavailableDates: [
      {
        start: '2024-04-27',
        end: '2024-05-08',
      },
      {
        start: '2024-05-14',
        end: '2024-05-18',
      },
      {
        start: '2024-05-27',
        end: '2024-06-02',
      },
      {
        start: '2024-06-07',
        end: '2024-06-16',
      },
      {
        start: '2024-06-18',
        end: '2024-06-22',
      },
      {
        start: '2024-06-28',
        end: '2024-07-09',
      },
      {
        start: '2024-07-13',
        end: '2024-07-21',
      },
      {
        start: '2024-07-29',
        end: '2024-07-31',
      },
      {
        start: '2024-08-10',
        end: '2024-08-14',
      },
      {
        start: '2024-08-25',
        end: '2024-08-28',
      },
      {
        start: '2024-09-03',
        end: '2024-09-11',
      },
      {
        start: '2024-09-15',
        end: '2024-09-16',
      },
      {
        start: '2024-09-26',
        end: '2024-09-28',
      },
      {
        start: '2024-10-03',
        end: '2024-10-06',
      },
      {
        start: '2024-10-15',
        end: '2024-10-17',
      },
      {
        start: '2024-10-20',
        end: '2024-10-26',
      },
      {
        start: '2024-10-29',
        end: '2024-10-30',
      },
      {
        start: '2024-11-04',
        end: '2024-11-11',
      },
      {
        start: '2024-11-19',
        end: '2024-11-30',
      },
      {
        start: '2024-12-12',
        end: '2024-12-18',
      },
      {
        start: '2024-12-29',
        end: '2025-01-01',
      },
    ],
  },
  {
    accommodationId: 'e50fa919-c990-47dd-b5df-84be54a4d55c',
    title: 'Seaside Retreat with Stunning Views',
    description:
      'Relax and recharge in our seaside retreat. With its stunning ocean views, serene atmosphere, and modern amenities, this peaceful getaway is the perfect place to escape the hustle and bustle of everyday life.',
    price: 8112,
    rating: 42,
    unavailableDates: [
      {
        start: '2024-05-01',
        end: '2024-05-09',
      },
      {
        start: '2024-05-21',
        end: '2024-05-25',
      },
      {
        start: '2024-05-30',
        end: '2024-06-05',
      },
      {
        start: '2024-06-17',
        end: '2024-06-27',
      },
      {
        start: '2024-07-06',
        end: '2024-07-11',
      },
      {
        start: '2024-07-20',
        end: '2024-07-24',
      },
      {
        start: '2024-08-01',
        end: '2024-08-12',
      },
      {
        start: '2024-08-17',
        end: '2024-08-20',
      },
      {
        start: '2024-08-24',
        end: '2024-08-29',
      },
      {
        start: '2024-09-04',
        end: '2024-09-05',
      },
      {
        start: '2024-09-08',
        end: '2024-09-14',
      },
      {
        start: '2024-09-16',
        end: '2024-09-23',
      },
      {
        start: '2024-10-05',
        end: '2024-10-13',
      },
      {
        start: '2024-10-16',
        end: '2024-10-23',
      },
      {
        start: '2024-11-01',
        end: '2024-11-11',
      },
      {
        start: '2024-11-22',
        end: '2024-11-30',
      },
      {
        start: '2024-12-12',
        end: '2024-12-13',
      },
      {
        start: '2024-12-20',
        end: '2024-12-23',
      },
      {
        start: '2025-01-04',
        end: '2025-01-05',
      },
    ],
  },
  {
    accommodationId: 'de7cf5c9-8263-4e7a-97e6-0f28bca6e17b',
    title: 'Luxury Beachfront Apartment with Panoramic Ocean Views',
    description:
      'Indulge in luxury in our beachfront apartment. With its panoramic ocean views, luxurious amenities, and stylish decor, this modern retreat offers the ultimate beachside getaway.',
    price: 5561,
    rating: 42,
    unavailableDates: [
      {
        start: '2024-04-25',
        end: '2024-04-26',
      },
      {
        start: '2024-05-03',
        end: '2024-05-09',
      },
      {
        start: '2024-05-18',
        end: '2024-05-29',
      },
      {
        start: '2024-06-09',
        end: '2024-06-13',
      },
      {
        start: '2024-06-18',
        end: '2024-06-21',
      },
      {
        start: '2024-06-26',
        end: '2024-07-06',
      },
      {
        start: '2024-07-17',
        end: '2024-07-22',
      },
      {
        start: '2024-07-26',
        end: '2024-08-01',
      },
      {
        start: '2024-08-03',
        end: '2024-08-10',
      },
      {
        start: '2024-08-14',
        end: '2024-08-25',
      },
      {
        start: '2024-09-06',
        end: '2024-09-16',
      },
      {
        start: '2024-09-26',
        end: '2024-09-28',
      },
      {
        start: '2024-10-06',
        end: '2024-10-07',
      },
      {
        start: '2024-10-10',
        end: '2024-10-11',
      },
      {
        start: '2024-10-22',
        end: '2024-11-02',
      },
      {
        start: '2024-11-08',
        end: '2024-11-19',
      },
      {
        start: '2024-11-25',
        end: '2024-12-06',
      },
      {
        start: '2024-12-17',
        end: '2024-12-22',
      },
      {
        start: '2024-12-29',
        end: '2025-01-04',
      },
    ],
  },
  {
    accommodationId: 'e11964c6-b7f7-4d64-bdd7-76b8eda2fd9a',
    title: 'Brazilian Paradise Villa with Infinity Pool',
    description:
      'Escape to paradise in our Brazilian villa. With its infinity pool, lush tropical gardens, and breathtaking ocean views, this luxurious retreat is the perfect destination for a dream vacation.',
    price: 5401,
    rating: 39,
    unavailableDates: [
      {
        start: '2024-04-22',
        end: '2024-04-27',
      },
      {
        start: '2024-05-01',
        end: '2024-05-05',
      },
      {
        start: '2024-05-17',
        end: '2024-05-28',
      },
      {
        start: '2024-05-31',
        end: '2024-06-09',
      },
      {
        start: '2024-06-18',
        end: '2024-06-19',
      },
      {
        start: '2024-06-22',
        end: '2024-06-29',
      },
      {
        start: '2024-07-08',
        end: '2024-07-19',
      },
      {
        start: '2024-07-26',
        end: '2024-07-28',
      },
      {
        start: '2024-08-01',
        end: '2024-08-11',
      },
      {
        start: '2024-08-20',
        end: '2024-08-22',
      },
      {
        start: '2024-09-03',
        end: '2024-09-10',
      },
      {
        start: '2024-09-17',
        end: '2024-09-19',
      },
      {
        start: '2024-09-27',
        end: '2024-09-30',
      },
      {
        start: '2024-10-09',
        end: '2024-10-16',
      },
      {
        start: '2024-10-28',
        end: '2024-11-07',
      },
      {
        start: '2024-11-19',
        end: '2024-11-25',
      },
      {
        start: '2024-12-01',
        end: '2024-12-05',
      },
      {
        start: '2024-12-10',
        end: '2024-12-20',
      },
      {
        start: '2024-12-28',
        end: '2025-01-03',
      },
    ],
  },
  {
    accommodationId: '06166ae2-2965-42b6-83c7-867415889485',
    title: 'Beachfront Chalet with Private Beach Access',
    description:
      'Experience beachfront luxury in our charming chalet. With its private beach access, cozy interiors, and stunning ocean views, this seaside retreat offers the perfect blend of comfort and relaxation.',
    price: 5075,
    rating: 36,
    unavailableDates: [
      {
        start: '2024-04-22',
        end: '2024-04-30',
      },
      {
        start: '2024-05-10',
        end: '2024-05-17',
      },
      {
        start: '2024-05-25',
        end: '2024-06-04',
      },
      {
        start: '2024-06-16',
        end: '2024-06-22',
      },
      {
        start: '2024-06-26',
        end: '2024-06-28',
      },
      {
        start: '2024-07-06',
        end: '2024-07-14',
      },
      {
        start: '2024-07-23',
        end: '2024-07-24',
      },
      {
        start: '2024-07-28',
        end: '2024-08-07',
      },
      {
        start: '2024-08-17',
        end: '2024-08-28',
      },
      {
        start: '2024-08-31',
        end: '2024-09-06',
      },
      {
        start: '2024-09-17',
        end: '2024-09-19',
      },
      {
        start: '2024-09-23',
        end: '2024-09-30',
      },
      {
        start: '2024-10-12',
        end: '2024-10-15',
      },
      {
        start: '2024-10-19',
        end: '2024-10-20',
      },
      {
        start: '2024-11-01',
        end: '2024-11-11',
      },
      {
        start: '2024-11-20',
        end: '2024-11-26',
      },
      {
        start: '2024-12-06',
        end: '2024-12-13',
      },
      {
        start: '2024-12-20',
        end: '2024-12-24',
      },
      {
        start: '2024-12-29',
        end: '2025-01-09',
      },
    ],
  },
  {
    accommodationId: '420140b6-27fb-4f09-a742-5c615933955a',
    title: 'Tropical Oasis with Ocean Views',
    description:
      'Discover your own tropical oasis in our beachfront retreat. With its ocean views, lush gardens, and serene atmosphere, this charming getaway is the perfect place to unwind and recharge.',
    price: 7513,
    rating: 48,
    unavailableDates: [
      {
        start: '2024-04-24',
        end: '2024-04-26',
      },
      {
        start: '2024-04-29',
        end: '2024-05-09',
      },
      {
        start: '2024-05-13',
        end: '2024-05-17',
      },
      {
        start: '2024-05-24',
        end: '2024-05-27',
      },
      {
        start: '2024-06-07',
        end: '2024-06-10',
      },
      {
        start: '2024-06-15',
        end: '2024-06-23',
      },
      {
        start: '2024-07-03',
        end: '2024-07-06',
      },
      {
        start: '2024-07-18',
        end: '2024-07-20',
      },
      {
        start: '2024-07-22',
        end: '2024-07-31',
      },
      {
        start: '2024-08-11',
        end: '2024-08-18',
      },
      {
        start: '2024-08-28',
        end: '2024-09-08',
      },
      {
        start: '2024-09-17',
        end: '2024-09-19',
      },
      {
        start: '2024-09-22',
        end: '2024-09-23',
      },
      {
        start: '2024-09-28',
        end: '2024-10-01',
      },
      {
        start: '2024-10-04',
        end: '2024-10-07',
      },
      {
        start: '2024-10-12',
        end: '2024-10-15',
      },
      {
        start: '2024-10-18',
        end: '2024-10-25',
      },
      {
        start: '2024-10-29',
        end: '2024-11-08',
      },
      {
        start: '2024-11-13',
        end: '2024-11-15',
      },
    ],
  },
  {
    accommodationId: 'f2f219c3-0f75-40fe-aee4-f989b8f62d76',
    title: 'Brazilian Beachfront Resort',
    description:
      'Experience luxury and relaxation in our Brazilian beachfront resort. With its luxurious amenities, stunning ocean views, and tropical surroundings, this resort offers the ultimate beachside escape.',
    price: 9505,
    rating: 50,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-09',
      },
      {
        start: '2024-05-20',
        end: '2024-05-28',
      },
      {
        start: '2024-06-09',
        end: '2024-06-19',
      },
      {
        start: '2024-06-28',
        end: '2024-07-02',
      },
      {
        start: '2024-07-09',
        end: '2024-07-19',
      },
      {
        start: '2024-07-26',
        end: '2024-08-04',
      },
      {
        start: '2024-08-11',
        end: '2024-08-18',
      },
      {
        start: '2024-08-24',
        end: '2024-08-27',
      },
      {
        start: '2024-09-02',
        end: '2024-09-10',
      },
      {
        start: '2024-09-22',
        end: '2024-10-01',
      },
      {
        start: '2024-10-05',
        end: '2024-10-13',
      },
      {
        start: '2024-10-18',
        end: '2024-10-27',
      },
      {
        start: '2024-11-07',
        end: '2024-11-17',
      },
      {
        start: '2024-11-21',
        end: '2024-11-29',
      },
      {
        start: '2024-12-03',
        end: '2024-12-04',
      },
      {
        start: '2024-12-06',
        end: '2024-12-13',
      },
      {
        start: '2024-12-16',
        end: '2024-12-24',
      },
    ],
  },
  {
    accommodationId: '6e46742c-7828-473e-9821-d61015d2f71b',
    title: 'Seaside Villa with Private Beach',
    description:
      'Escape to our seaside villa and experience luxury living at its finest. With its private beach, infinity pool, and spacious interiors, this stunning villa offers the ultimate beachside retreat.',
    price: 5865,
    rating: 37,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-08',
      },
      {
        start: '2024-05-19',
        end: '2024-05-22',
      },
      {
        start: '2024-05-25',
        end: '2024-06-05',
      },
      {
        start: '2024-06-07',
        end: '2024-06-13',
      },
      {
        start: '2024-06-25',
        end: '2024-07-04',
      },
      {
        start: '2024-07-14',
        end: '2024-07-21',
      },
      {
        start: '2024-07-26',
        end: '2024-07-30',
      },
      {
        start: '2024-08-04',
        end: '2024-08-10',
      },
      {
        start: '2024-08-13',
        end: '2024-08-22',
      },
      {
        start: '2024-08-27',
        end: '2024-09-01',
      },
      {
        start: '2024-09-07',
        end: '2024-09-15',
      },
      {
        start: '2024-09-20',
        end: '2024-09-23',
      },
      {
        start: '2024-10-03',
        end: '2024-10-12',
      },
      {
        start: '2024-10-19',
        end: '2024-10-21',
      },
      {
        start: '2024-10-28',
        end: '2024-11-04',
      },
      {
        start: '2024-11-13',
        end: '2024-11-22',
      },
      {
        start: '2024-12-02',
        end: '2024-12-11',
      },
      {
        start: '2024-12-21',
        end: '2024-12-25',
      },
      {
        start: '2025-01-01',
        end: '2025-01-05',
      },
    ],
  },
  {
    accommodationId: 'e098edbe-d5cf-4d71-b5de-e2a447331936',
    title: 'Luxury Beachfront Retreat with Infinity Pool',
    description:
      'Indulge in luxury in our beachfront retreat. With its infinity pool, panoramic ocean views, and elegant decor, this luxurious retreat offers the ultimate beachside escape.',
    price: 5208,
    rating: 44,
    unavailableDates: [
      {
        start: '2024-04-27',
        end: '2024-05-05',
      },
      {
        start: '2024-05-12',
        end: '2024-05-13',
      },
      {
        start: '2024-05-17',
        end: '2024-05-25',
      },
      {
        start: '2024-06-06',
        end: '2024-06-17',
      },
      {
        start: '2024-06-27',
        end: '2024-07-03',
      },
      {
        start: '2024-07-15',
        end: '2024-07-18',
      },
      {
        start: '2024-07-25',
        end: '2024-08-05',
      },
      {
        start: '2024-08-12',
        end: '2024-08-16',
      },
      {
        start: '2024-08-27',
        end: '2024-09-07',
      },
      {
        start: '2024-09-16',
        end: '2024-09-25',
      },
      {
        start: '2024-10-02',
        end: '2024-10-09',
      },
      {
        start: '2024-10-11',
        end: '2024-10-13',
      },
      {
        start: '2024-10-18',
        end: '2024-10-25',
      },
      {
        start: '2024-11-06',
        end: '2024-11-10',
      },
      {
        start: '2024-11-22',
        end: '2024-11-25',
      },
      {
        start: '2024-11-29',
        end: '2024-12-04',
      },
      {
        start: '2024-12-13',
        end: '2024-12-19',
      },
      {
        start: '2024-12-25',
        end: '2025-01-04',
      },
    ],
  },
  {
    accommodationId: 'f97749af-a44e-4e8d-9ca5-a06a0d5c77aa',
    title: 'Brazilian Beach House with Ocean Views',
    description:
      'Escape to our Brazilian beach house and experience the beauty of oceanfront living. With its ocean views, private beach access, and tropical surroundings, this charming retreat offers the perfect beachside getaway.',
    price: 9254,
    rating: 38,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-04-29',
      },
      {
        start: '2024-05-11',
        end: '2024-05-16',
      },
      {
        start: '2024-05-20',
        end: '2024-05-21',
      },
      {
        start: '2024-05-30',
        end: '2024-06-10',
      },
      {
        start: '2024-06-14',
        end: '2024-06-20',
      },
      {
        start: '2024-06-25',
        end: '2024-06-28',
      },
      {
        start: '2024-07-02',
        end: '2024-07-12',
      },
      {
        start: '2024-07-24',
        end: '2024-07-28',
      },
      {
        start: '2024-08-07',
        end: '2024-08-16',
      },
      {
        start: '2024-08-21',
        end: '2024-08-31',
      },
      {
        start: '2024-09-03',
        end: '2024-09-12',
      },
      {
        start: '2024-09-15',
        end: '2024-09-22',
      },
      {
        start: '2024-09-28',
        end: '2024-10-03',
      },
      {
        start: '2024-10-06',
        end: '2024-10-17',
      },
      {
        start: '2024-10-28',
        end: '2024-11-04',
      },
      {
        start: '2024-11-14',
        end: '2024-11-23',
      },
      {
        start: '2024-12-05',
        end: '2024-12-09',
      },
      {
        start: '2024-12-18',
        end: '2024-12-19',
      },
      {
        start: '2024-12-27',
        end: '2024-12-31',
      },
      {
        start: '2025-01-03',
        end: '2025-01-13',
      },
    ],
  },
  {
    accommodationId: 'de03fe9d-1f4a-4747-9670-10e5b504d4b6',
    title: 'Beachfront Villa with Private Pool',
    description:
      'Indulge in luxury in our beachfront villa. With its private pool, stunning ocean views, and elegant decor, this luxurious retreat offers the perfect blend of relaxation and indulgence.',
    price: 9744,
    rating: 49,
    unavailableDates: [
      {
        start: '2024-04-24',
        end: '2024-04-30',
      },
      {
        start: '2024-05-04',
        end: '2024-05-08',
      },
      {
        start: '2024-05-16',
        end: '2024-05-19',
      },
      {
        start: '2024-05-24',
        end: '2024-06-02',
      },
      {
        start: '2024-06-12',
        end: '2024-06-14',
      },
      {
        start: '2024-06-22',
        end: '2024-07-03',
      },
      {
        start: '2024-07-10',
        end: '2024-07-16',
      },
      {
        start: '2024-07-18',
        end: '2024-07-21',
      },
      {
        start: '2024-07-26',
        end: '2024-07-27',
      },
      {
        start: '2024-08-06',
        end: '2024-08-08',
      },
      {
        start: '2024-08-14',
        end: '2024-08-17',
      },
      {
        start: '2024-08-26',
        end: '2024-09-06',
      },
      {
        start: '2024-09-08',
        end: '2024-09-11',
      },
      {
        start: '2024-09-18',
        end: '2024-09-24',
      },
      {
        start: '2024-09-27',
        end: '2024-09-29',
      },
      {
        start: '2024-10-11',
        end: '2024-10-17',
      },
      {
        start: '2024-10-22',
        end: '2024-11-01',
      },
      {
        start: '2024-11-06',
        end: '2024-11-09',
      },
      {
        start: '2024-11-21',
        end: '2024-12-01',
      },
      {
        start: '2024-12-09',
        end: '2024-12-18',
      },
      {
        start: '2024-12-25',
        end: '2025-01-05',
      },
    ],
  },
  {
    accommodationId: '10b6115e-e3e3-44dd-9f37-82a629e788d1',
    title: 'Tropical Paradise Retreat with Ocean Views',
    description:
      'Escape to paradise in our tropical retreat. With its ocean views, lush gardens, and serene atmosphere, this charming getaway offers the perfect blend of relaxation and adventure.',
    price: 8485,
    rating: 44,
    unavailableDates: [
      {
        start: '2024-04-25',
        end: '2024-05-03',
      },
      {
        start: '2024-05-13',
        end: '2024-05-19',
      },
      {
        start: '2024-05-27',
        end: '2024-06-02',
      },
      {
        start: '2024-06-07',
        end: '2024-06-13',
      },
      {
        start: '2024-06-17',
        end: '2024-06-19',
      },
      {
        start: '2024-06-22',
        end: '2024-06-29',
      },
      {
        start: '2024-07-08',
        end: '2024-07-19',
      },
      {
        start: '2024-07-25',
        end: '2024-07-27',
      },
      {
        start: '2024-08-03',
        end: '2024-08-14',
      },
      {
        start: '2024-08-26',
        end: '2024-08-31',
      },
      {
        start: '2024-09-12',
        end: '2024-09-13',
      },
      {
        start: '2024-09-25',
        end: '2024-09-26',
      },
      {
        start: '2024-09-28',
        end: '2024-10-02',
      },
      {
        start: '2024-10-10',
        end: '2024-10-13',
      },
      {
        start: '2024-10-21',
        end: '2024-10-31',
      },
      {
        start: '2024-11-05',
        end: '2024-11-09',
      },
      {
        start: '2024-11-19',
        end: '2024-11-22',
      },
      {
        start: '2024-12-03',
        end: '2024-12-04',
      },
      {
        start: '2024-12-13',
        end: '2024-12-18',
      },
      {
        start: '2024-12-21',
        end: '2024-12-28',
      },
      {
        start: '2025-01-06',
        end: '2025-01-13',
      },
    ],
  },
  {
    accommodationId: '2f48c581-4e30-43c3-93a8-2c2c5a408e3d',
    title: 'Brazilian Beachfront Escape',
    description:
      'Discover the beauty of Brazil in our beachfront escape. With its ocean views, private beach access, and tropical surroundings, this charming retreat offers the ultimate beachside getaway.',
    price: 6578,
    rating: 36,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-04-30',
      },
      {
        start: '2024-05-06',
        end: '2024-05-13',
      },
      {
        start: '2024-05-20',
        end: '2024-05-22',
      },
      {
        start: '2024-06-01',
        end: '2024-06-09',
      },
      {
        start: '2024-06-13',
        end: '2024-06-23',
      },
      {
        start: '2024-06-29',
        end: '2024-07-10',
      },
      {
        start: '2024-07-14',
        end: '2024-07-17',
      },
      {
        start: '2024-07-29',
        end: '2024-08-09',
      },
      {
        start: '2024-08-20',
        end: '2024-08-29',
      },
      {
        start: '2024-09-05',
        end: '2024-09-11',
      },
      {
        start: '2024-09-19',
        end: '2024-09-22',
      },
      {
        start: '2024-10-03',
        end: '2024-10-13',
      },
      {
        start: '2024-10-20',
        end: '2024-10-25',
      },
      {
        start: '2024-11-01',
        end: '2024-11-06',
      },
      {
        start: '2024-11-09',
        end: '2024-11-13',
      },
      {
        start: '2024-11-21',
        end: '2024-11-28',
      },
      {
        start: '2024-12-09',
        end: '2024-12-14',
      },
      {
        start: '2024-12-17',
        end: '2024-12-23',
      },
      {
        start: '2025-01-03',
        end: '2025-01-14',
      },
    ],
  },
  {
    accommodationId: 'ab28b450-bd45-4bfe-b064-a4fd269c950d',
    title: 'Seaside Villa with Infinity Pool',
    description:
      'Indulge in luxury in our seaside villa. With its infinity pool, stunning ocean views, and elegant decor, this luxurious retreat offers the perfect beachside escape.',
    price: 4536,
    rating: 49,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-05-01',
      },
      {
        start: '2024-05-12',
        end: '2024-05-15',
      },
      {
        start: '2024-05-20',
        end: '2024-05-30',
      },
      {
        start: '2024-06-02',
        end: '2024-06-07',
      },
      {
        start: '2024-06-15',
        end: '2024-06-25',
      },
      {
        start: '2024-07-06',
        end: '2024-07-17',
      },
      {
        start: '2024-07-29',
        end: '2024-08-02',
      },
      {
        start: '2024-08-11',
        end: '2024-08-14',
      },
      {
        start: '2024-08-20',
        end: '2024-08-29',
      },
      {
        start: '2024-09-03',
        end: '2024-09-10',
      },
      {
        start: '2024-09-17',
        end: '2024-09-23',
      },
      {
        start: '2024-09-30',
        end: '2024-10-04',
      },
      {
        start: '2024-10-07',
        end: '2024-10-13',
      },
      {
        start: '2024-10-19',
        end: '2024-10-23',
      },
      {
        start: '2024-11-04',
        end: '2024-11-05',
      },
      {
        start: '2024-11-11',
        end: '2024-11-18',
      },
      {
        start: '2024-11-26',
        end: '2024-11-29',
      },
    ],
  },
  {
    accommodationId: 'e5637c5a-89b3-4622-b58c-4b01cea9dcbe',
    title: 'Luxury Beachfront Villa with Panoramic Ocean Views',
    description:
      'Escape to luxury in our beachfront villa. With its panoramic ocean views, luxurious amenities, and elegant decor, this stunning retreat offers the ultimate beachside getaway.',
    price: 3110,
    rating: 42,
    unavailableDates: [
      {
        start: '2024-04-30',
        end: '2024-05-02',
      },
      {
        start: '2024-05-04',
        end: '2024-05-07',
      },
      {
        start: '2024-05-12',
        end: '2024-05-19',
      },
      {
        start: '2024-05-29',
        end: '2024-06-01',
      },
      {
        start: '2024-06-11',
        end: '2024-06-19',
      },
      {
        start: '2024-06-24',
        end: '2024-06-27',
      },
      {
        start: '2024-07-01',
        end: '2024-07-02',
      },
      {
        start: '2024-07-13',
        end: '2024-07-22',
      },
      {
        start: '2024-07-29',
        end: '2024-07-31',
      },
      {
        start: '2024-08-03',
        end: '2024-08-13',
      },
      {
        start: '2024-08-22',
        end: '2024-08-30',
      },
      {
        start: '2024-09-07',
        end: '2024-09-15',
      },
      {
        start: '2024-09-18',
        end: '2024-09-26',
      },
      {
        start: '2024-10-01',
        end: '2024-10-11',
      },
      {
        start: '2024-10-18',
        end: '2024-10-25',
      },
      {
        start: '2024-10-29',
        end: '2024-11-03',
      },
      {
        start: '2024-11-05',
        end: '2024-11-09',
      },
      {
        start: '2024-11-17',
        end: '2024-11-21',
      },
      {
        start: '2024-11-24',
        end: '2024-12-04',
      },
      {
        start: '2024-12-07',
        end: '2024-12-12',
      },
      {
        start: '2024-12-21',
        end: '2024-12-27',
      },
      {
        start: '2024-12-31',
        end: '2025-01-08',
      },
    ],
  },
  {
    accommodationId: '51236b94-5533-4c26-955c-f5c98a044f84',
    title: 'Brazilian Coastal Getaway with Private Beach Access',
    description:
      'Experience the beauty of Brazil in our coastal getaway. With its private beach access, lush gardens, and tropical surroundings, this charming retreat offers the perfect blend of relaxation and adventure.',
    price: 6097,
    rating: 40,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-07',
      },
      {
        start: '2024-05-13',
        end: '2024-05-21',
      },
      {
        start: '2024-05-23',
        end: '2024-05-27',
      },
      {
        start: '2024-06-07',
        end: '2024-06-09',
      },
      {
        start: '2024-06-11',
        end: '2024-06-20',
      },
      {
        start: '2024-06-28',
        end: '2024-07-07',
      },
      {
        start: '2024-07-17',
        end: '2024-07-27',
      },
      {
        start: '2024-08-06',
        end: '2024-08-13',
      },
      {
        start: '2024-08-21',
        end: '2024-08-30',
      },
      {
        start: '2024-09-05',
        end: '2024-09-08',
      },
      {
        start: '2024-09-16',
        end: '2024-09-21',
      },
      {
        start: '2024-10-03',
        end: '2024-10-11',
      },
    ],
  },
  {
    accommodationId: '7541622f-274f-4e03-ab63-cf9593c223b9',
    title: 'Beachfront Mansion with Infinity Pool',
    description:
      'Indulge in luxury in our beachfront mansion. With its infinity pool, stunning ocean views, and spacious interiors, this luxurious retreat offers the ultimate beachside getaway.',
    price: 5371,
    rating: 39,
    unavailableDates: [
      {
        start: '2024-04-25',
        end: '2024-04-29',
      },
      {
        start: '2024-05-05',
        end: '2024-05-09',
      },
      {
        start: '2024-05-21',
        end: '2024-05-25',
      },
      {
        start: '2024-06-05',
        end: '2024-06-16',
      },
      {
        start: '2024-06-22',
        end: '2024-07-01',
      },
      {
        start: '2024-07-10',
        end: '2024-07-19',
      },
      {
        start: '2024-07-31',
        end: '2024-08-09',
      },
      {
        start: '2024-08-20',
        end: '2024-08-21',
      },
      {
        start: '2024-08-29',
        end: '2024-09-04',
      },
      {
        start: '2024-09-11',
        end: '2024-09-20',
      },
      {
        start: '2024-09-22',
        end: '2024-09-25',
      },
      {
        start: '2024-09-27',
        end: '2024-10-01',
      },
      {
        start: '2024-10-03',
        end: '2024-10-07',
      },
      {
        start: '2024-10-18',
        end: '2024-10-27',
      },
      {
        start: '2024-10-31',
        end: '2024-11-11',
      },
      {
        start: '2024-11-18',
        end: '2024-11-27',
      },
      {
        start: '2024-12-05',
        end: '2024-12-08',
      },
      {
        start: '2024-12-17',
        end: '2024-12-25',
      },
      {
        start: '2024-12-29',
        end: '2025-01-06',
      },
    ],
  },
  {
    accommodationId: 'dff777ff-5632-4d8f-acdb-8e2ffef3a4c7',
    title: 'Tropical Beach House with Private Pool',
    description:
      'Escape to paradise in our tropical beach house. With its private pool, ocean views, and lush gardens, this charming retreat offers the perfect blend of luxury and relaxation.',
    price: 7229,
    rating: 50,
    unavailableDates: [
      {
        start: '2024-04-24',
        end: '2024-05-02',
      },
      {
        start: '2024-05-04',
        end: '2024-05-14',
      },
      {
        start: '2024-05-26',
        end: '2024-06-03',
      },
      {
        start: '2024-06-05',
        end: '2024-06-14',
      },
      {
        start: '2024-06-26',
        end: '2024-06-29',
      },
      {
        start: '2024-07-01',
        end: '2024-07-11',
      },
      {
        start: '2024-07-15',
        end: '2024-07-22',
      },
      {
        start: '2024-07-29',
        end: '2024-08-05',
      },
      {
        start: '2024-08-17',
        end: '2024-08-22',
      },
      {
        start: '2024-08-27',
        end: '2024-09-04',
      },
      {
        start: '2024-09-11',
        end: '2024-09-19',
      },
      {
        start: '2024-09-30',
        end: '2024-10-05',
      },
      {
        start: '2024-10-12',
        end: '2024-10-20',
      },
      {
        start: '2024-10-27',
        end: '2024-11-02',
      },
      {
        start: '2024-11-04',
        end: '2024-11-11',
      },
      {
        start: '2024-11-21',
        end: '2024-11-30',
      },
    ],
  },
  {
    accommodationId: 'a2accf3e-d106-426a-a597-4bf2e1da1257',
    title: 'Brazilian Beachfront Villa with Ocean Views',
    description:
      'Experience the beauty of Brazil in our beachfront villa. With its ocean views, private beach access, and elegant decor, this luxurious retreat offers the ultimate beachside escape.',
    price: 9924,
    rating: 36,
    unavailableDates: [
      {
        start: '2024-04-24',
        end: '2024-04-25',
      },
      {
        start: '2024-04-29',
        end: '2024-05-02',
      },
      {
        start: '2024-05-12',
        end: '2024-05-20',
      },
      {
        start: '2024-06-01',
        end: '2024-06-12',
      },
      {
        start: '2024-06-21',
        end: '2024-06-27',
      },
      {
        start: '2024-07-05',
        end: '2024-07-07',
      },
      {
        start: '2024-07-10',
        end: '2024-07-21',
      },
      {
        start: '2024-07-24',
        end: '2024-07-31',
      },
      {
        start: '2024-08-11',
        end: '2024-08-13',
      },
      {
        start: '2024-08-20',
        end: '2024-08-25',
      },
      {
        start: '2024-08-30',
        end: '2024-09-04',
      },
      {
        start: '2024-09-09',
        end: '2024-09-14',
      },
      {
        start: '2024-09-18',
        end: '2024-09-19',
      },
      {
        start: '2024-09-24',
        end: '2024-09-30',
      },
      {
        start: '2024-10-09',
        end: '2024-10-20',
      },
      {
        start: '2024-10-25',
        end: '2024-11-02',
      },
      {
        start: '2024-11-12',
        end: '2024-11-20',
      },
      {
        start: '2024-11-30',
        end: '2024-12-11',
      },
      {
        start: '2024-12-22',
        end: '2025-01-02',
      },
    ],
  },
  {
    accommodationId: '9eda95c5-ea6c-4655-974f-244e7c2fce95',
    title: 'Secluded Beach House with Private Beach Access',
    description:
      'Escape to our secluded beach house and experience the beauty of oceanfront living. With its private beach access, lush gardens, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 5005,
    rating: 39,
    unavailableDates: [
      {
        start: '2024-04-29',
        end: '2024-05-09',
      },
      {
        start: '2024-05-11',
        end: '2024-05-12',
      },
      {
        start: '2024-05-14',
        end: '2024-05-18',
      },
      {
        start: '2024-05-20',
        end: '2024-05-22',
      },
      {
        start: '2024-05-30',
        end: '2024-06-08',
      },
      {
        start: '2024-06-12',
        end: '2024-06-17',
      },
      {
        start: '2024-06-27',
        end: '2024-06-29',
      },
      {
        start: '2024-07-07',
        end: '2024-07-13',
      },
      {
        start: '2024-07-22',
        end: '2024-07-26',
      },
      {
        start: '2024-08-03',
        end: '2024-08-05',
      },
      {
        start: '2024-08-08',
        end: '2024-08-13',
      },
      {
        start: '2024-08-25',
        end: '2024-09-04',
      },
      {
        start: '2024-09-10',
        end: '2024-09-18',
      },
      {
        start: '2024-09-20',
        end: '2024-09-24',
      },
      {
        start: '2024-09-26',
        end: '2024-10-02',
      },
      {
        start: '2024-10-14',
        end: '2024-10-16',
      },
      {
        start: '2024-10-20',
        end: '2024-10-28',
      },
      {
        start: '2024-11-07',
        end: '2024-11-08',
      },
      {
        start: '2024-11-15',
        end: '2024-11-22',
      },
      {
        start: '2024-12-02',
        end: '2024-12-10',
      },
      {
        start: '2024-12-13',
        end: '2024-12-20',
      },
      {
        start: '2024-12-25',
        end: '2025-01-03',
      },
    ],
  },
  {
    accommodationId: '4f558eb7-4e2f-4e9a-b010-1f7a6e369477',
    title: 'Luxury Beachfront Retreat with Private Pool',
    description:
      'Indulge in luxury in our beachfront retreat. With its private pool, stunning ocean views, and modern amenities, this luxurious getaway offers the ultimate beachside escape.',
    price: 8595,
    rating: 48,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-04-26',
      },
      {
        start: '2024-05-08',
        end: '2024-05-11',
      },
      {
        start: '2024-05-22',
        end: '2024-05-27',
      },
      {
        start: '2024-06-04',
        end: '2024-06-12',
      },
      {
        start: '2024-06-20',
        end: '2024-06-28',
      },
      {
        start: '2024-07-02',
        end: '2024-07-11',
      },
      {
        start: '2024-07-23',
        end: '2024-08-02',
      },
      {
        start: '2024-08-10',
        end: '2024-08-20',
      },
      {
        start: '2024-08-26',
        end: '2024-09-05',
      },
      {
        start: '2024-09-10',
        end: '2024-09-17',
      },
      {
        start: '2024-09-26',
        end: '2024-09-30',
      },
      {
        start: '2024-10-03',
        end: '2024-10-10',
      },
      {
        start: '2024-10-15',
        end: '2024-10-23',
      },
      {
        start: '2024-11-04',
        end: '2024-11-10',
      },
    ],
  },
  {
    accommodationId: '15e545dd-18e5-4a41-953d-1fdfab831f3c',
    title: 'Seaside Villa with Ocean Views',
    description:
      'Escape to our seaside villa and experience the beauty of oceanfront living. With its ocean views, spacious interiors, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 3899,
    rating: 36,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-04-29',
      },
      {
        start: '2024-05-08',
        end: '2024-05-19',
      },
      {
        start: '2024-05-25',
        end: '2024-05-29',
      },
      {
        start: '2024-06-04',
        end: '2024-06-13',
      },
      {
        start: '2024-06-21',
        end: '2024-06-30',
      },
      {
        start: '2024-07-03',
        end: '2024-07-14',
      },
      {
        start: '2024-07-23',
        end: '2024-08-03',
      },
      {
        start: '2024-08-12',
        end: '2024-08-23',
      },
      {
        start: '2024-09-02',
        end: '2024-09-04',
      },
      {
        start: '2024-09-09',
        end: '2024-09-19',
      },
      {
        start: '2024-10-01',
        end: '2024-10-05',
      },
      {
        start: '2024-10-16',
        end: '2024-10-22',
      },
      {
        start: '2024-10-30',
        end: '2024-11-10',
      },
      {
        start: '2024-11-15',
        end: '2024-11-26',
      },
      {
        start: '2024-12-01',
        end: '2024-12-09',
      },
      {
        start: '2024-12-12',
        end: '2024-12-15',
      },
      {
        start: '2024-12-18',
        end: '2024-12-28',
      },
      {
        start: '2025-01-01',
        end: '2025-01-05',
      },
    ],
  },
  {
    accommodationId: '5414392d-7116-4c38-b30f-77a1ab17884d',
    title: 'Tropical Paradise with Private Beach Access',
    description:
      'Discover your own tropical paradise in our beachfront retreat. With its private beach access, lush gardens, and serene atmosphere, this charming getaway is the perfect place to unwind and recharge.',
    price: 3087,
    rating: 37,
    unavailableDates: [
      {
        start: '2024-04-30',
        end: '2024-05-04',
      },
      {
        start: '2024-05-10',
        end: '2024-05-17',
      },
      {
        start: '2024-05-29',
        end: '2024-06-01',
      },
      {
        start: '2024-06-08',
        end: '2024-06-19',
      },
      {
        start: '2024-06-22',
        end: '2024-06-30',
      },
      {
        start: '2024-07-03',
        end: '2024-07-14',
      },
      {
        start: '2024-07-19',
        end: '2024-07-23',
      },
      {
        start: '2024-08-01',
        end: '2024-08-02',
      },
      {
        start: '2024-08-06',
        end: '2024-08-16',
      },
      {
        start: '2024-08-23',
        end: '2024-09-03',
      },
      {
        start: '2024-09-08',
        end: '2024-09-11',
      },
      {
        start: '2024-09-23',
        end: '2024-10-04',
      },
      {
        start: '2024-10-14',
        end: '2024-10-16',
      },
      {
        start: '2024-10-20',
        end: '2024-10-29',
      },
      {
        start: '2024-11-03',
        end: '2024-11-10',
      },
      {
        start: '2024-11-16',
        end: '2024-11-24',
      },
      {
        start: '2024-12-01',
        end: '2024-12-04',
      },
      {
        start: '2024-12-11',
        end: '2024-12-19',
      },
      {
        start: '2024-12-24',
        end: '2024-12-29',
      },
      {
        start: '2025-01-05',
        end: '2025-01-12',
      },
    ],
  },
  {
    accommodationId: 'd5bfa6d2-cfcb-4931-a905-75fe69727f91',
    title: 'Brazilian Beach House with Infinity Pool',
    description:
      'Indulge in luxury in our Brazilian beach house. With its infinity pool, stunning ocean views, and modern amenities, this luxurious retreat offers the perfect blend of relaxation and indulgence.',
    price: 9589,
    rating: 46,
    unavailableDates: [
      {
        start: '2024-04-30',
        end: '2024-05-07',
      },
      {
        start: '2024-05-18',
        end: '2024-05-22',
      },
      {
        start: '2024-06-01',
        end: '2024-06-07',
      },
      {
        start: '2024-06-10',
        end: '2024-06-14',
      },
      {
        start: '2024-06-17',
        end: '2024-06-21',
      },
      {
        start: '2024-07-03',
        end: '2024-07-06',
      },
      {
        start: '2024-07-10',
        end: '2024-07-20',
      },
      {
        start: '2024-07-25',
        end: '2024-07-30',
      },
      {
        start: '2024-08-05',
        end: '2024-08-08',
      },
      {
        start: '2024-08-20',
        end: '2024-08-28',
      },
      {
        start: '2024-09-08',
        end: '2024-09-17',
      },
      {
        start: '2024-09-20',
        end: '2024-09-29',
      },
      {
        start: '2024-10-10',
        end: '2024-10-13',
      },
      {
        start: '2024-10-17',
        end: '2024-10-28',
      },
      {
        start: '2024-11-05',
        end: '2024-11-15',
      },
      {
        start: '2024-11-17',
        end: '2024-11-19',
      },
    ],
  },
  {
    accommodationId: 'ca5e9216-5d98-4bfc-9447-336df03f7f1f',
    title: 'Secluded Beachfront Villa with Private Pool',
    description:
      'Escape to our secluded beachfront villa and experience the ultimate in luxury and relaxation. With its private pool, stunning ocean views, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 9947,
    rating: 49,
    unavailableDates: [
      {
        start: '2024-04-26',
        end: '2024-05-07',
      },
      {
        start: '2024-05-16',
        end: '2024-05-24',
      },
      {
        start: '2024-06-01',
        end: '2024-06-08',
      },
      {
        start: '2024-06-13',
        end: '2024-06-18',
      },
      {
        start: '2024-06-27',
        end: '2024-07-01',
      },
      {
        start: '2024-07-09',
        end: '2024-07-14',
      },
      {
        start: '2024-07-18',
        end: '2024-07-21',
      },
      {
        start: '2024-07-25',
        end: '2024-07-27',
      },
      {
        start: '2024-08-02',
        end: '2024-08-11',
      },
      {
        start: '2024-08-17',
        end: '2024-08-20',
      },
      {
        start: '2024-08-27',
        end: '2024-09-03',
      },
      {
        start: '2024-09-13',
        end: '2024-09-19',
      },
      {
        start: '2024-09-24',
        end: '2024-10-02',
      },
      {
        start: '2024-10-14',
        end: '2024-10-20',
      },
      {
        start: '2024-10-27',
        end: '2024-11-04',
      },
      {
        start: '2024-11-11',
        end: '2024-11-15',
      },
      {
        start: '2024-11-27',
        end: '2024-12-01',
      },
    ],
  },
  {
    accommodationId: 'b5738c9e-aa22-4dff-8147-f8df743899d7',
    title: 'Beachfront Cottage with Private Beach Access',
    description:
      'Experience the beauty of beachfront living in our charming cottage. With its private beach access, cozy interiors, and stunning ocean views, this seaside retreat offers the perfect blend of comfort and luxury.',
    price: 4330,
    rating: 46,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-05-04',
      },
      {
        start: '2024-05-15',
        end: '2024-05-22',
      },
      {
        start: '2024-05-27',
        end: '2024-06-06',
      },
      {
        start: '2024-06-14',
        end: '2024-06-21',
      },
      {
        start: '2024-06-24',
        end: '2024-07-01',
      },
      {
        start: '2024-07-04',
        end: '2024-07-13',
      },
      {
        start: '2024-07-19',
        end: '2024-07-25',
      },
      {
        start: '2024-07-30',
        end: '2024-08-10',
      },
      {
        start: '2024-08-19',
        end: '2024-08-29',
      },
      {
        start: '2024-09-05',
        end: '2024-09-12',
      },
      {
        start: '2024-09-15',
        end: '2024-09-25',
      },
      {
        start: '2024-09-30',
        end: '2024-10-02',
      },
      {
        start: '2024-10-13',
        end: '2024-10-23',
      },
      {
        start: '2024-10-29',
        end: '2024-10-31',
      },
      {
        start: '2024-11-03',
        end: '2024-11-11',
      },
      {
        start: '2024-11-20',
        end: '2024-11-23',
      },
      {
        start: '2024-11-25',
        end: '2024-12-06',
      },
      {
        start: '2024-12-11',
        end: '2024-12-13',
      },
      {
        start: '2024-12-19',
        end: '2024-12-22',
      },
      {
        start: '2024-12-29',
        end: '2025-01-01',
      },
    ],
  },
  {
    accommodationId: '066e56e4-3136-4a14-a06f-3ff67b3fac83',
    title: 'Tropical Oasis with Infinity Pool',
    description:
      'Escape to our tropical oasis and experience the ultimate in luxury and relaxation. With its infinity pool, lush gardens, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 7448,
    rating: 45,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-07',
      },
      {
        start: '2024-05-15',
        end: '2024-05-23',
      },
      {
        start: '2024-05-28',
        end: '2024-05-30',
      },
      {
        start: '2024-06-08',
        end: '2024-06-16',
      },
      {
        start: '2024-06-25',
        end: '2024-07-03',
      },
      {
        start: '2024-07-05',
        end: '2024-07-06',
      },
      {
        start: '2024-07-16',
        end: '2024-07-27',
      },
      {
        start: '2024-08-03',
        end: '2024-08-04',
      },
      {
        start: '2024-08-11',
        end: '2024-08-22',
      },
      {
        start: '2024-08-30',
        end: '2024-09-06',
      },
      {
        start: '2024-09-09',
        end: '2024-09-12',
      },
      {
        start: '2024-09-20',
        end: '2024-09-23',
      },
      {
        start: '2024-09-26',
        end: '2024-09-27',
      },
      {
        start: '2024-10-04',
        end: '2024-10-06',
      },
      {
        start: '2024-10-13',
        end: '2024-10-15',
      },
      {
        start: '2024-10-27',
        end: '2024-11-07',
      },
      {
        start: '2024-11-14',
        end: '2024-11-21',
      },
    ],
  },
  {
    accommodationId: '0808ab2f-3f5c-4c40-9828-8fa82f5a77b5',
    title: 'Seaside Villa with Private Pool',
    description:
      'Indulge in luxury in our seaside villa. With its private pool, stunning ocean views, and spacious interiors, this luxurious retreat offers the ultimate beachside escape.',
    price: 3228,
    rating: 50,
    unavailableDates: [
      {
        start: '2024-04-22',
        end: '2024-05-03',
      },
      {
        start: '2024-05-15',
        end: '2024-05-21',
      },
      {
        start: '2024-05-25',
        end: '2024-06-04',
      },
      {
        start: '2024-06-07',
        end: '2024-06-11',
      },
      {
        start: '2024-06-18',
        end: '2024-06-28',
      },
      {
        start: '2024-07-06',
        end: '2024-07-08',
      },
      {
        start: '2024-07-13',
        end: '2024-07-15',
      },
      {
        start: '2024-07-21',
        end: '2024-07-27',
      },
      {
        start: '2024-08-03',
        end: '2024-08-07',
      },
      {
        start: '2024-08-10',
        end: '2024-08-18',
      },
      {
        start: '2024-08-25',
        end: '2024-09-02',
      },
      {
        start: '2024-09-04',
        end: '2024-09-13',
      },
      {
        start: '2024-09-22',
        end: '2024-09-28',
      },
      {
        start: '2024-09-30',
        end: '2024-10-10',
      },
    ],
  },
  {
    accommodationId: '05d2385f-2600-4eb7-8d77-859b392fac8a',
    title: 'Luxury Beachfront Mansion',
    description:
      'Experience luxury living in our beachfront mansion. With its spacious interiors, panoramic ocean views, and luxurious amenities, this stunning retreat offers the ultimate beachside escape.',
    price: 9439,
    rating: 41,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-02',
      },
      {
        start: '2024-05-13',
        end: '2024-05-15',
      },
      {
        start: '2024-05-20',
        end: '2024-05-30',
      },
      {
        start: '2024-06-08',
        end: '2024-06-15',
      },
      {
        start: '2024-06-19',
        end: '2024-06-29',
      },
      {
        start: '2024-07-04',
        end: '2024-07-15',
      },
      {
        start: '2024-07-23',
        end: '2024-08-01',
      },
      {
        start: '2024-08-07',
        end: '2024-08-16',
      },
      {
        start: '2024-08-28',
        end: '2024-09-07',
      },
      {
        start: '2024-09-14',
        end: '2024-09-19',
      },
      {
        start: '2024-09-30',
        end: '2024-10-07',
      },
      {
        start: '2024-10-10',
        end: '2024-10-12',
      },
      {
        start: '2024-10-14',
        end: '2024-10-15',
      },
      {
        start: '2024-10-22',
        end: '2024-10-27',
      },
      {
        start: '2024-11-06',
        end: '2024-11-15',
      },
      {
        start: '2024-11-25',
        end: '2024-12-01',
      },
    ],
  },
  {
    accommodationId: '74d9289b-8237-44d7-b92c-ab9752b2ab1a',
    title: 'Brazilian Beachfront Resort with Infinity Pool',
    description:
      'Indulge in luxury in our Brazilian beachfront resort. With its infinity pool, stunning ocean views, and modern amenities, this luxurious retreat offers the ultimate beachside escape.',
    price: 4318,
    rating: 49,
    unavailableDates: [
      {
        start: '2024-04-22',
        end: '2024-04-23',
      },
      {
        start: '2024-04-29',
        end: '2024-05-09',
      },
      {
        start: '2024-05-12',
        end: '2024-05-23',
      },
      {
        start: '2024-06-01',
        end: '2024-06-11',
      },
      {
        start: '2024-06-22',
        end: '2024-07-01',
      },
      {
        start: '2024-07-03',
        end: '2024-07-05',
      },
      {
        start: '2024-07-09',
        end: '2024-07-14',
      },
      {
        start: '2024-07-22',
        end: '2024-07-25',
      },
      {
        start: '2024-08-04',
        end: '2024-08-09',
      },
      {
        start: '2024-08-19',
        end: '2024-08-26',
      },
      {
        start: '2024-08-29',
        end: '2024-09-03',
      },
      {
        start: '2024-09-15',
        end: '2024-09-18',
      },
      {
        start: '2024-09-29',
        end: '2024-10-07',
      },
      {
        start: '2024-10-13',
        end: '2024-10-23',
      },
      {
        start: '2024-10-28',
        end: '2024-11-05',
      },
      {
        start: '2024-11-15',
        end: '2024-11-22',
      },
      {
        start: '2024-11-29',
        end: '2024-12-07',
      },
      {
        start: '2024-12-19',
        end: '2024-12-30',
      },
      {
        start: '2025-01-10',
        end: '2025-01-18',
      },
    ],
  },
  {
    accommodationId: 'd2c0fe6a-344c-410e-8ead-61da2be59d8a',
    title: 'Secluded Beach House with Ocean Views',
    description:
      'Escape to our secluded beach house and experience the beauty of oceanfront living. With its ocean views, private beach access, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 3101,
    rating: 39,
    unavailableDates: [
      {
        start: '2024-04-25',
        end: '2024-04-29',
      },
      {
        start: '2024-05-11',
        end: '2024-05-13',
      },
      {
        start: '2024-05-15',
        end: '2024-05-26',
      },
      {
        start: '2024-06-01',
        end: '2024-06-04',
      },
      {
        start: '2024-06-09',
        end: '2024-06-18',
      },
      {
        start: '2024-06-22',
        end: '2024-07-01',
      },
      {
        start: '2024-07-05',
        end: '2024-07-07',
      },
      {
        start: '2024-07-10',
        end: '2024-07-17',
      },
      {
        start: '2024-07-28',
        end: '2024-08-01',
      },
      {
        start: '2024-08-07',
        end: '2024-08-11',
      },
      {
        start: '2024-08-16',
        end: '2024-08-27',
      },
      {
        start: '2024-09-06',
        end: '2024-09-16',
      },
      {
        start: '2024-09-27',
        end: '2024-10-06',
      },
      {
        start: '2024-10-11',
        end: '2024-10-15',
      },
      {
        start: '2024-10-19',
        end: '2024-10-21',
      },
      {
        start: '2024-10-23',
        end: '2024-10-30',
      },
      {
        start: '2024-11-05',
        end: '2024-11-08',
      },
      {
        start: '2024-11-16',
        end: '2024-11-23',
      },
      {
        start: '2024-11-25',
        end: '2024-12-02',
      },
      {
        start: '2024-12-06',
        end: '2024-12-10',
      },
      {
        start: '2024-12-17',
        end: '2024-12-27',
      },
      {
        start: '2025-01-07',
        end: '2025-01-18',
      },
    ],
  },
  {
    accommodationId: '3d557823-7c58-493e-88c2-65ac7fc35ffb',
    title: 'Beachfront Retreat with Private Pool',
    description:
      'Indulge in luxury in our beachfront retreat. With its private pool, stunning ocean views, and modern amenities, this luxurious getaway offers the ultimate beachside escape.',
    price: 8672,
    rating: 47,
    unavailableDates: [
      {
        start: '2024-04-29',
        end: '2024-05-03',
      },
      {
        start: '2024-05-12',
        end: '2024-05-14',
      },
      {
        start: '2024-05-21',
        end: '2024-05-23',
      },
      {
        start: '2024-06-02',
        end: '2024-06-11',
      },
      {
        start: '2024-06-18',
        end: '2024-06-19',
      },
      {
        start: '2024-06-30',
        end: '2024-07-11',
      },
      {
        start: '2024-07-15',
        end: '2024-07-17',
      },
      {
        start: '2024-07-20',
        end: '2024-07-29',
      },
      {
        start: '2024-08-09',
        end: '2024-08-18',
      },
      {
        start: '2024-08-26',
        end: '2024-08-29',
      },
      {
        start: '2024-09-07',
        end: '2024-09-18',
      },
      {
        start: '2024-09-26',
        end: '2024-10-02',
      },
      {
        start: '2024-10-05',
        end: '2024-10-12',
      },
      {
        start: '2024-10-18',
        end: '2024-10-29',
      },
      {
        start: '2024-11-05',
        end: '2024-11-16',
      },
      {
        start: '2024-11-26',
        end: '2024-12-07',
      },
      {
        start: '2024-12-09',
        end: '2024-12-14',
      },
      {
        start: '2024-12-25',
        end: '2025-01-05',
      },
    ],
  },
  {
    accommodationId: '9632b2a3-7d23-4e5c-b9d1-79582d90b835',
    title: 'Tropical Villa with Private Beach Access',
    description:
      'Escape to paradise in our tropical villa. With its private beach access, lush gardens, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 6080,
    rating: 43,
    unavailableDates: [
      {
        start: '2024-04-27',
        end: '2024-04-28',
      },
      {
        start: '2024-05-06',
        end: '2024-05-12',
      },
      {
        start: '2024-05-19',
        end: '2024-05-25',
      },
      {
        start: '2024-06-01',
        end: '2024-06-07',
      },
      {
        start: '2024-06-16',
        end: '2024-06-21',
      },
      {
        start: '2024-06-26',
        end: '2024-07-05',
      },
      {
        start: '2024-07-17',
        end: '2024-07-28',
      },
      {
        start: '2024-08-07',
        end: '2024-08-15',
      },
      {
        start: '2024-08-19',
        end: '2024-08-30',
      },
      {
        start: '2024-09-06',
        end: '2024-09-07',
      },
      {
        start: '2024-09-12',
        end: '2024-09-15',
      },
      {
        start: '2024-09-21',
        end: '2024-09-30',
      },
      {
        start: '2024-10-02',
        end: '2024-10-13',
      },
      {
        start: '2024-10-20',
        end: '2024-10-30',
      },
      {
        start: '2024-11-10',
        end: '2024-11-21',
      },
      {
        start: '2024-12-01',
        end: '2024-12-12',
      },
      {
        start: '2024-12-23',
        end: '2024-12-27',
      },
      {
        start: '2024-12-31',
        end: '2025-01-01',
      },
    ],
  },
  {
    accommodationId: 'a359d931-b106-4b65-8f5c-b756e52f41ff',
    title: 'Brazilian Beach House with Pool',
    description:
      'Indulge in luxury in our Brazilian beach house. With its private pool, stunning ocean views, and modern amenities, this luxurious retreat offers the perfect beachside escape.',
    price: 8127,
    rating: 50,
    unavailableDates: [
      {
        start: '2024-04-25',
        end: '2024-04-29',
      },
      {
        start: '2024-05-10',
        end: '2024-05-12',
      },
      {
        start: '2024-05-19',
        end: '2024-05-29',
      },
      {
        start: '2024-06-10',
        end: '2024-06-16',
      },
      {
        start: '2024-06-23',
        end: '2024-06-28',
      },
      {
        start: '2024-07-03',
        end: '2024-07-05',
      },
      {
        start: '2024-07-07',
        end: '2024-07-18',
      },
      {
        start: '2024-07-27',
        end: '2024-07-28',
      },
      {
        start: '2024-08-05',
        end: '2024-08-10',
      },
      {
        start: '2024-08-19',
        end: '2024-08-25',
      },
      {
        start: '2024-09-06',
        end: '2024-09-11',
      },
      {
        start: '2024-09-17',
        end: '2024-09-20',
      },
      {
        start: '2024-09-27',
        end: '2024-09-28',
      },
      {
        start: '2024-09-30',
        end: '2024-10-04',
      },
      {
        start: '2024-10-10',
        end: '2024-10-16',
      },
      {
        start: '2024-10-19',
        end: '2024-10-22',
      },
    ],
  },
  {
    accommodationId: '4dd0d825-6457-4f8c-b05b-b672ff258f49',
    title: 'Beachfront Villa with Ocean Views',
    description:
      'Experience the beauty of beachfront living in our charming villa. With its ocean views, private beach access, and tropical surroundings, this seaside retreat offers the perfect blend of comfort and luxury.',
    price: 4534,
    rating: 36,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-04-27',
      },
      {
        start: '2024-05-02',
        end: '2024-05-07',
      },
      {
        start: '2024-05-11',
        end: '2024-05-17',
      },
      {
        start: '2024-05-25',
        end: '2024-06-04',
      },
      {
        start: '2024-06-16',
        end: '2024-06-26',
      },
      {
        start: '2024-07-01',
        end: '2024-07-04',
      },
      {
        start: '2024-07-09',
        end: '2024-07-16',
      },
      {
        start: '2024-07-21',
        end: '2024-07-31',
      },
      {
        start: '2024-08-05',
        end: '2024-08-07',
      },
      {
        start: '2024-08-16',
        end: '2024-08-24',
      },
      {
        start: '2024-08-30',
        end: '2024-09-08',
      },
      {
        start: '2024-09-19',
        end: '2024-09-22',
      },
      {
        start: '2024-09-26',
        end: '2024-10-06',
      },
      {
        start: '2024-10-13',
        end: '2024-10-14',
      },
      {
        start: '2024-10-20',
        end: '2024-10-23',
      },
      {
        start: '2024-11-02',
        end: '2024-11-03',
      },
      {
        start: '2024-11-10',
        end: '2024-11-14',
      },
      {
        start: '2024-11-23',
        end: '2024-12-04',
      },
      {
        start: '2024-12-06',
        end: '2024-12-14',
      },
      {
        start: '2024-12-18',
        end: '2024-12-22',
      },
      {
        start: '2024-12-27',
        end: '2024-12-29',
      },
    ],
  },
  {
    accommodationId: 'bad79739-04ac-4718-a70d-2bb5745ff6f8',
    title: 'Secluded Beachfront Retreat with Private Pool',
    description:
      'Escape to our secluded beachfront retreat and experience the ultimate in luxury and relaxation. With its private pool, stunning ocean views, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 7430,
    rating: 42,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-05-01',
      },
      {
        start: '2024-05-05',
        end: '2024-05-10',
      },
      {
        start: '2024-05-20',
        end: '2024-05-26',
      },
      {
        start: '2024-06-07',
        end: '2024-06-18',
      },
      {
        start: '2024-06-25',
        end: '2024-07-06',
      },
      {
        start: '2024-07-17',
        end: '2024-07-21',
      },
      {
        start: '2024-07-31',
        end: '2024-08-07',
      },
      {
        start: '2024-08-14',
        end: '2024-08-17',
      },
      {
        start: '2024-08-19',
        end: '2024-08-27',
      },
      {
        start: '2024-08-30',
        end: '2024-09-05',
      },
      {
        start: '2024-09-07',
        end: '2024-09-11',
      },
      {
        start: '2024-09-17',
        end: '2024-09-28',
      },
      {
        start: '2024-10-08',
        end: '2024-10-11',
      },
      {
        start: '2024-10-18',
        end: '2024-10-21',
      },
      {
        start: '2024-10-27',
        end: '2024-11-01',
      },
      {
        start: '2024-11-09',
        end: '2024-11-12',
      },
      {
        start: '2024-11-23',
        end: '2024-11-29',
      },
      {
        start: '2024-12-09',
        end: '2024-12-15',
      },
      {
        start: '2024-12-26',
        end: '2025-01-03',
      },
    ],
  },
  {
    accommodationId: '80040faf-93dd-4998-aa64-c3fd2fd2c854',
    title: 'Luxury Beachfront Villa with Infinity Pool',
    description:
      'Indulge in luxury in our beachfront villa. With its infinity pool, panoramic ocean views, and elegant decor, this luxurious retreat offers the perfect beachside escape.',
    price: 7209,
    rating: 41,
    unavailableDates: [
      {
        start: '2024-04-27',
        end: '2024-04-28',
      },
      {
        start: '2024-05-09',
        end: '2024-05-12',
      },
      {
        start: '2024-05-15',
        end: '2024-05-23',
      },
      {
        start: '2024-06-01',
        end: '2024-06-03',
      },
      {
        start: '2024-06-14',
        end: '2024-06-24',
      },
      {
        start: '2024-07-05',
        end: '2024-07-10',
      },
      {
        start: '2024-07-13',
        end: '2024-07-19',
      },
      {
        start: '2024-07-28',
        end: '2024-07-30',
      },
      {
        start: '2024-08-10',
        end: '2024-08-17',
      },
      {
        start: '2024-08-22',
        end: '2024-08-25',
      },
      {
        start: '2024-08-31',
        end: '2024-09-09',
      },
      {
        start: '2024-09-13',
        end: '2024-09-24',
      },
    ],
  },
  {
    accommodationId: '8ea537ca-7e66-4a9b-9abe-feccf70ee848',
    title: 'Brazilian Coastal Villa with Private Beach Access',
    description:
      'Experience the beauty of Brazil in our coastal villa. With its private beach access, lush gardens, and stunning ocean views, this charming retreat offers the perfect blend of relaxation and adventure.',
    price: 5313,
    rating: 42,
    unavailableDates: [
      {
        start: '2024-04-24',
        end: '2024-04-28',
      },
      {
        start: '2024-05-07',
        end: '2024-05-14',
      },
      {
        start: '2024-05-17',
        end: '2024-05-18',
      },
      {
        start: '2024-05-26',
        end: '2024-05-31',
      },
      {
        start: '2024-06-06',
        end: '2024-06-15',
      },
      {
        start: '2024-06-27',
        end: '2024-07-05',
      },
      {
        start: '2024-07-08',
        end: '2024-07-13',
      },
      {
        start: '2024-07-22',
        end: '2024-07-25',
      },
      {
        start: '2024-08-01',
        end: '2024-08-07',
      },
      {
        start: '2024-08-16',
        end: '2024-08-21',
      },
      {
        start: '2024-08-29',
        end: '2024-09-05',
      },
      {
        start: '2024-09-14',
        end: '2024-09-21',
      },
      {
        start: '2024-09-26',
        end: '2024-09-28',
      },
      {
        start: '2024-10-07',
        end: '2024-10-08',
      },
      {
        start: '2024-10-16',
        end: '2024-10-18',
      },
      {
        start: '2024-10-20',
        end: '2024-10-31',
      },
      {
        start: '2024-11-02',
        end: '2024-11-12',
      },
      {
        start: '2024-11-16',
        end: '2024-11-17',
      },
      {
        start: '2024-11-28',
        end: '2024-12-08',
      },
      {
        start: '2024-12-14',
        end: '2024-12-19',
      },
      {
        start: '2024-12-24',
        end: '2024-12-30',
      },
      {
        start: '2025-01-07',
        end: '2025-01-08',
      },
    ],
  },
  {
    accommodationId: '52001873-2422-4bd1-b5b4-794a08ed935f',
    title: 'Beachfront Chalet with Private Pool',
    description:
      'Indulge in luxury in our beachfront chalet. With its private pool, stunning ocean views, and modern amenities, this luxurious retreat offers the perfect beachside escape.',
    price: 3270,
    rating: 49,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-02',
      },
      {
        start: '2024-05-08',
        end: '2024-05-15',
      },
      {
        start: '2024-05-18',
        end: '2024-05-24',
      },
      {
        start: '2024-06-05',
        end: '2024-06-15',
      },
      {
        start: '2024-06-24',
        end: '2024-07-03',
      },
      {
        start: '2024-07-08',
        end: '2024-07-09',
      },
      {
        start: '2024-07-19',
        end: '2024-07-29',
      },
      {
        start: '2024-08-04',
        end: '2024-08-07',
      },
      {
        start: '2024-08-17',
        end: '2024-08-22',
      },
      {
        start: '2024-08-27',
        end: '2024-09-07',
      },
      {
        start: '2024-09-18',
        end: '2024-09-26',
      },
      {
        start: '2024-10-08',
        end: '2024-10-12',
      },
      {
        start: '2024-10-14',
        end: '2024-10-23',
      },
      {
        start: '2024-11-01',
        end: '2024-11-03',
      },
      {
        start: '2024-11-15',
        end: '2024-11-19',
      },
      {
        start: '2024-11-23',
        end: '2024-11-27',
      },
      {
        start: '2024-12-08',
        end: '2024-12-11',
      },
      {
        start: '2024-12-13',
        end: '2024-12-14',
      },
      {
        start: '2024-12-23',
        end: '2024-12-31',
      },
      {
        start: '2025-01-03',
        end: '2025-01-14',
      },
    ],
  },
  {
    accommodationId: 'c8cb0052-8926-45f5-bbb9-d8b7b9723ba5',
    title: 'Seaside Retreat with Ocean Views',
    description:
      'Escape to our seaside retreat and experience the beauty of oceanfront living. With its ocean views, private beach access, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 8392,
    rating: 38,
    unavailableDates: [
      {
        start: '2024-04-29',
        end: '2024-05-01',
      },
      {
        start: '2024-05-08',
        end: '2024-05-12',
      },
      {
        start: '2024-05-21',
        end: '2024-05-30',
      },
      {
        start: '2024-06-06',
        end: '2024-06-07',
      },
      {
        start: '2024-06-09',
        end: '2024-06-18',
      },
      {
        start: '2024-06-21',
        end: '2024-06-22',
      },
      {
        start: '2024-06-30',
        end: '2024-07-03',
      },
      {
        start: '2024-07-11',
        end: '2024-07-18',
      },
      {
        start: '2024-07-21',
        end: '2024-07-26',
      },
      {
        start: '2024-08-07',
        end: '2024-08-13',
      },
      {
        start: '2024-08-15',
        end: '2024-08-16',
      },
      {
        start: '2024-08-24',
        end: '2024-08-26',
      },
      {
        start: '2024-09-05',
        end: '2024-09-11',
      },
      {
        start: '2024-09-21',
        end: '2024-09-22',
      },
      {
        start: '2024-09-26',
        end: '2024-09-28',
      },
      {
        start: '2024-10-04',
        end: '2024-10-08',
      },
      {
        start: '2024-10-15',
        end: '2024-10-19',
      },
      {
        start: '2024-10-23',
        end: '2024-10-31',
      },
      {
        start: '2024-11-12',
        end: '2024-11-14',
      },
      {
        start: '2024-11-18',
        end: '2024-11-28',
      },
      {
        start: '2024-12-02',
        end: '2024-12-11',
      },
      {
        start: '2024-12-20',
        end: '2024-12-25',
      },
      {
        start: '2024-12-29',
        end: '2025-01-02',
      },
    ],
  },
  {
    accommodationId: '35906a02-40d1-498b-b90d-1d07c18eacd2',
    title: 'Tropical Paradise with Infinity Pool',
    description:
      'Indulge in luxury in our tropical paradise. With its infinity pool, lush gardens, and stunning ocean views, this charming retreat offers the perfect beachside escape.',
    price: 9021,
    rating: 36,
    unavailableDates: [
      {
        start: '2024-04-25',
        end: '2024-05-01',
      },
      {
        start: '2024-05-07',
        end: '2024-05-17',
      },
      {
        start: '2024-05-29',
        end: '2024-06-09',
      },
      {
        start: '2024-06-21',
        end: '2024-07-02',
      },
      {
        start: '2024-07-14',
        end: '2024-07-19',
      },
      {
        start: '2024-07-24',
        end: '2024-08-03',
      },
      {
        start: '2024-08-09',
        end: '2024-08-17',
      },
      {
        start: '2024-08-21',
        end: '2024-09-01',
      },
      {
        start: '2024-09-08',
        end: '2024-09-14',
      },
      {
        start: '2024-09-18',
        end: '2024-09-19',
      },
      {
        start: '2024-09-30',
        end: '2024-10-03',
      },
    ],
  },
  {
    accommodationId: '86dc57d4-88bc-4455-bf26-656e29768e25',
    title: 'Brazilian Beachfront Cottage',
    description:
      'Experience the beauty of beachfront living in our charming cottage. With its cozy interiors, stunning ocean views, and private beach access, this seaside retreat offers the perfect blend of comfort and luxury.',
    price: 8125,
    rating: 50,
    unavailableDates: [
      {
        start: '2024-04-26',
        end: '2024-05-01',
      },
      {
        start: '2024-05-04',
        end: '2024-05-10',
      },
      {
        start: '2024-05-22',
        end: '2024-05-27',
      },
      {
        start: '2024-06-07',
        end: '2024-06-13',
      },
      {
        start: '2024-06-20',
        end: '2024-06-21',
      },
      {
        start: '2024-06-24',
        end: '2024-07-04',
      },
      {
        start: '2024-07-14',
        end: '2024-07-20',
      },
      {
        start: '2024-07-22',
        end: '2024-07-30',
      },
      {
        start: '2024-08-07',
        end: '2024-08-09',
      },
      {
        start: '2024-08-17',
        end: '2024-08-27',
      },
      {
        start: '2024-09-04',
        end: '2024-09-08',
      },
      {
        start: '2024-09-20',
        end: '2024-09-22',
      },
      {
        start: '2024-10-01',
        end: '2024-10-09',
      },
      {
        start: '2024-10-13',
        end: '2024-10-19',
      },
    ],
  },
  {
    accommodationId: '73c8e8d8-27f9-4e22-9060-8a04310d82be',
    title: 'Beachfront Villa with Private Beach Access',
    description:
      'Indulge in luxury in our beachfront villa. With its private beach access, stunning ocean views, and modern amenities, this luxurious retreat offers the perfect beachside escape.',
    price: 7029,
    rating: 50,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-06',
      },
      {
        start: '2024-05-09',
        end: '2024-05-18',
      },
      {
        start: '2024-05-23',
        end: '2024-05-27',
      },
      {
        start: '2024-05-31',
        end: '2024-06-09',
      },
      {
        start: '2024-06-17',
        end: '2024-06-25',
      },
      {
        start: '2024-06-29',
        end: '2024-07-09',
      },
      {
        start: '2024-07-18',
        end: '2024-07-22',
      },
      {
        start: '2024-08-03',
        end: '2024-08-04',
      },
      {
        start: '2024-08-10',
        end: '2024-08-16',
      },
      {
        start: '2024-08-20',
        end: '2024-08-21',
      },
      {
        start: '2024-08-23',
        end: '2024-09-01',
      },
      {
        start: '2024-09-08',
        end: '2024-09-10',
      },
      {
        start: '2024-09-18',
        end: '2024-09-27',
      },
      {
        start: '2024-10-08',
        end: '2024-10-13',
      },
    ],
  },
  {
    accommodationId: '5c221907-7dab-452f-8ada-3138ec5cbbc1',
    title: 'Secluded Beach House with Infinity Pool',
    description:
      'Escape to our secluded beach house and experience the ultimate in luxury and relaxation. With its infinity pool, stunning ocean views, and private beach access, this charming retreat offers the perfect beachside getaway.',
    price: 8528,
    rating: 46,
    unavailableDates: [
      {
        start: '2024-04-25',
        end: '2024-04-27',
      },
      {
        start: '2024-05-06',
        end: '2024-05-09',
      },
      {
        start: '2024-05-21',
        end: '2024-05-26',
      },
      {
        start: '2024-06-07',
        end: '2024-06-08',
      },
      {
        start: '2024-06-15',
        end: '2024-06-21',
      },
      {
        start: '2024-07-01',
        end: '2024-07-03',
      },
      {
        start: '2024-07-11',
        end: '2024-07-15',
      },
      {
        start: '2024-07-22',
        end: '2024-07-26',
      },
      {
        start: '2024-08-05',
        end: '2024-08-07',
      },
      {
        start: '2024-08-18',
        end: '2024-08-25',
      },
      {
        start: '2024-09-04',
        end: '2024-09-07',
      },
      {
        start: '2024-09-19',
        end: '2024-09-30',
      },
      {
        start: '2024-10-11',
        end: '2024-10-16',
      },
      {
        start: '2024-10-20',
        end: '2024-10-25',
      },
      {
        start: '2024-11-06',
        end: '2024-11-15',
      },
      {
        start: '2024-11-23',
        end: '2024-12-03',
      },
      {
        start: '2024-12-07',
        end: '2024-12-11',
      },
      {
        start: '2024-12-13',
        end: '2024-12-21',
      },
      {
        start: '2024-12-25',
        end: '2025-01-03',
      },
    ],
  },
  {
    accommodationId: '90b97fef-2c15-495b-b961-90b9f1d1b144',
    title: 'Luxury Beachfront Retreat with Panoramic Ocean Views',
    description:
      'Indulge in luxury in our beachfront retreat. With its panoramic ocean views, luxurious amenities, and elegant decor, this stunning getaway offers the ultimate beachside escape.',
    price: 3928,
    rating: 46,
    unavailableDates: [
      {
        start: '2024-04-22',
        end: '2024-04-27',
      },
      {
        start: '2024-05-06',
        end: '2024-05-09',
      },
      {
        start: '2024-05-17',
        end: '2024-05-25',
      },
      {
        start: '2024-05-30',
        end: '2024-06-02',
      },
      {
        start: '2024-06-10',
        end: '2024-06-21',
      },
      {
        start: '2024-06-29',
        end: '2024-07-08',
      },
      {
        start: '2024-07-11',
        end: '2024-07-14',
      },
      {
        start: '2024-07-24',
        end: '2024-08-01',
      },
      {
        start: '2024-08-10',
        end: '2024-08-19',
      },
      {
        start: '2024-08-22',
        end: '2024-08-26',
      },
      {
        start: '2024-09-02',
        end: '2024-09-11',
      },
      {
        start: '2024-09-22',
        end: '2024-10-01',
      },
      {
        start: '2024-10-09',
        end: '2024-10-14',
      },
      {
        start: '2024-10-18',
        end: '2024-10-23',
      },
      {
        start: '2024-10-31',
        end: '2024-11-08',
      },
      {
        start: '2024-11-19',
        end: '2024-11-26',
      },
      {
        start: '2024-11-29',
        end: '2024-12-01',
      },
      {
        start: '2024-12-09',
        end: '2024-12-12',
      },
      {
        start: '2024-12-17',
        end: '2024-12-28',
      },
      {
        start: '2025-01-02',
        end: '2025-01-13',
      },
    ],
  },
  {
    accommodationId: 'bbdb185e-feec-4161-a111-401f1dbcf211',
    title: 'Brazilian Beachfront Villa with Private Pool',
    description:
      'Experience the beauty of Brazil in our beachfront villa. With its private pool, stunning ocean views, and modern amenities, this luxurious retreat offers the perfect beachside escape.',
    price: 3000,
    rating: 35,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-04-28',
      },
      {
        start: '2024-05-05',
        end: '2024-05-15',
      },
      {
        start: '2024-05-20',
        end: '2024-05-31',
      },
      {
        start: '2024-06-08',
        end: '2024-06-19',
      },
      {
        start: '2024-06-21',
        end: '2024-06-26',
      },
      {
        start: '2024-07-04',
        end: '2024-07-07',
      },
      {
        start: '2024-07-12',
        end: '2024-07-16',
      },
      {
        start: '2024-07-25',
        end: '2024-08-02',
      },
      {
        start: '2024-08-12',
        end: '2024-08-20',
      },
      {
        start: '2024-08-22',
        end: '2024-08-24',
      },
      {
        start: '2024-08-28',
        end: '2024-09-08',
      },
      {
        start: '2024-09-15',
        end: '2024-09-25',
      },
      {
        start: '2024-10-01',
        end: '2024-10-10',
      },
      {
        start: '2024-10-22',
        end: '2024-11-02',
      },
      {
        start: '2024-11-14',
        end: '2024-11-20',
      },
      {
        start: '2024-11-30',
        end: '2024-12-08',
      },
      {
        start: '2024-12-12',
        end: '2024-12-18',
      },
      {
        start: '2024-12-26',
        end: '2024-12-28',
      },
      {
        start: '2025-01-04',
        end: '2025-01-09',
      },
    ],
  },
  {
    accommodationId: '1e385a29-ce60-4345-9ce7-09246db030c6',
    title: 'Secluded Beachfront Villa with Ocean Views',
    description:
      'Escape to our secluded beachfront villa and experience the beauty of oceanfront living. With its ocean views, private beach access, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 9173,
    rating: 37,
    unavailableDates: [
      {
        start: '2024-04-24',
        end: '2024-04-26',
      },
      {
        start: '2024-05-07',
        end: '2024-05-16',
      },
      {
        start: '2024-05-21',
        end: '2024-05-24',
      },
      {
        start: '2024-05-28',
        end: '2024-06-03',
      },
      {
        start: '2024-06-05',
        end: '2024-06-11',
      },
      {
        start: '2024-06-19',
        end: '2024-06-20',
      },
      {
        start: '2024-06-23',
        end: '2024-07-02',
      },
      {
        start: '2024-07-06',
        end: '2024-07-09',
      },
      {
        start: '2024-07-17',
        end: '2024-07-20',
      },
      {
        start: '2024-07-31',
        end: '2024-08-04',
      },
      {
        start: '2024-08-15',
        end: '2024-08-23',
      },
      {
        start: '2024-09-01',
        end: '2024-09-11',
      },
      {
        start: '2024-09-19',
        end: '2024-09-29',
      },
      {
        start: '2024-10-10',
        end: '2024-10-15',
      },
      {
        start: '2024-10-26',
        end: '2024-11-05',
      },
      {
        start: '2024-11-10',
        end: '2024-11-11',
      },
      {
        start: '2024-11-17',
        end: '2024-11-25',
      },
      {
        start: '2024-12-06',
        end: '2024-12-10',
      },
    ],
  },
  {
    accommodationId: '7788505b-85a7-4fc3-af24-143befefcc37',
    title: 'Beachfront Mansion with Private Pool',
    description:
      'Indulge in luxury in our beachfront mansion. With its private pool, stunning ocean views, and spacious interiors, this luxurious retreat offers the ultimate beachside escape.',
    price: 8716,
    rating: 50,
    unavailableDates: [
      {
        start: '2024-04-27',
        end: '2024-05-04',
      },
      {
        start: '2024-05-13',
        end: '2024-05-16',
      },
      {
        start: '2024-05-20',
        end: '2024-05-31',
      },
      {
        start: '2024-06-11',
        end: '2024-06-22',
      },
      {
        start: '2024-06-26',
        end: '2024-06-28',
      },
      {
        start: '2024-06-30',
        end: '2024-07-11',
      },
      {
        start: '2024-07-21',
        end: '2024-07-25',
      },
      {
        start: '2024-07-31',
        end: '2024-08-05',
      },
      {
        start: '2024-08-09',
        end: '2024-08-10',
      },
      {
        start: '2024-08-12',
        end: '2024-08-19',
      },
      {
        start: '2024-08-27',
        end: '2024-08-28',
      },
      {
        start: '2024-09-08',
        end: '2024-09-18',
      },
      {
        start: '2024-09-21',
        end: '2024-10-02',
      },
      {
        start: '2024-10-07',
        end: '2024-10-11',
      },
      {
        start: '2024-10-23',
        end: '2024-10-29',
      },
      {
        start: '2024-11-08',
        end: '2024-11-16',
      },
      {
        start: '2024-11-19',
        end: '2024-11-23',
      },
      {
        start: '2024-11-28',
        end: '2024-12-05',
      },
      {
        start: '2024-12-09',
        end: '2024-12-18',
      },
      {
        start: '2024-12-21',
        end: '2024-12-22',
      },
      {
        start: '2025-01-03',
        end: '2025-01-14',
      },
    ],
  },
  {
    accommodationId: 'e5200443-bb1c-478f-9f3b-99a6a00a7e86',
    title: 'Tropical Beach House with Ocean Views',
    description:
      'Escape to paradise in our tropical beach house. With its ocean views, private beach access, and modern amenities, this charming retreat offers the perfect beachside getaway.',
    price: 6479,
    rating: 49,
    unavailableDates: [
      {
        start: '2024-04-24',
        end: '2024-05-01',
      },
      {
        start: '2024-05-08',
        end: '2024-05-15',
      },
      {
        start: '2024-05-22',
        end: '2024-05-28',
      },
      {
        start: '2024-06-08',
        end: '2024-06-09',
      },
      {
        start: '2024-06-11',
        end: '2024-06-21',
      },
      {
        start: '2024-06-24',
        end: '2024-06-29',
      },
      {
        start: '2024-07-06',
        end: '2024-07-07',
      },
      {
        start: '2024-07-09',
        end: '2024-07-11',
      },
      {
        start: '2024-07-13',
        end: '2024-07-24',
      },
      {
        start: '2024-07-28',
        end: '2024-08-07',
      },
      {
        start: '2024-08-16',
        end: '2024-08-17',
      },
      {
        start: '2024-08-26',
        end: '2024-09-06',
      },
      {
        start: '2024-09-12',
        end: '2024-09-22',
      },
      {
        start: '2024-10-04',
        end: '2024-10-10',
      },
      {
        start: '2024-10-20',
        end: '2024-10-29',
      },
      {
        start: '2024-11-05',
        end: '2024-11-07',
      },
      {
        start: '2024-11-10',
        end: '2024-11-15',
      },
      {
        start: '2024-11-17',
        end: '2024-11-23',
      },
      {
        start: '2024-11-26',
        end: '2024-11-29',
      },
      {
        start: '2024-12-10',
        end: '2024-12-14',
      },
      {
        start: '2024-12-17',
        end: '2024-12-20',
      },
      {
        start: '2024-12-30',
        end: '2025-01-01',
      },
    ],
  },
  {
    accommodationId: '1db31bc1-8d18-4581-a5c1-f4c97c5667dd',
    title: 'Brazilian Coastal Retreat with Private Pool',
    description:
      'Experience the beauty of Brazil in our coastal retreat. With its private pool, lush gardens, and stunning ocean views, this charming getaway offers the perfect blend of relaxation and adventure.',
    price: 5624,
    rating: 37,
    unavailableDates: [
      {
        start: '2024-04-26',
        end: '2024-05-03',
      },
      {
        start: '2024-05-11',
        end: '2024-05-18',
      },
      {
        start: '2024-05-20',
        end: '2024-05-31',
      },
      {
        start: '2024-06-03',
        end: '2024-06-06',
      },
      {
        start: '2024-06-16',
        end: '2024-06-22',
      },
      {
        start: '2024-07-04',
        end: '2024-07-05',
      },
      {
        start: '2024-07-17',
        end: '2024-07-22',
      },
      {
        start: '2024-07-30',
        end: '2024-08-06',
      },
      {
        start: '2024-08-17',
        end: '2024-08-28',
      },
      {
        start: '2024-09-08',
        end: '2024-09-15',
      },
      {
        start: '2024-09-19',
        end: '2024-09-29',
      },
    ],
  },
  {
    accommodationId: 'ee9e3ddf-bc17-4a3a-81fc-214ca192826e',
    title: 'Seaside Villa with Oceanfront Views',
    description:
      'Escape to our seaside villa and experience the beauty of oceanfront living. With its ocean views, private beach access, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 3227,
    rating: 42,
    unavailableDates: [
      {
        start: '2024-04-30',
        end: '2024-05-03',
      },
      {
        start: '2024-05-12',
        end: '2024-05-16',
      },
      {
        start: '2024-05-27',
        end: '2024-06-04',
      },
      {
        start: '2024-06-14',
        end: '2024-06-16',
      },
      {
        start: '2024-06-19',
        end: '2024-06-25',
      },
      {
        start: '2024-06-28',
        end: '2024-07-02',
      },
      {
        start: '2024-07-12',
        end: '2024-07-14',
      },
      {
        start: '2024-07-23',
        end: '2024-08-02',
      },
      {
        start: '2024-08-05',
        end: '2024-08-16',
      },
      {
        start: '2024-08-20',
        end: '2024-08-24',
      },
      {
        start: '2024-09-05',
        end: '2024-09-15',
      },
      {
        start: '2024-09-21',
        end: '2024-09-30',
      },
      {
        start: '2024-10-07',
        end: '2024-10-12',
      },
      {
        start: '2024-10-21',
        end: '2024-10-22',
      },
      {
        start: '2024-10-30',
        end: '2024-11-01',
      },
    ],
  },
  {
    accommodationId: '8a826b38-5ed4-4777-bff6-068f4a8a3376',
    title: 'Luxury Beachfront Villa with Private Beach Access',
    description:
      'Indulge in luxury in our beachfront villa. With its private beach access, stunning ocean views, and modern amenities, this luxurious retreat offers the perfect beachside escape.',
    price: 6924,
    rating: 36,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-04-30',
      },
      {
        start: '2024-05-06',
        end: '2024-05-08',
      },
      {
        start: '2024-05-14',
        end: '2024-05-17',
      },
      {
        start: '2024-05-20',
        end: '2024-05-30',
      },
      {
        start: '2024-06-09',
        end: '2024-06-19',
      },
      {
        start: '2024-06-26',
        end: '2024-07-06',
      },
      {
        start: '2024-07-18',
        end: '2024-07-28',
      },
      {
        start: '2024-07-30',
        end: '2024-08-03',
      },
      {
        start: '2024-08-12',
        end: '2024-08-23',
      },
      {
        start: '2024-08-29',
        end: '2024-09-08',
      },
      {
        start: '2024-09-20',
        end: '2024-09-27',
      },
      {
        start: '2024-10-04',
        end: '2024-10-11',
      },
      {
        start: '2024-10-17',
        end: '2024-10-23',
      },
      {
        start: '2024-11-04',
        end: '2024-11-14',
      },
      {
        start: '2024-11-26',
        end: '2024-12-01',
      },
      {
        start: '2024-12-04',
        end: '2024-12-09',
      },
      {
        start: '2024-12-11',
        end: '2024-12-18',
      },
      {
        start: '2024-12-29',
        end: '2025-01-09',
      },
    ],
  },
  {
    accommodationId: '9ecbab3f-203c-47db-bb7e-7acb4460dead',
    title: 'Brazilian Paradise Retreat with Infinity Pool',
    description:
      'Escape to paradise in our Brazilian retreat. With its infinity pool, lush gardens, and stunning ocean views, this luxurious getaway offers the ultimate beachside escape.',
    price: 6899,
    rating: 36,
    unavailableDates: [
      {
        start: '2024-04-22',
        end: '2024-04-30',
      },
      {
        start: '2024-05-03',
        end: '2024-05-14',
      },
      {
        start: '2024-05-24',
        end: '2024-06-01',
      },
      {
        start: '2024-06-12',
        end: '2024-06-17',
      },
      {
        start: '2024-06-25',
        end: '2024-07-06',
      },
      {
        start: '2024-07-15',
        end: '2024-07-19',
      },
      {
        start: '2024-07-23',
        end: '2024-07-24',
      },
      {
        start: '2024-07-31',
        end: '2024-08-10',
      },
      {
        start: '2024-08-13',
        end: '2024-08-17',
      },
      {
        start: '2024-08-25',
        end: '2024-09-05',
      },
      {
        start: '2024-09-12',
        end: '2024-09-20',
      },
      {
        start: '2024-10-01',
        end: '2024-10-02',
      },
      {
        start: '2024-10-04',
        end: '2024-10-06',
      },
      {
        start: '2024-10-15',
        end: '2024-10-21',
      },
      {
        start: '2024-11-02',
        end: '2024-11-12',
      },
      {
        start: '2024-11-19',
        end: '2024-11-21',
      },
      {
        start: '2024-11-28',
        end: '2024-12-01',
      },
      {
        start: '2024-12-12',
        end: '2024-12-14',
      },
      {
        start: '2024-12-26',
        end: '2025-01-01',
      },
    ],
  },
  {
    accommodationId: '9165a445-b8b8-4caf-b6e9-e4fe46abb237',
    title: 'Secluded Beachfront Villa with Panoramic Ocean Views',
    description:
      'Experience the beauty of oceanfront living in our secluded villa. With its panoramic ocean views, private beach access, and serene atmosphere, this charming retreat offers the perfect beachside getaway.',
    price: 5046,
    rating: 37,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-06',
      },
      {
        start: '2024-05-13',
        end: '2024-05-19',
      },
      {
        start: '2024-05-23',
        end: '2024-06-02',
      },
      {
        start: '2024-06-11',
        end: '2024-06-17',
      },
      {
        start: '2024-06-25',
        end: '2024-06-28',
      },
      {
        start: '2024-07-04',
        end: '2024-07-12',
      },
      {
        start: '2024-07-18',
        end: '2024-07-19',
      },
      {
        start: '2024-07-27',
        end: '2024-08-04',
      },
      {
        start: '2024-08-08',
        end: '2024-08-17',
      },
      {
        start: '2024-08-25',
        end: '2024-08-30',
      },
      {
        start: '2024-09-04',
        end: '2024-09-15',
      },
      {
        start: '2024-09-24',
        end: '2024-09-25',
      },
      {
        start: '2024-10-06',
        end: '2024-10-17',
      },
      {
        start: '2024-10-25',
        end: '2024-11-03',
      },
      {
        start: '2024-11-05',
        end: '2024-11-07',
      },
      {
        start: '2024-11-16',
        end: '2024-11-22',
      },
    ],
  },
  {
    accommodationId: 'b1736acd-68a2-43b5-9397-7c826e3b6842',
    title: 'Beachfront Cottage with Ocean Views',
    description:
      'Escape to our beachfront cottage and experience the beauty of oceanfront living. With its ocean views, cozy interiors, and private beach access, this charming retreat offers the perfect beachside getaway.',
    price: 5647,
    rating: 37,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-04-25',
      },
      {
        start: '2024-04-29',
        end: '2024-05-01',
      },
      {
        start: '2024-05-08',
        end: '2024-05-10',
      },
      {
        start: '2024-05-14',
        end: '2024-05-21',
      },
      {
        start: '2024-05-27',
        end: '2024-06-02',
      },
      {
        start: '2024-06-09',
        end: '2024-06-18',
      },
      {
        start: '2024-06-23',
        end: '2024-06-29',
      },
      {
        start: '2024-07-06',
        end: '2024-07-16',
      },
      {
        start: '2024-07-27',
        end: '2024-07-29',
      },
      {
        start: '2024-08-05',
        end: '2024-08-12',
      },
      {
        start: '2024-08-17',
        end: '2024-08-26',
      },
      {
        start: '2024-09-04',
        end: '2024-09-08',
      },
      {
        start: '2024-09-19',
        end: '2024-09-21',
      },
      {
        start: '2024-09-24',
        end: '2024-09-25',
      },
      {
        start: '2024-10-01',
        end: '2024-10-06',
      },
      {
        start: '2024-10-08',
        end: '2024-10-19',
      },
    ],
  },
  {
    accommodationId: '6ed1a7f0-9772-4413-a35d-6867c8105a25',
    title: 'Tropical Villa with Private Pool',
    description:
      'Indulge in luxury in our tropical villa. With its private pool, lush gardens, and stunning ocean views, this charming retreat offers the perfect beachside escape.',
    price: 3939,
    rating: 42,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-05-03',
      },
      {
        start: '2024-05-05',
        end: '2024-05-10',
      },
      {
        start: '2024-05-18',
        end: '2024-05-20',
      },
      {
        start: '2024-05-30',
        end: '2024-06-10',
      },
      {
        start: '2024-06-20',
        end: '2024-06-21',
      },
      {
        start: '2024-07-01',
        end: '2024-07-04',
      },
      {
        start: '2024-07-11',
        end: '2024-07-20',
      },
      {
        start: '2024-07-26',
        end: '2024-08-06',
      },
      {
        start: '2024-08-08',
        end: '2024-08-13',
      },
      {
        start: '2024-08-19',
        end: '2024-08-30',
      },
      {
        start: '2024-09-08',
        end: '2024-09-17',
      },
      {
        start: '2024-09-29',
        end: '2024-10-08',
      },
      {
        start: '2024-10-16',
        end: '2024-10-24',
      },
      {
        start: '2024-11-02',
        end: '2024-11-05',
      },
      {
        start: '2024-11-09',
        end: '2024-11-17',
      },
      {
        start: '2024-11-28',
        end: '2024-12-01',
      },
    ],
  },
  {
    accommodationId: 'a5674d2c-8ce2-46f4-bd9b-8822dcb69669',
    title: 'Brazilian Beachfront Chalet',
    description:
      'Experience the beauty of Brazil in our beachfront chalet. With its cozy interiors, stunning ocean views, and private beach access, this charming retreat offers the perfect beachside getaway.',
    price: 7933,
    rating: 48,
    unavailableDates: [
      {
        start: '2024-04-28',
        end: '2024-05-05',
      },
      {
        start: '2024-05-10',
        end: '2024-05-17',
      },
      {
        start: '2024-05-28',
        end: '2024-05-31',
      },
      {
        start: '2024-06-03',
        end: '2024-06-05',
      },
      {
        start: '2024-06-11',
        end: '2024-06-22',
      },
      {
        start: '2024-07-04',
        end: '2024-07-08',
      },
      {
        start: '2024-07-19',
        end: '2024-07-29',
      },
      {
        start: '2024-08-10',
        end: '2024-08-18',
      },
      {
        start: '2024-08-25',
        end: '2024-08-28',
      },
      {
        start: '2024-09-03',
        end: '2024-09-14',
      },
      {
        start: '2024-09-17',
        end: '2024-09-27',
      },
      {
        start: '2024-10-06',
        end: '2024-10-14',
      },
      {
        start: '2024-10-25',
        end: '2024-11-02',
      },
      {
        start: '2024-11-07',
        end: '2024-11-08',
      },
      {
        start: '2024-11-12',
        end: '2024-11-20',
      },
      {
        start: '2024-12-01',
        end: '2024-12-07',
      },
      {
        start: '2024-12-09',
        end: '2024-12-16',
      },
      {
        start: '2024-12-22',
        end: '2024-12-30',
      },
      {
        start: '2025-01-07',
        end: '2025-01-14',
      },
    ],
  },
  {
    accommodationId: 'eb0294d9-eb87-4219-acf2-b508a8ddf1d6',
    title: 'Seaside Retreat with Private Pool',
    description:
      'Indulge in luxury in our seaside retreat. With its private pool, stunning ocean views, and modern amenities, this luxurious getaway offers the ultimate beachside escape.',
    price: 3104,
    rating: 48,
    unavailableDates: [
      {
        start: '2024-04-23',
        end: '2024-04-26',
      },
      {
        start: '2024-05-04',
        end: '2024-05-13',
      },
      {
        start: '2024-05-22',
        end: '2024-06-01',
      },
      {
        start: '2024-06-04',
        end: '2024-06-13',
      },
      {
        start: '2024-06-25',
        end: '2024-06-26',
      },
      {
        start: '2024-07-07',
        end: '2024-07-08',
      },
      {
        start: '2024-07-13',
        end: '2024-07-19',
      },
      {
        start: '2024-07-24',
        end: '2024-07-31',
      },
      {
        start: '2024-08-09',
        end: '2024-08-18',
      },
      {
        start: '2024-08-28',
        end: '2024-08-31',
      },
      {
        start: '2024-09-11',
        end: '2024-09-17',
      },
      {
        start: '2024-09-19',
        end: '2024-09-29',
      },
      {
        start: '2024-10-09',
        end: '2024-10-10',
      },
      {
        start: '2024-10-19',
        end: '2024-10-28',
      },
      {
        start: '2024-11-01',
        end: '2024-11-08',
      },
      {
        start: '2024-11-18',
        end: '2024-11-26',
      },
      {
        start: '2024-12-02',
        end: '2024-12-12',
      },
      {
        start: '2024-12-15',
        end: '2024-12-24',
      },
      {
        start: '2025-01-05',
        end: '2025-01-12',
      },
    ],
  },
  {
    accommodationId: 'c1886811-50ed-46c3-bbdb-f14930f430e3',
    title: 'Luxury Beachfront Villa with Oceanfront Views',
    description:
      'Indulge in luxury in our beachfront villa. With its oceanfront views, private beach access, and modern amenities, this luxurious retreat offers the perfect beachside escape.',
    price: 4389,
    rating: 45,
    unavailableDates: [
      {
        start: '2024-04-27',
        end: '2024-04-29',
      },
      {
        start: '2024-05-04',
        end: '2024-05-10',
      },
      {
        start: '2024-05-21',
        end: '2024-05-22',
      },
      {
        start: '2024-05-26',
        end: '2024-06-06',
      },
      {
        start: '2024-06-11',
        end: '2024-06-16',
      },
      {
        start: '2024-06-26',
        end: '2024-06-28',
      },
      {
        start: '2024-07-03',
        end: '2024-07-12',
      },
      {
        start: '2024-07-20',
        end: '2024-07-28',
      },
      {
        start: '2024-08-09',
        end: '2024-08-10',
      },
      {
        start: '2024-08-20',
        end: '2024-08-26',
      },
      {
        start: '2024-09-01',
        end: '2024-09-10',
      },
      {
        start: '2024-09-12',
        end: '2024-09-23',
      },
      {
        start: '2024-10-01',
        end: '2024-10-04',
      },
      {
        start: '2024-10-13',
        end: '2024-10-21',
      },
      {
        start: '2024-10-25',
        end: '2024-11-03',
      },
      {
        start: '2024-11-06',
        end: '2024-11-16',
      },
      {
        start: '2024-11-27',
        end: '2024-12-01',
      },
      {
        start: '2024-12-07',
        end: '2024-12-10',
      },
      {
        start: '2024-12-14',
        end: '2024-12-19',
      },
      {
        start: '2024-12-22',
        end: '2024-12-23',
      },
      {
        start: '2024-12-25',
        end: '2025-01-02',
      },
    ],
  },
  {
    accommodationId: 'f598e584-6a9d-4ab8-9d4c-7eb7d1765bd0',
    title: 'Brazilian Beachfront Resort with Private Pool',
    description:
      'Experience luxury in our Brazilian beachfront resort. With its private pool, stunning ocean views, and luxurious amenities, this luxurious retreat offers the ultimate beachside escape.',
    price: 4815,
    rating: 46,
    unavailableDates: [
      {
        start: '2024-04-30',
        end: '2024-05-04',
      },
      {
        start: '2024-05-11',
        end: '2024-05-12',
      },
      {
        start: '2024-05-17',
        end: '2024-05-20',
      },
      {
        start: '2024-05-26',
        end: '2024-06-06',
      },
      {
        start: '2024-06-17',
        end: '2024-06-20',
      },
      {
        start: '2024-06-24',
        end: '2024-07-02',
      },
      {
        start: '2024-07-07',
        end: '2024-07-08',
      },
      {
        start: '2024-07-17',
        end: '2024-07-21',
      },
      {
        start: '2024-07-30',
        end: '2024-08-01',
      },
      {
        start: '2024-08-12',
        end: '2024-08-19',
      },
      {
        start: '2024-08-23',
        end: '2024-08-31',
      },
      {
        start: '2024-09-07',
        end: '2024-09-16',
      },
      {
        start: '2024-09-20',
        end: '2024-09-26',
      },
      {
        start: '2024-10-02',
        end: '2024-10-09',
      },
      {
        start: '2024-10-20',
        end: '2024-10-27',
      },
      {
        start: '2024-11-03',
        end: '2024-11-04',
      },
      {
        start: '2024-11-11',
        end: '2024-11-22',
      },
      {
        start: '2024-11-27',
        end: '2024-12-01',
      },
      {
        start: '2024-12-08',
        end: '2024-12-11',
      },
      {
        start: '2024-12-18',
        end: '2024-12-19',
      },
      {
        start: '2024-12-26',
        end: '2024-12-30',
      },
      {
        start: '2025-01-07',
        end: '2025-01-14',
      },
    ],
  },
];
