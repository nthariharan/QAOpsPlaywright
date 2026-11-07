import {defineConfig} from '@playwright/test';
import { loadEnvFile } from 'node:process';
import fs from 'fs';

// Only attempt to load the file if it actually exists (local dev)
if (fs.existsSync('.env')) {
  loadEnvFile();
}

export default defineConfig({
  timeout : 30*1000,
  expect : {
    timeout : 10*1000
  },
  reporter : 'html',
  use:{
    browserName : 'chromium',
    headless : true,
    trace :'on',
    actionTimeout : 10*1000
  },
  projects : [
    {
      name : "daily",
      testDir : "./daily"
    },
    {
      name : "shop",
      testDir : "./tests"
    },
    {
      name : "stable",
      testDir : "./stableCodes"
    }
  ]
});
