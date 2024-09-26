import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

export function renderApp(app: JSX.Element, elementId = "root") {
	const root = document.getElementById(elementId);
	if (!root) throw new Error("Root element not found");

	createRoot(root).render(<StrictMode>{app}</StrictMode>);
}
