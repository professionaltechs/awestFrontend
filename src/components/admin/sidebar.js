import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({menuState}) => {

    const [houseControl, setHouseControl] = useState(false);

    let navigate = useNavigate();

    return (
        <div className={`sidebar ${menuState ? "showMenu" : "close"}`}>
            <div className="logo-details">
                <i className='bx bx-grid-alt'></i>
                <span className="logo_name">A-West</span>
            </div>
            <ul className="nav-links">
                <li className={houseControl ? 'showMenu': ''}>
                    <div className="iocn-link">
                        <a href="/">
                            <i className='bx bx-collection'></i>
                            <span className="link_name">Category</span>
                        </a>
                        <i className='bx bxs-chevron-down arrow' onClick={() => {houseControl ? setHouseControl(false) : setHouseControl(true)}}></i>
                    </div>
                    <ul className="sub-menu">
                        <li className="link_name">Category</li>
                        <li><span onClick={() => navigate('/admin')}>Form</span></li>
                        <li><span onClick={() => navigate('/admin/houses')}>List</span></li>
                    </ul>
                </li>
                <li>
                    <div className="profile-details">
                        <div className="profile-content">

                        </div>
                        <div className="name-job">
                            <div className="profile_name">Logout</div>
                            <div className="job"></div>
                        </div>
                        <i className='bx bx-log-out'></i>
                    </div>
                </li>
            </ul>
        </div>
    )
}