import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "https://smitdesai16.github.io/chromecast-hello-world-receiver/"
})
