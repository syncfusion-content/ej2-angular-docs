---
layout: post
title: Build your first Angular app with our blocks | Syncfusion
description: Learn all about building your first Angular app using our blocks from the Essential Angular UI Kit in Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Build your first Angular app with our blocks 
documentation: ug
domainurl: ##DomainURL##
---

# Build your first Angular app with Syncfusion UI Kit Blocks

This tutorial guides you through building an Angular application using Syncfusion<sup style="font-size:70%">&reg;</sup>'s UI Kit blocks. It covers setting up a new Angular project, choosing between Tailwind CSS or Bootstrap 5.3 themes, and integrating a sign-in block. The goal is to help developers quickly build responsive, modern web apps with a variety of prebuilt blocks and minimal effort.

## Use Case Example

Before starting, review a real-world example: building a **Customer Support Portal** using the Angular UI Kit. This video tutorial demonstrates the process step by step.

{% youtube "https://www.youtube.com/watch?v=EWGZJ9T7K40" %}  

After watching the use case, proceed to set up an Angular app and integrate Syncfusion<sup style="font-size:70%">&reg;</sup> UI Kit blocks.

## Create a new Angular app

To create a new Angular app, see the official [Angular setup guide](https://angular.dev/installation#instructions). In this example, a new app named **my-angular-app** is used to demonstrate the process of adding a simple sign-in block.

![New Angular App](images/new-angular-app.png)

## Theme Selection: Tailwind CSS or Bootstrap 5.3

Once the Angular app (**my-angular-app**) is created, open it in Visual Studio Code. Before proceeding, open **src/app/app.component.html** and remove the existing template HTML, keeping only the `<router-outlet />` if present.

Next, select a theme for your application—**Tailwind CSS** or **Bootstrap 5.3**—and follow the corresponding configuration instructions.

### Tailwind CSS Configuration

Follow these steps to configure Tailwind CSS:

1. In **src/index.html**, set the HTML class for light or dark mode:

    - **Light mode:**

    ```html
    <html lang="en" class="light">
    ```

    - **Dark mode:**

    ```html
    <html lang="en" class="dark">
    ```

2. In the same file, add Tailwind scripts in the `<head>` section to generate the required CSS and define primary colors:

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
    > Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components uses **Indigo** for light mode and **Cyan** for dark mode. Adjust the primary color as needed for a consistent appearance.


3. Add the theme-specific Syncfusion<sup style="font-size:70%">&reg;</sup> stylesheet in the `<head>` tag:

   - **Light mode:**

     ```html
     <link href="https://cdn.syncfusion.com/ej2/27.1.48/tailwind.css" rel="stylesheet" />
     ```

   - **Dark mode:**

     ```html
     <link href="https://cdn.syncfusion.com/ej2/27.1.48/tailwind-dark.css" rel="stylesheet" />
     ```

4. (Optional) To use font icons for Tailwind CSS, include:

    ```html
    <link href="https://cdn.syncfusion.com/ej2/angular/ui-kit/font-icons/tailwind-icons.css" rel="stylesheet" />
    ```

You can refer to the consolidated screenshot below for more details.

![Tailwind CSS configuration](images/tailwind-configuration.png)

### Bootstrap 5.3 Configuration

For Bootstrap 5.3 theme, follow these steps:

1. In **src/index.html**, set the `data-bs-theme` attribute for light or dark mode:

   - **Light mode:**

    ```html
    <html lang="en" data-bs-theme="light">
    ```

   - **Dark mode:**

    ```html
    <html lang="en" data-bs-theme="dark">
    ```

2. Add the Bootstrap 5.3 stylesheet in the `<head>` tag:

     ```html
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     ```

3. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Bootstrap 5.3 stylesheet:

   - **Light mode:**

     ```html
     <link href="https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3.css" rel="stylesheet">
     ```

   - **Dark mode:**

     ```html
     <link href="https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3-dark.css" rel="stylesheet" />
     ```

4. (Optional) To use font icons for Bootstrap 5.3, include:

    ```html
    <link href="https://cdn.syncfusion.com/ej2/angular/ui-kit/font-icons/bootstrap5.3-icons.css" rel="stylesheet" />
    ```

You can refer to the consolidated screenshot below for more details.

![Bootstrap 5.3 configuration](images/bootstrap-5.3-configuration.png)

## Steps to explore and copy block code snippets

With the desired theme configured, you can now copy and add sign-in block code to the Angular app.

### Steps to explore and copy block code snippets from the online demo

1. Open the [online demo](https://ej2.syncfusion.com/angular/essential-ui-kit/#/blocks), navigate to the "Authentication" category, and select the "Sign In" block.

    ![Navigate to the sign-in block demo](images/navigate-to-the-sign-in-block-demo.png)

2. Choose a theme, then go to the "Code" tab, and copy the HTML code.

    ![Choose Tailwind CSS or Bootstrap theme](images/choose-tailwind-or-bootstrap-theme.png)
    ![Copy HTML code snippet to clipboard](images/copy-HTML-code-snippet-to-clipboard.png)

3. Paste the HTML into **src/app/app.component.html**.

4. If CSS is provided, copy it into **src/app/app.component.css**.

### Steps to explore and copy block code snippets from the GitHub source

1. On [downloading](https://github.com/syncfusion/essential-ui-kit-for-angular) and opening the GitHub source in Visual Studio Code, navigate to the following folder: **src -> blocks-section**.

    ![Downloaded GitHub app in Visual Studio Code](images/downloaded-github-app-in-visual-studio-code.png)

2. Navigate to **src/blocks-section/signin/signin-1**. Copy the HTML, CSS, and TS code for the sign-in block.

    ![View the sign-in block demo files](images/view-the-sign-in-block-demo-files.png)

> **Note:**
> 
> 1. In the HTML, the **Tailwind CSS** design code is placed within the "if" block, while the **Bootstrap 5.3** design code is placed in the "else" block.
> 2. Ignore the code within the "SB Code - Start" and "SB Code - End" comments, as it is intended solely for sample browser purposes.

## Installing and Configuring Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

After adding the block code, ensure all required Syncfusion component packages are installed. For the sign-in block, common components include textbox, checkbox, and button. Add packages like `@syncfusion/ej2-angular-buttons` and `@syncfusion/ej2-angular-inputs` to your **package.json**.

![Adding required packages for Syncfusion components](images/adding-required-packages-for-syncfusion-components.png)

Install these packages from the terminal:

```bash
npm install
```

![Install Syncfusion component packages](images/install-syncfusion-component-packages.png)

Finally, go to the [online demo](https://ej2.syncfusion.com/angular/essential-ui-kit/#/blocks) or the [GitHub repository](https://github.com/syncfusion/essential-ui-kit-for-angular) and copy the required **TypeScript** code into your app. This typically includes the import module to run Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components and any basic code required for the component to function.

![Import Syncfusion component module in TypeScript](images/import-syncfusion-component-module-in-typescript.png)

> Ignore code within "SB Code - Start" and "SB Code - End" comments—this code is provided only for the sample browser.

## Downloading and Using Assets

To use the example images shown in block designs, download the **assets** folder from the [GitHub repository](https://github.com/syncfusion/essential-ui-kit-for-angular/tree/master/ui-blocks/src). Place it under **src** in your application and ensure any image URLs in copied code are updated as needed.

## Running the Application

Once setup is complete—HTML, TypeScript, CSS, and optional assets—you can build and run the app:

```bash
ng serve
```

The Angular development server provides a localhost URL. Open this URL in your browser to view and interact with the sign-in block.

![Build and launch the app](images/build-and-launch-the-app.png)

It will shown the output below:

![View the app in the browser using the localhost URL](images/view-the-app-in-the-browser-using-the-localhost-URL.png)
