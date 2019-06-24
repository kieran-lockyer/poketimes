import React, { Component, createContext } from 'react';

export const PostContext = createContext()

class PostContextProvider extends Component {
    state = { 
        posts: [
            { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
            { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
            { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' }
        ]
    }
    
    deletePost = (id) => {
        this.setState({
            posts: this.state.posts.filter(post => post.id !== id)
        })
    }

    render() { 
        return ( 
            <PostContext.Provider value={{...this.state, deletePost: this.deletePost}}>
                {this.props.children}
            </PostContext.Provider>
         );
    }
}
 
export default PostContextProvider;