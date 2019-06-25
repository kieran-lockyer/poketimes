import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import {UserProvider} from './context/UserContext';
import PostProvider from './context/PostContext';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <PostProvider>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/:post_id' component={Post} />
              </Switch>
            </div>
          </BrowserRouter>
        </PostProvider>
      </UserProvider>
    );
  }
}

export default App;
