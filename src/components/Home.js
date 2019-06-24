import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
import Spinner from './Spinner'

class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props
        const postList = posts.length ? (
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
            )
        console.log(posts, posts.length)
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)