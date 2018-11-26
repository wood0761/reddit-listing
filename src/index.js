import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './components/Main';
import Comments from './components/Comments';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

ReactDOM.render((
<Router>
    <App>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/comments/:id' component={Comments}/>

        </Switch>
    </App>
</Router>


), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
