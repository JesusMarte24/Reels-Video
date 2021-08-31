import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { MovieGrid } from './MovieGrid';

import '../styles/Search.scss';

export const Search = () => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Header />
			<form className="search__form" onSubmit={onSubmit}>
				<input type="text" placeholder="Type Something..." />
				<button className="fas fa-search"></button>
			</form>
			<Navbar />
		</>
	);
};
