---
layout: post
title: Angular playwright testing in Syncfusion Angular Frameworks
description: Learn how to perform Angular end-to-end testing using Playwright in Syncfusion Angular frameworks with modern, reliable automation 
platform: ej2-angular
control: Angular 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Playwright Testing

This guide demonstrates how to set up and perform end-to-end (E2E) testing for Angular applications using Playwright, with an example testing a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Button component in a standalone component structure.

## Prerequisites

Ensure the following are installed:

- Node.js version 18 or later (22 recommended)
- Angular CLI version 17 or later
- TypeScript version 5.5 or later
- [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular system requirements](https://ej2.syncfusion.com/angular/documentation/system-requirement)

> **Note**: Protractor reached its end of life in August 2023 and is no longer maintained for Angular projects. With Angular CLI version 12 and later, Protractor support is deprecated. Modern UI testing tools such as Playwright offer fast, reliable, and cross-browser support, making them well suited for Angular applications.

## What is Playwright?

Playwright is an open-source framework by Microsoft for E2E testing across Chromium, Firefox, and WebKit browsers. Key features include:

- Cross-browser and cross-platform compatibility
- Auto-waiting for element actions to improve test reliability
- Parallel test execution
- Network mocking and mobile emulation
-  Debugging tools such as Playwright Inspector and Trace Viewer
- TypeScript integration, ideal for Angular projects

Playwright does not require a separate server for E2E tests and is designed to provide stable and efficient automation for Angular projects.

## Setting Up Playwright for Angular

### Step 1: Initialize Playwright and the Angular Project

Install Playwright and create a new Angular project:

```bash
npm init playwright@latest
ng new angular-playwright-test
cd angular-playwright-test
```

### Step 2: Add a Syncfusion<sup style="font-size:70%">&reg;</sup> Button

In `src/app/app.component.ts`, add the Syncfusion<sup style="font-size:70%">&reg;</sup> button component:

```typescript
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
  imports: [ButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
              <!-- To render Button. -->
              <button ejs-button>Button</button>
            </div>`
})
export class AppComponent { }
```

### Step 3: Add Syncfusion<sup style="font-size:70%">&reg;</sup> CSS Styles

Import Syncfusion<sup style="font-size:70%">&reg;</sup> button styles in `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

> Adjust the import paths as necessary based on your project's folder structure.

### Step 4: Write a Playwright Test

Create `tests/button.spec.ts` with the following content:

```typescript
import { test, expect } from '@playwright/test';

test.only('EJ2-button', async ({ page }) => {
  await page.goto("http://localhost:4000/");
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:4000/' });
  await page.waitForTimeout(1500);
  expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});
```

This test validates the visual rendering of the Syncfusion Button by taking a screenshot and comparing it to a baseline image, ensuring UI consistency and detecting visual regressions.

## Running the Tests

To execute the E2E tests, run:

```bash
npx playwright test 
```

Playwright will launch the configured browsers, execute the tests, and compare UI snapshots with the baseline. Visual mismatches or unexpected changes will be reported.

## See also

* [How to install Playwright](https://playwright.dev/docs/intro)
* [Cypress Testing of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components](./testing-with-cypress)