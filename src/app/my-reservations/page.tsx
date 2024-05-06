'use client';

import AccommodationCard from '@/components/AccommodationCard';
import { CustomButtonProps } from '@/components/Button';
import DateRangePicker from '@/components/DateRangePicker';
import MenuComponent, { MenuOptions } from '@/components/Menu';
import CustomModal from '@/components/Modal';
import { useAccommodationStore, useBookingStore } from '@/store';
import { Booking } from '@/types';
import { Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
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
    setUpdatedCheckOutDate(undefined);
    setCurrentStep(0);
  };

  const handleAccommodationCardClick = (booking: Booking) => {
    setSelectedReservation(booking);
    setIsModalOpen(true);
  };

  const handleRemoveBooking = (bookingId: Booking['id']) => {
    removeBooking(bookingId);
    handleModalClose();
  };

  const handleUpdateAccommodationDate = () => {
    selectedReservation &&
      (currentStep === 0
        ? setCurrentStep(1)
        : (() => {
            updateBooking({
              bookingId: selectedReservation.id,
              newDetails: {
                checkInDate: updatedCheckInDate,
                checkOutDate: updatedCheckOutDate,
              },
            });
            handleModalClose();
          })());
  };

  const modalButtons: CustomButtonProps[] = [
    {
      onClick: handleUpdateAccommodationDate,
      label: 'Edit',
      disabled:
        currentStep !== 0 && (!updatedCheckInDate || !updatedCheckOutDate),
    },
  ];

  if (currentStep === 0) {
    modalButtons.unshift({
      onClick: () =>
        selectedReservation && handleRemoveBooking(selectedReservation.id),
      label: 'Cancel reservation',
      disabled: !selectedReservation,
      styleVariant: 'danger',
    });
  }

  return (
    <main className="flex flex-col justify-center">
      <MenuComponent active={MenuOptions['/my-reservations']} />
      <div
        className={`'max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-24`}
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
          buttons={modalButtons}
        >
          {currentStep === 0 && selectedReservation ? (
            <div>
              <Typography variant="body1">Your reservation details:</Typography>
              <Typography variant="body1" className="pt-3">
                <strong>Check-in:</strong>
                {selectedReservation.checkInDate.format('MMMM D, YYYY')}
              </Typography>
              <Typography variant="body1">
                <strong>Check-out:</strong>
                {selectedReservation.checkOutDate.format('MMMM D, YYYY')}
              </Typography>
            </div>
          ) : (
            selectedReservation && (
              <div>
                <DateRangePicker
                  unavailableDates={findBookings({
                    key: 'accommodationId',
                    value: selectedReservation.accommodationId,
                  }).filter((booking) => booking.id !== selectedReservation.id)}
                  checkIn={
                    updatedCheckInDate || selectedReservation.checkInDate
                  }
                  checkOut={
                    updatedCheckOutDate
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
