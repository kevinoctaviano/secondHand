import React, { Fragment } from 'react';
import NavbarHome from '../pages/components/NavbarHome';
import DashboardDaftarJual from '../pages/DashboardDaftarJual';

export default function LayoutDashboardDaftarJual() {
  return (
    <Fragment>
      <NavbarHome />
      <DashboardDaftarJual />
    </Fragment>
  );
}
