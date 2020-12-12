import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.scss';
import logo from '../../assets/logo.webp';

const SideBar = () => {
    return(
        <div className='sidebar'>
            <Link to='/' className='logo-container'>
                <img src={logo} alt='logo'/>
            </Link>
            <div className='profile-info'>
                <h5 className='username'>John Doe</h5>
            </div>
            <div className='nav-container'>
                <nav className='nav'>
                    <ul>
                        <li className='nav-item'>
                            <Link to='/'>Dashboard</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/my-orders'>My Orders</Link>
                        </li>
                        <li className='nav-item has-child'>
                            <Link to='/my-products'>My Products</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideBar;