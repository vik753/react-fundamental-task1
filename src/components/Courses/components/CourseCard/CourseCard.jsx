import React from 'react';
import { Button } from '../../../../common';
import { helpers } from '../../../../helpers';
import './course-card.scss';

const CourseCard = ({ course }) => {
	const authors = course.currentAuthors.map((author) => author.name).join(', ');

	const getCreatedDate = (unformedDate) => {
		const dateInArr = unformedDate.split('/');
		const res = dateInArr.map((dateItem, index) => {
			return index < 2 ? helpers.formatToDoubleNumbers(+dateItem) : dateItem;
		});
		return res.join('.');
	};

	return (
		<div className='card'>
			<div className='card__left-wrapper'>
				<p className='card__title'>{course.title}</p>
				<p className='card__description'>{course.description}</p>
			</div>
			<div className='card__right-wrapper'>
				<p className='card__authors'>
					Authors:
					<span>{authors}</span>
				</p>
				<p>
					Duration:
					<span>{helpers.getDuration(course.duration)} hours</span>
				</p>
				<p>
					Created:
					<span>{getCreatedDate(course.creationDate)}</span>
				</p>
				<Button
					buttonText={'Show course'}
					clickHandler={() => console.log('show course')}
				/>
			</div>
		</div>
	);
};

export default CourseCard;
