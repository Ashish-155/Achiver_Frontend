import { React, useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../ContextProvider/Context';
import axios from 'axios';
import { BASE_URL } from '../../services/api';
import { Modal } from 'react-bootstrap';

const Profile = () => {
    const { logindata, setLoginData } = useContext(LoginContext);

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


                                    <h2 className='heading2'>Samantha Jones</h2>
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

                                    <i class="fi fi-rr-file-export fs-2 textGreen"></i>
                                </span>
                                <span className="upload-area-title"> file(s) here to upload.</span>
                                <span className="upload-area-description">
                                    Alternatively, you can select a file
                                </span>
                            </label>
                            <input type='file' className='img_upload' id='file' />
                        </div>
                        <div className="modal-footer">
                        <label for="tb-file-upload" className='primaryBtn'>Upload Image</label>
                        <input type="file" id="tb-file-upload" />
                            {/* <label for="file" >
                                <button className="primaryBtn">
                                   Upload File</button>
                            </label>
                            <input type='file' className='img_upload' id='file' /> */}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default Profile