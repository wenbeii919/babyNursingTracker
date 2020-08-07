import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const dashboard = () => <h2>dashboard</h2>
const nursingNew = () => <h2>adding a new nursing item</h2>
const landing = () => <h2>landing</h2>


const App = () => {
    return (
        <div>
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