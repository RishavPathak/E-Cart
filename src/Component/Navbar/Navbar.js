import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from "../../logo.svg"
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export class Navbar extends Component {
    render() {
        return (
            <div className='flex-box-container-navbar'>
                <div className='logo-design'> 
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                <Link to='/'>
                    <img src={logo} alt='store' />
                </Link>
                </div>
                <ul className='ul-list'>
                    <li className="navbar-unordered-list">
                        <Link to='/'>Product</Link>
                    </li>
                </ul>
                <div className='moving-to-right'>
                <Link to='/cart'>
                    <button>
                        <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />
                         My Cart
                    </button>
                </Link>
                </div>
            </div>

        )
    }
}

export default Navbar
