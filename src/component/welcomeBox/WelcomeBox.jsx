import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const WelcomeBox = () => {
    return (
        <>
            <div>
                <div className="welcome_container">
                    <div className="row profile_row">
                        <div className=' col-lg-5 col-md-6 col-sm-12'>
                            <div className="text-content">
                                <h1 className='w_heading1'>Welcome </h1>
                                <h2 className='heading2'>ashish Show</h2>
                                <p className='para2'>ashish@gmail.com</p>
                                {/* <p className='para2'>ashish@gmail.com</p> */}
                            </div>
                        </div>
                        <div className=' col-lg-7 col-md-6 col-sm-12'>
                            <div className="profile_img">
                                <img src='assets/image/welcome.png' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default WelcomeBox