import dayjs from 'dayjs';

type calculateStayTotalArgs = {
  checkIn: dayjs.Dayjs;
  checkOut: dayjs.Dayjs;
  ratePerDay: number;
};

export const calculateStayTotal = ({
  checkIn,
  checkOut,
  ratePerDay,
}: calculateStayTotalArgs): number => {
  const totalDays = checkOut.diff(checkIn, 'day');
  return totalDays * ratePerDay;
};
