import React, { createContext, useState , useEffect} from 'react';

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch('http://www.mocky.io/v2/5d117351310000a30808cc92')
            .then(res => res.json())
            .then(data => {
                populatePosts(data)
            }).catch(err => {
                console.error('error', err)
            })
    }, [])

    const populatePosts = (posts) => {
        setPosts(posts.reverse())
    }

    const addPost = (post) => {
        setPosts([{ title: post.title, body: post.body, id: posts[0].id + 1 }, ...posts])
    }

    const deletePost = (id) => {
        setPosts(posts.filter(post => { return post.id !== parseInt(id) }))
    }

    return ( 
        <PostContext.Provider value={{ posts, addPost, deletePost }}>
            {props.children}
        </PostContext.Provider>
    );
}