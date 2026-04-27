---
layout: post
title: Getting Started with Essential UI Kit for Angular | Syncfusion
description: Checkout and learn about getting started with the Essential UI Kit for Angular in Syncfusion Essential JS 2, along with more details.
platform: ej2-angular
control: Getting Started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Essential<sup>&reg;</sup> UI Kit for Angular

Follow the steps below to get started with Essential<sup style="font-size:70%">&reg;</sup> UI Kit for Angular. You can begin in one of two ways:

- **Download the App from GitHub**: Get the full free source code and run the app locally to explore the blocks.
- **View the Online Demo**: Alternatively, you can try out the blocks directly through the online demo to see them in action without needing to download anything.

## Get Started by Downloading the App from GitHub

### Step 1: Download and Open the App in Visual Studio Code

Download the app from the GitHub [link](https://github.com/syncfusion/essential-ui-kit-for-angular), and then open the same in Visual Studio Code to start working with it.

![Launching the downloaded app](images/launching-the-downloaded-app.png)

### Step 2: Open a New Terminal

In Visual Studio Code, go to the **Terminal** menu and select **New Terminal** to open the integrated terminal.

![Opening a new terminal](images/opening-a-new-terminal.png)

### Step 3: Install Dependencies and Run the App
Run the following commands one after the other in the terminal:

1. **Install dependencies**  
   Run the command below to install all necessary packages related to the blocks, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, and the sample browser.

    ```bash
    npm install 
    ```

    This will download and install all the dependencies listed in the **package.json** file.

2. **Serve the App Locally**  
    Once the dependencies are installed, you can run the app locally by starting the Angular local development server. To do so, run the following command.
    
    ```bash
    ng serve 
    ```

    This command will start the local development server, and you'll see an output in the terminal indicating the app is running. Typically, it will display a local host URL like this:

    ![Local development server running](images/local-development-server-running.png)

    To view the app in your browser, simply **Ctrl + Click** (or **Cmd + Click** on macOS) on the local host URL displayed in the terminal. This will open the app in your default browser, allowing you to interact with the blocks.

### Step 4: License Key Requirement

The blocks include several Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components that require an active license key for proper display and usage. To activate the license, refer to the topics below:

#### How to Obtain the License Key
To obtain the license key, visit the following page: [Syncfusion<sup style="font-size:70%">&reg;</sup> License](https://ej2.syncfusion.com/angular/documentation/licensing/overview).

#### How to Register the License Key in the App
Once you have your license key, add it to the **src/main.ts** file for seamless browsing and usage of the blocks.

```typescript
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Your-License-Key');
```
Replace **'Your-License-Key'** with the actual license key you received from Syncfusion<sup style="font-size:70%">&reg;</sup>.

By adding the license key, you ensure that the blocks are fully functional and free from licensing issues.

## Get Started by Viewing the Online Demo

If you prefer a quick demo instead of downloading the app, you can explore the blocks directly through the online demo. Simply visit the official [Essential<sup style="font-size:70%">&reg;</sup> UI Kit for Angular](https://ej2.syncfusion.com/angular/essential-ui-kit/#/blocks) website to interact with the blocks.
