import React from 'react';
import { Link } from 'react-router';

class LandingPage extends React.Component {
	render() {
		return (
			<div className="commentBox">
				<h1>Hi! I am Landing Page.</h1>
				<h2><Link to="/about">About</Link></h2>
			</div>
		);
	}
};

export default LandingPage;