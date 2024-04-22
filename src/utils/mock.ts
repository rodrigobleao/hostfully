import { Booking } from '@/store/Booking';
import { mock } from '../../public/mock/mock_data';
import dayjs from 'dayjs';
import { Accommodation } from '@/store/Accommodation';
import { v4 as uuidv4 } from 'uuid';

export const populateBookingsFromMock = (): Booking[] => {
  return mock.flatMap((data) =>
    data.unavailableDates.map((dateRange) => ({
      id: uuidv4.toString(),
      userId: '0',
      accommodationId: data.accommodationId,
      checkInDate: dayjs(dateRange.start),
      checkOutDate: dayjs(dateRange.end),
    }))
  );
};

export const populateAccommodationsFromMock = (): Accommodation[] => {
  return mock.map((data) => ({
    id: data.accommodationId,
    title: data.title,
    description: data.description,
    price: data.price,
    rating: data.rating,
    unavailableDates: data.unavailableDates,
  }));
};
