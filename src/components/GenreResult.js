import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { config } from '../config';
import { Loader } from './Loader';
import { MovieGrid } from './MovieGrid';

export const GenreResult = () => {
	let { media, genre, page } = useParams();
	const [Genre, setGenre] = useState();
	useEffect(() => {
		let isMounted = true;
		const callApi = async () => {
			let genreData = await axios.get(
				`${config.api.baseUrl}/api/genres/${media}/${genre}/${page}`
			);
			//Add Media Type because it does not have :V
			if (media === 'category') {
				media = 'movie';
			}
			genreData = genreData.data.reqResult.map((obj) => ({ ...obj, media_type: media }));
			setGenre(genreData);
		};
		if (isMounted) {
			callApi();
		}
		return () => {
			isMounted = false;
		};
	}, [genre, page, media]);

	if (!Genre) {
		return <Loader />;
	}

	return (
		<div className="mt-10 pb-10">
			<MovieGrid
				title={`${media.charAt(0).toUpperCase() + media.slice(1)} ${
					genre === 'top_rated'
						? 'Top Rated'
						: genre.charAt(0).toUpperCase() + genre.slice(1)
				}`}
				movies={Genre}
				pagination={true}
				pageNumber={page}
			/>
		</div>
	);
};
