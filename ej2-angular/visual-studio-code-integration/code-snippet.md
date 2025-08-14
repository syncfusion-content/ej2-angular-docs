---
layout: post
title: Code snippet in Angular Visual studio code integration component | Syncfusion
description: Learn here all about Code snippet in Syncfusion Angular Visual studio code integration component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Code snippet 
documentation: ug
domainurl: ##DomainURL##
---

# Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component in the Angular application

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular code snippet utility for Visual Studio Code provides snippets for adding a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component with various features in the html code editor file of the Angular Application.

   > The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular code snippet is available from Essential Studio<sup style="font-size:70%">&reg;</sup> 2021 Vol 3 (`v19.3.0.43`).

## Add a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component

Follow these steps to use the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular code snippet utility in your Angular application:

1. Open Visual Studio Code and load an existing Angular application or create a new one.

2. Open the html file that you need and place the cursor in required place where you want to add Syncfusion<sup style="font-size:70%">&reg;</sup> component.

3. You can find the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component with the various features by typing the **ejs** word in the format shown below.

    ```bash
    ejs-<Syncfusion component name>-<Syncfusion component feature>

    For example: ejs-grid-grouping
    ```

4. Select the Syncfusion<sup style="font-size:70%">&reg;</sup> component from the suggestion list and press **Enter** or **Tab**. The component code will be inserted into the HTML file.

    ![Code Snippet](images/codesnippet.gif)

5. After the code snippet is added, use the **Tab** key to navigate through editable fields and provide the required values to render the component with data. A Syncfusion<sup style="font-size:70%">&reg;</sup> help link is included at the top of the snippet for more details about the component features.

    ![Help](images/Help.png)

## Configure the Angular application with Syncfusion

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular snippet only add the code snippet alone in the html file. You need to configure the Angular application with Syncfusion<sup style="font-size:70%">&reg;</sup> by adding the required Syncfusion<sup style="font-size:70%">&reg;</sup> Angular NPM, component modules, and themes by manually. To configure, refer the steps below:

1. Open the Angular **package.json** file and manually add the necessary Syncfusion<sup style="font-size:70%">&reg;</sup> Angular npm package(s). Then, navigate to the project directory in the command prompt and run `npm install` to restore the Syncfusion<sup style="font-size:70%">&reg;</sup> packages.

    ![NPM Package](images/NPM.png)

2. Update your Angular module file by importing and adding the relevant Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component modules to your application module.

    ![Module](images/Module.png)

3. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular [theme](https://ej2.syncfusion.com/documentation/appearance/theme/) entry in the **style.css** file.

    ![Themes](images/Themes-Snippet.png)