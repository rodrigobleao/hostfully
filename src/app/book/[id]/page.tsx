'use client';

import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useAccommodationStore, useBookingStore } from '@/store';
import DateRangePicker from '@/components/DateRangePicker';
import CustomButton from '@/components/Button';
import ImageCover from '@/components/ImageCover';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { calculateStayTotal } from '@/utils';
import { useRouter } from 'next/navigation';
import CustomModal from '@/components/Modal';

type BookProps = {
  params: { id: string };
};

export default function Book({ params }: BookProps) {
  const router = useRouter();
  const { id: accommodationId } = params;
  const { findBookings, createBooking } = useBookingStore();
  const { getAccommodation } = useAccommodationStore();

  const bookingsDateArray = findBookings({
    key: 'accommodationId',
    value: accommodationId,
  });
  const accommodation = getAccommodation(accommodationId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Dayjs | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Dayjs | undefined>(undefined);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalAction = () => {
    if (checkIn && checkOut) {
      createBooking({
        userId: '1',
        accommodationId,
        checkInDate: checkIn,
        checkOutDate: checkOut,
      });

      router.push('/my-reservations');
    }

    setIsModalOpen(false);
  };

  if (!accommodation) return null;

  const { title, description, rating, price: rawPrice } = accommodation;
  const ratePerDay = (rawPrice / 100).toFixed(2);

  return (
    <main className="flex flex-col pt-24 px-24 max-w-[1120px] mx-auto lg:flex-row md:gap-8 items-end">
      <div className="flex flex-col gap-4">
        <Typography variant="h4">{title}</Typography>
        <ImageCover alt={title} src={accommodationId} minHeight={500} />
        <div className="flex flex-col lg:flex-row mt-4 gap-6">
          <div className="flex flex-col gap-3">
            <Typography className="break-words text-lg">
              {description}
            </Typography>
          </div>
          <div className="flex flex-col gap-2 items-end justify-center lg:w-2/5 flex-shrink-0 p-4 border rounded-md shadow-md">
            <div className="flex flex-row gap-1 items-center">
              <StarIcon sx={{ color: 'black', height: 18 }} />
              <Typography>{(rating / 10).toFixed(1)}</Typography>
            </div>
            <Typography variant="body1">${ratePerDay}</Typography>
            <div className="flex flex-col w-full items-center gap-3">
              <DateRangePicker
                unavailableDates={bookingsDateArray}
                checkIn={checkIn}
                onCheckInChange={setCheckIn}
                checkOut={checkOut}
                onCheckOutChange={setCheckOut}
              />
              <CustomButton
                className="w-full"
                onClick={() => setIsModalOpen(true)}
                disabled={!checkIn || !checkOut}
              >
                Book
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        rightButtonLabel="Book"
        onRightButtonAction={handleModalAction}
        isRightActionDisabled={!checkIn || !checkOut}
      >
        {checkIn && checkOut ? (
          <div className="p-4">
            <Typography variant="body1">
              You&apos;re about to book the following dates:
            </Typography>
            <Typography variant="body1" className="mt-3">
              <strong>Check-in:</strong> {checkIn.format('MMMM D, YYYY')}
            </Typography>
            <Typography variant="body1">
              <strong>Check-out:</strong> {checkOut.format('MMMM D, YYYY')}
            </Typography>
            <Typography variant="body1" className="mt-3">
              <strong>Total: </strong>$
              {calculateStayTotal({
                checkIn,
                checkOut,
                ratePerDay: parseFloat(ratePerDay),
              }).toFixed(2)}
            </Typography>
            <Typography variant="body2" className="text-gray-500 mt-3">
              Please confirm that the dates are correct before proceeding.
            </Typography>
          </div>
        ) : (
          <Typography>No dates selected</Typography>
        )}
      </CustomModal>
    </main>
  );
}
