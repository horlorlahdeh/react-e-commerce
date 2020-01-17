import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img style={branImg} src={logo} alt="doyene.shop logo" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <FontAwesomeIcon icon={ faCartPlus }/>
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
    background: var(--mainBlue)!important;
    .nav-link {
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    
    
`
const branImg = {
    width: "40px"


}
export default NavBar;