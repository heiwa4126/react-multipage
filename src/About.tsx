import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

// このApp()のexportは不要なんだけど、これを削除すると
// `[vite] hmr invalidate /src/About.tsx Could not Fast Refresh ("true" export is incompatible). Learn more at https://github.com/vitejs/vite-plugin-react-swc#consistent-components-exports`
// fast refreshが効かなくなる。

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>About</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}
