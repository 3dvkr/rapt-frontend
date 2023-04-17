import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
let serverUrl = ''

if (process.env.NODE_ENV === 'production') {
	serverUrl = "https://outstanding-plum-millipede.cyclic.app"
} else {
	serverUrl = "http://localhost:4000"
}
// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: { "/api": serverUrl },
	},
	plugins: [react()],
});
