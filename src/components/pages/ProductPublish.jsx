import React, { useEffect } from 'react'
import kosong from '../assets/svg/kosong.svg';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { connect, useDispatch } from 'react-redux';
import { getProductUser } from '../../actions/user';
import { useHistory } from 'react-router-dom'
import { updateStatusProduct } from '../../services/product.services'
import { toast } from 'react-toastify';

const mapStateToProps = (state) => {
    return {
        // barang
        isNull: state.barang.isNull,
        barang: state.barang.barangUser,
        message: state.barang.message,
        // user
        isNullUser: state.user.isNull,
        user: state.user.user,
    };
};

const ProductPublish = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const productDibuat = props.barang.filter(
        (item) => item.statusProduct === 'PUBLISH'
    );
    useEffect(() => {
        dispatch(getProductUser());
    }, [dispatch]);

    const handleUpdateStatus = async (id) => {
        let formData = new FormData()
        formData.append('statusProduct', 'DIBUAT')
        await updateStatusProduct(id, formData).then((data) => {

            toast.success(`Berhasil publish produk!`, {
                autoClose: 5000,
            })
        }).catch((err) => {
            toast.error(`${err.message}!`, {
                autoClose: 5000,
            })
        }).finally(() => {
            history.push("/produk-dibuat")
            dispatch(getProductUser())
        })

    }

    // Mengubah format currency menjadi format rupiah
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
                            {productDibuat.length !== 0 ? (
                                productDibuat.map((item) => (
                                    <div
                                        className="col-lg-4 d-flex justify-content-center"
                                        key={item.idTawaran}
                                    >
                                        <div className="card card-daftar-diminati mb-3 shadow-md px-2 pt-2 pb-4">
                                            <div className="d-flex justify-content-center">
                                                <img
                                                    src={item.imageProduct[0]?.urlImage}
                                                    className="card-home"
                                                    style={{ height: '100px' }}
                                                    alt={item.namaProduct}
                                                />
                                            </div>
                                            <h5 className="mt-1 text-sm font-normal">
                                                {item.namaProduct}
                                            </h5>
                                            <h5 className="mt-1 text-10px font-normal text-muted">
                                                {item.kategori.namaKategori}
                                            </h5>
                                            <h5 className="mt-1 text-sm font-normal">
                                                {formatter.format(item.hargaProduct)}
                                            </h5>
                                            <button
                                                onClick={() => handleUpdateStatus(item.idProduct)}
                                                className="btn btn-purple"

                                            >
                                                Take Down Prodcut

                                            </button>
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



export default connect(mapStateToProps, null)(ProductPublish)