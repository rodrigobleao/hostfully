import { populateBookingsFromMock } from '@/utils/mock';
import dayjs, { Dayjs } from 'dayjs';
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Booking } from '@/types';

interface BookingMock extends Omit<Booking, 'checkInDate' | 'checkOutDate'> {
  checkInDate: string;
  checkOutDate: string;
}

interface FindBookingsArgs {
  key: keyof Booking;
  value: string;
}

interface UpdateBookingArgs {
  bookingId: string;
  newDetails: Partial<Booking>;
}

const dayJsToString = (date: Dayjs): string => {
  return date.toString();
};

const stringToDayjs = (dateString: string): Dayjs => {
  return dayjs(dateString);
};

const localStorageKey = 'bookingStore';

interface BookingStore {
  bookings: Booking[];
  createBooking: (booking: Omit<Booking, 'id'>) => void;
  getBooking: (bookingId: string) => Booking | undefined;
  removeBooking: (bookingId: string) => void;
  updateBooking: (args: UpdateBookingArgs) => void;
  findBookings: (args: FindBookingsArgs) => Booking[];
}

const bookingStore = create<BookingStore>((set, get) => {
  const loadFromLocalStorage = (): Booking[] => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem(localStorageKey);
      if (storedData) {
        return JSON.parse(storedData).bookings.map((booking: BookingMock) => ({
          ...booking,
          checkInDate: stringToDayjs(booking.checkInDate),
          checkOutDate: stringToDayjs(booking.checkOutDate),
        }));
      }
      return populateBookingsFromMock().map((booking) => ({
        ...booking,
        checkInDate: booking.checkInDate,
        checkOutDate: booking.checkOutDate,
      }));
    }
    return [];
  };

  const updateStorage = (updatedBookings: Booking[]) => {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify({
        bookings: updatedBookings.map((booking) => ({
          ...booking,
          checkInDate: dayJsToString(booking.checkInDate),
          checkOutDate: dayJsToString(booking.checkOutDate),
        })),
      })
    );
  };

  return {
    bookings: loadFromLocalStorage(),

    createBooking: (booking) =>
      set((state) => {
        const newBooking = { ...booking, id: uuidv4() };
        const updatedBookings = [newBooking, ...state.bookings];
        updateStorage(updatedBookings);
        return { bookings: updatedBookings };
      }),

    removeBooking: (bookingId) =>
      set((state) => {
        const updatedBookings = state.bookings.filter(
          (booking) => booking.id !== bookingId
        );
        updateStorage(updatedBookings);
        return { bookings: updatedBookings };
      }),

    updateBooking: ({ bookingId, newDetails }) =>
      set((state) => {
        const updatedBookings = state.bookings.map((booking) =>
          booking.id === bookingId ? { ...booking, ...newDetails } : booking
        );
        updateStorage(updatedBookings);
        return { bookings: updatedBookings };
      }),

    getBooking: (bookingId) =>
      get().bookings.find((booking) => booking.id === bookingId),

    findBookings: ({ key, value }) => {
      const bookings = get().bookings.filter(
        (booking) => booking[key] === value
      );
      return bookings;
    },
  };
});

export default bookingStore;
