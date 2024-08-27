import { React, useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../ContextProvider/Context';
import axios from 'axios';
import { BASE_URL } from '../../services/api';
import { Modal } from 'react-bootstrap';

const Profile = () => {
    const { logindata, setLoginData } = useContext(LoginContext);

    // profile change logic 

    const [formData, setFormData] = useState({
        // name: logindata.name || '',
        // contact_no: logindata.contact_no || '',
        // isd_code: logindata.isd_code || '',
        // whats_app_number: logindata.whats_app_number || '',
        // location: logindata.location || '',
        // date_of_birth: logindata.date_of_birth || '',
        profile_image: null,
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profile_image: e.target.files[0],
        });
    };



    const handleProfileChangeProfile = async () => {
        try {
            const profileData = new FormData();
            // profileData.append('name', formData.name);
            // profileData.append('contact_no', formData.contact_no);
            // profileData.append('isd_code', formData.isd_code);
            // profileData.append('whats_app_number', formData.whats_app_number);
            // profileData.append('location', formData.location);
            // profileData.append('date_of_birth', formData.date_of_birth);
            if (formData.profile_image) {
                profileData.append('profile_image', formData.profile_image);
            }

            const res = await axios.put(`${BASE_URL}/api/user/update-profile`, profileData, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            // Update the profile data in the context
            setLoginData(res.data.data);
            closeModalShow();
        } catch (error) {
            console.log("Error updating profile:", error);
        }
    };

    useEffect(() => {
        const profile = async () => {
            try {
                const res = await axios.get(
                    `${BASE_URL}/api/user/my-profile`,
                    {
                        headers: {
                            Authorization: `${localStorage.getItem("token")}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                setLoginData(res.data.data);
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        profile();
    }, []);


    const [modalShow, setModalShow] = useState(false);

    const openModalShow = () => setModalShow(true);
    const closeModalShow = () => setModalShow(false);

    return (
        <>

            <div className='dashboard profile_info'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        <div className='main_content'>

                            <div className="profile-card">
                                <div className="header">

                                </div>
                                <div className='profile_body'>

                                    <div className="exp-avtar gth-bg-danger text-white profile-pic">

                                        {logindata.profile_image ? (
                                            <img
                                                className="rounded-circle avatar_img"
                                                src={`${BASE_URL}/uploads/${logindata.profile_image}`}
                                                alt={`${logindata.name}'s Profile`}
                                            />
                                        ) : (
                                            <p>No profile image available</p>
                                        )}

                                        <button className="glyphicon " onClick={openModalShow}>
                                            <i className="fi fi-sr-camera-viewfinder"></i>
                                        </button>
                                    </div>


                                    <h2 className='heading2'>{logindata.name}</h2>
                                    <p className="text-muted mb-2 font-13 ">{logindata.email}</p>
                                    <div className="profileInfo">
                                        <p className="text-muted mb-2 font-13 d-flex justify-content-between align-items-center"><strong>Full Name :</strong> <span className="ml-2">{logindata.name}</span></p>

                                        <p className="text-muted mb-2 font-13 d-flex justify-content-between align-items-center"><strong>Mobile :</strong><span className="ml-2">{logindata.contact_no}</span></p>

                                        <p className="text-muted mb-2 font-13 d-flex justify-content-between align-items-center"><strong>Email :</strong> <span className="ml-2 ">{logindata.email}</span></p>
                                        <p className="text-muted mb-2 font-13 d-flex justify-content-between align-items-center"><strong>ISD_Code :</strong> <span className="ml-2 ">{logindata.isd_code}</span></p>
                                        <p className="text-muted mb-2 font-13 d-flex justify-content-between align-items-center"><strong>Whats_App :</strong> <span className="ml-2 ">{logindata.whats_app_number}</span></p>

                                        <p className="text-muted mb-1 font-13 d-flex justify-content-between align-items-center"><strong>Location :</strong> <span className="ml-2">{logindata.location}</span></p>
                                        <p className="text-muted mb-1 font-13 d-flex justify-content-between align-items-center"><strong>Date Of Birth :</strong> <span className="ml-2">{logindata.date_of_birth}</span></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal
                show={modalShow}
                onHide={closeModalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='p-0'>
                    <div className="welcome_container">
                        <button className='closeButton' onClick={closeModalShow}>
                            <i className="fi fi-rr-circle-xmark"></i>
                        </button>
                        <div className="modal-body">
                            <p className="modal-title">Upload a file</p>
                            <p className="modal-description">Attach the file below</p>
                            <label for="file" className="upload-area">
                                <span className="upload-area-icon">

                                    <i className="fi fi-rr-file-export fs-2 textGreen"></i>
                                </span>
                                <span className="upload-area-title"> file(s) here to upload.</span>
                                <span className="upload-area-description">
                                    Alternatively, you can select a file
                                </span>
                            </label>
                            <input type='file' className='img_upload'
                                id='file'
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <label type='button' className='primaryBtn' onClick={handleProfileChangeProfile}>Upload Image</label>
                            <input type="file" id="tb-file-upload" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* <Modal show={modalShow} onHide={closeModalShow} size="lg" centered>
                <Modal.Body className='p-0'>
                    <div className="welcome_container">
                        <button className='closeButton' onClick={closeModalShow}>
                            <i className="fi fi-rr-circle-xmark"></i>
                        </button>
                        <div className="modal-body">
                            <p className="modal-title">Upload a file</p>
                            <p className="modal-description">Attach the file below</p>
                            <input
                                type='file'
                                className='img_upload'
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button className='primaryBtn' onClick={handleProfileChangeProfile}>
                                Upload Image
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}
        </>

    )
}

export default Profile