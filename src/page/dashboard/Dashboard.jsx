import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const Dashboard = ({ name, ...props }) => {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showNext, setShowNext] = useState(false);
  
    const handleCloseFirst = () => setShowFirst(false);
    const handleShowFirst = () => setShowFirst(true);
  
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = (e) => {
      e.preventDefault();
      setShowFirst(false);
      setShowSecond(true);
    };
  
    const handleCloseThree = () => setShowThree(false);
    const handleShowThree = (e) => {
      e.preventDefault();
      setShowSecond(false);
      setShowThree(true);
    };
  
    const handleCloseNext = () => setShowNext(false);
    const handleShowNext = (e) => {
      e.preventDefault();
      setShowThree(false);
      setShowNext(true);
    };



    const stageOptions = [
        { value: ' Arunavaa D Bajpayi', label: ' Arunavaa D Bajpayi' },
        { value: ' Amit Das Gupta', label: ' Amit Das Gupta' },
        { value: ' Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: ' Sandeep Kumar paul', label: 'Sandeep Kumar paul' },
        { value: ' Somnath Chakraborty', label: 'Somnath Chakraborty' },
        { value: ' Chandraprakash Varadarajan', label: 'Chandraprakash Varadarajan' },
        { value: '  Mahadevan Nurani Shivasubramanyam', label: ' Mahadevan Nurani Shivasubramanyam' },

    ]


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
                                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                                <div className='chart_postion'>
                                                    <img src={'assets/image/chart2.png'} alt='' />
                                                    <p className='para4 center_text'><strong>80%</strong></p>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-6'>
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
                                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                                <div className='chart_postion'>
                                                    <img src={'assets/image/chart2.png'} alt='' />
                                                    <p className='para4 center_text'><strong>80%</strong></p>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-6 '>
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
                           
                            <button onClick={handleShowFirst} className=" primaryBtn ">
                                Set 12 Week Goals & Targets
                            </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <Offcanvas show={showFirst} onHide={handleCloseFirst} placement="bottom" {...props} className='bottom_offcanves'>
                <Offcanvas.Header closeButton className='px-0'>
                    <Offcanvas.Title className='pt-3 d-flex justify-content-between align-items-center w-100'>
                    <p className='para3 textPrimary mb-2'>Set 12 Week Goals</p>
                    </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <form>
                        <div className='row'>
                          
                            <div className='col-lg-12 col-sm-12 mb-2'>
                            <textarea className="form-control form_control" id="exampleFormControlTextarea1" placeholder='Get 3 crore revenue every week...' rows="4"></textarea>
                            </div>
                            <div className='col-lg-12'>
                            <button onClick={handleShowSecond} className=" primaryBtn ">
                                Next
                            </button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showSecond} onHide={handleCloseSecond} placement="bottom" {...props} className='bottom_offcanves'>
                <Offcanvas.Header closeButton className='px-0'>
                    <Offcanvas.Title className='pt-3 d-flex justify-content-between align-items-center w-100'>
                        <p className='heading3 textGreen mb-2'>Set 12 Week Plans</p>
                        <p className='heading3 textGreen mb-2'>Goals #1</p>
                    </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <form>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-6'>
                                <p className='para4 textPrimary mb-2'>Key actions / Tactics</p>
                            </div>
                            <div className='col-lg-6 col-sm-6'>
                                <p className='para4 textPrimary mb-2'>Week Due</p>
                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                                <input className="form-control form_controlStyle2" type="text" placeholder="Key actions / Tactics" aria-label="example" />
                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                          
                                <Select
                                    options={stageOptions}
                                    className='input_control form_controlStyle2'
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#ddddff',
                                            primary: '#018B72',
                                        },
                                    })}
                                />

                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                                <input className="form-control form_controlStyle2" type="text" placeholder="Key actions / Tactics" aria-label="example" />
                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                          
                                <Select
                                    options={stageOptions}
                                    className='input_control form_controlStyle2'
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#ddddff',
                                            primary: '#018B72',
                                        },
                                    })}
                                />

                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                                <input className="form-control form_controlStyle2" type="text" placeholder="Key actions / Tactics" aria-label="example" />
                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                          
                                <Select
                                    options={stageOptions}
                                    className='input_control form_controlStyle2'
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#ddddff',
                                            primary: '#018B72',
                                        },
                                    })}
                                />

                            </div>
                            <div className='col-lg-12'>
                            <button onClick={handleShowThree} className=" primaryBtn2 mt-0 mb-3 mt-4">
                            Set another goal
                            </button>
                            </div>
                            <div className='col-lg-12'>
                            <button onClick={handleShowThree} className=" primaryBtn mt-0">
                                Next
                            </button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showThree} onHide={handleCloseThree} placement="bottom" {...props} className='bottom_offcanves'>
                <Offcanvas.Header closeButton className='px-0'>
                    <Offcanvas.Title className='pt-3 d-flex justify-content-between align-items-center w-100'>
                        <p className='heading3 textGreen mb-2'>Set 12 Week Plans</p>
                        <p className='heading3 textGreen mb-2'>Goals #2</p>
                    </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <form>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-6'>
                                <p className='para4 textPrimary mb-2'>Key actions / Tactics</p>
                            </div>
                            <div className='col-lg-6 col-sm-6'>
                                <p className='para4 textPrimary mb-2'>Week Due</p>
                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                                <input className="form-control form_controlStyle2" type="text" placeholder="Key actions / Tactics" aria-label="example" />
                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                          
                                <Select
                                    options={stageOptions}
                                    className='input_control form_controlStyle2'
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#ddddff',
                                            primary: '#018B72',
                                        },
                                    })}
                                />

                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                                <input className="form-control form_controlStyle2" type="text" placeholder="Key actions / Tactics" aria-label="example" />
                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                          
                                <Select
                                    options={stageOptions}
                                    className='input_control form_controlStyle2'
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#ddddff',
                                            primary: '#018B72',
                                        },
                                    })}
                                />

                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                                <input className="form-control form_controlStyle2" type="text" placeholder="Key actions / Tactics" aria-label="example" />
                            </div>
                            <div className='col-lg-6 col-sm-6 mb-2'>
                          
                                <Select
                                    options={stageOptions}
                                    className='input_control form_controlStyle2'
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#ddddff',
                                            primary: '#018B72',
                                        },
                                    })}
                                />

                            </div>
                            <div className='col-lg-12'>
                            <Link to='/week-target' className=" primaryBtn2 mb-3 mt-4">
                            Set another goal
                            </Link>
                            </div>
                            <div className='col-lg-12'>
                            <button onClick={handleCloseNext} className=" primaryBtn mt-0">
                                Next
                            </button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Dashboard