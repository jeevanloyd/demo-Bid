import React, { FunctionComponent } from 'react';
import { Card } from '../card/Card';
import FooterComponent from '../footer/FooterComponent';
import { MenuBar } from '../menu/MenuBar';
import MainComponent from './MainComponent';

export const Layout: FunctionComponent = () => {
  return (
    <div className="w-full my-2">
      <MenuBar />
      
      <MainComponent />
      <FooterComponent />
    </div>
  );
};
