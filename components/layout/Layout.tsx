import React, { FunctionComponent } from 'react';
import { Card } from '../card/Card';
import { MenuBar } from '../menu/MenuBar';

export const Layout: FunctionComponent = () => {
  return (
    <div className="w-full my-2 md:mx-auto md:w-3/5">
      <MenuBar />      
    </div>
  );
};
