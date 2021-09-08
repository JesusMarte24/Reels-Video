import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { config } from '../config.js';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { SearchElement } from './SearchElement';
import '../styles/Search.scss';
import axios from 'axios';

export const Search = () => {
	const history = useHistory();
	const [SearchTermn, setSearchTermn] = useState('');
	const [Results, setResults] = useState('');

	useEffect(() => {
		let isMounted = true;
		const callApi = async () => {
			if (SearchTermn.length > 1) {
				let apiResult = await axios.get(
					`${config.api.baseUrl}/api/search/result?name=${SearchTermn}`
				);
				setResults([apiResult]);
			}
		};
		if (isMounted) {
			callApi();
		}
		return () => {
			isMounted = false;
		};
	}, [SearchTermn]);

	const onSubmit = (e) => {
		e.preventDefault();
		history.push(`/search/${SearchTermn.replace(/\s/g, '+')}`);
	};

	return (
		<>
			<Header />
			<form className="search__form" onSubmit={onSubmit}>
				<input
					onChange={(e) => setSearchTermn(e.target.value)}
					type="text"
					placeholder="Type Something..."
					className="search--input"
				/>
				<button type="submit" className="fas fa-search"></button>
			</form>
			<div className="search__container">
				{Results.length > 0 && Results[0].data.reqResult.length > 0
					? Results[0].data.reqResult
							.filter((e) => e.media_type !== 'person')
							.slice(0, 3)
							.map((e) => (
								<SearchElement
									key={e.id}
									id={e.id}
									title={e.title || e.original_title || e.name || e.original_name}
									img={e.poster_path}
									rate={e.vote_average}
									media={e.media_type}
								/>
							))
					: ''}
			</div>
			<Navbar />
		</>
	);
};
