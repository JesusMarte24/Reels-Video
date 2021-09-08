import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/Home';
import { Search } from './components/Search';
import { MovieInfo } from './components/MovieInfo';
import { Genres } from './components/Genres';
import { Login } from './components/Login';
import { Profile } from './components/Profile';

function Reels() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/home/:id">
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
					<Route path="/genres">
						<Genres />
					</Route>
					<Route exact path="/profile">
						<Login />
					</Route>
					<Route path="/profile/:user">
						<Profile />
					</Route>
					<Redirect to="/home/1" />
				</Switch>
			</Router>
		</>
	);
}

export default Reels;
