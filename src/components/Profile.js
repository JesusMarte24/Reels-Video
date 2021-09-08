import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Navbar } from './Navbar';
import '../styles/Profile.scss';

export const Profile = () => {
	return (
		<section className="profile--container">
			<Header />
			<Link className="profile__menu--anchor">
				<i class="far fa-heart profile__menu--icon"></i>
				<span className="profile__menu--item">My List</span>
			</Link>
			<Link className="profile__menu--anchor">
				<i class="fas fa-user-cog profile__menu--icon"></i>
				<span className="profile__menu--item">Account</span>
			</Link>
			<Link className="profile__menu--anchor">
				<i class="fas fa-info-circle profile__menu--icon"></i>
				<span className="profile__menu--item">About</span>
			</Link>
			<Navbar />
		</section>
	);
};
