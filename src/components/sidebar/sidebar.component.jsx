import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.scss';
import logo from '../../assets/logo.webp';
import profilePicture from '../../assets/profile-picture.webp';
import { menus } from '../../settings/menu-settings';


class SideBar extends React.Component {
    constructor() {
        super();

        this.state = {
            isChildOpen: false
        }
    }

    render() {
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
                            { menus
                                .filter(({ isShowed }) => ( isShowed === true))
                                .map(({ id, childs, ...others}) => (
                                    childs && childs.length > 0 ?
                                        <div className='nav-item-child'>
                                            <div>{id}</div>
                                            <ul>
                                                {
                                                    childs
                                                    .filter(({ isShowed }) => ( isShowed === true))
                                                    .map((child) => (
                                                        <li key={child.id} className='nav-item'>
                                                            <Link to='/'>{child.id}</Link>
                                                        </li>
                                                    ))
                                                }
                                                <li>
                                                </li>
                                            </ul>
                                        </div>
                                        :
                                        <li key={id} className='nav-item'>
                                            <Link to='/'>{id}</Link>
                                        </li>
                                ))
                            }
                            
                            <li className='nav-item'>
                                <Link to='/my-orders'>My Orders</Link>
                            </li>
                            <li className='nav-item has-child'>
                               
                                <div className='nav-item-child'>
                                    <div>My Products</div>
                                    <ul>
                                        <li className='nav-item'>
                                            <Link to='/my-product/add'>Add Product</Link>
                                        </li>
                                        <li className='nav-item has-child child-open'>
                                            
                                            <div className='nav-item-child'>
                                            <div>Products</div>
                                                <ul>
                                                    <li className='nav-item'>
                                                        <Link to='/my-products'>List</Link>
                                                    </li>
                                                    <li className='nav-item'>
                                                        <Link to='/my-products'>Category</Link>
                                                    </li>
                                                </ul>
                                            </div>
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
}

export default SideBar;