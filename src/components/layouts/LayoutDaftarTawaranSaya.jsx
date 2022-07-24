import React, { Fragment } from 'react';
import NavbarHome from '../pages/components/NavbarHome';
import TawaranSaya from '../pages/DaftarTawaran'

export default function LayoutdDaftarTawaranSaya() {
    return (
        <Fragment>
            <NavbarHome />
            <TawaranSaya />
        </Fragment>
    );
}