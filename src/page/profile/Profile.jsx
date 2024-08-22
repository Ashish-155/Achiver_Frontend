import { React, useContext, useEffect } from 'react'
import { LoginContext } from '../../ContextProvider/Context';
import axios from 'axios';
import { BASE_URL } from '../../services/api';

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

    return (
        <div className='dashboard profile_info'>
            <div className=' overflow-x-hidden overflow-y-hidden'>
                <div className='container'>
                    <div className='main_content'>
                        <div className="card-box">
                            <button className='logout'><i class="fi fi-br-power"></i></button>
                            <form>
                                <label for="fileToUpload" className='upload'>
                                    <div className="exp-avtar gth-bg-danger text-white profile-pic">

                                        {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="rounded-circle avatar-xl img-thumbnail" alt="profile-image" /> */}
                                        {logindata.profile_image ? (
                                            <img
                                                className="rounded-circle avatar-xl img-thumbnail"
                                                src={`${BASE_URL}/uploads/${logindata.profile_image}`}
                                                alt={`${logindata.name}'s Profile`}
                                            />
                                        ) : (
                                            <p>No profile image available</p>
                                        )}

                                        <span className="glyphicon ">
                                            <i className="fi fi-sr-camera-viewfinder"></i>
                                        </span>
                                    </div>
                                </label>
                                <input type="File" name="fileToUpload" id="fileToUpload" />
                            </form>


                            <div className="text-left mt-4">

                                <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ml-2">{logindata.name}</span></p>

                                <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ml-2">{logindata.contact_no}</span></p>

                                <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ml-2 ">{logindata.email}</span></p>
                                <p className="text-muted mb-2 font-13"><strong>ISD_Code :</strong> <span className="ml-2 ">{logindata.isd_code}</span></p>
                                <p className="text-muted mb-2 font-13"><strong>Whats_App :</strong> <span className="ml-2 ">{logindata.whats_app_number}</span></p>

                                <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ml-2">{logindata.location}</span></p>
                                <p className="text-muted mb-1 font-13"><strong>Date Of Birth :</strong> <span className="ml-2">{logindata.date_of_birth}</span></p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile