import React from 'react';
import MenuItem, { MenuItemProps } from './menuItem';

const Menu: React.FC<{
  menuOptions: MenuItemProps[];
  active?: string;
}> = ({ menuOptions, active }) => {
  return (
    <div className="bg-gray-200 py-4 mb-8 shadow-xl">
      <div className="container mx-auto flex justify-center">
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            href={option.href}
            text={option.text}
            active={option.text === active}
          />
        ))}
      </div>
    </div>
  );
};

export enum MenuOptions {
  '/' = 'Home',
  '/my-reservations' = 'My reservations',
}

const menuOptionsArray: MenuItemProps[] = Object.entries(MenuOptions).map(
  ([href, text]) => ({ href, text })
);

const MenuComponent: React.FC<{
  active?: MenuOptions;
}> = ({ active }) => <Menu menuOptions={menuOptionsArray} active={active} />;

export default MenuComponent;
