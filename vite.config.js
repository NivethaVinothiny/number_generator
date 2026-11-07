import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/number_gen/',
  plugins: [react()],
  experimental: {
    renderBuiltUrl: (filename, { hostType }) =>
      hostType === 'html' ? `./${filename}` : { relative: true },
  },
});
