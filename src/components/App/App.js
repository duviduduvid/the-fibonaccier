import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { Fibonaccier } from '../index';
import { getCurrentIndex } from '../../services';

import './App.css';

function App() {
    return (
        <Router>
            <Redirect exact from="/" to={`/${getCurrentIndex()}`} />
            <Route path="/:fib">
                <div className="App">
                    <Fibonaccier />
                </div>
            </Route>
        </Router>
    );
}

export default App;
