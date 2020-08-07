import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const dashboard = () => <h2>dashboard</h2>
const nursingNew = () => <h2>adding a new nursing item</h2>
const landing = () => <h2>landing</h2>


const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={landing} />
                    <Route exact path="/nursings" component={dashboard} />
                    <Route path="/nursings/new" component={nursingNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;