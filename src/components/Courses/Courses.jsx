import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Button } from '../../common';
import SearchBar from './components/SearchBar/SearchBar';
import './courses.scss';

const Courses = ({ createCourseBtnHandler, coursesState, authorsState }) => {
	const [coursesList] = coursesState;
	const [authorsList] = authorsState;
	const [filteredCoursesList, setfilteredCoursesList] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [filterShow, setFilterShow] = useState(false);

	useEffect(() => {
		searchText.length ? setFilterShow(false) : setFilterShow(true);
	}, [searchText]);

	const getCardsList = (courses) => {
		return courses.length
			? courses.map((course) => {
					course.currentAuthors = course.authors.map(
						(authorID) =>
							authorsList.find((author) => author.id === authorID) ?? null
					);
					return <CourseCard key={course.id} course={course} />;
			  })
			: [<span>No courses here...</span>];
	};

	const handleSearchClick = () => {
		if (!searchText.length) return;
		const filteredList = coursesList.filter((course) => {
			return (
				course.id.toLowerCase().includes(searchText.toLowerCase()) ||
				course.title.toLowerCase().includes(searchText.toLowerCase())
			);
		});
		const filtered = getCardsList(filteredList);
		setfilteredCoursesList(filtered);
		setFilterShow(true);
	};

	return (
		<div className='courses container'>
			<div className='toolbar'>
				<SearchBar
					searchState={[searchText, setSearchText]}
					handleSearchClick={handleSearchClick}
				/>
				<Button
					buttonText={'Add new course'}
					clickHandler={createCourseBtnHandler}
				/>
			</div>
			{searchText.length && filterShow
				? filteredCoursesList
				: getCardsList(coursesList)}
		</div>
	);
};

export default Courses;
