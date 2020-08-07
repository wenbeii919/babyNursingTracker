import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const nursings = () => <h2>dashboard</h2>
const nursingNew = () => <h2>adding a new nursing item</h2>
const landing = () => <h2>landing</h2>


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={landing} />
                        <Route exact path="/nursings" component={nursings} />
                        <Route path="/nursings/new" component={nursingNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default connect(null, actions)(App);