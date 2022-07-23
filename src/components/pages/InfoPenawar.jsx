import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postStatusTawaran, getTawaranSeller } from '../../actions/user';
import { useEffect } from 'react';
import userPhoto from '../assets/svg/user-photo.svg';

const mapStateToProps = (state) => {
  return {
    isNull: state.tawaran.isNull,
    tawaran: state.tawaran.tawaran,
    message: state.tawaran.message,
  };
};

function InfoPenawar(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getTawaranSeller);
      const tawaranID = props.tawaran.filter(
        (barang) => String(barang.idTawaran) === params.id
      );
      setStatusTawaran(tawaranID);
    }
  }, [dispatch, props, params, isLoggedIn]);

  const [statusTawaran, setStatusTawaran] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (idTawaran) => {
    const tawaranStatus = 'ACCEPTED';
    const status = dispatch(postStatusTawaran(idTawaran, tawaranStatus));
    toast.promise(status, {
      pending: 'Sedang mengubah status...',
      success: `Berhasil deal dengan buyer!`,
      error: 'Promise rejected 🤯',
    });
    status.then(() => setShow(true));
  };
  const handleTolak = (idTawaran) => {
    const tawaranStatus = 'REJECTED';
    const status = dispatch(postStatusTawaran(idTawaran, tawaranStatus));
    toast.promise(status, {
      pending: 'Sedang mengubah status...',
      success: 'Menolak deal dengan buyer...',
      error: 'Promise rejected 🤯',
    });
    status.then(() => {
      return <Redirect to={'/daftar-penawar'} />;
    });
  };

  const handleWhatsapp = () => {
    window.open('https://wa.me/085156896874', '_blank');
  };

  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  let formatDate = (date) => {
    const monthMap = [
      'Jan',
      'Feb',
      'Mar',
      'Apr.',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const tanggal = new Date(date);
    const hari = tanggal.getDate();
    const bulan = tanggal.getMonth();
    const jam = tanggal.getHours();
    const menit = tanggal.getMinutes();

    return `${hari} ${monthMap[bulan]}, ${jam}.${menit}`;
  };
  return statusTawaran.map((item, index = 1) => (
    <div key={index}>
      <div className="container-fluid row m-0 mt-4">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div
          onClick={handleGoBack}
          className="col-lg-2 d-flex justify-content-end"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="custom-font-3 arrow-left"
          />
        </div>

        <div className="col-lg-10">
          <div className="center-custom">
            <div className="card rounded-16px card-custom">
              <div className="card-body ps-4">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-3">
                    {item.users.profileFoto === null ? (
                      <img
                        src={userPhoto}
                        alt={item.users.fullName}
                        className="profile-photo"
                      />
                    ) : (
                      <img
                        src={item.users.profileFoto}
                        alt={item.users.fullName}
                        className="profile-photo"
                      />
                    )}
                  </div>
                  <div className="col-sm-9">
                    <h6>{item.users.fullName}</h6>
                    {item.users.kota === null ? (
                      <p className="text-muted custom-font-5 custom-space-top">
                        Kota
                      </p>
                    ) : (
                      <p className="text-muted custom-font-5 custom-space-top">
                        {item.users.kota}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="fw-bold mt-3 center-custom-h6">
            Daftar Produkmu yang Ditawar
          </h6>
          <div className="center-custom">
            <div className="rounded-16px card-custom">
              <div className="card-body ps-4">
                <div className="row">
                  <div className="col-sm-2 d-flex align-items-center">
                    <img
                      src={item.product.imageProduct[0]?.urlImage}
                      alt={item.product.namaProduct}
                      className="profile-photo"
                    />
                  </div>
                  <div className="col-sm-7">
                    <p className="text-muted m-0 label-10px">
                      Penawaran Produk
                    </p>
                    <h6>{item.product.namaProduct}</h6>
                    <h6>
                      <del>{formatter.format(item.product.hargaProduct)}</del>
                    </h6>
                    <h6>Ditawar {formatter.format(item.hargaTawar)}</h6>
                  </div>
                  <div className="col-sm-3 d-flex justify-content-end">
                    <p className="text-muted m-0 label-10px">
                      {formatDate(item.creaDateTime)}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="mt-3 form-group fw-bold custom-border-auth custom-font-1"
                    style={{
                      width: '158px',
                      height: '36px',
                      marginRight: '16px',
                      marginTop: '16px',
                    }}
                    onClick={() => handleTolak(item.idTawaran)}
                  >
                    Tolak
                  </button>
                  <button
                    className="mt-3 form-group fw-bold text-white border-light custom-border-auth custom-button-auth custom-font-1"
                    style={{ width: '158px', height: '36px' }}
                    onClick={() => handleShow(item.idTawaran)}
                  >
                    Terima
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="px-5">
          <h5 className="fw-bold">
            Yeay kamu berhasil mendapat harga yang sesuai
          </h5>
          <p className="label-14px text-muted">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <div className="card rounded-16px mt-3">
            <div className="card-body">
              <h5 className="fw-bold text-center">Product Match</h5>
              <div className="row mb-3">
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                  <img
                    src={item.users?.profileFoto}
                    alt="Buyer"
                    className="profile-photo"
                  />
                </div>
                <div className="col-lg-9">
                  <h6>{item.users.fullName}</h6>
                  <p className="text-muted">{item.users.kota}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                  <img
                    src={item.product.imageProduct[0]?.urlImage}
                    alt={item.product.namaProduct}
                    className="profile-photo"
                  />
                </div>
                <div className="col-lg-9">
                  <h6>{item.product.namaProduct}</h6>
                  <p className="m-0">
                    <del>{formatter.format(item.product.hargaProduct)}</del>
                  </p>
                  <p>Ditawar {formatter.format(item.hargaTawar)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-4 mt-3">
            <button
              className="btn-purple rounded-16px"
              onClick={handleWhatsapp}
            >
              Hubungi via Whatsapp{' '}
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ marginLeft: '14px', fontSize: '16px' }}
              />
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  ));
}
export default connect(mapStateToProps, null)(InfoPenawar);
