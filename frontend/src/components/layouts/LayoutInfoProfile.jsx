import React from 'react';
import NavbarTemplate from '../pages/components/NavbarTemplate';
import InfoProfile from '../pages/InfoProfile';

export default function LayoutInfoProfile() {
  return (
    <>
      <NavbarTemplate name="Lengkapi Info Akun" />
      <InfoProfile />
    </>
  );
}
