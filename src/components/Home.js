import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { config } from '../config';
import { Header } from '../components/Header';
import { Carrousel } from './Carrousel';
import { Navbar } from '../components/Navbar';
import { MovieGrid } from '../components/MovieGrid';
import { ShowsGrid } from '../components/ShowsGrid';
import '../styles/Home.scss';

export const Home = () => {
	let { id } = useParams();
	const [CarrouselData, setCarrouselData] = useState();
	useEffect(() => {
		const callApi = async () => {
			let carrouselData = await axios.get(`${config.api.baseUrl}/api/home`);
			carrouselData = carrouselData.data.reqResult;
			setCarrouselData(carrouselData);
		};
		callApi();
	}, []);

	if (!CarrouselData) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<Header />
			<Carrousel data={CarrouselData} />
			<Navbar />
			<MovieGrid title="Trending Now..." pagination={true} />
			<ShowsGrid title={'Tv Shows...'} />
		</div>
	);
};
