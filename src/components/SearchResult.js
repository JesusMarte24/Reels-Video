import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { config } from '../config';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Loader } from './Loader';
import { MovieGrid } from './MovieGrid';
import '../styles/SearchResult.scss';

export const SearchResult = () => {
	const [Results, setResults] = useState();
	let { name } = useParams();

	useEffect(() => {
		let isMounted = true;
		const callApi = async () => {
			let apiResults = await axios.get(
				`${config.api.baseUrl}/api/search/result?name=${name}`
			);
			apiResults = apiResults.data.reqResult;
			setResults(apiResults);
		};
		if (isMounted) {
			callApi();
		}

		return () => {
			isMounted = false;
		};
	}, [name]);

	if (!Results) {
		return <Loader />;
	}

	return (
		<div className="search__result--container">
			<Header />
			<MovieGrid title="Results" movies={Results} />
			<Navbar />
		</div>
	);
};
