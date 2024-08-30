import React, { useState, useEffect, useContext } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
// import logo from '../../../../assets/image/logo.png';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { LoginContext } from "../../ContextProvider/Context";
import { BASE_URL } from "../../services/api";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handelShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            };
        });
    };
    const { logindata, setLoginData } = useContext(LoginContext);
    const loginuser = async (e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Please enter a valid email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {

            try {
                const res = await axios.post(
                    `${BASE_URL}/api/user/login`,
                    inpval
                );
                // console.log(res);    
                setLoginData(res.data.data);
                toast.success("Login successful!", {
                    position: "top-center"
                });

                localStorage.setItem("token", res.data.token);

                const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
                localStorage.setItem("token_expiration", expirationTime);

                // Set timeout to remove token after 24 hours
                setTimeout(() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("token_expiration");
                    toast.info("Session expired. Please log in again.", {
                        position: "top-center"
                    });
                    navigate("/login");
                }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds 24 hours from now
                localStorage.setItem("token_expiration", expirationTime);


                navigate("/dashboard");
            } catch (error) {
                console.log("Login error : ", error);
                toast.error(error.response.data.message);
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/dashboard");
        }
    }, [navigate]);


    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="login_sec">
                        <div className="logo">
                            <img src={"assets/image/logo.png"} alt="logo" />
                        </div>
                        <h2 className="heading2">Welcome</h2>

                        <div className="input_box mt-5">
                            <form novalidate>
                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <div className="form-group form_group">
                                            <input
                                                // type="text"
                                                className="form-control form_control"
                                                id="validationCustom01"
                                                placeholder="Email"
                                                type="email"
                                                value={inpval.email}
                                                onChange={setVal}
                                                name="email"
                                                required
                                            />

                                            <i className="fi fi-rr-user first_icon"></i>
                                            <div className="valid-feedback">
                                                Please enter your email.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group form_group">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="form-control form_control"
                                                id="validationCustom02"
                                                placeholder="Password"
                                                onChange={setVal}
                                                value={inpval.password}
                                                name="password"
                                                required
                                            />
                                            <i className="fi fi-rr-shield-keyhole first_icon"></i>

                                            <button
                                                type="button"
                                                // disabled={showPassword ? 'true' : 'false'}
                                                className="last_icon"
                                                onClick={handelShowPassword} // Toggle password visibility on button click
                                            >
                                                <i
                                                    className={
                                                        showPassword
                                                            ? "fi fi-rr-eye-crossed"
                                                            : "fi fi-rs-eye"
                                                    }
                                                ></i>{" "}
                                                {/* Change icon based on showPassword state */}
                                            </button>

                                            <div className="valid-feedback">Password is not valid.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <Link to="" className="para2">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <button type="submit" className="primaryBtn mt-5" onClick={loginuser}>
                                    Login
                                </button>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
