import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';
import '../styles/SearchElement.scss';

export const SearchElement = ({ title, img, rate, media }) => {
	return (
		<div className="search--element">
			<Link to="">
				<img
					src={`${config.api.imgURL}/${config.api.imgagesSizes.poster_sizes[0]}${img}`}
					alt={`About: ${title}`}
				/>
				<div>
					<h4>{title}</h4>
					<p>
						<span>{`${rate}/10`}</span>
						<small>{media.toUpperCase()}</small>
					</p>
				</div>
			</Link>
		</div>
	);
};
