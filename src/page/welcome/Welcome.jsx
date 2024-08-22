import { useState, Fragment, useContext, useEffect } from 'react';
import { DropdownButton } from 'react-bootstrap';
import Avatar from '../../component/avatar/Avatar';
import Goals from '../../component/welcomeBox/WelcomeBox';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../ContextProvider/Context';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BASE_URL } from '../../services/api';

const Welcome = ({ name, ...props }) => {

    const [actions, setActions] = useState([{ goal: '', date: '' }]);
    const [errors, setErrors] = useState({});

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        actions.forEach((action, index) => {
            if (!action.goal) {
                formIsValid = false;
                errors[`goal${index}`] = "Goal name is required";
            }

            if (!action.date) {
                formIsValid = false;
                errors[`date${index}`] = "Start date is required";
            }
        });

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = () => {
        if (handleValidation()) {
            console.log('Form submitted successfully');
            // Perform the form submission logic
        } else {
            console.log('Validation failed');
        }
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newActions = [...actions];
        newActions[index][name] = value;
        setActions(newActions);
    };

    // integration starts here
    const { logindata, setLoginData } = useContext(LoginContext);

    // const navigate = useNavigate();

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
        <>
            <div className='dashboard welcome'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                    <div className='d-flex justify-content-between align-items-center gap-1 py-4'>
                            {/* <Link to='/welcome' className=' textPrimary '> <i class="fi fi-rr-angle-small-left fs-3"></i></Link> */}
                            <div className='d-flex justify-content-end align-items-center gap-2 ms-auto'>
                                <Link to='/dashboard' className=' textGray '> <i class="fi fi-br-house-chimney fs-4 d-flex"></i></Link>
                                <Avatar />
                            </div>
                        </div>
                        <div className='main_content'>
                            <div className='inner_content'>
                                <div class="welcome_container">
                                    <div class="row profile_row">
                                        <div className=' col-lg-5 col-md-6 col-sm-12'>
                                            <div class="text-content">
                                                <h1 className='w_heading1'>Welcome </h1>
                                                <h2 className='heading2'>{logindata.name}</h2>
                                                <p className='para2'>{logindata.email}</p>
                                                {/* <p className='para2'>ashish@gmail.com</p> */}
                                            </div>
                                        </div>
                                        <div className=' col-lg-7 col-md-6 col-sm-12'>
                                            <div class="profile_img">
                                                <img src='assets/image/welcome.png' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='goals_box'>
                                    <h3 class="heading3 mb-4">Set Your Goal</h3>
                                    <form>
                                        <div className='row'>
                                            {actions.map((action, index) => (
                                                <Fragment key={index}>
                                                    <div className='col-lg-6 col-sm-6 col-6 mb-2'>
                                                        <label className='para3 textGray mb-1'>Your Goal Name<span className='red'>*</span></label>
                                                        <input
                                                            className="form-control form_controlStyle2"
                                                            type="text"
                                                            name="goal"
                                                            placeholder="Your Goal Name"
                                                            value={action.goal}
                                                            onChange={(e) => handleChange(index, e)}
                                                        />
                                                        {errors[`goal${index}`] && <p className="text-danger">{errors[`goal${index}`]}</p>}
                                                    </div>
                                                    <div className='col-lg-6 col-sm-6 col-6 mb-2'>
                                                        <label className='para3 textGray mb-1'>Set Start Date<span className='red'>*</span></label>
                                                        <input
                                                            type="date"
                                                            id="date"
                                                            name="date"
                                                            className="form-control form_controlStyle2"
                                                            value={action.date}
                                                            onChange={(e) => handleChange(index, e)}
                                                        />
                                                        {errors[`date${index}`] && <p className="text-danger">{errors[`date${index}`]}</p>}
                                                    </div>
                                                </Fragment>
                                            ))}

                                            <div className='col-lg-12'>
                                                <button type="button" className="primaryBtn" onClick={handleSubmit}>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='goals_box'>
                                    <h3 class="heading3 mb-4">Your Goals</h3>
                                    <form>
                                        <div className='row'>
                                            <div className='col-lg-4 col-md-6'>
                                                {/* <Goals /> */}
                                                <div className='box'>
                                                    <p className="text-muted mb-2 font-13"><strong>Goal Name :</strong> <span className="ml-2">Name</span></p>
                                                    <p className="text-muted mb-2 font-13"><strong>Start Date :</strong> <span className="ml-2">21/08/2024</span></p>
                                                    <p className="text-muted mb-2 font-13"><strong>Target :</strong> <span className="ml-2">12 week</span></p>
                                                </div>
                                            </div>

                                            <div className='col-lg-12'>
                                                <Link to='/all-goals' type="button" className="primaryBtn" >Show All</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Welcome