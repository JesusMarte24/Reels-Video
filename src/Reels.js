import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Search } from './components/Search';

function Reels() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default Reels;
