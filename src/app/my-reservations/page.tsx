'use client';

import AccommodationCard from '@/components/AccommodationCard';
import DateRangePicker from '@/components/DateRangePicker';
import MenuComponent, { MenuOptions } from '@/components/Menu';
import CustomModal from '@/components/Modal';
import { useAccommodationStore, useBookingStore } from '@/store';
import { Booking } from '@/store/Booking';
import { Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

function MyReservations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<Booking>();
  const [currentStep, setCurrentStep] = useState(0);
  const [updatedCheckInDate, setUpdatedCheckInDate] = useState<
    Dayjs | undefined
  >();
  const [updatedCheckOutDate, setUpdatedCheckOutDate] = useState<
    Dayjs | undefined
  >();

  const { findBookings, removeBooking, updateBooking } = useBookingStore();
  const { getAccommodation } = useAccommodationStore();

  const userReservations = findBookings({ key: 'userId', value: '1' });

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedReservation(undefined);
    setUpdatedCheckInDate(undefined);
    setCurrentStep(0);
  };

  const handleAccommodationCardClick = (booking: Booking) => {
    setSelectedReservation(booking);
    setIsModalOpen(true);
  };

  const handleRemoveBooking = (bookingId: Booking['id']) => {
    removeBooking(bookingId);
    setIsModalOpen(false);
    setCurrentStep(0);
  };

  const handleUpdate = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else {
      selectedReservation &&
        updateBooking({
          bookingId: selectedReservation.id,
          newDetails: {
            checkInDate: updatedCheckInDate,
            checkOutDate: updatedCheckOutDate,
          },
        });
      setIsModalOpen(false);
      setCurrentStep(0);
    }
  };

  const maxWidth =
    userReservations.length >= 4 ? 'max-w-[1920px]' : 'max-w-[1720px]';

  return (
    <main className="flex flex-col justify-center">
      <MenuComponent active={MenuOptions['/my-reservations']} />
      <div
        className={`${maxWidth} mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-24 gap-4 px-24`}
      >
        {userReservations.map((reservation) => {
          const reservationAccommodation = getAccommodation(
            reservation.accommodationId
          );
          return (
            reservationAccommodation && (
              <div key={reservation.id}>
                <AccommodationCard
                  accommodation={reservationAccommodation}
                  onClick={() => handleAccommodationCardClick(reservation)}
                />
              </div>
            )
          );
        })}
        <CustomModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          rightButtonLabel="Edit"
          isRightActionDisabled={!selectedReservation}
          onRightButtonAction={handleUpdate}
          leftButtonLabel="Cancel reservation"
          leftButtonStyle="danger"
          isLeftActionDisabled={!selectedReservation}
          onLeftButtonAction={() =>
            selectedReservation && handleRemoveBooking(selectedReservation.id)
          }
        >
          {currentStep === 0 ? (
            <div className="p-8">
              <Typography variant="body1">Your reservation details:</Typography>
              <Typography variant="body1" className="pt-3">
                <strong>Check-in:</strong>
                {selectedReservation?.checkInDate.format('MMMM D, YYYY')}
              </Typography>
              <Typography variant="body1">
                <strong>Check-out:</strong>
                {selectedReservation?.checkOutDate.format('MMMM D, YYYY')}
              </Typography>
            </div>
          ) : (
            selectedReservation && (
              <div className="p-6">
                <DateRangePicker
                  unavailableDates={findBookings({
                    key: 'accommodationId',
                    value: selectedReservation.accommodationId,
                  }).filter((booking) => booking.id !== selectedReservation.id)}
                  checkIn={
                    updatedCheckInDate || selectedReservation.checkInDate
                  }
                  checkOut={
                    updatedCheckInDate
                      ? updatedCheckOutDate
                      : selectedReservation.checkOutDate
                  }
                  onCheckInChange={(date) => setUpdatedCheckInDate(date)}
                  onCheckOutChange={(date) => setUpdatedCheckOutDate(date)}
                />
              </div>
            )
          )}
        </CustomModal>
      </div>
    </main>
  );
}

export default MyReservations;
