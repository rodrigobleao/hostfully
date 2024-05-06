import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Booking } from '@/types';

interface CustomDatePickerProps {
  unavailableDates: Booking[];
  startDate?: Dayjs | undefined;
  handleBookingOverlap?: boolean;
  value?: Dayjs | null;
  label?: string;
  onChange: (date: Dayjs) => void;
  disabled?: boolean;
  className?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  unavailableDates,
  startDate,
  handleBookingOverlap,
  value,
  label,
  onChange,
  disabled = false,
  className,
}) => {
  const disableDates = (unavailableDates: Booking[], date: Dayjs): boolean => {
    return unavailableDates.some((booking) => {
      return (
        date.isAfter(
          booking.checkInDate.subtract(handleBookingOverlap ? 0 : 1, 'day')
        ) && date.isBefore(booking.checkOutDate.add(1, 'day'))
      );
    });
  };

  const getMaxDate = (startDate?: Dayjs): Dayjs | undefined => {
    let currentDate = dayjs(startDate);
    const maxPossibleDate = currentDate.add(2, 'year');

    if (!startDate || !handleBookingOverlap) return maxPossibleDate;

    while (currentDate.isBefore(maxPossibleDate)) {
      if (disableDates(unavailableDates, currentDate)) {
        return currentDate;
      }
      currentDate = currentDate.add(1, 'day');
    }

    return currentDate;
  };

  const defaultClassName = 'w-full';

  const combinedClasses = `${defaultClassName} ${className || ''}`;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        disablePast
        disableHighlightToday
        minDate={startDate}
        maxDate={getMaxDate(startDate)}
        value={value || null}
        onChange={(date) => (date ? onChange(date) : null)}
        shouldDisableDate={(date) =>
          disableDates(
            handleBookingOverlap && startDate
              ? [
                  {
                    id: '0',
                    accommodationId: '0',
                    userId: '0',
                    checkInDate: startDate.subtract(1, 'day'),
                    checkOutDate: startDate,
                  },
                  ...unavailableDates,
                ]
              : unavailableDates,
            date
          )
        }
        disabled={disabled}
        className={combinedClasses}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
