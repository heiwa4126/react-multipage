import "./App.css";
import { Counter } from "./Counter";
import { Counter2 } from "./Counter2";
import { Nav, renderApp } from "./main";

renderApp(<App />);

export function App() {
	return (
		<>
			<Nav />
			<h1>Home (Index)</h1>
			<div className="card">
				<Counter /> <Counter2 />
			</div>
		</>
	);
}

export default App;
