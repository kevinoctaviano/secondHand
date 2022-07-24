import React, { Fragment } from 'react';
import ProductTerbuat from '../pages/ProdukTerbuat';
import NavbarHome from '../pages/components/NavbarHome';

export default function LayoutProductTerbuat() {
    return (
        <Fragment>
            <NavbarHome />
            <ProductTerbuat />
        </Fragment>
    );
}