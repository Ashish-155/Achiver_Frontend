import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from 'react-select';

const WeekTarget = ({ name, ...props }) => {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showNext, setShowNext] = useState(false);

    const handleCloseFirst = () => setShowFirst(false);
    const handleShowFirst = () => setShowFirst(true);

    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const handleCloseThree = () => setShowThree(false);
    const handleShowThree = () => setShowThree(true);

    const handleCloseNext = () => setShowNext(false);
    const handleShowNext = () => setShowNext(true);



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
            <div className='dashboard dsh_target'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                    <div className='top_header'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className='profile'>
                                <div className="profile-wrap ">
                                <i class="fi fi-sr-circle-user"></i>
                                {/* <div className="exp-avtar gth-bg-warning text-white">MS</div> */}
                                <div className="ps-2">
                                {/* <h5 className="profile-name">Pratima Majumder</h5> */}
                                </div></div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                           
                        </div>
                        <div className='main_content'>
                            <h1 className='heading1 mb-3'>ACHIEVE DASHBOARD</h1>

                            <div className='target'>
                                <h3 className='heading3 mb-3'>Set 12 Week Target Separetly</h3>
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 1</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 2</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 3</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 4</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 5</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 6</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 7</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 8</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 9</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 10</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 11</div>
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
                                <div className='week_card'>
                                    <div className='chip'><i class="fi fi-rr-calendar"></i> Week 12</div>
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
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default WeekTarget