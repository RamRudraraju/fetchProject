

import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../fetchRewardsLogo.gif';



const NavBar = (props) => {
         return (
             <nav className = "navbar bg-primary">
                 <img className="iconStyle" src={logo} alt="Logo" />
                 <h1>
                     {props.title}
                 </h1>
             </nav>
         )
 }

NavBar.defaultProps = {
    title: 'Fetch Rewards',
    
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default NavBar;
