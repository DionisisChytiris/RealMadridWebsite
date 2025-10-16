import { defineConfig, devices } from '@playwright/test';

// E2E config for Vite React app
// Uses preview server (build + serve) for stability
export default defineConfig({
  testDir: './e2e',
  retries: 1,
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: [
    {
      // Avoid emptying dist on Windows where files can be locked by AV/FS
      command: 'npm run build -- --emptyOutDir=false',
      reuseExistingServer: true,
    },
    {
      command: 'npm run preview -- --port 4173',
      url: 'http://localhost:4173',
      timeout: 120_000,
      reuseExistingServer: true,
    },
  ],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
