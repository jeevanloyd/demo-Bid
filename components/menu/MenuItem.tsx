import React, { FunctionComponent } from 'react';

interface MenuItemProps {
  name: string;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({ name }) => {
  return <div className="px-4 cursor-pointer hover:text-violet-600">{name}</div>;
};
