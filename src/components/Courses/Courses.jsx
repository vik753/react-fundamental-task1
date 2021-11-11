import React from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import './courses.scss';

export const Courses = () => {
	const coursesList = mockedCoursesList.length ? (
		mockedCoursesList.map((course) => {
			course.currentAuthors = course.authors.map(
				(authorID) =>
					mockedAuthorsList.find((author) => author.id === authorID) ?? null
			);
			console.log('course:', course);
			return <CourseCard key={course.id} course={course} />;
		})
	) : (
		<span>No courses here...</span>
	);

	return <div className='courses container'>{coursesList}</div>;
};
