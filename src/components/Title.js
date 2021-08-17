import React from 'react';
import '../styles/Title.scss';

export const Title = ({ title }) => {
	return (
		<div className="title">
			<h2>{title}</h2>
		</div>
	);
};
