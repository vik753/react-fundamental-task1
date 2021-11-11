import './app.scss';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';

function App() {
	return (
		<>
			<Header />
			<main>
				<Courses />
			</main>
		</>
	);
}

export default App;
