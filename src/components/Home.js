import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import { addPost } from '../redux/actions/postActions'

class Home extends Component {
    state = {
        title: '',
        body: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state)
        this.setState({
            title: '',
            body:''
        })
    }

    render() {
        const { posts, user } = this.props
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {user.name && (
                    <div className="row center">
                        <h5 className="col l12">Add Post</h5>
                        <form onSubmit={this.handleSubmit} className="col l12">
                            <div className="input-field">
                                <input id="title" type="text" value={this.state.title} onChange={this.handleChange} />
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="input-field">
                                <input id="body" type="text" value={this.state.body} onChange={this.handleChange} />
                                <label htmlFor="body">Body</label>
                            </div>
                            <div className="input-field">
                                <button className="btn red white-text" type="submit">Submit Post</button>
                            </div>
                        </form>
                    </div>
                )}
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