import ReactDom from 'react-dom';
import Admin from './Admin';
import React from 'react';

function adminMain() {
	ReactDom.render(<Admin />, document.getElementById('app'))
}

adminMain();