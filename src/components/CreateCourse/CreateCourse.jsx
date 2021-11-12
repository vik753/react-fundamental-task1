import React, { useState } from 'react';
import { Button } from '../../common/Button/Button';
import './create-course.scss';
import { Input } from '../../common/Input/Input';
import { v4 as uuidv4 } from 'uuid';
import { helpers } from '../../helpers';

const CreateCourse = ({ saveCourseBtnHandler, coursesState, authorsState }) => {
	const [coursesList, setCoursesList] = coursesState;
	const [authorsList, setAuthorsList] = authorsState;
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');

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
					clickHandler={saveCourseBtnHandler}
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
				<div className='create-course__author-list-wrapper'>
					<h3 className='authors-title'>Authors</h3>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
