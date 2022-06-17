import React, { Fragment } from 'react';
import ProductSeller from '../pages/ProductSeller';
import NavbarSellerBuyerProduct from '../pages/components/NavbarSellerBuyerProduct';

export default function LayoutProductSeller() {
  return (
    <Fragment>
      <NavbarSellerBuyerProduct />
      <ProductSeller />
    </Fragment>
  );
}
