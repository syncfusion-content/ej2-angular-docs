---
layout: post
title: Convert project in Angular Visual studio integration component | Syncfusion
description: Learn here all about Convert project in Syncfusion Angular Visual studio integration component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Convert project 
documentation: ug
domainurl: ##DomainURL##
---

# Convert project in Angular Visual studio integration 

Syncfusion<sup style="font-size:70%">&reg;</sup> provides a Visual Studio add-in for converting an existing Angular application into a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular web application.

> The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Project conversion support is available from v17.3.0.9.


The steps below help you to convert the Angular application to Syncfusion<sup style="font-size:70%">&reg;</sup> Angular application through the Visual Studio:

1. Open your existing Angular application or create a new Angular application

2. To open the Syncfusion<sup style="font-size:70%">&reg;</sup> Project Conversion Wizard, follow one of the options below:

    **Option 1:**

    Choose **Extensions → Syncfusion → Essential Studio for ASP.NET Core → Convert Project…** from the Visual Studio menu.

    ![convert project](../images/convert-angular-menu.png)

    > In Visual Studio 2017, the **Syncfusion** menu may appear directly in the Visual Studio menu.

    **Option 2:**

    Right-click the Angular application in Solution Explorer, select **Syncfusion Web**, and choose **Convert to Syncfusion Angular application...**

    ![convert to syncfusion](../images/Convert-angular-context.png)

3. The **Syncfusion Angular Project Conversion** window will appear. You can choose the required version of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular version, Assets from, and Themes to convert the application.

    ![project-conversion-wizard](../images/angular-conversion-window.PNG)

    > The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular versions are loaded from published Syncfusion<sup style="font-size:70%">&reg;</sup> Angular NPM package versions and it requires the internet connectivity.

    The following configurations are available in the Project Conversion Wizard:

    **Assets From:** Load the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 assets to Angular Project, from either NPM, CDN, or Installed Location.

    > Installed location option will be available only when the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 setup has been installed.

    **Choose the Theme:** Choose the required theme.

4. Check the **“Enable a backup before converting”** checkbox if you want to take the project backup and choose the location.

5. Once the conversion process completed, will get the success message window.

    ![project-success](../images/angular-convertion-confirmation.png)

    If you enabled project backup before converting, the original project is saved at the specified backup path:

    ![BackupLocation](../images/BackupLocation.png)

6. The required Syncfusion<sup style="font-size:70%">&reg;</sup>  Angular NPM packages (with the selected versions), scripts, and styles are added to the application during conversion.