import React from 'react';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { Navbar } from './components/Navbar';
import { MovieGrid } from './components/MovieGrid';
import './styles/Reels.scss';

function Reels() {
	return (
		<>
			<Header />
			<div className="Reels">
				<MainSection />
			</div>
			<Navbar />
			<MovieGrid />
		</>
	);
}

export default Reels;
