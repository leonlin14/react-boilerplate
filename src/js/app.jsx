import React from 'react';
import ReactDOM from'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import LandingPage from '../components/LandingPage.jsx';
import About from '../components/About.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
};

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={LandingPage} />
			<Route path="about" component={About} />
		</Route>
	</Router>
), document.getElementById('app'))