import { useContext, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from '../../component/avatar/Avatar';
import AllGoalsBox from '../../component/allGoalsBox/AllGoalsBox';
import axios from 'axios';
import { BASE_URL } from '../../services/api';
import { Modal } from 'react-bootstrap';
import { LoginContext } from '../../ContextProvider/Context';
import LeadChart from '../charts/LeadChart';
import LagChart from '../charts/LagChart';
// import AllGoalsBox from '../allGoalsBox/AllGoalsBox';
// import AllGoalsBox from '../allGoalsBox/AllGoalsBox';
// import AllGoalsBox from '../../component/allGoalsBox/AllGoalsBox'


const WeekGoals = () => {
    const { id } = useParams();
    // console.log(id)
    const [goal, setGoal] = useState({});
    // console.log("Goal_data:", goal)

    // lead_taerget graph state
    const [leadExecutionScores, setLeadExecutionScores] = useState([]);
    const [leadExecutionScoresRaw, setLeadExecutionScoresRaw] = useState([]);
    // console.log("leadExecutionScoresRaw : ", leadExecutionScoresRaw)
    // console.log("leadExecutionScores : ", leadExecutionScores)

    // lag_target graph state
    const [lagExecutionScores, setLagExecutionScores] = useState([]);
    const [lagExecutionScoresRaw, setLagExecutionScoresRaw] = useState([]);


    const fetchGoal = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/goal/${id}`, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            // console.log(res)
            setGoal(res.data.data)

            // taerget graph
            const weekGoals = res.data.data.Week_Goal;

            const leadRawScores = weekGoals.map(week => week.lead_execution_score);
            const lagRawScores = weekGoals.map(week => week.lag_execution_score);

            const leadScores = weekGoals.map(week => parseFloat(week.lead_execution_score.replace('%', '')));
            const lagScores = weekGoals.map(week => parseFloat(week.lag_execution_score.replace('%', '')));

            setLeadExecutionScores(leadScores);
            setLagExecutionScores(lagScores);
            setLeadExecutionScoresRaw(leadRawScores); // Store the raw lead scores for tooltip
            setLagExecutionScoresRaw(lagRawScores);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchGoal();
    }, []);

    const { logindata, setLoginData } = useContext(LoginContext);
    // console.log("Context : ", logindata)

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
            <div className='dashboard'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center gap-1 py-4'>
                            <Link to='/dashboard' className=' textPrimary '> <i className="fi fi-rr-angle-small-left fs-3"></i></Link>
                            <div className='d-flex justify-content-end align-items-center gap-2'>
                                <Link to='/dashboard' className=' textGray homeBox'> <i className="fi fi-br-house-chimney fs-5 d-flex"></i></Link>
                                <Avatar />
                            </div>
                        </div>
                        <div className='main_content'>
                            <h1 className='heading1 mb-3'>
                                ACHIEVE  DASHBOARD ({goal.name})
                            </h1>
                            <div className='innerBox'>
                                <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <div className='chart_box'>
                                            <h3 className='heading3 mb-3'>Leads Graph</h3>
                                            {/* <img src={process.env.PUBLIC_URL + '../assets/image/chart1.png'} alt="chart" /> */}

                                            <LeadChart leadExecutionScores={leadExecutionScores} leadExecutionScoresRaw={leadExecutionScoresRaw} goalData={goal} />

                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <div className='chart_box'>
                                            <h3 className='heading3 mb-3'>Lags Graph</h3>
                                            {/* <img src={process.env.PUBLIC_URL + '../assets/image/chart1.png'} alt="chart" /> */}
                                            <LagChart lagExecutionScores={lagExecutionScores} lagExecutionScoresRaw={lagExecutionScoresRaw} goalData={goal} />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12'>
                                        <div className='chart_box mb-0'>
                                            <h3 className='heading3 mb-3'>Leads Measure</h3>
                                            {/* <div className='add_box'>
                                                <button className=' textGray homeBox' onClick={openModalShow}><i class="fi fi-br-plus d-flex"></i></button>
                                            </div> */}
                                            <div className='row align-items-center'>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className='chart_postion para3'>
                                                        {/* <img src={'assets/image/chart2.png'} alt='' /> */}
                                                        {/* <img src={process.env.PUBLIC_URL + 'assets/images/chart1.png'} alt="chart" /> */}
                                                        {parseFloat(goal.lead_execution_score) >= 0 ? (
                                                            <>
                                                                <i className="fi fi-rr-arrow-trend-up up"></i>
                                                                <p className='up center_text'>{goal.lead_execution_score}</p>

                                                            </>
                                                        ) : (
                                                            <>
                                                                <i className="fi fi-rr-arrow-trend-down down"></i>
                                                                <p className='down center_text'>{goal.lead_execution_score}</p>

                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className='info '>
                                                        <div className='box'>
                                                            <p className='para3'>Target</p>
                                                            <p className='para3'><strong>{goal.lead_target}</strong></p>
                                                        </div>
                                                        <div className='box '>
                                                            {/* <div className='circle'></div> */}
                                                            <p className='para3'>Actual</p>
                                                            <p className='para3'><strong>{goal.lead_actual}</strong></p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12'>
                                        <div className='chart_box mb-0'>
                                            <h3 className='heading3 mb-3'>Lags Measure</h3>
                                            {/* <div className='add_box'>
                                                <button className=' textGray homeBox' onClick={openModalShow}><i class="fi fi-br-plus d-flex"></i></button>
                                            </div> */}
                                            <div className='row align-items-center'>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className='chart_postion para3'>
                                                        <img src={'assets/image/chart2.png'} alt='' />
                                                        {parseFloat(goal.lag_execution_score) >= 0 ? (
                                                            <>
                                                                <i className="fi fi-rr-arrow-trend-up up"></i>
                                                                <p className='up center_text'>{goal.lag_execution_score}</p>
                                                            </>

                                                        ) : (
                                                            <>
                                                                <i className="fi fi-rr-arrow-trend-down down"></i>
                                                                <p className='down center_text'>{goal.lag_execution_score}</p>
                                                            </>

                                                        )}
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className='info'>
                                                        <div className='box'>
                                                            {/* <div className='circle'></div> */}
                                                            <p className='para3'>Target</p>
                                                            <p className='para3'><strong>{goal.lag_target}</strong></p>
                                                        </div>
                                                        <div className='box'>
                                                            {/* <div className='circle'></div> */}
                                                            <p className='para3'>Actual</p>
                                                            <p className='para3'><strong>{goal.lag_actual}</strong></p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <button className=" primaryBtn mt-0">
                                    Set 12 Week Goals & Targets
                                </button> */}

                                <div className='weekGoal'>
                                    <h3 className='heading3 mb-3 fw-semibold'>12 Week Goals</h3>
                                    <div className='goal_List'>
                                        {/* <p className='para3'>This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.</p> */}
                                        <p className='para3'>{goal.description}</p>

                                    </div>
                                </div>
                                <AllGoalsBox goal={goal} refreshGoals={fetchGoal} />
                            </div>

                        </div>
                    </div>
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

export default WeekGoals