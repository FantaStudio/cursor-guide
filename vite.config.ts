import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            app: path.resolve(__dirname, "./app"),
            pages: path.resolve(__dirname, "./pages"),
            widgets: path.resolve(__dirname, "./widgets"),
            features: path.resolve(__dirname, "./features"),
            entities: path.resolve(__dirname, "./entities"),
            shared: path.resolve(__dirname, "./shared"),
        },
    },
});


