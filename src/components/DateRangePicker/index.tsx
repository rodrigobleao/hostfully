import React, { useState } from 'react';
import CustomDatePicker, { UnavailableDate } from '../DatePicker';
import { Dayjs } from 'dayjs';
import { Booking } from '@/store/Booking';

interface DateRangePickerProps {
  unavailableDates: Booking[];
  checkIn: Dayjs | undefined;
  checkOut: Dayjs | undefined;
  onCheckInChange: (date: Dayjs | undefined) => void;
  onCheckOutChange: (date: Dayjs | undefined) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  unavailableDates,
  checkIn,
  onCheckInChange,
  checkOut,
  onCheckOutChange,
}) => {
  const handleCheckIn = (date: Dayjs) => {
    onCheckInChange(date);
    if (checkIn && checkOut && checkOut > checkIn) {
      onCheckOutChange(undefined);
    }
  };

  return (
    <div className="flex gap-3 w-full">
      <CustomDatePicker
        unavailableDates={unavailableDates}
        value={checkIn}
        onChange={(date) => handleCheckIn(date)}
        label="Check In"
      />
      <CustomDatePicker
        unavailableDates={unavailableDates}
        value={checkOut}
        onChange={onCheckOutChange}
        label="Check Out"
        startDate={checkIn}
        handleBookingOverlap
        disabled={!checkIn}
      />
    </div>
  );
};

export default DateRangePicker;
