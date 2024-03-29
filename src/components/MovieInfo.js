import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';

import { config } from '../config';
import { Header } from './Header';
import { Navbar } from './Navbar';
import '../styles/MovieInfo.scss';
import { Loader } from './Loader';

export const MovieInfo = ({ mediaType }) => {
	let { id } = useParams();
	const [MovieInfo, setMovieInfo] = useState();

	//Watch List Heart
	const [Heart, setHeart] = useState(false);
	const watchList = () => {
		if (Heart === true) {
			setHeart(false);
		} else {
			setHeart(true);
		}
	};

	//Rating Section
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	useEffect(() => {
		let isMounted = true;
		const callApi = async () => {
			let movieData = await axios.get(`${config.api.baseUrl}/api/${mediaType}/info/${id}`);
			movieData = movieData.data.reqResult;
			setMovieInfo(movieData);
		};
		if (isMounted) {
			callApi();
		}

		return () => {
			isMounted = false;
		};
	}, [id, mediaType]);

	if (!MovieInfo) {
		return <Loader />;
	}

	return (
		<section className="movie__info--container">
			<Header />
			<div className="movie__info--poster">
				<img
					src={`${config.api.imgURL}/${config.api.imgagesSizes.poster_sizes[5]}${MovieInfo.poster_path}`}
					alt={`About: ${
						MovieInfo.title ||
						MovieInfo.original_title ||
						MovieInfo.name ||
						MovieInfo.original_name
					}`}
				/>
			</div>
			<div className="movie__info--about">
				<h1>
					{MovieInfo.title ||
						MovieInfo.original_title ||
						MovieInfo.name ||
						MovieInfo.original_name}
				</h1>
				{mediaType === 'movie' ? (
					<div>
						{MovieInfo.production_companies.length > 0 ? (
							<span>Directed By: {MovieInfo.production_companies[0].name}</span>
						) : (
							<span>{'Directed By: Not Available'}</span>
						)}
						<span>Released: {MovieInfo.release_date}</span>
						<span>
							Rating:{' '}
							<small className="rating--media">{MovieInfo.vote_average}/10</small>
						</span>
						{
							//Check if Genres Exists
							MovieInfo.genres.length > 0 ? (
								<span>Genres: {MovieInfo.genres.map((e) => `${e.name}, `)}</span>
							) : (
								<span>{'Genres: Not Available'}</span>
							)
						}
					</div>
				) : (
					<div>
						{
							//Check if Created By Exists
							MovieInfo.created_by.length > 0 ? (
								<span>
									Directed By: {MovieInfo.created_by.map((e) => `${e.name}, `)}
								</span>
							) : (
								<span>{'Directed By: Not Available'}</span>
							)
						}

						<span>First Air Date: {MovieInfo.first_air_date}</span>
						<span>Seasons: {MovieInfo.number_of_seasons}</span>
						<span>
							Rating:
							<small className="rating--media">{MovieInfo.vote_average}/10</small>
						</span>
						{
							//Check if Genres Exists
							MovieInfo.genres.length > 0 ? (
								<span>Genres: {MovieInfo.genres.map((e) => `${e.name}, `)}</span>
							) : (
								<span>{'Genres: Not Available'}</span>
							)
						}
					</div>
				)}
				<p>{MovieInfo.overview}</p>
			</div>
			{
				// Check if there is video
				MovieInfo.videos.results.length > 0 ? (
					<iframe
						title={
							MovieInfo.title ||
							MovieInfo.original_title ||
							MovieInfo.name ||
							MovieInfo.original_name
						}
						src={`${config.api.baseVideoUrl}/${MovieInfo.videos.results[0].key}`}
						frameBorder="0"
						allowFullScreen
					></iframe>
				) : (
					''
				)
			}

			<div className="watchList__container">
				<h3>Watch List?</h3>
				{Heart === false ? (
					<i className="far fa-heart" onClick={watchList}></i>
				) : (
					<i className="fas fa-heart" onClick={watchList}></i>
				)}

				<h4>Rate it</h4>
				<ReactStars
					count={5}
					emptyIcon={<i className="far fa-star"></i>}
					onChange={ratingChanged}
					size={32}
					fullIcon={<i className="fa fa-star"></i>}
					activeColor="#ffd700"
				/>
			</div>

			<Navbar />
		</section>
	);
};
