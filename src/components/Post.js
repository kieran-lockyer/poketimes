import React, { useContext } from 'react'
import Spinner from './Spinner'
import { PostContext } from '../context/PostContext';

const Post = (props) => {
    const { posts, deletePost } = useContext(PostContext)

    const handleClick = (e) => {
        e.preventDefault()
        deletePost(id)
        props.history.push('/')
    }

    let id = props.match.params.post_id
    const post = posts.find(post => post.id === parseInt(id))

    return ( 
        <div className="container">{post ? (
            <div className="post">
                <h4 className="center">{post.title}</h4>
                <p>{post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">
                <Spinner />
            </div>
        )}</div>
     );
}
 
export default Post;