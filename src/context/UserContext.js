import React, { createContext, useReducer } from 'react';
import { userReducer } from './userReducer';

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, dispatch] = useReducer(userReducer, {})

    return (
        <UserContext.Provider value={{user, dispatch}}>
            {props.children}
        </UserContext.Provider>
    );
}
