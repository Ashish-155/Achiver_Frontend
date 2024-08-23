import { useState, useContext, useEffect, Fragment } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown';
import { toast } from 'react-toastify';
import { LoginContext } from '../../ContextProvider/Context';
import { BASE_URL } from '../../services/api';
import axios from 'axios';
import { DropdownButton } from 'react-bootstrap';


const Avatar = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const navigate = useNavigate();
    const removeToken = () => {
        localStorage.removeItem("token");
        toast.success("Logged out successfully!");
        navigate("/", { replace: true });
    };

    // useEffect(() => {
    //     const profile = async () => {
    //         try {
    //             const res = await axios.get(
    //                 `${BASE_URL}/api/user/my-profile`,
    //                 {
    //                     headers: {
    //                         Authorization: `${localStorage.getItem("token")}`,
    //                         "Content-Type": "application/json",
    //                     },
    //                 }
    //             );
    //             setLoginData(res.data.data);
    //             // console.log(res);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     profile();
    // }, []);

    return (
        <>
            {/* <div className='top_header'> */}
            <DropdownButton
                align="end"
                className='profile'
                title={
                    <div className="profile-wrap ">


                        {logindata.profile_image ? (
                            <img
                                className="rounded-circle avatar-xl img-thumbnail img_circle"
                                src={`${BASE_URL}/uploads/${logindata.profile_image}`}
                                alt={`${logindata.name}'s Profile`}
                            />
                        ) : (
                            <i className="fi fi-sr-circle-user"></i>
                        )}

                    </div>
                }
                id="dropdown-menu-align-end"
            >
                <Dropdown.Item eventKey="1" href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item eventKey="2" href="" onClick={() => removeToken()}>Logout</Dropdown.Item>

            </DropdownButton>
            {/* </div> */}
        </>
    )
}

export default Avatar