import { useState, useContext, useEffect, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginContext } from '../../ContextProvider/Context';
import { BASE_URL } from '../../services/api';
import axios from 'axios';
import Avatar from '../../component/avatar/Avatar';
import ApexCharts from 'react-apexcharts';

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
    // console.log(goals)

    // Chart 
    const [chartData, setChartData] = useState({
        series: [],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['Completed', 'Upcoming', 'Running'],
            colors: ['#FF4560', '#00E396', '#008FFB'],
            // legend: {
            //     position: 'bottom'
            // },
            legend: {
                position: 'right', // Place legend on the right side
                horizontalAlign: 'left', // Align legend to the left of the chart
                offsetX: 0, // Adjust the horizontal offset
                offsetY: 0, // Adjust the vertical offset
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    });

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
                // console.log("Goal_res : ", res);
            } catch (error) {
                console.log(error);
            }
        };

        // pie chart
        const pieChart = async () => {
            const res = await axios.get(`${BASE_URL}/api/goal/count-goal-data`, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            // console.log("PieChart_data : ", res)
            const { completed_goals, upcoming_goals, running_goals } = res.data.meta;
            setChartData(prevState => ({
                ...prevState,
                series: [completed_goals, upcoming_goals, running_goals]
            }));
        }
        profile();
        goals();
        pieChart();
    }, []);

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

                            <div className="goals-container mb-3">
                                <h2 className='heading2'>All Goals</h2>
                                <div className="row goals-grid">
                                    {
                                        goals && Array.isArray(goals) && goals.length > 0 ? (
                                            goals.map((value, index) => {
                                                return (
                                                    <div className='col-lg-6 col-sm-6 col-12 mb-3' key={index}>
                                                        <Link to={`/week-goals/${value.id}`} className='goal-card'>
                                                            <span className="goal-title">{value.name}</span>
                                                            <span className={value.goal_status === "Running" ? "goal-status inprogress" : value.goal_status === "Upcoming" ? "goal-status upcoming" : value.goal_status === "Completed" ? "goal-status completed" : "goal-status"}
                                                            >
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

                            <div className="chart_container">
                                <h2 className='heading2'>Goals Distribution</h2>
                            <div className="chart_wrap">
                                <ApexCharts
                                    options={chartData.options}
                                    series={chartData.series}
                                    type="pie"
                                    height={350}
                                />
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