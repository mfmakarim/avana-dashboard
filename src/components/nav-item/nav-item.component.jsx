import React from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../../settings/menu-settings';
import { connect } from 'react-redux';
import { getNavItem, getNavItemChild, setNavOpen } from '../../redux/nav/nav.actions';

import _ from 'lodash';

import './nav-item.styles.scss';

class NavItem extends React.Component {
    componentDidMount(){

        //only get menu that isShowed equal true
        const navItem = menus.filter(({ isShowed }) => ( isShowed === true));
        this.props.getNavItem(navItem);

    }

    arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele !== value; 
        });
    }
    

    handleNavItemClick = (e, id, childs) => {
        e.preventDefault();

        let { navOpen } = this.props;
        const idInNavOpen = _.indexOf(navOpen, id);

        if(idInNavOpen > -1){
            //if exist return new array with removed id then update state
            navOpen = this.arrayRemove(navOpen, id);
            this.props.setNavOpen(navOpen);
        }else{
            //if not exist return new array with id as additional item then update state
            const newNavOpen = _.concat(navOpen, id);
            this.props.setNavOpen(newNavOpen);
        }
    }

    render() {
        const { navItem, navOpen } = this.props;
        const navItemChange = _.filter(navItem, ['isShowed', true]);
        return(
                navItemChange.map(({ id, childs }) => (
                    <div key={id}>
                        <div 
                        className='nav-item'
                        onClick={ e => this.handleNavItemClick(e, id, childs) }>
                            <Link to={id}>{id.replace('-', ' ')}</Link>
                        </div>
                        
                        {_.indexOf(navOpen, id) > -1 && childs ? 
                            childs.map(({ id, childs}) => (
                                <div key={id}>
                                    <div className='nav-item child'
                                    onClick={ e => this.handleNavItemClick(e, id, childs) }>
                                        <Link to={id}>{id.replace('-', ' ')} test</Link>
                                    </div>

                                    { _.indexOf(navOpen, id) > -1 && childs ?
                                        childs.map(({ id, childs }) => (
                                            <div key={id}>
                                                <div className='nav-item child-child'
                                                onClick={ e => this.handleNavItemClick(e, id, childs) }>
                                                    <Link to={id}>{id.replace('-', ' ')}</Link>
                                                </div>
                                            </div>
                                        ))
                                        
                                        :
                                        <div></div>
                                    }
                                </div>
                            )) 
                            : 
                            <div></div>
                        }

                    </div>
                ))
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getNavItem: navItem => dispatch(getNavItem(navItem)),
    getNavItemChild: childs => dispatch(getNavItemChild(childs)),
    setNavOpen: navOpen => dispatch(setNavOpen(navOpen))
});

const mapStateToProps = state => ({
    navItem: state.nav.navItem,
    navItemChild: state.nav.navItemChild,
    navOpen: state.nav.navOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);