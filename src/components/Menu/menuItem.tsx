import { Typography } from '@mui/material';
import Link from 'next/link';

export interface MenuItemProps {
  href: string;
  text: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, text, active }) => {
  const activeMenuOption = 'text-blue-600 font-extrabold';

  const menuOption = `px-4 cursor-pointer ${
    active ? 'hover:text-blue-500' : 'hover:text-gray-700'
  } ${active ? activeMenuOption : ''}`;

  return (
    <Link href={href} passHref>
      <Typography className={menuOption}>{text}</Typography>
    </Link>
  );
};

export default MenuItem;
