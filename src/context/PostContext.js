import React, { Component, createContext } from 'react';

export const PostContext = createContext()

class PostProvider extends Component {
    state = { 
        posts: []
    }
    
    componentDidMount() {
        fetch('http://www.mocky.io/v2/5d117351310000a30808cc92')
            .then(res => res.json())
            .then(data => {
                this.populatePosts(data)
            }).catch(err => {
                console.error('error', err)
            })
    }

    populatePosts = (posts) => {
        this.setState({ posts: posts.reverse() })
    }

    addPost = (post) => {
        this.setState({
            posts: [{ title: post.title, body: post.body, id: this.state.posts[0].id + 1 }, ...this.state.posts]
        })    
    }

    deletePost = (id) => {
        this.setState({
            posts: [...this.state.posts.filter(post => { return post.id !== parseInt(id) })]
        })
    }

    render() { 
        return ( 
            <PostContext.Provider
                value={{
                    ...this.state,
                    addPost: this.addPost,
                    deletePost: this.deletePost
                }}>
                {this.props.children}
            </PostContext.Provider>
         );
    }
}
 
export default PostProvider;