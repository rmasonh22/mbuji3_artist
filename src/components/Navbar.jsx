import React from 'react'
import {UseNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as OfferIcon} from '../images/svg/localOffer.svg'
import {ReactComponent as ExploreIcon} from '../images/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../images/svg/personOutlineIcon.svg'

function Navbar() {
  return (
    <foooter className='navbar'>
        <nav className='navbarNav'>
            <ul className='navbarListItems'> 
                <li className='navbarListItem'>
                    <ExploreIcon fill="#2c2c2c" width='36px' height='36px'/>
                    <p>Explore</p>
                </li>
                <li className='navbarListItem'>
                    <OfferIcon fill="#2c2c2c" width='36px' height='36px'/>
                    <p>Offer</p>
                </li>
                <li className='navbarListItem'>
                    <PersonOutlineIcon fill="#2c2c2c" width='36px' height='36px'/>
                    <p>Profile</p>
                </li>

            </ul>
        
        </nav>
    </foooter>
  )
}

export default Navbar