import React from 'react';
import '../styles/ShowsGrid.scss';
import { Title } from './Title';

export const ShowsGrid = ({ title }) => {
	return (
		<section className="shows--container">
			<Title title={title} />
			<div className="show--info">
				<div className="show__info--left">
					<a>
						<img
							src="https://m.media-amazon.com/images/I/71qvSXrQX0L._AC_SY679_.jpg"
							alt=""
						/>
					</a>
					<h3>Rick & Morty</h3>
				</div>
				<div className="show__info--right">
					<span>
						Directed By: Justin Roiland And Dan Harmongfgfgfg
					</span>
					<span>Released: 12/2013</span>
					<span>Seasons: 5</span>
					<span>Genres: Action, Aventure, action etc etc</span>
				</div>
			</div>
		</section>
	);
};
