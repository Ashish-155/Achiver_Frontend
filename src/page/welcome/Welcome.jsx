import React, { useContext } from 'react'
import { LoginContext } from '../../ContextProvider/Context';
import { Link } from 'react-router-dom';

const Welcome = () => {

    const { logindata, setLoginData } = useContext(LoginContext);
    return (
        <>
            <div className='dashboard welcome_container'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        {/* <div className='welcome_container'> */}
                        <div className='w_content'>
                            <div className="row align-items-center">
                                <div className='col-lg-12'>
                                    <h1 className='w_heading1 text-center mb-5'>Welcome</h1>
                                    <div className="profile_img">
                                        <img src='assets/image/welcome.png' alt="Welcome" />
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className="text-content">
                                        <h2 className='heading2 textPrimary fw-semibold'>{logindata.name}</h2>
                                        <p className='para2 mb-2 fw-semibold'>{logindata.email}</p>
                                        <p className='para2 textGray300'>
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <Link to='/week-target' className=' primaryBtn mt-0 d-flex justify-content-center align-items-center gap-2 text-center mt-4'> <i className="fi fi-rr-plus-small d-flex justify-content-center align-items-center fs-5"></i>Add Goals</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome