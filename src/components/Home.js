import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { MainSection } from '../components/MainSection';
import { Navbar } from '../components/Navbar';
import { MovieGrid } from '../components/MovieGrid';
import { ShowsGrid } from '../components/ShowsGrid';
import '../styles/Home.scss';

export const Home = () => {
	return (
		<div>
			<Header />
			<div className="Home">
				<img
					src="https://cdn.mobilesyrup.com/wp-content/uploads/2020/06/Spongebob-Squarepants-Movie-Sponge-on-the-Run-scaled.jpg"
					alt="Slides Background"
				/>
				<MainSection />
			</div>
			<Navbar />
			<MovieGrid title="Trending Now..." pagination={true} />
			<ShowsGrid title={'Tv Shows...'} />
		</div>
	);
};
