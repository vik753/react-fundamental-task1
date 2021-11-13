import React from 'react';
import logo from './BMW_Grey_Logo.svg';

const Logo = ({ styles = {} }) => {
	return <img src={logo} alt='site logo' style={styles} />;
};

export default Logo;
