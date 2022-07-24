import React, { useState, useEffect } from 'react'
import kosong from '../assets/svg/kosong.svg';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { getTawaranBuyer } from '../../services/tawaran.services'

const DaftarTawaran = () => {

    const [tawaranBuyer, setTawaranBuyer] = useState([])
    console.log('====================================');
    console.log(tawaranBuyer);
    console.log('====================================');

    const handleGetTawaranBuyer = async () => {
        await getTawaranBuyer().then((data) => {
            setTawaranBuyer(data.data.data)
        })
    }
    useEffect(() => {
        handleGetTawaranBuyer()
    }, [])

    let formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    return (
        <div className="container mt-4">
            <div className="w-75 mx-auto">
                <h4 className="text-dark fw-bold">Daftar Jual Saya</h4>
                <Topbar />
                <div className="row">
                    <Sidebar />
                    <div className="col-md-8">
                        <div className="row">
                            {tawaranBuyer.length !== 0 ? (
                                tawaranBuyer.map((item) => (
                                    <div
                                        className="col-lg-4 d-flex justify-content-center"
                                        key={item.idTawaran}
                                    >
                                        <div className="card card-daftar-diminati mb-3 shadow-md px-2 pt-2 pb-4">
                                            <div className="d-flex justify-content-center">
                                                <img
                                                    src={item.product.imageProduct[0]?.urlImage}
                                                    className="card-home"
                                                    style={{ height: '100px' }}
                                                    alt={item.product.namaProduct}
                                                />
                                            </div>
                                            <h5 className="mt-1 text-sm font-normal">
                                                {item.product.namaProduct}
                                            </h5>
                                            <h5 className="mt-1 text-10px font-normal text-muted">
                                                {item.product.kategori.namaKategori}
                                            </h5>
                                            <h5 className="mt-1 text-sm font-normal">
                                                {formatter.format(item.hargaTawar)}
                                            </h5>
                                            <h5
                                                className="btn btn-purple"

                                            >
                                                {item.statusTawaran}

                                            </h5>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <div className="col-lg-4">
                                        <img src={kosong} alt="Kosong" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DaftarTawaran