import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/",

    build: {
        rollupOptions: {
            output: {
                // ────────────────────────────────────────────────
                // This is the key part: manual chunking
                // ────────────────────────────────────────────────
                manualChunks: {
                    "three-vendor": [
                        "three",
                        "@react-three/fiber",
                        "@react-three/drei",
                    ],
                },
            },
        },
    },
});
