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
					<Link to="/genres/tv/popular/1" className="genres--anchor">
						Popular
					</Link>
					<Link to="/genres/tv/top_rated/1" className="genres--anchor">
						Top Rated
					</Link>
				</div>
				<h4>
					Film Genres
					<i className="fas fa-chevron-down"></i>
				</h4>
				<div>
					<Link to="/genres/movie/action/1" className="genres--anchor">
						Action
					</Link>
					<Link to="/genres/movie/adventure/1" className="genres--anchor">
						Adventure
					</Link>
					<Link to="/genres/movie/animation/1" className="genres--anchor">
						Animation
					</Link>
					<Link to="/genres/movie/comedy/1" className="genres--anchor">
						Comedy
					</Link>
					<Link to="/genres/movie/crime/1" className="genres--anchor">
						Crime
					</Link>
					<Link to="/genres/movie/documentary/1" className="genres--anchor">
						Documentary
					</Link>
					<Link to="/genres/movie/drama/1" className="genres--anchor">
						Drama
					</Link>
					<Link to="/genres/movie/family/1" className="genres--anchor">
						Family
					</Link>
					<Link to="/genres/movie/fantasy/1" className="genres--anchor">
						Fantasy
					</Link>
					<Link to="/genres/movie/history/1" className="genres--anchor">
						History
					</Link>
					<Link to="/genres/movie/horror/1" className="genres--anchor">
						Horror
					</Link>
					<Link to="/genres/movie/music/1" className="genres--anchor">
						Musical
					</Link>
					<Link to="/genres/movie/mystery/1" className="genres--anchor">
						Mystery
					</Link>
					<Link to="/genres/movie/romance/1" className="genres--anchor">
						Romance
					</Link>
					<Link to="/genres/movie/sci-fi/1" className="genres--anchor">
						Sci-Fi
					</Link>
					<Link to="/genres/movie/thriller/1" className="genres--anchor">
						Thriller
					</Link>
					<Link to="/genres/movie/war/1" className="genres--anchor">
						War
					</Link>
					<Link to="/genres/movie/western/1" className="genres--anchor">
						Western
					</Link>
				</div>
				<h4>
					Movies
					<i className="fas fa-chevron-down"></i>
				</h4>
				<div>
					<Link to="/genres/category/top_rated/1" className="genres--anchor">
						Top Rated
					</Link>
					<Link to="/genres/category/upcoming/1" className="genres--anchor">
						Upcoming
					</Link>
				</div>
			</section>
			<Navbar />
		</>
	);
};
