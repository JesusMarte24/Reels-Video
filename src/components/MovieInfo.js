import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { config } from '../config';

import { Header } from './Header';
import { Navbar } from './Navbar';
import '../styles/MovieInfo.scss';

export const MovieInfo = ({ mediaType }) => {
	let { id } = useParams();
	const [MovieInfo, setMovieInfo] = useState();

	useEffect(() => {
		const callApi = async () => {
			let movieData = await axios.get(`${config.api.baseUrl}/api/${mediaType}/info/${id}`);
			movieData = movieData.data.reqResult;
			setMovieInfo(movieData);
		};
		callApi();
	}, [id, mediaType]);

	if (!MovieInfo) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="movie__info--container">
			<Header />
			<div className="movie__info--poster">
				<img
					src={`${config.api.imgURL}/${config.api.imgagesSizes.poster_sizes[3]}${MovieInfo.poster_path}`}
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
						<span>Directed By: {MovieInfo.production_companies[0].name}</span>
						<span>Released: {MovieInfo.release_date}</span>
						<span>Rating: {MovieInfo.vote_average}/10</span>
						<span>Genres: {MovieInfo.genres.map((e) => `${e.name}, `)}</span>
					</div>
				) : (
					<div>
						<span>Directed By: {MovieInfo.created_by.map((e) => `${e.name}, `)}</span>
						<span>First Air Date: {MovieInfo.first_air_date}</span>
						<span>Seasons: {MovieInfo.number_of_seasons}</span>
						<span>Rating: {MovieInfo.vote_average}/10</span>
						<span>Genres: {MovieInfo.genres.map((e) => `${e.name}, `)}</span>
					</div>
				)}
				<p>{MovieInfo.overview}</p>
			</div>
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
			<Navbar />
		</section>
	);
};
