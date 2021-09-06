import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Pagination.scss';

export const Pagination = ({ pageNumber, scrollRef }) => {
	const handleScroll = () => {
		scrollRef.current.scrollIntoView();
	};

	return (
		<div className="pagination--container">
			{pageNumber === 1 ? null : (
				<Link
					to={`/home/${parseInt(pageNumber - 1)}`}
					className="fas fa-chevron-left pagination--back"
					onClick={handleScroll}
				></Link>
			)}
			<span>{pageNumber}</span>
			{pageNumber === 1000 ? null : (
				<Link
					to={`/home/${parseInt(pageNumber + 1)}`}
					className="fas fa-chevron-right pagination--next"
					onClick={handleScroll}
				></Link>
			)}
		</div>
	);
};
