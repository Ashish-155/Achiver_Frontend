import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const WeekGoals = () => {



    return (
        <>
            <div className='dashboard'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
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
                                <div className='weekGoal'>
                                    <Link to='/week-goals-details' className='goalCard active '>
                                        <div className='chip'><i class="fi fi-rr-calendar"></i> Week 1</div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Leads</p>
                                            <p className='para2'><strong>200</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Lags</p>
                                            <p className='para2'><strong>$4500</strong></p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className='para2 d-flex justify-content-start align-items-center gap-2'><i class="fi fi-rr-arrow-trend-down down"></i><span className='down'>20.5%</span> Low from Last Week</p>
                                        </div>
                                    </Link>
                                    <Link to='/week-goals-details' className='goalCard ongoing'>
                                        <div className='chip'><i class="fi fi-rr-calendar"></i> Week 2</div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Leads</p>
                                            <p className='para2'><strong>200</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Lags</p>
                                            <p className='para2'><strong>$4500</strong></p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className='para2 d-flex justify-content-start align-items-center gap-2'><i class="fi fi-rr-arrow-trend-down down"></i><span className='down'>20.5%</span> Low from Last Week</p>
                                        </div>
                                    </Link>
                                    <Link to='/week-goals-details' className='goalCard '>
                                        <div className='chip'><i class="fi fi-rr-calendar"></i> Week 3</div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Leads</p>
                                            <p className='para2'><strong>200</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Lags</p>
                                            <p className='para2'><strong>$4500</strong></p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className='para2 d-flex justify-content-start align-items-center gap-2'><i class="fi fi-rr-arrow-trend-up up"></i><span className='up'>20.5%</span> Low from Last Week</p>
                                        </div>
                                    </Link>
                                    <Link to='/week-goals-details' className='goalCard'>
                                        <div className='chip'><i class="fi fi-rr-calendar"></i> Week 4</div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Leads</p>
                                            <p className='para2'><strong>200</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Lags</p>
                                            <p className='para2'><strong>$4500</strong></p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className='para2 d-flex justify-content-start align-items-center gap-2'><i class="fi fi-rr-arrow-trend-up up"></i><span className='up'>20.5%</span> Low from Last Week</p>
                                        </div>
                                    </Link>
                                    <Link to='/week-goals-details' className='goalCard'>
                                        <div className='chip'><i class="fi fi-rr-calendar"></i> Week 5</div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Leads</p>
                                            <p className='para2'><strong>200</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                                            <p className='para2'>Target Lags</p>
                                            <p className='para2'><strong>$4500</strong></p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className='para2 d-flex justify-content-start align-items-center gap-2'><i class="fi fi-rr-arrow-trend-down down"></i><span className='down'>20.5%</span> Low from Last Week</p>
                                        </div>
                                    </Link>

                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default WeekGoals