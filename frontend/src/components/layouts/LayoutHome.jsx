import React, { Fragment } from 'react';
import Home from '../pages/Home';
import NavbarHome from '../pages/components/NavbarHome';

export default function LayoutHome() {
  return (
    <Fragment>
      <NavbarHome />
      <Home />
    </Fragment>
  );
}
