import React from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import "./Dropdow.css";
const Dropdow = (prop) => {
  const { listPage, children } = prop;
  return (
    <div className="dropdown inline-block h-rull w-full">
      <div >{children}</div>
      {listPage ? <div className="dropdowItem">
        {listPage.map(([pageName, url], index) => (
          <NavLink className='block px-4 py-4 hover:text-orange-500' key={index} to={url}>{pageName}</NavLink>
        ))}
      </div> : undefined}
    </div>
  );
};

export default Dropdow;
