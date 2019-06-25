import React, { createContext, useState } from 'react';

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({})

    const login = () => {
        setUser({...user, name: 'Kieran'})
    }

    const logout = () => {
        setUser({})
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {props.children}
        </UserContext.Provider>
    );
}
