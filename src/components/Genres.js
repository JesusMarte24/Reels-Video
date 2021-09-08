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
					<Link className="genres--anchor">Popular</Link>
					<Link className="genres--anchor">Top Rated</Link>
				</div>
				<h4>
					Film Genres
					<i className="fas fa-chevron-down"></i>
				</h4>
				<div>
					<Link className="genres--anchor">Action</Link>
					<Link className="genres--anchor">Adventure</Link>
					<Link className="genres--anchor">Animation</Link>
					<Link className="genres--anchor">Comedy</Link>
					<Link className="genres--anchor">Crime</Link>
					<Link className="genres--anchor">Documentary</Link>
					<Link className="genres--anchor">Drama</Link>
					<Link className="genres--anchor">Family</Link>
					<Link className="genres--anchor">Fantasy</Link>
					<Link className="genres--anchor">History</Link>
					<Link className="genres--anchor">Horror</Link>
					<Link className="genres--anchor">Musical</Link>
					<Link className="genres--anchor">Mystery</Link>
					<Link className="genres--anchor">Romance</Link>
					<Link className="genres--anchor">Sci-Fi</Link>
					<Link className="genres--anchor">Thriller</Link>
					<Link className="genres--anchor">War</Link>
				</div>
				<h4>
					Movies
					<i className="fas fa-chevron-down"></i>
				</h4>
				<div>
					<Link className="genres--anchor">Most Viewed</Link>
					<Link className="genres--anchor">Rankings</Link>
				</div>
			</section>
			<Navbar />
		</>
	);
};
