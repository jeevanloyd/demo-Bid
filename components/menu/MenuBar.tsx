import React, { FunctionComponent } from 'react';
import Cart from '../svg/Cart';
import { MenuItem } from './MenuItem';
import { MenuLogo } from './MenuLogo';

export const MenuBar: FunctionComponent = () => {
  return (
    <nav className="flex items-center w-full h-12 bg-slate-100 rounded-lg px-6">
      <MenuLogo />
      <MenuItem name="Home" />
      <MenuItem name="Manage Product" />
      <div className="ml-auto">
        <Cart />
      </div>
    </nav>
  );
};
