import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../services/api';

const WeekGoalsDetails = ({ name, ...props }) => {

    const [showFirst, setShowFirst] = useState(false);
    const handleCloseFirst = () => setShowFirst(false);
    const handleShowFirst = () => setShowFirst(true);

    // form validation

    const [formData, setFormData] = useState({
        keyAction: '',
        who: '',
        day: '',
    });

    const [errors, setErrors] = useState({
        keyAction: '',
        who: '',
        day: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.keyAction) {
            valid = false;
            newErrors.keyAction = 'Key Action is required';
        }

        if (!formData.who) {
            valid = false;
            newErrors.who = 'Who is required';
        }

        if (!formData.day) {
            valid = false;
            newErrors.day = 'Day is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // Form is valid, submit the data
            console.log('Form submitted:', formData);
        }
    };

    // progress

    const now = 75;
    const now2 = 56;

    // api implementation
    const { id } = useParams();
    const [goalData, setGoalData] = useState({});
    const weekGoalDetails = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/goal/week-goal-for?id=${id}`, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            // console.log("Week_goal_details : ", res);
            setGoalData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        weekGoalDetails()
    }, [])

    return (
        <>
            <div className='dashboard'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        <div className='top_header'>
                            {/* <DropdownButton
                                align="end"
                                className='profile'
                                title={
                                    <div className="profile-wrap ">
                                        {logindata.profile_image ? (
                                            <img
                                                className="rounded-circle avatar-xl img-thumbnail"
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

                            </DropdownButton> */}

                        </div>
                        <div className='main_content'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD</h1>

                            </div>
                            <div className='innerBox'>
                                <div className='weekGoal details'>
                                    <div className='details_box'>
                                        <h3 className='heading3 mb-3'>Notifies to enter actual data every week</h3>
                                        <h3 className='heading3 textGray'>Goals for this week</h3>
                                        <h2 className='heading2'>Week {goalData.week_for}</h2>
                                        <i className="fi fi-rr-angle-small-right arrow right"></i>
                                        <i className="fi fi-rr-angle-small-left arrow left"></i>
                                        <div className='sliderBox'>
                                            <p className='para2 text-black'> Contact management team and form a mid week meeting</p>
                                        </div>
                                    </div>
                                    <div className='mt-3 item_box'>
                                        <div className='task_card'>
                                            <div className='card_header'>
                                                <h3 className='heading3 textGray'>Add a Task</h3>
                                                <button onClick={handleShowFirst}>
                                                    <i className="fi fi-rr-add textMarker fs-5"></i>
                                                </button>
                                            </div>
                                            <div className='card_body'>
                                                <div className='delete'><i className="fi fi-br-trash"></i></div>
                                                <p className="text-muted mb-2 font-13">
                                                    <strong> Key Action / Tactics :</strong>
                                                    <span className="ml-2"> Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to </span>
                                                </p>
                                                <p className="text-muted mb-2 font-13">
                                                    <strong> Who :</strong>
                                                    <span className="ml-2">Veenet </span>
                                                </p>
                                                <p className="text-muted font-13">
                                                    <strong> Day :</strong>
                                                    <span className="ml-2">Wednesday </span>
                                                </p>
                                            </div>

                                        </div>
                                        <div className='execution'>
                                            <h2 className='heading2 textGray'>Weekly Execution Score</h2>
                                            <div className='mb-5'>
                                                <div className='progress_label mb-2'>
                                                    <p className='para4 d-flex justify-content-between align-items-center'>Last week’s Execution Score <strong>{now}%</strong></p>
                                                </div>
                                                <ProgressBar now={now} variant="bg_marker" />
                                            </div>
                                            <div>
                                                <div className='progress_label mb-2'>
                                                    <p className='para4 d-flex justify-content-between align-items-center'>Average Execution Score to Date <strong>{now2}%</strong></p>
                                                </div>
                                                <ProgressBar now={now2} variant='bg_secondary' />
                                            </div>
                                        </div>

                                        <div className="lead-measures">
                                            <h3 className='heading3'>Lead Measures</h3>
                                            <div className="measure">
                                                <span className="para4">Target</span>
                                                <span className="value">500</span>
                                            </div>
                                            <div className="measure">
                                                <span className="para4">Actual</span>
                                                <span className="value actual-input">
                                                    <input type="number" placeholder="Enter value" className='form_controlStyle3' />
                                                </span>
                                            </div>
                                            <div className="measure">
                                                <span className="para4">Cumulative Target:</span>
                                                <span className="value">3000</span>
                                            </div>
                                            <div className="measure">
                                                <span className="para4">Cumulative Actual:</span>
                                                <span className="value">2368</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <Offcanvas show={showFirst} onHide={handleCloseFirst} placement="bottom" {...props} className='bottom_offcanves'>
                <Offcanvas.Header closeButton className='px-0'>

                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <form onSubmit={handleSubmit}>
                        <div className='form_group'>
                            <label className='label'>Key Action / Tactics</label>
                            <textarea
                                className={`form-control form_control ${errors.keyAction && 'is-invalid'}`}
                                placeholder='Enter key action'
                                rows='2'
                                name='keyAction'
                                value={formData.keyAction}
                                onChange={handleChange}
                            />
                            {errors.keyAction && <div className="invalid-feedback">{errors.keyAction}</div>}
                        </div>

                        <div className='form_group'>
                            <label className='label'>Who</label>
                            <input
                                className={`form-control form_control ${errors.who && 'is-invalid'}`}
                                type='text'
                                placeholder='Enter who'
                                name='who'
                                value={formData.who}
                                onChange={handleChange}
                            />
                            {errors.who && <div className="invalid-feedback">{errors.who}</div>}
                        </div>

                        <div className='form_group'>
                            <label className='label'>Day</label>
                            <input
                                className={`form-control form_control ${errors.day && 'is-invalid'}`}
                                type='text'
                                placeholder='Enter day'
                                name='day'
                                value={formData.day}
                                onChange={handleChange}
                            />
                            {errors.day && <div className="invalid-feedback">{errors.day}</div>}
                        </div>

                        <button type='submit' className='primaryBtn'>
                            Submit
                        </button>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default WeekGoalsDetails