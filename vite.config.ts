import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  build: {
    outDir: 'build',
  },
  clearScreen: false,
  plugins: [reactRefresh(), svgr()],
})
