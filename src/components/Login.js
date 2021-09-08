import React from 'react';
import { Header } from './Header';
import { Input } from './Input';
import { Navbar } from './Navbar';
import '../styles/Login.scss';
import { Link } from 'react-router-dom';

export const Login = () => {
	return (
		<section className="login--container">
			<Header />
			<div className="login--form">
				<Input required placeholder={'Email...'} type="email" />
				<Input required placeholder={'Password...'} type="password" />
				<Link to="/profile/jesus" className="login--btn login--buttons">
					Login
				</Link>
			</div>

			<Link to="/new/user" className="signup--btn login--buttons">
				Sign Up
			</Link>
			<Navbar />
		</section>
	);
};
