import React from 'react';
import ReactDOM from'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import LandingPage from '../components/LandingPage.jsx';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={LandingPage} />
	</Router>
), document.getElementById('app'))