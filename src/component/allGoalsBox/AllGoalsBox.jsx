import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom'

const AllGoalsBox = ({ goal }) => {

    console.log("cdc : ", goal)
    console.log("week_goal : ", goal.Week_Goal);



    const [modalShow, setModalShow] = useState(false);

    const openModalShow = () => setModalShow(true);
    const closeModalShow = () => setModalShow(false);


    const [actions, setActions] = useState({
        goal: '',
        date: '',
        description: ''
    });

    // State for form errors
    const [errors, setErrors] = useState({
        goal: '',
        date: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setActions(prevActions => ({
            ...prevActions,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        let hasErrors = false;
        const newErrors = {};

        if (!actions.goal) {
            newErrors.goal = 'Goal name is required';
            hasErrors = true;
        }

        if (!actions.date) {
            newErrors.date = 'Start date is required';
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        // Submit the form data
        console.log('Form submitted:', actions);

        // Clear the form (optional)
        setActions({
            goal: '',
            date: '',
            description: ''
        });
    };




    return (
        <>

            <div className='weekGoal'>
                <div className='row '>

                    {
                        goal.Week_Goal && Array.isArray(goal.Week_Goal) && goal.Week_Goal.length > 0 ? (
                            goal.Week_Goal.map((value, index) => {
                                return (
                                    <div className='col-lg-4 col-md-4 col-sm-6 mb-3 position-relative'>
                                        <div className='work_drop'>
                                            <DropdownButton
                                                align="end"
                                                title={<i class="fi fi-rr-menu-dots-vertical"></i>}
                                                id="dropdown-menu-align-end"
                                                className=''
                                            >
                                                <Link eventKey="1" to='/week-goals-details' className='dropdown-item'>View</Link>
                                                <Dropdown.Item eventKey="2" onClick={openModalShow}>Set Goal</Dropdown.Item>

                                            </DropdownButton>
                                        </div>
                                        <Link to='/week-goals-details' className='goalCard active' key={index}>
                                            <div>
                                                <div className='chip'>
                                                    <i className="fi fi-rr-calendar"></i> Week {index + 1}
                                                </div>
                                                {/* status */}
                                                {/* <p className='para2 status active'>Active</p> */}
                                                <p className='para2 status incoming'>Incoming</p>


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
                                                    <i className="fi fi-rr-arrow-trend-down down"></i>
                                                    <span className='down'>20.5%</span> Low from Last Week
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
                <Modal.Body className='p-4' >
                    <button className='closeButton' onClick={closeModalShow}>
                        <i className="fi fi-rr-circle-xmark"></i>
                    </button>
                    <form onSubmit={handleSubmit}>
                        <div className=' mt-4'>
                            <h3 className="heading3 mb-4">Set Your Goal</h3>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-6 col-6 mb-2'>
                                    <label className='para3 textGray mb-1'>Your Goal Name<span className='red'>*</span></label>
                                    <input
                                        className="form-control form_controlStyle2"
                                        type="text"
                                        name="goal"
                                        placeholder="Your Goal Name"
                                        value={actions.goal}
                                        onChange={handleChange}
                                    />
                                    {errors.goal && <p className="text-danger">{errors.goal}</p>}
                                </div>
                                <div className='col-lg-6 col-sm-6 col-6 mb-2'>
                                    <label className='para3 textGray mb-1'>Set Start Date<span className='red'>*</span></label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="form-control form_controlStyle2"
                                        value={actions.date}
                                        onChange={handleChange}
                                    />
                                    {errors.date && <p className="text-danger">{errors.date}</p>}
                                </div>
                                <div className='col-lg-12 mb-2'>
                                    <label className='para3 textGray mb-1'>Description</label>
                                    <textarea
                                        className="form-control form_controlStyle2"
                                        name='description'
                                        value={actions.description}
                                        onChange={handleChange}
                                        rows={2}
                                    />
                                </div>
                                <div className='col-lg-12'>
                                    <button type='submit' className='primaryBtn' onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AllGoalsBox