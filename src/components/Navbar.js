import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { login, logout } from '../redux/actions/userAction'

const Navbar = (props) => {
    const { user, login, logout } = props
        
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink to='/' className="brand-logo">Poke'Times</NavLink>
                <ul className='right'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {user.name ? (
                        <Fragment>
                            <li><NavLink to="/contact">{user.name}</NavLink></li>
                            <li><NavLink to="/" onClick={logout}>Log Out</NavLink></li>
                        </Fragment>
                    ) : (
                        <li><NavLink to="/" onClick={login}>Sign In</NavLink></li>
                    ) }
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => { dispatch(login()) },
        logout: () => { dispatch(logout()) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))