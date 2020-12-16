import React from 'react';
import './dashboard.styles.scss';

import { connect } from 'react-redux';
import { getNavItem, setNavItem } from '../../redux/nav/nav.actions';
import _ from 'lodash';

class Dashboard extends React.Component {

    handleChange = (e, id) => {
        const { navItem } = this.props;
        const item = _.find(navItem, ['id', id]);

        item.isShowed = !item.isShowed;                 

        const update = _.merge(navItem, item);
        let newItem = _.concat([], update);
        this.props.setNavItem(newItem);

    }

    render(){
        const { navItem } = this.props;
        return(
            <div className='dashboard'>
                <h2>Dashboard</h2>
                <h5>Menu Settings: </h5>
                <div className='menu-settings'>
                { navItem.map(({ id, isShowed }) => (
                    <div key={id} className='switch-container'>
                        <label className="switch" htmlFor={id}>
                            <input checked={isShowed ? 'checked' : ''} 
                            id={id} 
                            type="checkbox"
                            onChange={e => {this.handleChange(e, id)}}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span>{id.replace('-', ' ')} test</span>
                    </div>
                    ))
                }                
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getNavItem: navItem => dispatch(getNavItem(navItem)),
    setNavItem: navItem => dispatch(setNavItem(navItem)),
});

const mapStateToProps = state => ({
    navItem: state.nav.navItem
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);