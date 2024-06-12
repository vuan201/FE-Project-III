import React from 'react';
import { GiSonicShoes } from "react-icons/gi";
import LogoImg from './Logo.png'
import './Logo.css'
const Logo = () => {
  return (
    <div className='logo'>
    <img src={LogoImg} width={'100%'}/>
      {/* <GiSonicShoes/> */}
    </div>
  );
};

export default Logo;