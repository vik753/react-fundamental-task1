import React from 'react';
import './button.scss';

export const Button = ({ buttonText, clickHandler, styles = {} }) => {
	return (
		<button className='btn' onClick={clickHandler} style={styles}>
			{buttonText}
		</button>
	);
};
