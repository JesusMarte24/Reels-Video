import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Search } from './components/Search';
import { MovieInfo } from './components/MovieInfo';

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
					<Route path="/movie/:id">
						<MovieInfo mediaType={'movie'} />
					</Route>
					<Route path="/show/:id">
						<MovieInfo mediaType={'show'} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default Reels;
