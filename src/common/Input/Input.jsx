import React from 'react';
import './input.scss';

export const Input = ({
	labelText = '',
	defaultValue = '',
	placeholderText = '',
	className,
	onChange,
	value = '',
	labelStyles = {},
	inputStyles = {},
}) => {
	return (
		<label className={`${className} input-styles`} style={labelStyles}>
			{labelText}
			<input
				type='text'
				placeholder={placeholderText}
				defaultValue={defaultValue}
				style={inputStyles}
				onChange={onChange}
				value={value}
			/>
		</label>
	);
};
