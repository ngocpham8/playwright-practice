import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
    testDir: './tests',
    timeout: 60000,
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    reporter: 'html',
    retries: process.env.CI ? 2 : 0,
    use: {
        trace: 'on-first-retry',
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        actionTimeout: 5000
    },
})