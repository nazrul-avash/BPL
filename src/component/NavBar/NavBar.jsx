import React from 'react';
import logo from '../../assets/logo.png'
const NavBar = ({coin}) => {
    return (
        <div>
               <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
  <div className="flex-1">
    <img src={logo}></img>
  </div>
  <div className="flex gap-2 items-center">
    <span>{coin}</span>
    <span>coin</span>
  </div>
</div>
        </div>
    );
};

export default NavBar;