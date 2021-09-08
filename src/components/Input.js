import React from 'react';
import '../styles/Input.scss';

export const Input = ({ type, placeholder }) => {
	return <input className="input--component" type={type} placeholder={placeholder}></input>;
};
