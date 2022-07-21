import React, { Fragment } from 'react';
import NavbarHome from '../pages/components/NavbarHome';
import EditDaftarJual from '../pages/EditDaftarJual';

function LayoutEditDaftarJual() {
  return (
    <Fragment>
      <NavbarHome />
      <EditDaftarJual />
    </Fragment>
  );
}

export default LayoutEditDaftarJual;
