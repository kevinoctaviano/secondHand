import React, { Fragment } from 'react';
import NavbarHome from '../pages/components/NavbarHome';
import DaftarKategori from '../pages/DaftarKategori';

export default function LayoutKategori() {
  return (
    <Fragment>
      <NavbarHome />
      <DaftarKategori />
    </Fragment>
  );
}
