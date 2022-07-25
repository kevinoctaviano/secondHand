import React, { Fragment } from 'react';
import DetailsProfile from '../pages/DetailsProfile';
import NavbarHome from '../pages/components/NavbarHome';


export default function LayoutDetailsProfile() {
    return (
        <Fragment>
            <NavbarHome />
            <DetailsProfile />

        </Fragment>
    );
}
