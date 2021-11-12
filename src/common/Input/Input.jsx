import React from 'react';
import './input.scss';

export const Input = ({
	labelText = '',
	placeholderText = '',
	className,
	onChange,
	value = '',
	labelStyles = {},
	inputStyles = {},
	type = 'text',
}) => {
	if (type === 'textarea') {
		return (
			<label className={`${className} input-styles`} style={labelStyles}>
				{labelText}
				<textarea
					rows='5'
					cols='33'
					placeholder={placeholderText}
					style={inputStyles}
					onChange={onChange}
					value={value}
				/>
			</label>
		);
	}
	return (
		<label className={`${className} input-styles`} style={labelStyles}>
			{labelText}
			<input
				type={type}
				placeholder={placeholderText}
				style={inputStyles}
				onChange={onChange}
				value={value}
			/>
		</label>
	);
};
