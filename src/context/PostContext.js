import React, { createContext, useEffect, useReducer} from 'react';
import { postReducer } from './postReducer';

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, dispatch] = useReducer(postReducer, [], )
    
    useEffect(() => {
        fetch('http://www.mocky.io/v2/5d117351310000a30808cc92')
            .then(res => res.json())
            .then(data => {
                dispatch({type: 'POPULATE_POSTS', posts: data})
            }).catch(err => {
                console.error('error', err)
            })
    }, [])

    return (
        <PostContext.Provider value={{ posts, dispatch}}>
            {props.children}
        </PostContext.Provider>
    );
}