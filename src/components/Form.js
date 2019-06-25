import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }
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
            body: ''
        })
    }

    render() { 
        return ( 
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
         );
    }
}
 
export default Form;