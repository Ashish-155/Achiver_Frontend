import React from 'react'
import { Link } from 'react-router-dom'

const AllGoalsBox = () => {
    return (
        <>

            <div className='weekGoal'>
                <div className='row '>
                    <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
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
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
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
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
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
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
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
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
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

        </>
    )
}

export default AllGoalsBox