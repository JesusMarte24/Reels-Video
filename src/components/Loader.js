import React from 'react';
import '../styles/Loader.scss';

export const Loader = () => {
	return (
		<div className="loader--wrapper">
			<div className="lds-dual-ring"></div>
		</div>
	);
};
