---
layout: post
title: Create project in Angular Visual studio code integration component | Syncfusion
description: Learn here all about Create project in Syncfusion Angular Visual studio code integration component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Create project 
documentation: ug
domainurl: ##DomainURL##
---

# Create project in Angular 

## Create project

Syncfusion<sup style="font-size:70%">&reg;</sup> provides project templates for **Visual Studio Code** to streamline the creation of Syncfusion<sup style="font-size:70%">&reg;</sup> Web applications. The Syncfusion<sup style="font-size:70%">&reg;</sup> Web Project template generates applications using a selected framework—React, Angular, or Vue. It automatically installs the required Syncfusion<sup style="font-size:70%">&reg;</sup> NPM packages and includes code samples for components such as Grid, Chart, and Scheduler, along with preset styling to enhance development efficiency.

   > The Syncfusion<sup style="font-size:70%">&reg;</sup> Visual Studio Code project template provides support for Web project templates from v18.3.0.47.

Follow the steps below to create a **Syncfusion Web Application** using **Visual Studio Code:**

1. In Visual Studio Code, open the Command Palette by pressing **Ctrl+Shift+P**. In the palette, search for "Syncfusion" to view available templates.

    ![CreateProjectPalette](images/CreateProjectPalette.png)

2. Select **Syncfusion Web Template Studio: Launch** and press Enter. The Template Studio wizard appears for configuring your Syncfusion<sup style="font-size:70%">&reg;</sup> Web application. Specify the Project Name and Path, then select one of the supported frameworks (React, Angular, or Vue) for your new application.

    ![ProjectLocation](images/ProjectLocationName.png)

3. Click **Next** or navigate to the **Framework** tab. Choose your preferred framework:
   * React
   * Angular
   * Vue

      ![Framework](images/frameworktype.png)

    If you choose the Vue framework, the **Select Vue Version** option will appear in the **Project Details** section. You can create the Vue application using either the Vue 3 or Vue 2 versions.

    ![VueVersions](images/vue-versions.png)

4. Click either **Next** or the **Configuration** tab, and the Configuration section will be loaded. Choose the preferred theme and then click **Create**. The project will be created.

    ![Themes](images/Themes.png)

5. The Syncfusion<sup style="font-size:70%">&reg;</sup> Web Application is initialized with all required Syncfusion NPM packages, styles, and render code for the chosen Syncfusion<sup style="font-size:70%">&reg;</sup> components.

    ![NPM Packages](images/npm-install.png)

    ![Styles](images/styles.png)

    ![Components](images/components.png)

## Run the application

1. Click on **F5** or navigate to **Run>Start debugging**

    ![Run](images/run.png)

2. After compilation process completed, open the local host link in browser to see the output.

    ![Output](images/output.png)