import './app.scss';
import { Header, Courses, CreateCourse } from './components';
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
						coursesState={[setCoursesList]}
						authorsState={[authorsList, setAuthorsList]}
					/>
				) : (
					<Courses
						createCourseBtnHandler={createCourseBtnHandler}
						coursesState={[coursesList]}
						authorsState={[authorsList]}
					/>
				)}
			</main>
		</>
	);
}

export default App;
