import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import cdn from "vite-plugin-cdn-import";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: process.env.GITHUB_REPO_NAME ?? "/",
	build: {
		minify: true,
		rolldownOptions: {
			external: ["react", "react-dom/client"],
			input: {
				index: "index.html",
				about: "about.html",
				"404": "404.html",
			},
			output: {
				minify: {
					compress: {
						dropConsole: true,
						dropDebugger: true,
					},
				},
			},
		},
	},
});
