import React, { useEffect, useState } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import './courses.scss';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';

export const Courses = () => {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [filteredCoursesList, setfilteredCoursesList] = useState([]);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
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
					clickHandler={() => console.log('add new course')}
				/>
			</div>
			{searchText.length && filterShow
				? filteredCoursesList
				: getCardsList(coursesList)}
		</div>
	);
};
