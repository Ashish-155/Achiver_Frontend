import React from 'react'
import Avatar from '../../component/avatar/Avatar'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import WelcomeBox from '../../component/welcomeBox/WelcomeBox';

const AllGoals = () => {
    return (
        <>
            <div className='dashboard welcome'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center gap-1 py-4'>
                            <Link to='/welcome' className=' textPrimary '> <i class="fi fi-rr-angle-small-left fs-3"></i></Link>
                            <div className='d-flex justify-content-end align-items-center gap-2'>
                            <Link to='/dashboard' className=' textPrimary '> <i class="fi fi-br-house-chimney fs-4 d-flex"></i></Link>
                            <Avatar />
                            </div>
                        </div>
                        <div className='main_content'>
                            <div className='inner_content'>
                            <WelcomeBox />
                                <div className='goals_box'>
                                    <h3 class="heading3 mb-4">Your All Goals</h3>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                            <Link to='/week-goals' className='box' >
                                                <h3 class="heading3 mb-0">Goals #1</h3>
                                            </Link>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                            <Link to='/week-goals' className='box' >
                                                <h3 class="heading3 mb-0">Goals #1</h3>
                                            </Link>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                            <Link to='/week-goals' className='box' >
                                                <h3 class="heading3 mb-0">Goals #2</h3>
                                            </Link>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                            <Link to='/week-goals' className='box' >
                                                <h3 class="heading3 mb-0">Goals #3</h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllGoals