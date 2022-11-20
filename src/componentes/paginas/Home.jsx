import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import db from "../../assets/db.json"
import Logo from '../Logo'
import "../../stylesheets/Nav.css"

const Home = () => {
  return (
    <>
      <div className='nav'>
        <Logo/>
        <div className='nav-links'>
          <Link className='link' to="/viamo" key={db.idVideo}>{db[0].cliente}</Link> 
          <Link className='link' to="/nebula" key={db.idVideo}>{db[1].cliente}</Link> 
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default Home