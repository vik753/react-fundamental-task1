import './app.scss';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse';
import { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	const [showCreateCourse, setShowCreateCourse] = useState(false);
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	const createCourseBtnHandler = () => setShowCreateCourse(true);
	const closeSaveCourseHandler = () => setShowCreateCourse(false);

	return (
		<>
			<Header />
			<main>
				{showCreateCourse ? (
					<CreateCourse
						closeSaveCourseHandler={closeSaveCourseHandler}
						coursesState={[coursesList, setCoursesList]}
						authorsState={[authorsList, setAuthorsList]}
					/>
				) : (
					<Courses
						createCourseBtnHandler={createCourseBtnHandler}
						coursesState={[coursesList, setCoursesList]}
						authorsState={[authorsList, setAuthorsList]}
					/>
				)}
			</main>
		</>
	);
}

export default App;
