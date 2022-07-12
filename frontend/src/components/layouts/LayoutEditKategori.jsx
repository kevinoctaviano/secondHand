import React, { Fragment } from 'react';
import NavbarHome from '../pages/components/NavbarHome';
import EditKategori from '../pages/EditKategori';

export default function LayoutEditKategori() {
  return (
    <Fragment>
      <NavbarHome />
      <EditKategori />
    </Fragment>
  );
}
