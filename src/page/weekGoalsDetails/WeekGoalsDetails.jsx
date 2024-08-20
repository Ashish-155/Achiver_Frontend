import ProgressBar from 'react-bootstrap/ProgressBar';

const WeekGoalsDetails = () => {
    const now = 75;
    const now2 = 56;


    return (
        <>
            <div className='dashboard'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        <div className='main_content'>
                            <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD</h1>
                            <div className='innerBox'>


                                <div className='weekGoal details'>
                                    <div className='details_box'>
                                        <h3 className='heading3 mb-3'>Notifies to enter actual data every week</h3>
                                        <h3 className='heading3 textGray'>Goals for this week</h3>
                                        <h2 className='heading2'>Week 6</h2>
                                        <i class="fi fi-rr-angle-small-right arrow right"></i>
                                        <i class="fi fi-rr-angle-small-left arrow left"></i>
                                        <div className='sliderBox'>
                                            <p className='para2 text-black'> Contact management team and form a mid week meeting</p>
                                        </div>
                                    </div>

                                    <div className='my-3 item_box'>

                                        {/* <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className='custom_head'>Accordion Item #1</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion> */}
                                        <div className='task_card'>
                                            <div className='card_header'>
                                                <h3 className='heading3 textGray'>Add a Task</h3>
                                                <i className="fi fi-rr-add textMarker fs-5"></i>
                                            </div>
                                            <div className='card_body'>
                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Key Action / Tactics</label>
                                                        {/* <input className="form-control form_controlStyle3" type="text" placeholder="Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to " aria-label="example" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' /> */}
                                                        <textarea className="form-control form_controlStyle3" id="exampleFormControlTextarea1" placeholder='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' rows="2" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to '></textarea>
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Who</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Veenet" aria-label="example" value='Veenet' />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Day</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Wednesday" aria-label="example" value='Wednesday' />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className='card_body'>
                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Key Action / Tactics</label>
                                                        {/* <input className="form-control form_controlStyle3" type="text" placeholder="Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to " aria-label="example" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' /> */}
                                                        <textarea className="form-control form_controlStyle3" id="exampleFormControlTextarea1" placeholder='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' rows="2" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to '></textarea>
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Who</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Veenet" aria-label="example" value='Veenet' />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Day</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Wednesday" aria-label="example" value='Wednesday' />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className='card_body'>
                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Key Action / Tactics</label>
                                                        {/* <input className="form-control form_controlStyle3" type="text" placeholder="Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to " aria-label="example" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' /> */}
                                                        <textarea className="form-control form_controlStyle3" id="exampleFormControlTextarea1" placeholder='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' rows="2" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to '></textarea>
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Who</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Veenet" aria-label="example" value='Veenet' />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Day</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Wednesday" aria-label="example" value='Wednesday' />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className='card_body'>
                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Key Action / Tactics</label>
                                                        {/* <input className="form-control form_controlStyle3" type="text" placeholder="Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to " aria-label="example" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' /> */}
                                                        <textarea className="form-control form_controlStyle3" id="exampleFormControlTextarea1" placeholder='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' rows="2" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to '></textarea>
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Who</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Veenet" aria-label="example" value='Veenet' />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Day</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Wednesday" aria-label="example" value='Wednesday' />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className='card_body'>
                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Key Action / Tactics</label>
                                                        {/* <input className="form-control form_controlStyle3" type="text" placeholder="Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to " aria-label="example" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' /> */}
                                                        <textarea className="form-control form_controlStyle3" id="exampleFormControlTextarea1" placeholder='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to ' rows="2" value='Conta Contact Deepak and Ask him to start setupct Deepak and Ask him to '></textarea>
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Who</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Veenet" aria-label="example" value='Veenet' />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Day</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Wednesday" aria-label="example" value='Wednesday' />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className='execution'>
                                            <h2 className='heading2 textGray'>Weekly Execution Score</h2>
                                            <div className='mb-5'>
                                                <div className='progress_label mb-2'>
                                                    <p className='para4 d-flex justify-content-between align-items-center'>Last week’s Execution Score <strong>{now}%</strong></p>
                                                </div>
                                                <ProgressBar now={now} variant="bg_marker" />
                                            </div>
                                            <div>
                                                <div className='progress_label mb-2'>
                                                    <p className='para4 d-flex justify-content-between align-items-center'>Average Execution Score to Date <strong>{now2}%</strong></p>
                                                </div>
                                                <ProgressBar now={now2} variant='bg_secondary' />
                                            </div>
                                        </div>

                                        <div className="lead-measures">
                                            <h3 className='heading3'>Lead Measures</h3>
                                            <div className="measure">
                                                <span className="para4">Target</span>
                                                <span className="value">500</span>
                                            </div>
                                            <div className="measure">
                                                <span className="para4">Actual</span>
                                                <span className="value actual-input">
                                                    <input type="number" placeholder="Enter value" className='form_controlStyle3' />
                                                </span>
                                            </div>
                                            <div className="measure">
                                                <span className="para4">Cumulative Target:</span>
                                                <span className="value">3000</span>
                                            </div>
                                            <div className="measure">
                                                <span className="para4">Cumulative Actual:</span>
                                                <span className="value">2368</span>
                                            </div>
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

export default WeekGoalsDetails