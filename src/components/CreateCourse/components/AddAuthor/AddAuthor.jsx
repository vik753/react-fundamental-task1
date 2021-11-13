import React from 'react';
import { Button } from '../../../../common/Button/Button';
import './add-author.scss';

const AddAuthor = ({ allAuthors, authorsHandler, buttonText }) => {
	if (!allAuthors.length) {
		return <p className='empty-plug'>Author list is empty.</p>;
	}

	return (
		<div className='authors__inner-wrapper'>
			{allAuthors.map((author) => (
				<div className='authors-item' key={author.id}>
					<p>{author.name}</p>
					<Button
						buttonText={buttonText}
						clickHandler={() =>
							authorsHandler({ id: author.id, name: author.name })
						}
					/>
				</div>
			))}
		</div>
	);
};

export default AddAuthor;
