import React from 'react';
import '../styles/Navbar.scss';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<a href="">
				<li className="fas fa-home"></li>
			</a>
			<a href="">
				<li className="fas fa-search"></li>
			</a>
			<a href="">
				<li className="fas fa-film"></li>
			</a>
			<a href="">
				<li className="fas fa-user-circle"></li>
			</a>
		</nav>
	);
};
