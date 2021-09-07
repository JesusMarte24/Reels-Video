import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Navbar } from './Navbar';
import '../styles/Genres.scss';

export const Genres = () => {
	return (
		<>
			<Header />
			<section className="genres--container">
				<h4>
					Shows
					<i className="fas fa-chevron-down"></i>
				</h4>
				<div>
					<Link>Popular</Link>
					<Link>Top Rated</Link>
				</div>
				<h4>
					Film Genres
					<i className="fas fa-chevron-down"></i>
				</h4>
				<div>
					<Link>Action</Link>
					<Link>Adventure</Link>
					<Link>Animation</Link>
					<Link>Comedy</Link>
					<Link>Crime</Link>
					<Link>Documentary</Link>
					<Link>Drama</Link>
					<Link>Family</Link>
					<Link>Fantasy</Link>
					<Link>History</Link>
					<Link>Horror</Link>
					<Link>Musical</Link>
					<Link>Mystery</Link>
					<Link>Romance</Link>
					<Link>Sci-Fi</Link>
					<Link>Thriller</Link>
					<Link>War</Link>
				</div>
				<h4>
					Movies
					<i className="fas fa-chevron-down"></i>
				</h4>
				<div>
					<Link>Most Viewed</Link>
					<Link>Rankings</Link>
				</div>
			</section>
			<Navbar />
		</>
	);
};
