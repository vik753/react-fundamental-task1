import React from 'react';
import { Logo } from './components';
import { Button } from '../../common';
import './header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<Logo styles={{ marginLeft: '1rem' }} />
				<div className='header__menu'>
					<span className='header__name'>Dave</span>
					<Button
						buttonText={'Logout'}
						clickHandler={() => console.log('logout btn clicked')}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
