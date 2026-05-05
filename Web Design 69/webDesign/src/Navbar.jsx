import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Horizon Courts</Link>

      <div className="nav-options">
        <Link to="/about" className="active">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/coaches">Coaches</Link>
        <Link to="/events">Events</Link>
        <Link to="/contacts">Contacts</Link>
      </div>

      <button className="nav-btn">
        Book now <i className="ri-arrow-right-up-long-line"></i>
      </button>
    </nav>
  )
}

export default Navbar