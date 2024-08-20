import React from 'react'

const Profile = () => {
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
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="rounded-circle avatar-xl img-thumbnail" alt="profile-image" />
                                            <span className="glyphicon ">
                                                <i className="fi fi-sr-camera-viewfinder"></i>
                                            </span>
                                        </div>
                                    </label>
                                    <input type="File" name="fileToUpload" id="fileToUpload" />
                                </form>
                        

                                <div className="text-left mt-4">
                                  
                                    <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ml-2">Ashish Show</span></p>

                                    <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ml-2">7003957953</span></p>

                                    <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ml-2 ">ashish@gmail.com</span></p>
                                    <p className="text-muted mb-2 font-13"><strong>ISD_Code :</strong> <span className="ml-2 ">+91</span></p>
                                    <p className="text-muted mb-2 font-13"><strong>Whats_App :</strong> <span className="ml-2 ">7003957953</span></p>

                                    <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ml-2">Kolkata</span></p>
                                    <p className="text-muted mb-1 font-13"><strong>Date Of Birth :</strong> <span className="ml-2">06-05-1999</span></p>
                                </div>


                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile