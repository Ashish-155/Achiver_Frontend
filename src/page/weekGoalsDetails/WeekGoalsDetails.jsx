import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import Avatar from '../../component/avatar/Avatar';

const WeekGoalsDetails = ({ name, ...props }) => {
    const location = useLocation();
    const { state } = location;
    console.log("State : ", state)
    const { goalId } = state;
    console.log("GoalId : ", goalId)


    const { id } = useParams();
    const [showFirst, setShowFirst] = useState(false);
    const handleCloseFirst = () => setShowFirst(false);
    const handleShowFirst = () => setShowFirst(true);

    const [formData, setFormData] = useState({
        week_goal_id: '',
        key_action: '',
        who: '',
        day: '',
    });
    const [errors, setErrors] = useState({
        key_action: '',
        who: '',
        day: '',
    });
    const [goalData, setGoalData] = useState({});

    // Update formData when id changes
    useEffect(() => {
        if (id) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                week_goal_id: id,
            }));
            weekGoalDetails(); // Fetch goal details when id is available
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.key_action) {
            valid = false;
            newErrors.key_action = 'Key Action is required';
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const res = await axios.post(`${BASE_URL}/api/goal/create-week_goal-action`, formData, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                });
                toast.success(res.data.message, { position: "top-center" });
                handleCloseFirst();
                weekGoalDetails();
                setFormData({
                    week_goal_id: id,
                    key_action: '',
                    who: '',
                    day: '',
                });
            } catch (error) {
                console.log("Error creating action:", error);
            }
        }
    };

    const weekGoalDetails = async () => {
        if (!id) return; // Ensure id is available before making the API call
        try {
            const res = await axios.get(`${BASE_URL}/api/goal/week-goal-for?id=${id}`, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            setGoalData(res.data.data);
            console.log("WeekGoalDrtails : ", res)
        } catch (error) {
            console.log("Error fetching goal details:", error);
        }
    };

    const handleActionDelete = async (week_goal_action_id) => {
        try {
            const res = await axios.delete(`${BASE_URL}/api/goal/delete-week_goal-action`, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                data: { week_goal_action_id },
            });
            toast.success(res.data.message, { position: "top-center" });
            weekGoalDetails();
        } catch (error) {
            console.log("Error deleting action:", error);
        }
    };

    useEffect(() => {
        if (id) {
            weekGoalDetails();
        }
    }, [id]);

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
                            <div className='d-flex justify-content-between align-items-center gap-1 py-4'>
                                <Link to={`/week-goals/${goalId}`} className=' textPrimary '> <i className="fi fi-rr-angle-small-left fs-3"></i></Link>
                                <div className='d-flex justify-content-end align-items-center gap-2'>
                                    <Link to='/dashboard' className=' textGray homeBox'> <i className="fi fi-br-house-chimney fs-5 d-flex"></i></Link>
                                    <Avatar />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD </h1>

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
                                            {/* Loop start */}
                                            {
                                                goalData.Week_Goal_Actions && Array.isArray(goalData.Week_Goal_Actions) && goalData.Week_Goal_Actions.length > 0 ? (
                                                    goalData.Week_Goal_Actions.map((value, index) => {
                                                        return (
                                                            <>
                                                                <div className='card_body'>
                                                                    <div className='delete'>
                                                                        <i className="fi fi-br-trash" onClick={() => handleActionDelete(value.id)}></i>
                                                                    </div>
                                                                    <p className="text-muted mb-2 font-13">
                                                                        <strong> Key Action / Tactics :</strong>
                                                                        <span className="ml-2"> {value.key_action} </span>
                                                                    </p>
                                                                    <p className="text-muted mb-2 font-13">
                                                                        <strong> Who :</strong>
                                                                        <span className="ml-2">{value.who} </span>
                                                                    </p>
                                                                    <p className="text-muted font-13">
                                                                        <strong> Day :</strong>
                                                                        <span className="ml-2">{value.day} </span>
                                                                    </p>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                )
                                                    : (null)
                                            }

                                            {/* Loop end */}

                                        </div>
                                        {/* <div className='execution'>
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
                                        </div> */}
                                        <div className="lead-measures pb-1">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='card border mb-3'>
                                                        <div className='card-body'>
                                                            <div className="measure">
                                                                <span className="para4">Lead Target</span>
                                                                <span className="value">{goalData.lead_target}</span>
                                                            </div>
                                                            <div className="measure">
                                                                <span className="para4">Lead Actual</span>
                                                                <span className="value">{goalData.lead_actual}</span>
                                                            </div>
                                                            <p className='para3 d-flex justify-content-start align-items-center gap-2 pt-2'>
                                                                {
                                                                    parseFloat(goalData.lead_execution_score) >= 0 ? (
                                                                        <>
                                                                            <i className="fi fi-rr-arrow-trend-up up"></i>
                                                                            <span className="up">
                                                                                {goalData.lead_execution_score}
                                                                            </span> Lag score
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <i className="fi fi-rr-arrow-trend-down down"></i>
                                                                            <span className="down">
                                                                                {goalData.lead_execution_score}
                                                                            </span> Lag score
                                                                        </>
                                                                    )
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 mb-3'>
                                                    <div className='card border'>
                                                        <div className='card-body'>
                                                            <div className="measure">
                                                                <span className="para4">Lag Target</span>
                                                                <span className="value">{goalData.lag_target}</span>
                                                            </div>
                                                            <div className="measure">
                                                                <span className="para4">Lag Actual</span>
                                                                <span className="value">{goalData.lag_actual}</span>
                                                            </div>
                                                            <p className='para3 d-flex justify-content-start align-items-center gap-2 pt-2'>
                                                                {
                                                                    parseFloat(goalData.lag_execution_score) >= 0 ? (
                                                                        <>
                                                                            <i className="fi fi-rr-arrow-trend-up up"></i>
                                                                            <span className="up">
                                                                                {goalData.lag_execution_score}
                                                                            </span> Lag score
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <i className="fi fi-rr-arrow-trend-down down"></i>
                                                                            <span className="down">
                                                                                {goalData.lag_execution_score}
                                                                            </span> Lag score
                                                                        </>
                                                                    )
                                                                }

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='col-md-6'>
                                                    <div className='d-flex mb-3 f-s-12 fw-bold'>
                                                        <span className='text-muted me-2'>Week Start Date :</span>
                                                        {/* <span>{goalData.start_date}</span> */}
                                                        <span>{new Date(goalData.start_date).toLocaleDateString('en-GB')}</span>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='d-flex  mb-3 f-s-12 fw-bold'>
                                                        <span className='text-muted me-2'>Week End Date :</span>
                                                        {/* <span>{goalData.end_date}</span> */}
                                                        <span>{new Date(goalData.end_date).toLocaleDateString('en-GB')}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <ToastContainer />

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
                                className={`form-control form_control ${errors.key_action && 'is-invalid'}`}
                                placeholder='Enter key action'
                                rows='2'
                                name='key_action'
                                value={formData.key_action}
                                onChange={handleChange}
                            />
                            {errors.key_action && <div className="invalid-feedback">{errors.key_action}</div>}
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