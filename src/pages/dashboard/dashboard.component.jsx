import React from 'react';
import './dashboard.styles.scss';

const Dashboard = () => {
    return(
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <h5>Menu Settings: </h5>
            <div className='menu-settings'>
            <div className='switch-container'>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <span>Agent</span>
            </div>
            <div className='switch-container'>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <span>Orders</span>
            </div>
            <div className='switch-container'>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <span>Products</span>
            </div>
            </div>
            <div className='toast'>
                <h5>Menu Updated</h5>
            </div>
        </div>
    );
}

export default Dashboard;