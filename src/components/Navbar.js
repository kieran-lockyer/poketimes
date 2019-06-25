import React from 'react'
// import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
// import { login, logout } from '../redux/actions/userAction'

const Navbar = (props) => {
    const signedOut = (userContext) => (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink to='/' className="brand-logo">Poke'Times</NavLink>
                <ul className='right'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/" onClick={userContext.login}>Sign In</NavLink></li>
                </ul>
            </div>
        </nav>
    )

    const signedIn = (userContext) => (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink to='/' className="brand-logo">Poke'Times</NavLink>
                <ul className='right'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/contact">{userContext.user.name}</NavLink></li>
                    <li><NavLink to="/" onClick={userContext.logout}>Log Out</NavLink></li>
                </ul>
            </div>
        </nav>
    )
    return (
        <UserContext.Consumer>
            {userContext => (
                !userContext.user.name ?  signedOut(userContext)  :  signedIn(userContext)
            )}
        </UserContext.Consumer>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: () => { dispatch(login()) },
//         logout: () => { dispatch(logout()) }
//     }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
export default withRouter(Navbar)