import React, { Fragment } from 'react';
import ProductSeller from '../pages/ProductSeller';
import NavbarHome from '../pages/components/NavbarHome';

export default function LayoutProductSeller() {
  return (
    <Fragment>
      <NavbarHome />
      <ProductSeller />
    </Fragment>
  );
}
