import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/MainSection.scss';

export const MainSection = ({ id, title, rating, overview, media }) => {
	if (media === 'tv') {
		media = 'show';
	}

	return (
		<main className="main__section--info">
			<h1>
				{title}
				<span>{`${rating}/10`}</span>
			</h1>
			<p>{overview}</p>
			<Link to={`/${media}/${id}`} className="btn--play">
				<i className="fas fa-play"></i>
				Play
			</Link>
		</main>
	);
};
