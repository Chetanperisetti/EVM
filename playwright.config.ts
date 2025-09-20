import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/features/*.feature',
  steps:[
    'tests/features/steps/*.ts'
  ]
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  timeout: 100 *1000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
     baseURL: 'https://365.uat.fastcollab.com/',
     trace: 'on-first-retry',
     headless : false,
     actionTimeout : 50000,
     launchOptions:{
      slowMo : 2000
     }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
