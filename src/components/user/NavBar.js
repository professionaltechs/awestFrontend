import React from 'react'

import awestLogo from "../../assets/images/a-west-logo.jpg"
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const NavBar = () => {
    const {width} = useWindowDimensions();
  return (
    <div style={{width: "100%", boxShadow: "0px 1px 20px 0px #575757", height: "60px", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
        <img style={{height: "100%", width: "auto"}} src={awestLogo} alt="" />
        {width >= 600 ? <h3 className="title custom-txt">A-West Management</h3> : null}
        <a href='tel:(409) 755-3333'>
          <button type='button' className="btn btn-info">Contact Us</button>
        </a>
    </div>
  )
}
