import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Pagination.scss';

export const Pagination = ({ pageNumber }) => {
	return (
		<div className="pagination--container">
			<Link
				to={`/home/${parseInt(pageNumber - 1)}`}
				className="fas fa-chevron-left pagination--back"
			></Link>
			<span>{pageNumber}</span>
			<Link
				to={`/home/${parseInt(pageNumber + 1)}`}
				className="fas fa-chevron-right pagination--next"
			></Link>
		</div>
	);
};
