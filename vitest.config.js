import { defineConfig } from 'vitest/config';

export default defineConfig({
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
  },
});
