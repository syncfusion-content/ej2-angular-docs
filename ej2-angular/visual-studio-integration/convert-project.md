---
layout: post
title: Convert project in Angular Visual studio integration component | Syncfusion
description: Learn here all about Convert project in Syncfusion Angular Visual studio integration component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Convert project 
documentation: ug
domainurl: ##DomainURL##
---

# Convert Project

Syncfusion<sup style="font-size:70%">&reg;</sup> provides a Visual Studio add-in that converts an existing Angular application into a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular web application.

> The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Project conversion is available from v17.3.0.9.

Follow these steps to convert an Angular application to a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular application using Visual Studio:

1. Open your existing Angular application or create a new Angular application.

2. To launch the Syncfusion<sup style="font-size:70%">&reg;</sup> Project Conversion Wizard, use one of the following options:

    **Option 1:**

    Choose **Extensions → Syncfusion → Essential Studio for ASP.NET Core → Convert Project…** from the Visual Studio menu.

    ![convert project](images/convert-angular-menu.png)

    > In Visual Studio 2017, the **Syncfusion** menu may appear directly in the Visual Studio menu.

    **Option 2:**

    Right-click the **Angular Application** in Solution Explorer, select **Syncfusion Web**, and choose **Convert to Syncfusion Angular application...**

    ![convert to syncfusion](images/Convert-angular-context.png)

3. The **Syncfusion Angular Project Conversion** window appears. Choose the required Syncfusion<sup style="font-size:70%">&reg;</sup> Angular version, the assets source, and the theme for the conversion.

    ![project-conversion-wizard](images/angular-conversion-window.PNG)

    > The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular versions are loaded from published Syncfusion<sup style="font-size:70%">&reg;</sup> Angular NPM packages and require internet connectivity.

    The following configurations are available in the Project Conversion Wizard.

    **Assets From:** Load the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 assets into the Angular project from either NPM, CDN, or an Installed Location.

    > The Installed Location option is available only when the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 setup has been installed.

    **Choose the Theme:** Select the required theme.

4. Check the **Enable a backup before converting** checkbox if you want the wizard to create a project backup, and choose the backup location.

5. After the conversion process completes, a success confirmation window appears.

    ![project-success](images/angular-convertion-confirmation.png)

    If you enabled project backup before converting, the original project is saved at the specified backup path, as shown below after the conversion completes.

    ![BackupLocation](images/BackupLocation.png)

6. The required Syncfusion<sup style="font-size:70%">&reg;</sup> Angular NPM packages, scripts, and selected styles are added to the application.