import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { deletePost } from '../redux/actions/postActions'
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
        const postData = this.context.posts.find(post => post.id === parseInt(id))
        const post = postData ? (
            <div className="post">
                <h4 className="center">{postData.title}</h4>
                <p>{postData.body}</p>
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
        )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {
//     let id = ownProps.match.params.post_id
//     return {
//         post: state.posts.find(post => post.id === parseInt(id))
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deletePost: (id) => { dispatch(deletePost(id)) }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Post)
export default Post