import React, { Fragment } from 'react';
import ProdukPublish from '../pages/ProductPublish';
import NavbarHome from '../pages/components/NavbarHome';

export default function LayoutProductPublish() {
    return (
        <Fragment>
            <NavbarHome />
            <ProdukPublish />
        </Fragment>
    );
}