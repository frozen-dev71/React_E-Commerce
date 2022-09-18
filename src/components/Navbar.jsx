import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">React Ecommerce</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="buttons">
                    <NavLink to="/login" className="btn btn-outline-dark mx-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                    <NavLink to="/register" className="btn btn-outline-dark mx-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                    <NavLink to="/cart" className="btn btn-outline-dark mx-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar