import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/Pagination.scss';

export const Pagination = ({ pageNumber, scrollRef }) => {
	const handleScroll = () => {
		scrollRef.current.scrollIntoView();
	};
	let location = useLocation().pathname;
	location = location.slice(0, -1);

	return (
		<div className="pagination--container">
			{pageNumber === 1 ? null : (
				<Link
					to={`${location}${parseInt(pageNumber - 1)}`}
					className="fas fa-chevron-left pagination--back"
					onClick={handleScroll}
				></Link>
			)}
			<span>{pageNumber}</span>
			{pageNumber === 1000 ? null : (
				<Link
					to={`${location}${parseInt(pageNumber + 1)}`}
					className="fas fa-chevron-right pagination--next"
					onClick={handleScroll}
				></Link>
			)}
		</div>
	);
};
