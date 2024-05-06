import { Dayjs } from 'dayjs';

export interface Booking {
  id: string;
  userId: string;
  accommodationId: string;
  checkInDate: Dayjs;
  checkOutDate: Dayjs;
}
