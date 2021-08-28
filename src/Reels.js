import React from 'react';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { Navbar } from './components/Navbar';
import { MovieGrid } from './components/MovieGrid';
import { ShowsGrid } from './components/ShowsGrid';
import './styles/Reels.scss';

function Reels() {
	return (
		<>
			<Header />
			<div className="Reels">
				<MainSection />
			</div>
			<Navbar />
			<MovieGrid title="Trending Now..." pagination={true} />
			<ShowsGrid />
		</>
	);
}

export default Reels;
