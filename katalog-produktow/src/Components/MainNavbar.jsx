import React from 'react'
import { Link } from 'react-router';

const MainNavbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-dark p-3 gap-4'>
        <p className='navbar-brand mb-0'>Katalog produktów</p>
        <div className='nav-item'>
            <Link to={"/"} className='nav-link text-light'>Strona główna</Link>
        </div >
        <div className='nav-item'>
            <Link to={"/products"} className='nav-link text-light'>Produkty</Link>
        </div>
        <div className='nav-item'> 
            <Link to={"/favorites"} className='nav-link text-light'>Ulubione</Link>
        </div>
        <div className='nav-item'>
            <Link to={"/about-api"} className='nav-link text-light'>O API</Link>
        </div>
    </div>
  )
}

export default MainNavbar