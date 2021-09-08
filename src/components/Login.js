import React from 'react';
import { Header } from './Header';
import { Input } from './Input';
import { Navbar } from './Navbar';
import '../styles/Login.scss';

export const Login = () => {
	return (
		<section className="login--container">
			<Header />
			<div className="login--form">
				<Input placeholder={'Email...'} type="text" />
				<Input placeholder={'Password...'} type="password" />
				<button className="login--btn">Login</button>
			</div>

			<button className="signup--btn">Sign Up</button>
			<Navbar />
		</section>
	);
};
