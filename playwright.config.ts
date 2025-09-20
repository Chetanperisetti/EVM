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
  fullyParallel: false,
  timeout: 100 *1000,
  expect: {
    timeout: 10000,
  },
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: 1,
  reporter: 'html',
  use: {
     baseURL: 'https://365.uat.fastcollab.com/',
     trace: 'on-first-retry',
     headless : false,
     actionTimeout : 60000,
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
