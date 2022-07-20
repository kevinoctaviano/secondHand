import React, { Fragment } from 'react';
import NavbarHome from '../pages/components/NavbarHome';
import DaftarJualDiminatiDetail from '../pages/DaftarJualDiminatiDetail';

function LayoutDaftarJualDetail() {
  return (
    <Fragment>
      <NavbarHome />
      <DaftarJualDiminatiDetail />
    </Fragment>
  );
}

export default LayoutDaftarJualDetail;
