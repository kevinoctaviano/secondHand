import React, { Fragment } from 'react';
import NavbarHome from '../pages/components/NavbarHome';
import DaftarJualDiminati from '../pages/DaftarJualDiminati';

export default function LayoutdDaftarJualDiminati() {
  return (
    <Fragment>
      <NavbarHome />
      <DaftarJualDiminati />
    </Fragment>
  );
}
