import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

export function renderApp(app: JSX.Element, elementId = "root") {
	const root = document.getElementById(elementId);
	if (!root) throw new Error("Root element not found");

	createRoot(root).render(<StrictMode>{app}</StrictMode>);
}

export function Nav() {
	return (
		<nav>
			<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="foo.html">Non-existent page (404 test)</a>
		</nav>
	);
}

export function Nav0() {
	return (
		<nav>
			<a href="index.html">Home</a>
		</nav>
	);
}
