import Dropdown from 'react-bootstrap/Dropdown';
import { Fragment, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Avatar from '../../component/avatar/Avatar';
import Accordion from 'react-bootstrap/Accordion';

const WeekTarget = ({ name, ...props }) => {
    // const [showFirst, setShowFirst] = useState(false);
    // const [showSecond, setShowSecond] = useState(false);
    // const [showThree, setShowThree] = useState(false);
    // const [showNext, setShowNext] = useState(false);

    // const handleCloseFirst = () => setShowFirst(false);
    // const handleShowFirst = () => setShowFirst(true);

    // const handleCloseSecond = () => setShowSecond(false);
    // const handleShowSecond = () => setShowSecond(true);

    // const handleCloseThree = () => setShowThree(false);
    // const handleShowThree = () => setShowThree(true);

    // const handleCloseNext = () => setShowNext(false);
    // const handleShowNext = () => setShowNext(true);



    // const stageOptions = [
    //     { value: ' Arunavaa D Bajpayi', label: ' Arunavaa D Bajpayi' },
    //     { value: ' Amit Das Gupta', label: ' Amit Das Gupta' },
    //     { value: ' Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
    //     { value: ' Sandeep Kumar paul', label: 'Sandeep Kumar paul' },
    //     { value: ' Somnath Chakraborty', label: 'Somnath Chakraborty' },
    //     { value: ' Chandraprakash Varadarajan', label: 'Chandraprakash Varadarajan' },
    //     { value: '  Mahadevan Nurani Shivasubramanyam', label: ' Mahadevan Nurani Shivasubramanyam' },

    // ]


    
    const [actions, setActions] = useState([{ goal: '', date: '' }]);
    const [errors, setErrors] = useState({});
    // const navigate = useNavigate(); // Initialize useNavigate
  
    const handleChange = (index, e) => {
      const newActions = [...actions];
      newActions[index][e.target.name] = e.target.value;
      setActions(newActions);
    };
  
    const validate = () => {
      const newErrors = {};
      actions.forEach((action, index) => {
        if (!action.goal) {
          newErrors[`goal${index}`] = 'Goal name is required';
        }
        if (!action.date) {
          newErrors[`date${index}`] = 'Date is required';
        }
      });
      return newErrors;
    };



    return (
        <>
            <div className='dashboard dsh_target'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                    <div className='d-flex justify-content-between align-items-center gap-1 py-4'>
                            <Link to='/dashboard' className=' textPrimary '> <i class="fi fi-rr-angle-small-left fs-3"></i></Link>
                            <div className='d-flex justify-content-end align-items-center gap-2 ms-auto'>
                                <Link to='/dashboard' className=' textGray homeBox'> <i class="fi fi-br-house-chimney fs-5 d-flex"></i></Link>
                                <Avatar />
                            </div>
                        </div>
                        <div className='main_content'>
                            <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD</h1>
                          
                            <div className='target'>
                            <div className='goals_box mb-4'>
                                <h3 class="heading3 mb-4">Set Your Goal</h3>
                                <form>
                                    <div className='row'>
                                        {actions.map((action, index) => (
                                            <Fragment key={index}>
                                                <div className='col-lg-6 col-sm-6 col-6 mb-2'>
                                                    <label className='para3 textGray mb-1'>Your Goal Name<span className='red'>*</span></label>
                                                    <input
                                                        className="form-control form_controlStyle2"
                                                        type="text"
                                                        name="goal"
                                                        placeholder="Your Goal Name"
                                                        value={action.goal}
                                                        onChange={(e) => handleChange(index, e)}
                                                    />
                                                    {errors[`goal${index}`] && <p className="text-danger">{errors[`goal${index}`]}</p>}
                                                </div>
                                                <div className='col-lg-6 col-sm-6 col-6 mb-2'>
                                                    <label className='para3 textGray mb-1'>Set Start Date<span className='red'>*</span></label>
                                                    <input
                                                        type="date"
                                                        id="date"
                                                        name="date"
                                                        className="form-control form_controlStyle2"
                                                        value={action.date}
                                                        onChange={(e) => handleChange(index, e)}
                                                    />
                                                    {errors[`date${index}`] && <p className="text-danger">{errors[`date${index}`]}</p>}
                                                </div>
                                            </Fragment>
                                        ))}

                                        {/* <div className='col-lg-12'>
                                            <button type="button" className="primaryBtn" onClick={handleSubmit}>Submit</button>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                                <h3 className='heading3 mb-3'>Set 12 Week Target Separetly</h3>

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div className='chip'><i class="fi fi-rr-calendar"></i> Week 1</div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>
                                                {/* <div className='chip'><i class="fi fi-rr-calendar"></i> Week 1</div> */}
                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 2</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 3</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 4</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 5</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 6</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 7</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 8</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 9</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 10</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 11</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="11">
                                        <Accordion.Header><div className='chip'><i class="fi fi-rr-calendar"></i> Week 12</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className='week_card'>

                                                <form>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lead Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lead Target" aria-label="example" />
                                                    </div>
                                                    <div className='form_group'>
                                                        <label className='label'>Set Lag Target</label>
                                                        <input className="form-control form_controlStyle3" type="text" placeholder="Lag Target" aria-label="example" />
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default WeekTarget