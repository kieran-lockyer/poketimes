import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import UserProvider from './context/UserContext';
import PostProvider from './context/PostContext';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <PostProvider>
                <Route exact path='/' component={Home} />
              </PostProvider>
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <PostProvider>
                <Route path='/:post_id' component={Post} />
              </PostProvider>
            </Switch>
          </div>
        </BrowserRouter>
      </UserProvider>
    );
  }
}

export default App;
