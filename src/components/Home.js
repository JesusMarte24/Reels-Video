import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { config } from '../config';
import { Header } from '../components/Header';
import { Carrousel } from './Carrousel';
import { Navbar } from '../components/Navbar';
import { MovieGrid } from '../components/MovieGrid';
import { ShowsGrid } from '../components/ShowsGrid';
import '../styles/Home.scss';
import { Loader } from './Loader';

export const Home = () => {
	const [CarrouselData, setCarrouselData] = useState();
	const [MovieGridData, setMovieGridData] = useState();
	const [ShowGrid, setShowGrid] = useState();
	let { id } = useParams();

	useEffect(() => {
		//Avoid Try to change state to a unmounted component
		let isMounted = true;
		const CallApi = async () => {
			let carrouselData = await axios.get(`${config.api.baseUrl}/api/home`);
			carrouselData = carrouselData.data.reqResult;
			setCarrouselData(carrouselData);
		};
		if (isMounted) {
			CallApi();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		let isMounted = true;
		const CallApi = async () => {
			let GridData = await axios.get(`${config.api.baseUrl}/api/home/grid/${id}`);
			GridData = GridData.data.reqResult;
			setMovieGridData(GridData);
		};
		if (isMounted) {
			CallApi();
		}
		return () => {
			isMounted = false;
		};
	}, [id]);

	useEffect(() => {
		let isMounted = true;
		const CallApi = async () => {
			let tvData = await axios.get(`${config.api.baseUrl}/api/home/tv`);
			tvData = tvData.data.reqResult;
			setShowGrid(tvData);
		};
		if (isMounted) {
			CallApi();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	if (!CarrouselData || !MovieGridData || !ShowGrid) {
		return <Loader />;
	}
	return (
		<div>
			<Header />
			<Carrousel data={CarrouselData} />
			<Navbar />
			<MovieGrid
				title="Trending Now..."
				pagination={true}
				movies={MovieGridData}
				pageNumber={id}
			/>
			<ShowsGrid title={'Tv Shows...'} data={ShowGrid} />
		</div>
	);
};
