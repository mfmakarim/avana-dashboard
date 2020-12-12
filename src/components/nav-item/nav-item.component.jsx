import React from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../../settings/menu-settings';

import './nav-item.styles.scss';

class NavItem extends React.Component {
    constructor() {
        super();

        this.state = {
            navClicked : '',
            isHasChild : false,
            menusShow : []
        }
    }

    componentDidMount(){

        //only get menu that isShowed equal true
        const result = menus.filter(({ isShowed }) => ( isShowed === true));
        this.setState({ menusShow: result });

    }

    handleMenuDropdownClick = (id, e) => {
        e.preventDefault();

        if(this.state.navClicked !== id){
            // this will expand child menu on first click
            this.setState({navClicked: id});
        }else{
            // this will hide child menu on second click
            this.setState({navClicked: ''});
        }
    }

    render() {
        const { menusShow, navClicked } = this.state;
        return(
                menusShow.map(({ id, childs }) => (
                    childs && childs.length > 0 ?
                    
                        <div 
                            key={id} 
                            className={`${ navClicked === id ? 'child-open' : ''} nav-item has-child`}>

                            <div onClick={e => this.handleMenuDropdownClick(id, e) }>
                                {id.replace('-', ' ')}
                            </div>
                            <ul>
                                {
                                    childs
                                    .filter(({ isShowed }) => ( isShowed === true))
                                    .map((child) => (
                                        <li key={child.id} className='nav-item'>
                                            <Link to='/'>{child.id.replace('-', ' ')}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        :

                        <li key={id} className='nav-item'>
                            <Link to='/'>{id.replace('-', ' ')}</Link>
                        </li>
                ))
        )
    }
}

export default NavItem;