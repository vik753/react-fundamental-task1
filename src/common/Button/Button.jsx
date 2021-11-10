import React from 'react';
import './button.scss';

export const Button = ({ buttonText, clickHandler }) => {
	return (
		<button className='btn' onClick={clickHandler}>
			{buttonText}
		</button>
	);
};
