import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

timeout:30*1000,
expect:{
  timeout:5000
},


  fullyParallel: !true,
 
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter:[["html",{
    open:"on-failure"
  }]] ,

  use: {

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://bookcart.azurewebsites.net/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    actionTimeout:10,
    trace: 'on-first-retry',
    video:"retain-on-failure",
    screenshot:"only-on-failure"
  
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ]
   
});
