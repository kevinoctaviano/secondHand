import React, { useState, useRef } from 'react'
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { connect, useDispatch } from 'react-redux';
import { updateUser } from '../../actions/user';
import { Modal } from 'react-bootstrap';
import { updatePasswordUsers } from '../../services/user.service'
import { toast } from 'react-toastify';
import userPhoto from '../assets/svg/user-photo.svg'
import { useForm } from 'react-hook-form';
import Form from 'react-validation/build/form';

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

const DetailsProfile = (props) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const {
        register: register2,
        handleSubmit: handleSubmit2,
        watch: watch2,
        formState: { errors: errors2 },
    } = useForm();

    const [selectedFiles, setSelectedFiles] = useState();
    // handle password
    const password = useRef({});
    password.current = watch2('password', '');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle Update User
    const handleImageChange = (e) => {
        const profilePicture = e.target.files[0];
        setSelectedFiles(profilePicture);
    };

    const handleUpdateUser = async (data) => {

        let formData = new FormData();
        if (selectedFiles !== undefined) {


            formData.append('profileFoto', selectedFiles);
            formData.append('fullName', data.fullName);
            formData.append('kota', data.kota);
            formData.append('noWa', data.noWa);
            formData.append('alamat', data.alamat);
            formData.append('username', props.user.username);


            const updateUserData = dispatch(updateUser(formData));
            toast.promise(updateUserData, {
                pending: 'Sedang menambahkan data...',
                success: `Berhasil update data user!`,
                error: 'Promise rejected 🤯',
            });
        } else {
            formData.append('fullName', data.fullName);
            formData.append('kota', data.kota);
            formData.append('noWa', data.noWa);
            formData.append('alamat', data.alamat);
            formData.append('username', props.user.username);


            const updateUserData = dispatch(updateUser(formData));
            toast.promise(updateUserData, {
                pending: 'Sedang menambahkan data...',
                success: `Berhasil update data user!`,
                error: 'Promise rejected 🤯',
            });

        }
    };

    const handleUpdatePassword = async (data) => {
        let formData = new FormData()
        formData.append('password', data.password)
        await updatePasswordUsers(formData).then(() => {
            toast.success(`Berhasil Update Password!`, {
                autoClose: 5000,
            });
        }).catch((err) => {
            toast.error(`Update password failed!`, {
                autoClose: 5000,
            });

        }).finally(() => {
            handleClose()
        })


    };
    return (
        <div className="container mt-4">
            <div className="w-75 mx-auto">
                <h4 className="text-dark fw-bold">Daftar Jual Saya</h4>
                <Topbar />
                <div className="row">
                    <Sidebar />
                    <div className="col-md-8">
                        <div className="row">
                            <div className='border px-4 py-4 custom-border-auth'>
                                <h1 className='fs-4'>Ubah Profile</h1>
                                <div className='row'>
                                    <div className='col-md-3  ' style={{ height: "100%" }}>
                                        <div className='px-2 border items-center py-3'>
                                            {props.user?.profileFoto === null ? (

                                                <img style={{ width: "100%" }} src={userPhoto} />
                                            ) : (<img style={{ width: "100%" }} src={props.user?.profileFoto} />)}
                                            <input type="file" class="d-none" id="img"
                                                {...register('profileFoto')}
                                                onChange={handleImageChange} />
                                            <label className='btn text-white mt-2' style={{ backgroundColor: '#7126b5', width: '100%' }} for="img">Pilih Foto</label>
                                        </div>
                                        <button
                                            onClick={handleShow}
                                            style={{ backgroundColor: '#7126b5', width: '100%' }}
                                            type="submit"
                                            className="mt-3 btn text-white"
                                        >
                                            Ubah Password
                                        </button>
                                    </div>
                                    <div className='col-md-9'>
                                        <Form onSubmit={handleSubmit(handleUpdateUser)} >


                                            <div className="form-group mb-3">
                                                <label htmlFor="nama" className="fw-bold custom-font-2">
                                                    Nama*
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.fullName ? 'is-invalid' : ''
                                                        } custom-font-1 rounded-16px`}
                                                    placeholder="Nama"
                                                    {...register('fullName', { required: true })}
                                                    defaultValue={props.user?.fullName}
                                                />
                                                {errors.fullName && (
                                                    <p className="error-message">*Nama user is required.</p>
                                                )}
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="kota" className="fw-bold custom-font-2">
                                                    Kota*
                                                </label>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <select
                                                            className={`form-select ${errors.kota ? 'is-invalid' : ''
                                                                } text-muted w-100 border rounded-16px`}
                                                            aria-label="Default select example"
                                                            name="kota"
                                                            id="kota"
                                                            defaultValue={props.user?.kota}
                                                            {...register('kota', { required: true })}
                                                        >
                                                            <option deafultvalue={props.user?.kota}>Pilih Kota</option>
                                                            <option value="Jakarta">Jakarta</option>
                                                            <option value="Bandung">Bandung</option>
                                                            <option value="Yogyakarta">Yogyakarta</option>
                                                            <option value="Semarang">Semarang</option>
                                                            <option value="Malang">Malang</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="alamat" className="fw-bold custom-font-2">
                                                    Alamat*
                                                </label>
                                                <textarea
                                                    className={`form-control ${errors.alamat ? 'is-invalid' : ''
                                                        } alamat rounded-16px`}
                                                    cols="3"
                                                    placeholder="Contoh: Jalan Ikan Hiu 33"
                                                    {...register('alamat', { required: true })}
                                                    defaultValue={props.user?.alamat}
                                                ></textarea>
                                                {errors.alamat && (
                                                    <p className="error-message">*Alamat is required.</p>
                                                )}
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="nohandphone" className="fw-bold custom-font-2">
                                                    No Handphone*
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.noWa ? 'is-invalid' : ''
                                                        } custom-font-1 rounded-16px`}
                                                    placeholder="Contoh: +628123456789"
                                                    value={props.user?.noWa}
                                                    {...register('noWa', { required: true })}
                                                />
                                                {errors.noWa && (
                                                    <p className="error-message">*Phone number is required.</p>
                                                )}
                                            </div>


                                            <button
                                                type="submit"
                                                className="mt-3 form-group fw-bold text-white border-light py-2 w-100 custom-border-auth custom-button-auth custom-font-1"
                                            >
                                                Simpan
                                            </button>
                                        </Form>
                                    </div>
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
                    <h5 className="fw-bold">Ubah Password kamu</h5>

                    <div className="mb-3 mt-3">

                        <Form >
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="fw-bold custom-font-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`form-control ${errors2.password ? 'is-invalid' : ''
                                        } custom-font-1 rounded-16px`}
                                    placeholder="Password..."
                                    {...register2('password', {
                                        required: '*Password is required',
                                        minLength: {
                                            value: 8,
                                            message: '*Password must have at least 8 characters',
                                        },
                                    })}
                                />
                                {errors2.password && (
                                    <p className="error-message">{errors2.password.message}</p>
                                )}
                            </div>
                            <div className="form-group mb-1">
                                <label
                                    htmlFor="confirm-password"
                                    className="fw-bold custom-font-2"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className={`form-control ${errors2.confirmPassword ? 'is-invalid' : ''
                                        } custom-font-1 rounded-16px`}
                                    placeholder="Confirm password..."
                                    {...register2('confirmPassword', {
                                        required: '*Confirm password is required',
                                        validate: (value) =>
                                            value === password.current ||
                                            '*The passwords do not match',
                                    })}
                                />
                                {errors2.confirmPassword && (
                                    <p className="error-message">
                                        {errors2.confirmPassword.message}
                                    </p>
                                )}
                            </div>

                            <div className="d-grid gap-4">
                                <span className='btn mt-3 text-white' style={{ backgroundColor: '#7126b5' }}
                                    onClick={handleSubmit2(handleUpdatePassword)}>
                                    Update
                                </span>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}



export default connect(mapStateToProps, null)(DetailsProfile)