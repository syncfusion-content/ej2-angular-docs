---
layout: post
title: Build your first Angular app with our blocks | Syncfusion
description: Learn all about building your first Angular app using our blocks from the Essential Angular UI Kit in Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Build your first Angular app with our blocks 
documentation: ug
domainurl: ##DomainURL##
---

# Build your first Angular app with our blocks

## Create a new Angular app
To create a new Angular app, please refer to the official Angular setup guide [here](https://v17.angular.io/guide/setup-local) to get started. In this example, I have created a new Angular app named **my-angular-app** and will walk you through the step-by-step process of adding a simple sign-in block.

![New Angular App](images/new-angular-app.png)

## Setting up Tailwind or Bootstrap 5.3 theme in the app

After creating the new Angular app named **my-angular-app**, open it in Visual Studio Code (which we'll be using throughout this walkthrough). Once the app is open, before proceeding further, navigate to the **src -> app -> app.component.html** file and remove the template HTML code. Remember, only remove the template HTML code and not the `<router-outlet />` code. 

The next step is to choose a theme, either **Tailwind** or **Bootstrap 5.3**, in either light or dark mode, and configure the app accordingly.

### Tailwind configuration

If you choose **Tailwind** theme, follow these steps to configure it.

1. In **src -> index.html** file, add the following code for light mode (`class="light"`) and dark mode (`class="dark"`) in the `<html>` tag.

    - For **light mode**:

    ```html
    <html lang="en" class="light">
    ```

    - For **dark mode**:

    ```html
    <html lang="en" class="dark">
    ```

2. In **src -> index.html** file, add the following scripts in the `<head>` tag.

    ```html
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              // NOTE: In this demo, different shades of "Indigo" are used as primary colors.
              primary: {
                "50": "#eef2ff",
                "100": "#e0e7ff",
                "200": "#c7d2fe",
                "300": "#a5b4fc",
                "400": "#818cf8",
                "500": "#6366f1",
                "600": "#4f46e5",
                "700": "#4338ca",
                "800": "#3730a3",
                "900": "#312e81",
                "950": "#1e1b4b"
              }
            }
          }
        }
      }
    </script>
    ```
    > The Syncfusion Angular components uses **Indigo** for light mode and **Cyan** for dark mode. So, please change the primary color accordingly to maintain a uniform appearance.


3. In **src -> index.html** file, add the style oriented CDN link for Syncfusion Angular components in the `<head>` tag.

   - For **light mode**:

     ```html
     <link href="https://cdn.syncfusion.com/ej2/27.1.48/tailwind.css" rel="stylesheet" />
     ```

   - For **dark mode**:

     ```html
     <link href="https://cdn.syncfusion.com/ej2/27.1.48/tailwind-dark.css" rel="stylesheet" />
     ```

4. **OPTIONAL**: If you wish to use our font icons prepared for **Tailwind**, you can include the following CDN link:

    ```html
    <link href="https://cdn.syncfusion.com/ej2/angular/ui-kit/font-icons/tailwind-icons.css" rel="stylesheet" />
    ```
     
You can refer to the consolidated screenshot below for more details.

![Tailwind configuration](images/tailwind-configuration.png)

Now that the **Tailwind** theme is configured for either light or dark mode of your choice, the app is ready for the next set of processes.

### Bootstrap 5.3 configuration

If you choose **Bootstrap 5.3** theme, follow these steps to configure it.

1. In **src -> index.html** file, add the following code for light mode (`data-bs-theme="light"`) and dark mode (`data-bs-theme="dark"`) in the `<html>` tag.

    - For **light mode**:

    ```html
    <html lang="en" data-bs-theme="light">
    ```

    - For **dark mode**:

    ```html
    <html lang="en" data-bs-theme="dark">
    ```

2. In **src -> index.html** file, add the style oriented CDN link for **Bootstrap 5.3** theme in the `<head>` tag.

     ```html
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     ```

3. In **src -> index.html** file, add the style oriented CDN link for Syncfusion Angular components in the `<head>` tag.

   - For **light mode**:

     ```html
     <link href="https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3.css" rel="stylesheet">
     ```

   - For **dark mode**:

     ```html
     <link href="https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3-dark.css" rel="stylesheet" />
     ```

4. **OPTIONAL**: If you wish to use our font icons prepared for **Bootstrap 5.3**, you can include the following CDN link:

    ```html
    <link href="https://cdn.syncfusion.com/ej2/angular/ui-kit/font-icons/bootstrap5.3-icons.css" rel="stylesheet" />
    ```

You can refer to the consolidated screenshot below for more details.

![Bootstrap 5.3 configuration](images/bootstrap-5.3-configuration.png)

Now that the **Bootstrap 5.3** theme is configured for either light or dark mode of your choice, the app is ready for the next set of processes.

## Steps to explore and copy block code snippets

Now that **my-angular-app** is set up with the desired theme configuration, the next step is to copy and paste the pre-built simple sign-in block code into the Angular app for quick development. Here are a couple of ways to achieve this.

### Steps to explore and copy block code snippets from the online demo

1. In the [online demo](https://ej2.syncfusion.com/angular/essential-ui-kit/#/blocks), navigate to the "Authentication" category and select the "Sign In" block. This will direct you to the appropriate demo page.

    ![Navigate to the sign-in block demo](images/navigate-to-the-sign-in-block-demo.png)

2. On the demo page, go to the first demo, which showcases a simple sign-in block. Choose the desired theme, then switch from the "Preview" tab to the "Code" tab.

    ![Choose Tailwind or Bootstrap theme](images/choose-tailwind-or-bootstrap-theme.png)

3. In the "Code" tab, copy the HTML code using the "Copy to clipboard" option and paste it into the **src -> app -> app.component.html** file.

    ![Copy HTML code snippet to clipboard](images/copy-HTML-code-snippet-to-clipboard.png)

4. If CSS is provided, copy the CSS code and paste it into the **src -> app -> app.component.css** file; otherwise, ignore it.

### Steps to explore and copy block code snippets from the GitHub source

1. On [downloading](https://github.com/syncfusion/essential-ui-kit-for-angular) and opening the GitHub source in Visual Studio Code, navigate to the following folder: **src -> blocks-section**.

    ![Downloaded GitHub app in Visual Studio Code](images/downloaded-github-app-in-visual-studio-code.png)

2. Inside, you'll find a list of folders, each corresponding to a specific block. Open the "signin" block folder, where you'll see the demo arranged sequentially.

3. Go to the first folder, **src/blocks-section/signin/signin-1**, where you'll find the HTML, CSS, and TS files of the simple sign-in block. You can copy the code directly from these files.

    ![View the sign-in block demo files](images/view-the-sign-in-block-demo-files.png)

> **Note:**
> 
> 1. In the HTML, the **Tailwind** design code is placed within the "if" block, while the **Bootstrap 5.3** design code is placed in the "else" block.
> 2. Ignore the code within the "SB Code - Start" and "SB Code - End" comments, as it is intended solely for sample browser purposes.

## Steps to install and configure Syncfusion Angular components

While copying and pasting the HTML code, you'll notice that Syncfusion Angular components are used. To incorporate them into **my-angular-app**, install the necessary packages and add the corresponding modules to the **src -> app -> app.component.ts** file for the app to run.

In the simple sign-in block, components such as textbox, checkbox and button are used. After copying and pasting the code into the HTML file, open the **package.json** file and add the required packages: `@syncfusion/ej2-angular-buttons` and `@syncfusion/ej2-angular-inputs`. For more details about other Syncfusion Angular component packages, refer to this [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular).

![Adding required packages for Syncfusion components](images/adding-required-packages-for-syncfusion-components.png)

Once the necessary packages are added, run the `npm install` command via the terminal to install those packages in the **node_modules** folder.

![Install Syncfusion component packages](images/install-syncfusion-component-packages.png)

Finally, go to the [online demo](https://ej2.syncfusion.com/angular/essential-ui-kit/#/blocks) or the [GitHub repository](https://github.com/syncfusion/essential-ui-kit-for-angular) and copy the required **TypeScript** code into your app. This typically includes the import module to run Syncfusion Angular components and any basic code required for the component to function.

![Import Syncfusion component module in TypeScript](images/import-syncfusion-component-module-in-typescript.png)

> Ignore the code within the "SB Code - Start" and "SB Code - End" comments, as it is intended solely for sample browser purposes.

## Steps to download and add assets to the app

If you want to view and experience the images used in our design, you can download the **assets** folder from the following [GitHub repository](https://github.com/syncfusion/essential-ui-kit-for-angular/tree/master/ui-blocks/src), place it inside the **src** folder of **my-angular-app**, and modify the image URLs in the HTML if necessary.

## Steps to run the app

Now that everything is set up in **my-angular-app** — the HTML, TS, CSS (if applicable), and assets (optional) — you are ready to build and launch the app. Type the `ng serve` command in the terminal, and you will see a localhost URL provided by the Angular development server.

![Build and launch the app](images/build-and-launch-the-app.png)

To view the app in your browser, simply **Ctrl + Click** (or **Cmd + Click** on macOS) on the localhost URL displayed in the terminal. This will open the app in your default browser, allowing you to view and experience the simple sign-in block.

![View the app in the browser using the localhost URL](images/view-the-app-in-the-browser-using-the-localhost-URL.png)
