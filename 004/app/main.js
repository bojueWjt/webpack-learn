import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import { Router, Route, Link, browserHistory } from 'react-router'
import routes from './routes.js';

const root = (
	<Router history={browserHistory} routes={routes}>
	</Router>);

function main() {
	ReactDom.render(root, document.getElementById("app"));
}

main();