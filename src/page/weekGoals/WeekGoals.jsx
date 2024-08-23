import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from '../../component/avatar/Avatar';
import AllGoalsBox from '../../component/allGoalsBox/AllGoalsBox';
import axios from 'axios';
import { BASE_URL } from '../../services/api';
// import AllGoalsBox from '../allGoalsBox/AllGoalsBox';
// import AllGoalsBox from '../allGoalsBox/AllGoalsBox';
// import AllGoalsBox from '../../component/allGoalsBox/AllGoalsBox'

const WeekGoals = () => {
    const { id } = useParams();
    // console.log(id)
    const [goal, setGoal] = useState({});
    console.log("Goal_data:", goal)

    useEffect(() => {

        const fetchGoal = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/goal/${id}`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                });
                console.log(res)
                setGoal(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchGoal();
    }, [])


    return (
        <>
            <div className='dashboard'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center gap-1 py-4'>
                            <Link to='/welcome' className=' textPrimary '> <i class="fi fi-rr-angle-small-left fs-3"></i></Link>
                            <div className='d-flex justify-content-end align-items-center gap-2'>
                                <Link to='/dashboard' className=' textGray homeBox'> <i class="fi fi-br-house-chimney fs-5 d-flex"></i></Link>
                                <Avatar />
                            </div>
                        </div>
                        <div className='main_content'>
                            <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD</h1>
                            <div className='innerBox'>
                                <div className='row align-items-center'>
                                    <div className='col-lg-12'>
                                        <div className='chart_box'>
                                            <h3 className='heading3 mb-3'>Leads & Lags Graph</h3>
                                            <img src={'assets/image/chart1.png'} alt='' />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12'>
                                        <div className='chart_box'>
                                            <h3 className='heading3 mb-3'>Leads Measure</h3>
                                            <div className='row align-items-center'>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className='chart_postion'>
                                                        <img src={'assets/image/chart2.png'} alt='' />
                                                        <p className='para4 center_text'><strong>80%</strong></p>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className='info'>
                                                        <div className='box'>
                                                            <div className='circle'></div>
                                                            <p className='para3'>Actual</p>
                                                        </div>
                                                        <div className='box'>
                                                            <div className='circle'></div>
                                                            <p className='para3'>Target</p>
                                                        </div>
                                                    </div>
                                                    <p className='para4'>Cumu. target 2023 <strong>5558</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12'>
                                        <div className='chart_box'>
                                            <h3 className='heading3 mb-3'>Lags Measure</h3>
                                            <div className='row align-items-center'>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className='chart_postion'>
                                                        <img src={'assets/image/chart2.png'} alt='' />
                                                        <p className='para4 center_text'><strong>80%</strong></p>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className='info'>
                                                        <div className='box'>
                                                            <div className='circle'></div>
                                                            <p className='para3'>Actual</p>
                                                        </div>
                                                        <div className='box'>
                                                            <div className='circle'></div>
                                                            <p className='para3'>Target</p>
                                                        </div>
                                                    </div>
                                                    <p className='para4'>Cumu. target 2023 <strong>46.72%</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className=" primaryBtn mt-0">
                                    Set 12 Week Goals & Targets
                                </button>

                                <div className='weekGoal'>
                                    <h3 className='heading3 mb-3'>12 Week Goals</h3>
                                    <div className='goal_List'>
                                        <ul>
                                            <li>Get 3 crore revenue every week</li>
                                            <li>Setup a marketing team to handle all the marketing jobs</li>
                                            <li>Setup a new culture in management</li>
                                            <li>Provide and get new sales target for sales team</li>
                                            <li>Merge all vendors to a single system</li>
                                            <li>New setup for manufacturing unit</li>
                                            <li>Distribute workforce to multiple departments</li>
                                            <li>Setup workforce management for labour dept.</li>
                                        </ul>
                                    </div>
                                </div>
                                <AllGoalsBox goal={goal} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default WeekGoals