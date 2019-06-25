import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import Spinner from './Spinner'
import { PostContext } from '../context/PostContext';
import { UserContext } from '../context/UserContext';

const Home = () => {
    const [newPost, setNewPost] = useState({title: '', body: ''})
    const { user } = useContext(UserContext)
    const { posts, addPost } = useContext(PostContext)

    const handleChange = (e) => {
        e.preventDefault()
        setNewPost({...newPost, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addPost(newPost)
        setNewPost({title: '', body: ''})
    }

    return ( 
        <div className="container home">
            <h4 className="center">Home</h4>
            {user.name && (
                <div className="row center">
                    <h5 className="col l12">Add Post</h5>
                    <form onSubmit={handleSubmit} className="col l12">
                        <div className="input-field">
                            <input id="title" type="text" value={newPost.title} onChange={handleChange} />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field">
                            <input id="body" type="text" value={newPost.body} onChange={handleChange} />
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
    );
}
 
export default Home;