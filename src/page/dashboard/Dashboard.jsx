import { useState, useContext, useEffect, Fragment } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown';
import { toast } from 'react-toastify';
import { LoginContext } from '../../ContextProvider/Context';
import { BASE_URL } from '../../services/api';
import axios from 'axios';
import { DropdownButton, Modal } from 'react-bootstrap';
import Avatar from '../../component/avatar/Avatar';
import LeadChart from '../charts/LeadChart';

const Dashboard = ({ name, ...props }) => {


    const { logindata, setLoginData } = useContext(LoginContext);



    const navigate = useNavigate();
    const removeToken = () => {
        localStorage.removeItem("token");
        toast.success("Logged out successfully!");
        navigate("/", { replace: true });
    };

    // goals 
    const [goals, setGoals] = useState({});
    console.log(goals)

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

        // my goals api
        const goals = async () => {
            try {
                const res = await axios.get(
                    `${BASE_URL}/api/goal/all-goal`,
                    {
                        headers: {
                            Authorization: `${localStorage.getItem("token")}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                setGoals(res.data.data);
                console.log("Goal_res : ", res);
            } catch (error) {
                console.log(error);
            }
        };
        profile();
        goals();
    }, []);


    const goal = [
        { title: 'Run 100 miles to reduce weight', status: 'Upcoming', goalStatus: 'Upcoming' },
        { title: 'Produce $12,000 in revenue', status: 'In Progress', goalStatus: 'inProgress' },
        { title: 'Setup a manufacturing unit in Punjab', status: 'Completed', goalStatus: 'Completed' },
        { title: 'Get championship in swimming', status: 'Upcoming', goalStatus: 'Upcoming' },
        { title: 'Open 2 stores in Mumbai', status: 'In Progress', goalStatus: 'inProgress' },
        { title: 'Aquire Lands in Gujarat', status: 'Completed', goalStatus: 'Completed' },
    ];


    // lead_taerget graph state
    const [leadExecutionScores, setLeadExecutionScores] = useState([]);
    const [leadExecutionScoresRaw, setLeadExecutionScoresRaw] = useState([]);
    // console.log("leadExecutionScoresRaw : ", leadExecutionScoresRaw)
    // console.log("leadExecutionScores : ", leadExecutionScores)

    // lag_target graph state
    const [lagExecutionScores, setLagExecutionScores] = useState([]);
    const [lagExecutionScoresRaw, setLagExecutionScoresRaw] = useState([]);


    return (
        <>
            <div className='dashboard'>
                <div className='top_header'>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center gap-1'>
                            <div className='d-flex justify-content-end align-items-center gap-2 ms-auto'>
                                <Link to='/dashboard' className=' textGray homeBox'> <i className="fi fi-br-house-chimney fs-5 d-flex"></i></Link>
                                <Avatar />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='main_content'>
                    <div className='container'>
                        <div className='top_container pt-4'>
                            <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD</h1>
                        </div>
                        <div className='innerBox'>
                            {/* <div className='addedGoals'>
                                <h3 className='heading3 mb-3 fw-semibold'>Your Goals</h3>
                                <div className='wrap'>

                                    {
                                        goals && Array.isArray(goals) && goals.length > 0 ? (
                                            goals.map((value, index) => {
                                                return (
                                                    <Link to={`/week-goals/${value.id}`} className='goalBox'>
                                                        <p className='heading2 textPrimary fw-semibold'>{value.name}</p>
                                                    </Link>

                                                )
                                            })
                                        )
                                            :
                                            (
                                                <p>No week goals available</p>
                                            )
                                    }

                                </div>
                            </div> */}
                            <div className="goals-container mb-3">
                                <h2 className='heading2'>All Goals</h2>
                                <div className="row goals-grid">

                                    {/* {goal.map((goal, index) => (
                                        <div className='col-lg-6 col-sm-6 col-12 mb-3' key={index}>
                                            <Link to={`/week-goals/${goal.id}`} className={`goal-card ${goal.goalStatus.toLowerCase()}`}>
                                                <span className="goal-title">Goal_Title</span>
                                                <span className={`goal-status ${goal.goalStatus.toLowerCase()}`}>
                                               
                                                    Status
                                                </span>
                                            </Link>
                                        </div>
                                    ))} */}

                                    {
                                        goals && Array.isArray(goals) && goals.length > 0 ? (
                                            goals.map((value, index) => {
                                                return (
                                                    <div className='col-lg-6 col-sm-6 col-12 mb-3' key={index}>
                                                        <Link to={`/week-goals/${value.id}`} className='goal-card'>
                                                            {/* <p className='heading2 textPrimary fw-semibold'>{value.name}</p> */}
                                                            <span className="goal-title">{value.name}</span>
                                                            <span className={`goal-status completed`}>
                                                                {value.goal_status}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        )
                                            :
                                            (
                                                <p>No week goals available</p>
                                            )
                                    }
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}







        </>
    )
}

export default Dashboard