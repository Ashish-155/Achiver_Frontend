import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
// import logo from '../../../../assets/image/logo.png';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handelShowPassword = () => {
      setShowPassword(!showPassword);
    };


    return (
        <>
            <div className='login'>
                <div className='container'>
                    <div className='login_sec'>
                        <div className='logo'>
                            <img src={'assets/image/logo.png'} alt='logo' />
                        </div>
                        <h2 className='heading2'>Welcome</h2>

                        <div className='input_box mt-5'>
                            <form novalidate>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <div class="form-group form_group">
                                            <input
                                                type="text"
                                                class="form-control form_control"
                                                id="validationCustom01"
                                                placeholder="User name"
                                                required
                                            />

                                            <i class="fi fi-rr-user first_icon"></i>
                                            <div class="valid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group form_group">
                                            <input
                                                 type={showPassword ? 'text' : 'password'}
                                                class="form-control form_control"
                                                id="validationCustom02"
                                                placeholder="Password"
                                                required
                                            />
                                            <i class="fi fi-rr-shield-keyhole first_icon"></i>
                                           
                                            <button
                                                type="button"
                                                // disabled={showPassword ? 'true' : 'false'}
                                                className="last_icon"
                                                onClick={handelShowPassword} // Toggle password visibility on button click
                                            >
                                                <i className={showPassword ? 'fi fi-rr-eye-crossed' : 'fi fi-rs-eye'}></i> {/* Change icon based on showPassword state */}
                                            </button>

                                            <div class="valid-feedback">
                                                Password is not valid.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <Link to='' className='para2'>Forgot password?</Link>
                                    </div>
                                </div>
                                <button type="submit" class="primaryBtn mt-5">Login</button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login