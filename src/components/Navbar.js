import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    return (
        <UserContext.Consumer>{userContext => (
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <NavLink to='/' className="brand-logo">Poke'Times</NavLink>
                    <ul className='right'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {userContext.user.name ? (
                            <Fragment>
                                <li><NavLink to="/contact">{userContext.user.name}</NavLink></li>
                                <li><NavLink to="/" onClick={userContext.logout}>Log Out</NavLink></li>
                            </Fragment>
                        ) : (
                            <li><NavLink to="/" onClick={userContext.login}>Sign In</NavLink></li>
                        )}
                    </ul>
                </div>
            </nav>
        )}</UserContext.Consumer>
    )
}

export default withRouter(Navbar)