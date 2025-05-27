import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repo = process.env.REPO_NAME || 'repasoReact';
const proyecto = process.env.PROJECT_DIR || 'introduccion';

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/proyectos/${proyecto}`,
});