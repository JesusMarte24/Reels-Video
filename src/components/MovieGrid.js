import React from 'react';
import { Link } from 'react-router-dom';

import { config } from '../config';
import { Title } from './Title';
import { Pagination } from './Pagination';

import '../styles/MovieGrid.scss';

export const MovieGrid = ({ title, movies, pagination = false, pageNumber }) => {
	return (
		<section className="movie__grid">
			<Title title={title} />
			<div className="movie__grid--content">
				{movies.map((e) => (
					<Link
						to={`/${e.media_type === 'tv' ? (e.media_type = 'show') : e.media_type}/${
							e.id
						}`}
						key={e.id}
					>
						<img
							src={`${config.api.imgURL}/${config.api.imgagesSizes.poster_sizes[2]}${e.poster_path}`}
							alt={`About: ${
								e.title || e.original_title || e.name || e.original_name
							}`}
						/>
						<span>{e.title || e.original_title || e.name || e.original_name}</span>
					</Link>
				))}
			</div>
			{pagination ? <Pagination pageNumber={parseInt(pageNumber)} /> : null}
		</section>
	);
};
