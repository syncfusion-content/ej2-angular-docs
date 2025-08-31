---
layout: post
title: Getting Started with Essential UI Kit for Angular | Syncfusion
description: Checkout and learn about getting started with the Essential UI Kit for Angular in Syncfusion Essential JS 2, along with more details.
platform: ej2-angular
control: Getting Started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Essential<sup style="font-size:70%">&reg;</sup> UI Kit for Angular

Follow these steps to get started with the Essential<sup style="font-size:70%">&reg;</sup> UI Kit for Angular. You can explore the UI blocks in two main ways:

- **Download the App from GitHub**: Get the full free source code and run the app locally to explore the blocks.
- **View the Online Demo**: Explore the UI blocks interactively without downloading anything.

> **Note:** Syncfusion "blocks" are ready-made UI modules such as authentication forms, profile cards, and dashboards, designed for rapid development with Angular.

## Get Started by Downloading the App from GitHub

### Step 1: Download and Open the App in Visual Studio Code

Download the repository from [GitHub](https://github.com/syncfusion/essential-ui-kit-for-angular) and open it in Visual Studio Code.

![Launching the downloaded app](images/launching-the-downloaded-app.png)

### Step 2: Open a New Terminal

Open the integrated terminal via **Terminal > New Terminal** in Visual Studio Code.

![Opening a new terminal](images/opening-a-new-terminal.png)

### Step 3: Install Dependencies and Run the App
Run the following commands one after the other in the terminal:

```bash
npm install
ng serve
```

- `npm install` downloads all dependencies listed in **package.json**.
- `ng serve` builds and hosts the app locally.

    ![Installing the required dependencies](images/installing-the-required-dependencies.png)

    ![Running the Angular development server](images/running-the-angular-development-server.png)

When the terminal displays a localhost URL, **Ctrl + Click** (or **Cmd + Click** on macOS) the link to open the app in your browser and interact with the blocks.

### Step 4: License Key Requirement

The blocks include several Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components that require an active license key for proper display and usage. To activate the license, refer to the topics below:

#### How to Obtain a License Key

Visit the [Syncfusion<sup style="font-size:70%">&reg;</sup> License Documentation](https://ej2.syncfusion.com/angular/documentation/licensing/overview) to obtain your key.

#### How to Register the License Key

Add your license key in **src/main.ts**:

```typescript
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Your-License-Key');
```
Replace **'Your-License-Key'** with the actual license key you received from Syncfusion<sup style="font-size:70%">&reg;</sup>.

Registering the license key ensures all features are fully functional and free of licensing issues.

## Get Started by Viewing the Online Demo

For a quick preview, explore the blocks directly in the [Essential<sup style="font-size:70%">&reg;</sup> UI Kit for Angular online demo](https://ej2.syncfusion.com/angular/essential-ui-kit/#/blocks) without installation. This is recommended if you want an overview or inspiration before working locally.
