import React, { Component } from 'react'
import Spinner from './Spinner'
import { PostContext } from '../context/PostContext';

class Post extends Component {
    static contextType = PostContext

    handleClick = (e) => {
        e.preventDefault()
        this.context.deletePost(this.props.match.params.post_id)
        this.props.history.push('/')
    }

    render() {
        let id = this.props.match.params.post_id
        const post = this.context.posts.find(post => post.id === parseInt(id))

        return (
            <div className="container">
                {post ? (
                    <div className="post">
                        <h4 className="center">{post.title}</h4>
                        <p>{post.body}</p>
                        <div className="center">
                            <button className="btn grey" onClick={this.handleClick}>
                                Delete Post
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="center">
                        <Spinner />
                    </div>
                )}
            </div>
        )
    }
}

export default Post