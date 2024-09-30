import "./App.css";
import { Counter } from "./Counter";
import { Nav, renderApp } from "./main";

renderApp(<App />);

export function App() {
	return (
		<>
			<Nav />
			<h1>Home (Index)</h1>
			<div className="card">
				<Counter />
			</div>
		</>
	);
}

export default App;
