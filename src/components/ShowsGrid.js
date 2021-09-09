import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';
import '../styles/ShowsGrid.scss';
import { Title } from './Title';

export const ShowsGrid = ({ title, data }) => {
	return (
		<section className="shows--container">
			<Title title={title} />
			<div id="carrousel" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators carousel--grid--indicator">
					{data.map((e, i) =>
						i === 0 ? (
							<li
								key={e.id}
								data-target="#carrousel"
								data-slide-to={i.toString()}
								className="active"
							></li>
						) : (
							<li
								key={e.id}
								data-target="#carrousel"
								data-slide-to={i.toString()}
							></li>
						)
					)}
				</ol>
				<div id="carousel--show--container" className="carousel-inner">
					{data.map((e, i) =>
						i === 0 ? (
							<div key={e.id} className="carousel-item active">
								<div className="show--info">
									<div className="show__info--left">
										<Link to={`/show/${e.id}`}>
											<img
												src={`${config.api.imgURL}/${config.api.imgagesSizes.poster_sizes[4]}${e.poster_path}`}
												alt={`About: ${
													e.title ||
													e.original_title ||
													e.name ||
													e.original_name
												}`}
											/>
										</Link>
										<h3>
											{e.title ||
												e.original_title ||
												e.name ||
												e.original_name}
										</h3>
									</div>
									<div className="show__info--right">
										<span>Origin Country: {e.origin_country[0]}</span>
										<span>First Air Date: {e.first_air_date}</span>
										<span>
											Rating:{' '}
											<small className="rating">{`${e.vote_average}/10`}</small>
										</span>
									</div>
								</div>
							</div>
						) : (
							<div key={e.id} className="carousel-item">
								<div className="show--info">
									<div className="show__info--left">
										<Link to={`/show/${e.id}`}>
											<img
												src={`${config.api.imgURL}/${config.api.imgagesSizes.poster_sizes[4]}${e.poster_path}`}
												alt={`About: ${
													e.title ||
													e.original_title ||
													e.name ||
													e.original_name
												}`}
											/>
										</Link>
										<h3>
											{e.title ||
												e.original_title ||
												e.name ||
												e.original_name}
										</h3>
									</div>
									<div className="show__info--right">
										<span>Origin Country: {e.origin_country[0]}</span>
										<span>First Air Date: {e.first_air_date}</span>
										<span>
											Rating:{' '}
											<small className="rating">{`${e.vote_average}/10`}</small>
										</span>
									</div>
								</div>
							</div>
						)
					)}
				</div>

				{/* Previous & Next Buttons :v */}
				<a
					className="carousel-control-prev"
					href="#carrousel"
					role="button"
					data-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carrousel"
					role="button"
					data-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</section>
	);
};
