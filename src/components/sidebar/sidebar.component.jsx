import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.scss';
import logo from '../../assets/logo.webp';
import profilePicture from '../../assets/profile-picture.webp';
import NavItem from './../nav-item/nav-item.component';


const SideBar = () => {

    return(
        <div className='sidebar'>
            <Link to='/' className='logo-container'>
                <img src={logo} alt='logo'/>
            </Link>
            <div className='profile-info'>
                <div className='profile-picture'>
                    <img src={profilePicture} alt='user profile'/>
                </div>
                <h5 className='username'>John Doe</h5>
            </div>
            <div className='nav-container'>
                <nav className='nav'>
                    <ul>
                        <NavItem/>
                    </ul>
                </nav>
            </div>
        </div>
    )
    
}

export default SideBar;