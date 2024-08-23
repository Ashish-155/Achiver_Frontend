import React from 'react'
import { Link } from 'react-router-dom'

const AllGoalsBox = ({ goal }) => {

    console.log("cdc : ", goal)
    console.log("week_goal : ", goal.Week_Goal)


    return (
        <>

            <div className='weekGoal'>
                <div className='row '>

                    {
                        goal.Week_Goal && Array.isArray(goal.Week_Goal) && goal.Week_Goal.length > 0 ? (
                            goal.Week_Goal.map((value, index) => {
                                return (
                                    <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
                                        <Link to='/week-goals-details' className='goalCard active' key={index}>
                                            <div className='chip'>
                                                <i className="fi fi-rr-calendar"></i> Week {index + 1}
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

        </>
    )
}

export default AllGoalsBox