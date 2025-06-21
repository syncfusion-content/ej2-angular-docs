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

This guide demonstrates how to set up and perform end-to-end (E2E) testing for Angular applications using Playwright, with an example testing a Syncfusion Angular Button component in a standalone component structure.

## Prerequisites

Ensure the following are installed:

- Node.js version 18 or later (22 recommended)
- Angular CLI version 17 or later
- TypeScript version 5.5 or later
- [Syncfusion Angular system requirements](https://ej2.syncfusion.com/angular/documentation/system-requirement)

> **Note**: Protractor reached its end-of-life in August 2023 and is no longer maintained or recommended for new Angular projects. Starting with Angular CLI version 12, Protractor support was deprecated and later removed. As a modern alternative, tools like `Playwright` offer fast, reliable, and cross-browser end-to-end testing, making them well-suited for Angular applications.

## What is Playwright?

Playwright is an open-source framework by Microsoft for E2E testing across Chromium, Firefox, and WebKit browsers. It offers:

- Cross-browser and cross-platform support
- Auto-waiting for element actions to reduce flaky tests
- Parallel test execution
- Network mocking and mobile emulation
- Debugging tools like Playwright Inspector and Trace Viewer
- TypeScript integration, ideal for Angular

Unlike Protractor, Playwright provides reliable automation without a separate server, making it a robust choice for Angular E2E testing.

## Set Up Playwright

### Step 1: Create Playwright Configuration

```bash
npm init playwright@latest
```

Create a new Angular project with standalone components:

```bash
ng new angular-playwright-test
cd angular-playwright-test
```
### Step 2: Add Syncfusion Button

Update `src/app/app.component.ts` to include a Syncfusion button:

```typescript
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';

@Component({

imports: [ ButtonModule ],
standalone: true,
selector: 'app-root',
template: `<div class="e-section-control">
                <!-- To render Button. -->
               <button ejs-button>Button</button></div>`
})

export class AppComponent { }
```

### Step 3: Add Syncfusion CSS

Update `src/styles.css` with Syncfusion button styles:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```
### Step 4: Write Playwright Test

Create `tests/button.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

 test.only('EJ2-button', async ({ page }) => {
  await page.goto("http://localhost:4000/");
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:4000/' });
  await page.waitForTimeout(1500);
  expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});
```

## Run the Tests

Run the tests:

```bash
npx playwright test 
```
This test verifies the visual appearance of the page by capturing a screenshot and comparing it to a baseline image. It ensures that the UI remains consistent and detects any unintended visual changes.

## See also

* [How to install playwright](https://playwright.dev/docs/intro)
* [Cypress Testing of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components](./testing-with-cypress)