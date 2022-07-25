import React, { useEffect, useState } from 'react'

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { connect, useDispatch } from 'react-redux';
import { updateUser } from '../../actions/user';

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
        watch,
        formState: { errors },
    } = useForm();

    const [selectedFiles, setSelectedFiles] = useState();
    // handle password
    // const password = useRef({});
    // password.current = watch('password', '');

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
        </div>
    )
}



export default connect(mapStateToProps, null)(DetailsProfile)