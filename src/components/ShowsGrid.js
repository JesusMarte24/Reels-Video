import React from 'react';
import '../styles/ShowsGrid.scss';
import { Title } from './Title';

export const ShowsGrid = () => {
	return (
		<section className="shows--container">
			<Title title="Tv Shows..." />
			<div className="show--info">
				<a>
					<img
						src="https://m.media-amazon.com/images/I/71qvSXrQX0L._AC_SY679_.jpg"
						alt=""
					/>
				</a>
				<h3>una</h3>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
			</div>
		</section>
	);
};
