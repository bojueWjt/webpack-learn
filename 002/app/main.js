import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';

function main() {
	ReactDom.render(<App />, document.getElementById("app"))
}

main();