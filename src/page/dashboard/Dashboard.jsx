import { useState, useContext, useEffect, Fragment } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown';
import { toast } from 'react-toastify';
import { LoginContext } from '../../ContextProvider/Context';
import { BASE_URL } from '../../services/api';
import axios from 'axios';
import { DropdownButton, Modal } from 'react-bootstrap';
import Avatar from '../../component/avatar/Avatar';

const Dashboard = ({ name, ...props }) => {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThree, setShowThree] = useState(false);

    const handleCloseFirst = () => setShowFirst(false);
    const handleShowFirst = (e) => {
        e.preventDefault();
        setShowFirst(true);
        setShowSecond(false);
        setShowThree(false);
    };

    // const handleCloseSecond = () => setShowSecond(false);
    // const handleShowSecond = (e) => {
    //     e.preventDefault();

    //     if (validateFirstStep()) {
    //         setShowFirst(true);
    //         setShowSecond(true);
    //         setShowThree(false);
    //     }
    // };



    // const handleCloseThree = () => setShowThree(false);
    // const handleShowThree = (e) => {
    //     e.preventDefault();

    //     if (validateSecondStep()) {
    //         setShowFirst(false);
    //         setShowSecond(false);
    //         setShowThree(true);
    //     }
    // };


    const { logindata, setLoginData } = useContext(LoginContext);


    const stageOptions = [
        { value: ' Arunavaa D Bajpayi', label: ' Arunavaa D Bajpayi' },
        { value: ' Amit Das Gupta', label: ' Amit Das Gupta' },
        { value: ' Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: ' Sandeep Kumar paul', label: 'Sandeep Kumar paul' },
        { value: ' Somnath Chakraborty', label: 'Somnath Chakraborty' },
        { value: ' Chandraprakash Varadarajan', label: 'Chandraprakash Varadarajan' },
        { value: '  Mahadevan Nurani Shivasubramanyam', label: ' Mahadevan Nurani Shivasubramanyam' },

    ]

    const navigate = useNavigate();
    const removeToken = () => {
        localStorage.removeItem("token");
        toast.success("Logged out successfully!");
        navigate("/", { replace: true });
    };

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
        profile();
    }, []);



    //   modal
    const [modalShow, setModalShow] = useState(false);

    const openModalShow = () => setModalShow(true);
    const closeModalShow = () => setModalShow(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setModalShow(true);
      }, 1000); 

      return () => clearTimeout(timer); 
    }, []);



    return (
        <>
            <div className='dashboard'>
                <div className=' overflow-x-hidden overflow-y-hidden'>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center gap-1 py-4'>
                            {/* <Link to='/welcome' className=' textPrimary '> <i class="fi fi-rr-angle-small-left fs-3"></i></Link> */}
                            <div className='d-flex justify-content-end align-items-center gap-2 ms-auto'>
                                <Link to='/week-target' className=' primaryBtn mt-0 d-flex justify-content-start align-items-center gap-2'> <i class="fi fi-rr-plus-small d-flex justify-content-center align-items-center fs-5"></i>Add Goals</Link>
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

                                <button className=" primaryBtn ">
                                    Set 12 Week Goals & Targets
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




            <Modal
            show={modalShow}
            onHide={closeModalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='p-0'>
                <div className="welcome_container">
                    <button className='closeButton' onClick={closeModalShow}>
                        <i className="fi fi-rr-circle-xmark"></i>
                    </button>
                    <div className="row align-items-center">
                        <div className='col-lg-12'>
                            <h1 className='w_heading1 text-center mb-5'>Welcome</h1>
                            <div className="profile_img">
                                <img src='assets/image/welcome.png' alt="Welcome" />
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className="text-content">
                                <h2 className='heading2 textPrimary fw-semibold'>Ashish Show</h2>
                                <p className='para2 mb-2 fw-semibold'>ashish@gmail.com</p>
                                <p className='para2 textGray300'>
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <Link to='/week-target' className=' primaryBtn mt-0 d-flex justify-content-center align-items-center gap-2 text-center mt-4'> <i class="fi fi-rr-plus-small d-flex justify-content-center align-items-center fs-5"></i>Add Goals</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
           

            </>
            )
}

            export default Dashboard