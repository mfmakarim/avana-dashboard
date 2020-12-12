import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.scss';
import logo from '../../assets/logo.webp';
import profilePicture from '../../assets/profile-picture.webp';


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
                        <li className='nav-item active'>
                            <Link to='/'>Dashboard</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/my-orders'>My Orders</Link>
                        </li>
                        <li className='nav-item has-child'>
                            <div>My Products</div>
                            <div className='nav-item-child'>
                                <ul>
                                    <li className='nav-item'>
                                        <Link to='/my-product/add'>Add Product</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/my-products'>Products</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideBar;