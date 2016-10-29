import App from './App.js';

const routes = {
	component: App,
	childRoutes: [{
		path: '/',
		indexRoute: {
			getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Page1.js'));
        });
			},
		}	
	}, {
		path: '/page2',
		getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Page2.js'));
        });
      },
	}]
}

export default routes;