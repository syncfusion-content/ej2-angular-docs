---
layout: post
title: Installation using offline installer in Angular Installation and upgrade component | Syncfusion
description: Learn here all about Installation using offline installer in Syncfusion Angular Installation and upgrade component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Installation using offline installer 
documentation: ug
domainurl: ##DomainURL##
---

# Installation using offline installer 

You can refer to the [Download](../installation-and-upgrade/download/) section to learn how to get the JavaScript – EJ2 trial or licensed installer.

The frameworks listed below are supported in this installer.

* JavaScript
* Angular
* React
* Vue
* JavaScript (ES5)

## Installing with UI

The steps below show how to install the Essential Studio JavaScript – EJ2 installer.

1. Open the Syncfusion JavaScript – EJ2 offline installer file from downloaded location by double-clicking it. The Installer Wizard automatically opens and extracts the package

    ![license download](images/offline1.png)

    >Note: The Installer wizard extracts the syncfusionejs2 (version).exe dialog, which displays the package’s unzip operation.

2. To unlock the Syncfusion offline installer, you have two options:

    * Login To Install
    * Use Unlock Key

    **Login To Install**
    You must enter your Syncfusion email address and password. If you don’t already have a Syncfusion account, you can sign up for one by clicking **“Create an account”**. If you have forgotten your password, click on **“Forgot Password”** to create a new one. Once you’ve entered your Syncfusion email and password, click Next.

    ![license download](images/offline2.png)

    **Use Unlock Key**
    Unlock keys are used to unlock the Syncfusion offline installer, and they are platform and version specific. You should use either Syncfusion licensed or trial Unlock key to unlock Syncfusion JavaScript – EJ2 installer.

    The trial unlock key is only valid for 30 days, and the installer will not accept an expired trial key.

    To learn how to generate an unlock key for both trial and licensed products, see [this](https://www.syncfusion.com/kb/2326) Knowledge Base article.

    ![license download](images/offline3.png)

3. After reading the License Terms and Privacy Policy, check the **“I agree to the License Terms and Privacy Policy”** check box. Click the Next button.

4. Change the install and sample locations here. You can also change the Additional settings. Click Next/Install to install with the default settings.

    ![license download](images/offline4.png)

    **Additional Settings**

    * Select the **Install Demos** check box to install Syncfusion samples, or leave the check box unchecked, if you do not want to install Syncfusion samples
    * Select the **Configure Syncfusion Extensions controls in Visual Studio** checkbox to configure the Syncfusion Extensions in Visual Studio or clear this check box when you do not want to configure the Syncfusion Extensions in Visual Studio.
    * Check the **Create Desktop Shortcut** checkbox to add a desktop shortcut for Syncfusion Control Panel
    * Check the **Create Start Menu Shortcut** checkbox to add a shortcut to the start menu for Syncfusion Control Panel

5. If any previous versions of the current product is installed, the **Uninstall** Previous Version(s) wizard will be opened. Select Uninstall checkbox to uninstall the previous versions and then click the Proceed button.

    ![license download](images/offline5.png)

    >Note: From the 2021 Volume 1 release, Syncfusion has added the option to uninstall previous versions from 18.1 while installing the new version.
    >
    >Note: If any version is selected to uninstall, a confirmation screen will appear; if continue is selected, the Progress screen will display the uninstall and install progress, respectively. If none of the versions are chosen to be uninstalled, only the installation progress will be displayed.

    **Confirmation Alert**

    ![license download](images/offline6.png)

    **Uninstall Progress:**

    ![license download](images/offline7.png)

    **Install Progress**

    ![license download](images/offline8.png)

    >Note: The Completed screen is displayed once the JavaScript – EJ2 product is installed. If any version is selected to uninstall, The completed screen will display both install and uninstall status.

    ![license download](images/offline9.png)

6. After installing, click the Launch Control Panel link to open the Syncfusion Control Panel.

7. Click the Finish button. Your system has been installed with the Syncfusion Essential Studio JavaScript – EJ2 product.

## Installing in Silent Mode

The Syncfusion Essential Studio JavaScript – EJ2 Installer supports installation and uninstallation via the command line.

### Command Line Installation

To install through the Command Line in Silent mode, follow the steps below.

1. Run the Syncfusion JavaScript – EJ2 installer by double-clicking it. The Installer Wizard automatically opens and extracts the package.
2. The file syncfusionejs2_(version).exe file will be extracted into the Temp directory.
3. Run %temp%. The Temp folder will be opened. The syncfusionejs2_(version).exe file will be located in one of the folders.
4. Copy the extracted syncfusionejs2_(version).exe file in local drive.
5. Exit the Wizard.
6. Run Command Prompt in administrator mode and enter the following arguments.

    Arguments: “installer file path\SyncfusionEssentialStudio(product)_(version).exe” /Install silent /UNLOCKKEY:“(product unlock key)” [/log “{Log file path}”] [/InstallPath:{Location to install}] [/InstallSamples:{true/false}] [/InstallAssemblies:{true/false}] [/UninstallExistAssemblies:{true/false}] [/InstallToolbox:{true/false}]

    >Note: [..] – Arguments inside the square brackets are optional.

    **Example:** “D:/Temp/syncfusionejs2x.x.x.x.exe” /Install silent /UNLOCKKEY:“product unlock key” /log “C:/Temp/EssentialStudioPlatform.log” /InstallPath:C:/Syncfusion/x.x.x.x /InstallSamples:true /InstallAssemblies:true /UninstallExistAssemblies:true /InstallToolbox:true

7. Essential Studio for JavaScript (Essential JS2) is installed.

    >Note: x.x.x.x should be replaced with the Essential Studio version and the Product Unlock Key needs to be replaced with the Unlock Key for that version.

### Command Line Uninstallation

Syncfusion Essential JavaScript – EJ2 can be uninstalled silently using the Command Line.

1. Run the Syncfusion JavaScript – EJ2 installer by double-clicking it. The Installer Wizard automatically opens and extracts the package.

2. The syncfusionejs2_(version).exe file will be extracted into the Temp directory.

3. Run %temp%. The Temp folder will be opened. The syncfusionejs2_(version).exe file will be located in one of the folders.

4. Copy the extracted syncfusionejs2_(version).exe file in local drive.

5. Exit the Wizard.

6. Run Command Prompt in administrator mode and enter the following arguments.

    Arguments: “Copied installer file path\ syncfusionejs2_(version).exe” /uninstall silent
    Example: “D:\Temp\syncfusionejs2_x.x.x.x.exe” /uninstall silent

7. Essential Studio for JavaScript (Essential JS2) is uninstalled.