import React, { Fragment } from 'react';
import ProductBuyer from '../pages/ProductBuyer';
import NavbarSellerBuyerProduct from '../pages/components/NavbarSellerBuyerProduct';

export default function LayoutProductBuyer() {
  return (
    <Fragment>
      <NavbarSellerBuyerProduct />
      <ProductBuyer />
    </Fragment>
  );
}
