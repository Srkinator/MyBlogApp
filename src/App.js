import React, { Component } from 'react';
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import MainContent from "./components/posts/mainContent";
import { Switch, Route } from "react-router-dom";
import About from "./components/common/about";
import Authors from "./components/author/authors";
import SinglePostInfo from "./components/posts/singlePostInfo";
import SingleAuthorInfo from "./components/author/singleAuthorInfo";
import CreatePost from "./components/posts/composePost";

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path = '/About' component={About} />
                <Route exact path = '/Authors' component={Authors} />
                <Route exact path = '/Compose' component={CreatePost} />
                <Route exact path = '/' component={MainContent} />
                <Route exact path = '/SinglePostInfo/:id' component={SinglePostInfo} />
                <Route exact path = '/SingleAuthorInfo/:id' component={SingleAuthorInfo} />
            </Switch>
            <Footer />
        </div>
    );
}
}

export default App;
