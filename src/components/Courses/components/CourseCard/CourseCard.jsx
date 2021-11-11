import React from 'react';
import { Button } from '../../../../common/Button/Button';
import './course-card.scss';

export const CourseCard = ({ course }) => {
	const authors = course.currentAuthors.map((author) => author.name).join(', ');

	const formatToDoubleNumbers = (num) => (num < 10 ? `0${num}` : `${num}`);

	const getDuration = (minutes) => {
		const hours = Math.floor(+minutes / 60);
		const mins = +minutes - hours * 60;
		return `${formatToDoubleNumbers(hours)}:${formatToDoubleNumbers(
			mins
		)} hours`;
	};

	const getCreatedDate = (unformedDate) => {
		const dateInArr = unformedDate.split('/');
		const res = dateInArr.map((dateItem, index) => {
			return index < 2 ? formatToDoubleNumbers(+dateItem) : dateItem;
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
					<span>{getDuration(course.duration)}</span>
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
