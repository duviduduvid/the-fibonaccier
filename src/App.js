import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Fibonaccier from './Fibonaccier';
import './App.css';

import { getCurrentIndex } from './storage-service';

function App() {
    return (
        <Router>
            <Route path="/:fib">
                <div className="App">
                    <Fibonaccier />
                </div>
            </Route>
            <Redirect exact from="/" to={`/${getCurrentIndex()}`} />
        </Router>
    );
}

export default App;
