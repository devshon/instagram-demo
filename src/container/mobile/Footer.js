import React from 'react'
import { BsFillBagFill, BsFillHouseDoorFill, BsPeopleCircle, BsCollectionPlayFill } from "react-icons/bs";
import { FaSearch } from 'react-icons/fa'

function Footer(props) {


  return (
    <div className="FooterMain">
      <div className="FooterIcon"><span><BsFillHouseDoorFill /></span></div>
      <div className="FooterIcon"><span><FaSearch /></span></div>
      <div className="FooterIcon"><span><BsCollectionPlayFill /></span></div>
      <div className="FooterIcon"><span><BsFillBagFill /></span></div>
      <div className="FooterIcon"><span><BsPeopleCircle /></span></div>
    </div>
  )
}

export default Footer