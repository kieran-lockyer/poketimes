import React, { Component, createContext } from 'react';

export const UserContext = createContext()

class UserProvider extends Component {
    state = {
        user: {}
    }

    login = () => {
        this.setState({
            user: { name: 'Kieran' }
        })
    }

    logout = () => {
        this.setState({
            user: {}
        })
    }

    render() {
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    login: this.login,
                    logout: this.logout
                }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;