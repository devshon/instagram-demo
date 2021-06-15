import React from 'react-router'
import { BsCursorFill, BsPlusSquareFill, BsHeartFill } from "react-icons/bs";
import logo from "../../../src/images/logo/logo.png"

function Header(props) {


  return (
    <div className="HeaderMain">
      <div className="HeaderLeft">
        <span className="HeaderLeftLogo">
          <img src={logo} width="80px" />
        </span>
      </div>
      <div className="HeaderRight">
        <span className="HeaderRightIcon">
          <BsPlusSquareFill />
        </span>
        <span className="HeaderRightIcon">
          <BsHeartFill />
        </span>
        <span className="HeaderRightIcon">
          <BsCursorFill />
        </span>
      </div>
    </div>
  )
}

export default Header