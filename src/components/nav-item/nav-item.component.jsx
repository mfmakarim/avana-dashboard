import React from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../../settings/menu-settings';
import { connect } from 'react-redux';
import { getNavItem, getNavItemChild, setNavClicked, toggleNavItemHidden, setNavOpen } from '../../redux/nav/nav.actions';

import './nav-item.styles.scss';

class NavItem extends React.Component {
    componentDidMount(){

        //only get menu that isShowed equal true
        const navItem = menus.filter(({ isShowed }) => ( isShowed === true));
        this.props.getNavItem(navItem);

    }

    handleNavItemClick = (e, id, childs) => {
        e.preventDefault();
        
        console.log(id);

        if(childs){
            //fuad: if any childs then update navItemChild state

            this.props.getNavItemChild(childs);
            //fuad: get navOpen state which is array
            const navOpen = this.props.navOpen;
            //fuad: assign new value to array, then update navOpen state
            navOpen.push(id);
            this.props.setNavOpen(navOpen);

            if(this.props.navClicked === id){
                this.props.setNavClicked('');
            }else{
                this.props.setNavClicked(id);
            }
        } else {
            return
        }
      

    }

    render() {
        const { navItem, navItemChild, hidden, navClicked, navOpen } = this.props;
        return(
                navItem.map(({ id, childs }) => (
                    <div key={id}>
                        <div 
                        className='nav-item'
                        onClick={ e => this.handleNavItemClick(e, id, childs) }>
                            <Link to={id}>{id.replace('-', ' ')}</Link>
                        </div>
                        {   navClicked === id ? 
                            navItemChild.map( child => (
                                <div
                                key={child.id}
                                className='nav-item child'
                                onClick={ e => this.handleNavItemClick(e, child.id, child.childs) }>    
                                    <Link to={child.id}>{child.id.replace('-', ' ')}</Link>
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
    setNavClicked: navClicked => dispatch(setNavClicked(navClicked)),
    toggleNavItemHidden: () => dispatch(toggleNavItemHidden()),
    setNavOpen: navOpen => dispatch(setNavOpen(navOpen))
});

const mapStateToProps = state => ({
    navItem: state.nav.navItem,
    navItemChild: state.nav.navItemChild,
    hidden: state.nav.hidden,
    navClicked: state.nav.navClicked,
    navOpen: state.nav.navOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);