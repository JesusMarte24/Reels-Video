import React from 'react';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import './styles/Reels.scss';

function Reels() {
	return (
		<>
			<Header />
			<div className="Reels">
				<MainSection />
			</div>
		</>
	);
}

export default Reels;
