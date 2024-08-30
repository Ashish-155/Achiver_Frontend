import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../services/api';

const AllGoalsBox = ({ goal, refreshGoals }) => {
    const [modalShow, setModalShow] = useState(false);

    // console.log("object : ", goal.Week_Goal)

    // Initial state for form data
    const [actualData, setActualData] = useState({
        week_goal_id: "",
        lead_actual: "",
        lag_actual: "",
        description: "",
    });

    // State for form errors
    const [errors, setErrors] = useState({
        lead_actual: '',
        lag_actual: ''
    });

    // Update form data when goal prop or modalShow state changes
    useEffect(() => {
        if (modalShow && actualData.week_goal_id) {
            const weekGoal = goal.Week_Goal.find(wg => wg.id === actualData.week_goal_id);
            if (weekGoal) {
                setActualData({
                    week_goal_id: weekGoal.id,
                    lead_actual: weekGoal.lead_actual || "",
                    lag_actual: weekGoal.lag_actual || "",
                    description: weekGoal.description || "",
                });
            }
        }
    }, [goal, modalShow, actualData.week_goal_id]);

    const openModalShow = (id) => {
        setActualData(prevData => ({
            ...prevData,
            week_goal_id: id,
        }));
        setModalShow(true);
    };

    const closeModalShow = () => {
        setModalShow(false);
        // Clear the form when closing the modal
        setActualData({
            week_goal_id: "",
            lead_actual: "",
            lag_actual: "",
            description: "",
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        let hasErrors = false;
        const newErrors = {};

        if (!actualData.lead_actual) {
            newErrors.lead_actual = 'Actual Lead is required';
            hasErrors = true;
        }

        if (!actualData.lag_actual) {
            newErrors.lag_actual = 'Actual Lag is required';
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        // Submit the form data
        handleActualWeekGoalDataSubmit();

        // Clear the form after submission
        setActualData({
            week_goal_id: "",
            lead_actual: "",
            lag_actual: "",
            description: "",
        });

        // Close the modal
        closeModalShow();
    };

    // API call to submit actual week goal data
    const handleActualWeekGoalDataSubmit = async () => {
        try {
            await axios.put(`${BASE_URL}/api/goal/post-actual-week-goal-data`, actualData, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            refreshGoals();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='weekGoal'>
                <div className='row'>
                    {
                        goal.Week_Goal && Array.isArray(goal.Week_Goal) && goal.Week_Goal.length > 0 ? (
                            goal.Week_Goal.map((value, index) => {
                                return (
                                    <div className='col-lg-4 col-md-4 col-sm-6 mb-3 position-relative' key={index}>
                                        <div className='work_drop'>
                                            <DropdownButton
                                                align="end"
                                                title={<i className="fi fi-rr-menu-dots-vertical"></i>}
                                                id="dropdown-menu-align-end"
                                                className=''
                                            >
                                                <Link eventKey="1" to={`/week-goals-details/${value.id}`} className='dropdown-item'>View</Link>
                                                <Dropdown.Item eventKey="2" onClick={() => openModalShow(value.id)}>Actual Achivement</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <Link to={`/week-goals-details/${value.id}`} className='goalCard active'>
                                            <div>
                                                <div className='chip'>
                                                    <i className="fi fi-rr-calendar"></i> Week
                                                    {/* {index + 1} */}
                                                    {value.week_for}
                                                </div>
                                                {
                                                    value.running === true ? (
                                                        <p className='para2 status active'>
                                                            Running
                                                        </p>
                                                    ) :
                                                        (
                                                            value.upcoming === true ? (
                                                                <p className='para2 status incoming'>
                                                                    Upcoming
                                                                </p>
                                                            ) : (
                                                                ""
                                                            )
                                                        )
                                                }
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                                <p className='para2'>Target Leads</p>
                                                <p className='para2'><strong>{value.lead_target}</strong></p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                                <p className='para2'>Target Lags</p>
                                                <p className='para2'><strong>{value.lag_target}</strong></p>
                                            </div>
                                            <div className='mt-4'>
                                                <p className='para2 d-flex justify-content-start align-items-center gap-2'>
                                                    {parseFloat(value.lead_execution_score) >= 0 ? (
                                                        <i className="fi fi-rr-arrow-trend-up up"></i>
                                                    ) : (
                                                        <i className="fi fi-rr-arrow-trend-down down"></i>
                                                    )}
                                                    <span className={parseFloat(value.lead_execution_score) >= 0 ? 'up' : 'down'}>
                                                        {value.lead_execution_score}
                                                    </span> Lead score
                                                </p>

                                                <p className='para2 d-flex justify-content-start align-items-center gap-2'>
                                                    {parseFloat(value.lag_execution_score) >= 0 ? (
                                                        <i className="fi fi-rr-arrow-trend-up up"></i>
                                                    ) : (
                                                        <i className="fi fi-rr-arrow-trend-down down"></i>
                                                    )}
                                                    <span className={parseFloat(value.lag_execution_score) >= 0 ? 'up' : 'down'}>
                                                        {value.lag_execution_score}
                                                    </span> Lag score
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        ) : (
                            <p>No week goals available</p>
                        )
                    }
                </div>
            </div>

            <Modal
                show={modalShow}
                onHide={closeModalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='p-4'>
                    <button className='closeButton' onClick={closeModalShow}>
                        <i className="fi fi-rr-circle-xmark"></i>
                    </button>
                    <form onSubmit={handleSubmit}>
                        <div className=' mt-4'>
                            <h3 className="heading3 mb-4">Set Your Actual Data</h3>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-6 col-6 mb-2'>
                                    <label className='para3 textGray mb-1'>
                                        Actual Lead<span className='red'>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control  form_controlStyle2"
                                        placeholder="Enter Actual Lead"
                                        value={actualData.lead_actual}
                                        onChange={(e) => setActualData({ ...actualData, lead_actual: e.target.value })}
                                    />
                                    {errors.lead_actual && <span className="text-danger para2">{errors.lead_actual}</span>}
                                </div>
                                <div className='col-lg-6 col-sm-6 col-6 mb-2'>
                                    <label className='para3 textGray mb-1'>
                                        Actual Lag<span className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control  form_controlStyle2"
                                        placeholder="Enter Actual Lag"
                                        value={actualData.lag_actual}
                                        onChange={(e) => setActualData({ ...actualData, lag_actual: e.target.value })}
                                    />
                                    {errors.lag_actual && <span className="text-danger para2">{errors.lag_actual}</span>}
                                </div>
                                <div className='col-lg-12 mb-2'>
                                    <label className='para3 textGray mb-1'>Description</label>
                                    <textarea
                                        className="form-control  form_controlStyle2"
                                        placeholder="Enter description"
                                        value={actualData.description}
                                        onChange={(e) => setActualData({ ...actualData, description: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="primaryBtn">Submit</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AllGoalsBox;
