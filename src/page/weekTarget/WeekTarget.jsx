import Dropdown from 'react-bootstrap/Dropdown';
import { Fragment, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../../component/avatar/Avatar';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const WeekTarget = ({ name, ...props }) => {

    // const [actions, setActions] = useState([{ goal: '', date: '' }]);
    const [actions, setActions] = useState({
        goal: '',
        date: '',
        description: "",
    });

    const [errors, setErrors] = useState({});
    // const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        // const newActions = [...actions];
        // newActions[index][e.target.name] = e.target.value;
        // setActions(newActions);
        // console.log(actions)

        const { name, value } = e.target;
        setActions(() => {
            return {
                ...actions,
                [name]: value,
            }
        })
    };

    // weeks is here
    const [weeks, setWeeks] = useState(
        Array(12).fill({ lead_target: '', lag_target: '' })
    );

    const handleWeekChange = (index, e) => {
        const { name, value } = e.target;
        const newWeeks = [...weeks];
        newWeeks[index] = { ...newWeeks[index], [name]: value };
        setWeeks(newWeeks);
    };


    // submit logic is here
    const navigate = useNavigate();
    const handleSubmit = async () => {
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
                "http://localhost:5000/api/goal/create-seperate-goal",
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


    const validate = () => {
        const newErrors = {};
        actions.forEach((action, index) => {
            if (!action.goal) {
                newErrors[`goal${index}`] = 'Goal name is required';
            }
            if (!action.date) {
                newErrors[`date${index}`] = 'Date is required';
            }
        });
        return newErrors;
    };



    return (
        <>
            <div className='dashboard dsh_target'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center gap-1 py-4'>
                            <Link to='/dashboard' className=' textPrimary '> <i class="fi fi-rr-angle-small-left fs-3"></i></Link>
                            <div className='d-flex justify-content-end align-items-center gap-2 ms-auto'>
                                <Link to='/dashboard' className=' textGray homeBox'> <i class="fi fi-br-house-chimney fs-5 d-flex"></i></Link>
                                <Avatar />
                            </div>
                        </div>
                        <div className='main_content'>
                            <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD</h1>

                            <div className='target'>
                                <div className='goals_box mb-4'>
                                    <h3 class="heading3 mb-4">Set Your Goal</h3>
                                    <form>
                                        {/* <div className='row'>
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
                                                    <div className='col-lg-12 mb-2'>
                                                        <label className='para3 textGray mb-1'>Description</label>
                                                        <textarea className="form-control form_controlStyle2" rows={2}></textarea>
                                                    </div>
                                                </Fragment>
                                            ))}
                                        </div> */}
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
                                                <textarea className="form-control form_controlStyle2" name='description'
                                                    value={actions.description}
                                                    onChange={handleChange}
                                                    rows={2}
                                                ></textarea>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <h3 className='heading3 mb-3'>Set 12 Week Target Separetly</h3>
                                {/* 
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div className='chip'><i class="fi fi-rr-calendar"></i> Week 1</div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>
                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 2</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 3</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 4</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 5</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 6</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 7</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 8</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 9</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 10</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 11</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="11">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 12</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion> */}

                                <Accordion defaultActiveKey="0">
                                    {weeks.map((week, index) => (
                                        <Accordion.Item eventKey={index.toString()} key={index}>
                                            <Accordion.Header>
                                                <div className='chip'><i className="fi fi-rr-calendar"></i> Week {index + 1}</div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className='week_card'>
                                                    <form>
                                                        <div className='form_group'>
                                                            <label className='label'>Set Lead Target</label>
                                                            <input
                                                                className="form-control form_controlStyle3"
                                                                type="text"
                                                                name="lead_target"
                                                                placeholder="Lead Target"
                                                                value={week.lead_target}
                                                                onChange={(e) => handleWeekChange(index, e)}
                                                            />
                                                        </div>
                                                        <div className='form_group'>
                                                            <label className='label'>Set Lag Target</label>
                                                            <input
                                                                className="form-control form_controlStyle3"
                                                                type="text"
                                                                name="lag_target"
                                                                placeholder="Lag Target"
                                                                value={week.lag_target}
                                                                onChange={(e) => handleWeekChange(index, e)}
                                                            />
                                                        </div>
                                                    </form>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>



                                <button type='submit' className='primaryBtn' onClick={handleSubmit}>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>



        </>
    )
}

export default WeekTarget