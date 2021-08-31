import React from 'react';
import { Title } from './Title';
import '../styles/MovieGrid.scss';
import { Pagination } from './Pagination';

export const MovieGrid = ({ title, movies, pagination = false }) => {
	return (
		<section className="movie__grid">
			<Title title={title} />
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
			{pagination ? <Pagination pageNumber="5" /> : false}
		</section>
	);
};
