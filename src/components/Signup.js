import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from './Input';
import { Header } from './Header';
import { Navbar } from './Navbar';
import '../styles/Signup.scss';

export const Signup = () => {
	return (
		<section>
			<Header />
			<div className="signup--container">
				<Input required type="text" placeholder="First Name" />
				<Input required type="text" placeholder="Last Name" />
				<Input required type="email" placeholder="Email" />
				<Input required type="password" placeholder="Password" />
				<Input required type="password" placeholder="Repeat Password" />
			</div>
			<div className="signup__btn--container">
				<Link to="" className="signup--btn login--buttons">
					Sign Up
				</Link>
				<span className="signup--span">Or</span>
				<Link to="/profile" className="login--btn login--buttons">
					Login
				</Link>
			</div>
			<Navbar />
		</section>
	);
};
