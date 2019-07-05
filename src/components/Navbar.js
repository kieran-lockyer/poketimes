import React, {useContext, Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const { user, dispatch } = useContext(UserContext)
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
                            <li><NavLink to="/" onClick={() => { dispatch({type: 'LOGOUT'})}}>Log Out</NavLink></li>
                        </Fragment>
                    ) : (
                        <li><NavLink to="/" onClick={() => { dispatch({ type: 'LOGIN' }) }}>Sign In</NavLink></li>
                    )}
                </ul>
            </div>
        </nav>      
    )
}

export default withRouter(Navbar)