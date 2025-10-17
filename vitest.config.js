import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Prevent unit test runner from executing Playwright E2E specs
    exclude: [
      'e2e/**',
      'node_modules/**',
      'dist/**',
      '**/playwright-report/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
  },
});
