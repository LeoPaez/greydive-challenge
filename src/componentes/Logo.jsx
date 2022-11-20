import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from "../assets/img/simulacr-logo.png"
import "../stylesheets/Logo.css"

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>  
      {/* <img className="logo" src={logo} alt="" /> */}
      <Outlet/>
    </div>
  )
}

export default Logo