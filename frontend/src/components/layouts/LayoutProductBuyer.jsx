import React, { Fragment } from 'react';
import ProductBuyer from '../pages/ProductBuyer';
import NavbarHome from '../pages/components/NavbarHome';

export default function LayoutProductBuyer() {
  return (
    <Fragment>
      <NavbarHome />
      <ProductBuyer />
    </Fragment>
  );
}
