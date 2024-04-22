import { Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import { Accommodation } from '@/store/Accommodation';
import ImageCover from '../ImageCover';

interface AccommodationCardProps {
  accommodation: Accommodation;
  onClick?: () => void;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({
  accommodation,
  onClick,
}) => {
  if (!accommodation) return null;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="flex flex-col border rounded-md shadow-md hover:shadow-xl duration-300 p-4 bg-gray-50"
      onClick={handleClick}
      style={{ maxWidth: 500 }}
    >
      <ImageCover
        alt={accommodation.title}
        src={accommodation.id}
        minHeight={300}
      />
      <div className="flex flex-col flex-grow pt-4">
        <div className="flex justify-between items-center">
          <Typography className="truncate">{accommodation.title}</Typography>
          <div className="flex items-center gap-1">
            <StarIcon sx={{ color: 'black', height: 18 }} />
            <Typography>{(accommodation.rating / 10).toFixed(1)}</Typography>
          </div>
        </div>
        <div className="flex justify-end ">
          <Typography>$ {(accommodation.price / 100).toFixed(2)}</Typography>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
