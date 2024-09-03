import Dropdown from 'react-bootstrap/Dropdown';
import { Fragment, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../../component/avatar/Avatar';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { BASE_URL } from '../../services/api';

const WeekTarget = ({ name, ...props }) => {

    // const [actions, setActions] = useState({
    //     goal: '',
    //     date: '',
    //     description: "",
    // });

    // const [errors, setErrors] = useState({});

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setActions(() => {
    //         return {
    //             ...actions,
    //             [name]: value,
    //         }
    //     })
    // };

    // // weeks is here
    // const [weeks, setWeeks] = useState(
    //     Array(12).fill({ lead_target: '', lag_target: '' })
    // );

    // const handleWeekChange = (index, e) => {
    //     const { name, value } = e.target;
    //     const newWeeks = [...weeks];
    //     newWeeks[index] = { ...newWeeks[index], [name]: value };
    //     setWeeks(newWeeks);
    // };


    // // submit logic is here
    // const navigate = useNavigate();
    // const handleSubmit = async () => {
    //     try {
    //         const [year, month, day] = actions.date.split("-");
    //         const formattedDate = `${day}-${month}-${year}`;

    //         // Construct the payload according to the Swagger schema
    //         const payload = {
    //             name: actions.goal,
    //             description: actions.description,
    //             start_date: formattedDate,
    //             weeks: weeks
    //         };

    //         // Send the POST request
    //         const res = await axios.post(
    //             "http://localhost:5000/api/goal/create-seperate-goal",
    //             payload,
    //             {
    //                 headers: {
    //                     Authorization: `${localStorage.getItem("token")}`,  // Added "Bearer" if needed
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );

    //         // Handle successful response
    //         toast.success(res.data.message, {
    //             position: "top-center"
    //         });
    //         navigate(`/week-goals/${res.data.data.id}`)
    //         console.log(res.data);
    //     } catch (error) {
    //         // Handle error response
    //         console.error('Error creating goal:', error.response ? error.response.data : error.message);
    //     }
    // };



    const [actions, setActions] = useState({
        goal: '',
        date: '',
        description: '',
    });

    const [errors, setErrors] = useState({});

    const [weeks, setWeeks] = useState(
        Array(12).fill({ lead_target: '', lag_target: '' })
    );

    const navigate = useNavigate();

    // Handle form field change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setActions((prevActions) => ({
            ...prevActions,
            [name]: value,
        }));
        if (value.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: undefined, // Clear error for this field
            }));
        }

    };

    // Handle week field change
    const handleWeekChange = (index, e) => {
        const { name, value } = e.target;
        const newWeeks = [...weeks];
        newWeeks[index] = { ...newWeeks[index], [name]: value };
        setWeeks(newWeeks);

        if (value.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [`${name}_${index}`]: undefined, // Clear the specific error
            }));
        }
    };

    // Validation logic
    const validate = () => {
        let isValid = true;
        const newErrors = {};

        if (!actions.goal?.trim()) {
            newErrors.goal = "Goal is required.";
            isValid = false;
        }
        if (!actions.date?.trim()) {
            newErrors.date = "Date is required.";
            isValid = false;
        }
        if (!actions.date?.trim()) {
            newErrors.date = "Please enter a message.";
            isValid = false;
        }

        weeks.forEach((week, index) => {
            if (!week.lead_target?.trim()) {
                newErrors[`lead_target_${index}`] = `Set lead target for week ${index + 1}.`;
                isValid = false;
            }

            if (!week.lag_target?.trim()) {
                newErrors[`lag_target_${index}`] = `Set lag target for week ${index + 1}.`;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };





    // submit logic is here
    //  const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const [year, month, day] = actions.date.split("-");
            const formattedDate = `${day}-${month}-${year}`;

            // Construct the payload according to the Swagger schema
            const payload = {
                name: actions.goal,
                description: actions.description,
                start_date: formattedDate,
                weeks: weeks
            };

            // Send the POST request
            const res = await axios.post(
                // "http://localhost:5000/api/goal/create-seperate-goal",
                `${BASE_URL}/api/goal/create-seperate-goal`,
                payload,
                {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`,  // Added "Bearer" if needed
                        "Content-Type": "application/json",
                    },
                }
            );

            // Handle successful response
            toast.success(res.data.message, {
                position: "top-center"
            });
            navigate(`/week-goals/${res.data.data.id}`)
            console.log(res.data);
        } catch (error) {
            // Handle error response
            console.error('Error creating goal:', error.response ? error.response.data : error.message);
        }
    };


    return (
        <>
            <div className='dashboard'>
                <div className='top_header'>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center gap-1'>
                            <Link to='/dashboard' className=' textPrimary '> <i className="fi fi-rr-angle-small-left fs-3"></i></Link>
                            <div className='d-flex justify-content-end align-items-center gap-2'>
                                <Link to='/dashboard' className=' textGray homeBox'> <i className="fi fi-br-house-chimney fs-5 d-flex"></i></Link>
                                <Avatar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main_content pt-3'>
                    <div className='container'>
                        <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='target'>
                                <div className='goals_box mb-4'>
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
                                            <label className='para3 textGray mb-1'>Description<span className='red'>*</span></label>
                                            <textarea
                                                className="form-control form_controlStyle2"
                                                name='description'
                                                value={actions.description}
                                                onChange={handleChange}
                                                rows={2}
                                            />
                                            {errors.date && <p className="text-danger">{errors.date}</p>}
                                        </div>
                                    </div>
                                </div>

                                <h3 className='heading3 mb-3'>Set 12 Week Target Separately</h3>
                                <Accordion defaultActiveKey="0">
                                    {weeks.map((week, index) => (
                                        <Accordion.Item eventKey={index.toString()} key={index}>
                                            <Accordion.Header>
                                                <div className='chip'><i className="fi fi-rr-calendar"></i> Week {index + 1}</div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className='week_card'>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target<span className='red'>*</span></label>
                                                        <input
                                                            className="form-control form_controlStyle3"
                                                            type="text"
                                                            name="lead_target"
                                                            placeholder="Lead Target"
                                                            value={week.lead_target}
                                                            onChange={(e) => handleWeekChange(index, e)}
                                                        />
                                                        {errors[`lead_target_${index}`] && <p className="text-danger">{errors[`lead_target_${index}`]}</p>}
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target<span className='red'>*</span></label>
                                                        <input
                                                            className="form-control form_controlStyle3"
                                                            type="text"
                                                            name="lag_target"
                                                            placeholder="Lag Target"
                                                            value={week.lag_target}
                                                            onChange={(e) => handleWeekChange(index, e)}
                                                        />
                                                        {errors[`lag_target_${index}`] && <p className="text-danger">{errors[`lag_target_${index}`]}</p>}
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                                <button type='submit' className='primaryBtn' onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer />



        </>
    )
}

export default WeekTarget