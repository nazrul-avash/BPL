import React from 'react';
import logo from '../../assets/logo.png'
const NavBar = () => {
    return (
        <div>
               <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
  <div className="flex-1">
    <img src={logo}></img>
  </div>
  <div className="flex gap-2 items-center">
    <span>6000000</span>
    <span>coin</span>
  </div>
</div>
        </div>
    );
};

export default NavBar;