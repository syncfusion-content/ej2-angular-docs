---
layout: post
title: Upgrade project in Angular Visual studio integration component | Syncfusion
description: Learn here all about Upgrade project in Syncfusion Angular Visual studio integration component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Upgrade project 
documentation: ug
domainurl: ##DomainURL##
---

# Upgrade project in Angular Visual studio integration 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular migration add-in for Visual Studio enables you to upgrade an existing Syncfusion<sup style="font-size:70%">&reg;</sup> Angular application from one version of Essential Studio<sup style="font-size:70%">&reg;</sup> to another. This tool helps reduce manual steps during the upgrade process.

> The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Project migration are available from v17.3.0.9.

Follow these steps to upgrade the Syncfusion<sup style="font-size:70%">&reg;</sup> version in a Syncfusion Angular application using Visual Studio:

1. Open the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular application in Visual Studio.

2. To launch the Migration Wizard, choose one of the following options:

    **Option 1:**

    Choose **Extensions → Syncfusion → Essential Studio for ASP.NET Core → Migrate Project…** from the Visual Studio menu.

    ![menu](../images/migrate-menu.png)

    > In Visual Studio 2017, you can see the **Syncfusion** menu directly in the Visual Studio menu.

    **Option 2:**
    Right-click the **Application** in **Solution Explorer**, select **Syncfusion Web**, and choose **Migrate the Syncfusion ASP.NET Core Project to Another version…**.

    ![Context menu](../images/migrate-context-menu.png)
3. The **Syncfusion Project Migration** window will appear. Choose the required version of **Syncfusion ANGULAR** to migrate to.


    > The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular versions are loaded from published Syncfusion<sup style="font-size:70%">&reg;</sup> Angular NPM packages and require internet connectivity.

    ![Migration Window](../images/migration-window.PNG)

    **Assets From:** Load the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 assets into the Angular project from either NPM, CDN, or the Installed Location.

    > The Installed Location option is available only when the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 setup has been installed.

4. Check the **“Enable a backup before migrating** checkbox if you want to take the project backup and choose the location.

5. Once the migration process completed, will get the success message window.

    ![project Success](../images/Confirmation-window.PNG)

    if you enabled project backup before migrating, the old project was saved in the specified backup path location, as shown below once the migration process completed

    ![BackupLocation](../images/BackupLocation.png)

6. The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular NPM packages, and styles are updated to the selected version in the project.
