import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Hello() {
	return (
		<div>
			<p>Hello World!</p>
		</div>
	);
}

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Hello />} />
			</Routes>
		</Router>
	);
}
