import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPost } from '../redux/actions/postActions'
import Spinner from './Spinner'
import Form from './Form';
import Pokeball from '../pokeball.png'

class Home extends Component {
    render() {
        const { posts, user, addPost } = this.props
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {user.name && <Form addPost={addPost} />}
                {posts.length ? (
                    posts.map(post => {
                        return (
                            <Link to={'/' + post.id} key={post.id}>
                                <div className="post card" >
                                    <img src={Pokeball} alt="A pokeball" />
                                    <div className="card-content">
                                        <span className="card-title red-text">{post.title}</span>
                                        <p className="black-text">{post.body}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    <div className="center">
                        <Spinner />
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => { dispatch(addPost(post))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)