import React from 'react';
import { config } from '../config';
import '../styles/Carrousel.scss';
import { MainSection } from './MainSection';

export const Carrousel = ({ data }) => {
	return (
		<div id="carrousel--tv" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				{data.map((e, i) =>
					i === 0 ? (
						<li
							key={e.id}
							data-target="#carrousel--tv"
							data-slide-to={i.toString()}
							className="active"
						></li>
					) : (
						<li
							key={e.id}
							data-target="#carrousel--tv"
							data-slide-to={i.toString()}
						></li>
					)
				)}
			</ol>
			<div className="carousel-inner">
				{data.map((e, i) =>
					i === 0 ? (
						<div key={e.id} className="carousel-item active">
							<img
								src={`${config.api.imgURL}/${config.api.imgagesSizes.poster_sizes[5]}${e.poster_path}`}
								alt={`About: ${
									e.title || e.original_title || e.name || e.original_name
								}`}
							/>
							<MainSection
								title={e.title || e.original_title || e.name || e.original_name}
								rating={e.vote_average}
								overview={e.overview}
								media={e.media_type}
								id={e.id}
							/>
						</div>
					) : (
						<div key={e.id} className="carousel-item">
							<img
								src={`${config.api.imgURL}/${config.api.imgagesSizes.poster_sizes[5]}${e.poster_path}`}
								alt={`About: ${
									e.title || e.original_title || e.name || e.original_name
								}`}
							/>
							<MainSection
								title={e.title || e.original_title || e.name || e.original_name}
								rating={e.vote_average}
								overview={e.overview}
								media={e.media_type}
								id={e.id}
							/>
						</div>
					)
				)}
			</div>

			{/* Previous & Next Buttons :v */}
			<a
				className="carousel-control-prev"
				href="#carrousel--tv"
				role="button"
				data-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carrousel--tv"
				role="button"
				data-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
