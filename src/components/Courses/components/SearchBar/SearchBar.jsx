import React, { useState } from 'react';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import './search-bar.scss';

export const SearchBar = ({ searchState, handleSearchClick }) => {
	const [searchText, setSearchText] = searchState;

	return (
		<div className='search-bar'>
			<Input
				className={'search-input'}
				placeholderText={'Enter course name...'}
				inputStyles={{ width: '400px' }}
				onChange={(e) => setSearchText(e.target.value)}
				value={searchText}
			/>
			<Button
				buttonText={'Search'}
				clickHandler={handleSearchClick}
				styles={{ marginLeft: '0.5rem' }}
			/>
		</div>
	);
};
