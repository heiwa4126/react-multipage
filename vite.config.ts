import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import cdn from "vite-plugin-cdn-import";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), cdn({ modules: ["react", "react-dom"] })],
	build: {
		rollupOptions: {
			input: {
				index: "index.html",
				about: "about.html",
				"404": "404.html",
			},
			// output: {
			// 	manualChunks: {
			// 		r: ["react", "react-dom"],
			// 	},
			// },
		},
	},
});
