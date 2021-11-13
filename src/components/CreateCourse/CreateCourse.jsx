import React, { useState } from 'react';
import { Input } from '../../common';
import { Button } from '../../common';
import { v4 as uuidv4 } from 'uuid';
import { helpers } from '../../helpers';
import { AddAuthor } from './components';
import './create-course.scss';

const CreateCourse = ({
	closeSaveCourseHandler,
	coursesState,
	authorsState,
}) => {
	const [setCoursesList] = coursesState;
	const [authorsList, setAuthorsList] = authorsState;
	const [allAuthors, setAllAuthors] = useState(authorsList);
	const [choosenAutors, setChoosenAutors] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState('');

	const createAuthorBtnHandler = () => {
		const authorId = uuidv4();

		if (!authorName.length) {
			helpers.showAlert('Please fill in author name.');
			return;
		}
		if (authorName.length < 2) {
			helpers.showAlert('Author name must be at least 2 characters.');
			return;
		}
		const author = {
			id: authorId,
			name: authorName,
		};
		setAuthorsList((prevState) => [...prevState, author]);
		setAllAuthors((prevState) => [...prevState, author]);
		setAuthorName('');
	};

	const chooseAuthorHandler = (author) => {
		const allNewAuthors = allAuthors.filter((curr) => curr.id !== author.id);
		setAllAuthors(allNewAuthors);
		setChoosenAutors((prevState) => [...prevState, author]);
	};

	const deleteAuthorHandler = (author) => {
		const chosenNewAuthors = choosenAutors.filter(
			(curr) => curr.id !== author.id
		);
		setChoosenAutors(chosenNewAuthors);
		setAllAuthors((prevState) => [...prevState, author]);
	};

	const getDurationInHours = () => {
		const emptyPlug = '00:00';
		if (!duration) return emptyPlug;
		if (+duration < 1) return emptyPlug;
		const hours = helpers.getDuration(+duration);
		return `${hours}`;
	};

	const createCourseBtnHandler = () => {
		let isValid = true;
		const course = {
			id: uuidv4(),
			title,
			description,
			creationDate: helpers.getCreationDate(),
			duration,
			authors: choosenAutors.map((author) => author.id),
		};

		const requiredFields = [];
		Object.keys(course).forEach((key) => {
			if (!course[key].length) {
				requiredFields.push(`Field ${key.toUpperCase()} is required!`);
				isValid = false;
			}
		});

		if (!isValid) {
			alert(requiredFields.join('\n'));
			return;
		}
		setCoursesList((prevState) => [...prevState, course]);
		closeSaveCourseHandler();
	};

	return (
		<div className='create-course container'>
			<div className='create-course__title-wrapper'>
				<div className='create-course__title'>
					<Input
						labelText={'Title'}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholderText={'Enter title...'}
						labelStyles={{
							display: 'flex',
							flexDirection: 'column',
						}}
						inputStyles={{ marginTop: '0.3rem' }}
					/>
				</div>
				<Button
					buttonText={'Create course'}
					clickHandler={createCourseBtnHandler}
				/>
			</div>
			<Input
				type={'textarea'}
				labelText={'Description'}
				labelStyles={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '1rem',
				}}
				inputStyles={{ marginTop: '0.3rem' }}
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholderText={'Enter description'}
			/>
			<div className='create-course__authors-wrapper'>
				<div className='create-course__add-author-wrapper'>
					<h3 className='authors-title'>Add author</h3>
					<Input
						labelText={'Author name'}
						value={authorName}
						onChange={(e) => setAuthorName(e.target.value)}
						placeholderText={'Enter author name...'}
						labelStyles={{
							display: 'flex',
							flexDirection: 'column',
						}}
						inputStyles={{ marginTop: '0.3rem', width: '100%' }}
					/>
					<Button
						buttonText={'Create author'}
						clickHandler={createAuthorBtnHandler}
						styles={{ marginTop: '1rem' }}
					/>
				</div>
				<div>
					<h3 className='authors-title'>Authors</h3>
					<AddAuthor
						allAuthors={allAuthors}
						authorsHandler={chooseAuthorHandler}
						buttonText={'Add author'}
					/>
				</div>
				<div className='duration-wrapper'>
					<h3 className='authors-title'>Duration</h3>
					<Input
						type={'number'}
						min={'1'}
						labelText={'Duration'}
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
						placeholderText={'Enter duration in minutes...'}
						labelStyles={{
							display: 'flex',
							flexDirection: 'column',
						}}
						inputStyles={{ marginTop: '0.3rem', width: '100%' }}
					/>
					<p className='duration-in-hours'>
						Duration: <span>{getDurationInHours()}</span> hours
					</p>
				</div>
				<div>
					<h3 className='authors-title'>Course authors</h3>
					<AddAuthor
						allAuthors={choosenAutors}
						authorsHandler={deleteAuthorHandler}
						buttonText={'Delete author'}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
