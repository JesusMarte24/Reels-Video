import React from 'react';
import '../styles/Pagination.scss';

export const Pagination = ({ pageNumber }) => {
	return (
		<div className="pagination--container">
			<i className="fas fa-chevron-left pagination--back"></i>
			<span>{pageNumber}</span>
			<i className="fas fa-chevron-right pagination--next"></i>
		</div>
	);
};
