import React, { Fragment } from 'react'
import NavbarSellerBuyerProduct from '../pages/components/NavbarSellerBuyerProduct'
import DashboardDaftarJual from '../pages/DashboardDaftarJual'

export default function LayoutDashboardDaftarJual() {
    return (
        <Fragment>
            <NavbarSellerBuyerProduct />
            <DashboardDaftarJual />
        </Fragment>
    );
}