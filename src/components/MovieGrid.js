import React from 'react';
import { Title } from './Title';
import '../styles/MovieGrid.scss';

export const MovieGrid = ({ movies, pagination = false }) => {
	return (
		<section className="movie__grid">
			<Title title="Trending Now" />
			<div className="movie__grid--content">
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
				<a href="">
					<img src="" alt="" />
					<span>Movie Title</span>
				</a>
			</div>
		</section>
	);
};
