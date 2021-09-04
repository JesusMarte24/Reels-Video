import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.scss';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/home/1">
				<li className="fas fa-home"></li>
			</Link>

			<Link to="/search">
				<li className="fas fa-search"></li>
			</Link>

			<Link to="/genres">
				<li className="fas fa-film"></li>
			</Link>

			<Link to="/profile">
				<li className="fas fa-user-circle"></li>
			</Link>
		</nav>
	);
};
