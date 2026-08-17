---
layout: post
title: Common Installation Errors in Syncfusion Essential Studio | Syncfusion
description: Learn about the most common installation errors in Syncfusion Essential Studio, including their causes and suggested solutions.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Common installation errors

This guide covers the most common installation errors encountered when installing Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio, along with their causes and suggested solutions. These errors apply to the web installer, offline installer.

## Unlocking the license installer using the trial key

**Error Message:** Sorry, the provided unlock key is a trial unlock key and cannot be used to unlock the licensed version of our Essential<sup style="font-size:70%">&reg;</sup> Studio for JavaScript installer.

![Trial unlock key error](images/error1.png)

**Applies to:** Licensed (web and offline) installer on Windows.

**Reason** <br /> You are attempting to use a trial unlock key to unlock the licensed installer.

**Suggested solution** <br />

1. Only a licensed unlock key can unlock a licensed installer. Use the licensed unlock key when prompted by the installer.
2. To generate the licensed unlock key, refer to [this](https://www.syncfusion.com/kb/2326/how-to-generate-syncfusion-setup-unlock-key-from-syncfusion-support-account) article.
3. After obtaining the key, re-run the installer and enter it on the **Unlock Key** screen.

## License has expired

**Error Message:** Your license for Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> Studio for JavaScript – EJ2 has been expired since {date}. Please renew your subscription and try again.

**Online Installer**

![License expired online installer](images/error2.png)

**Applies to:** Online installer on Windows.

**Reason** <br /> This error message will appear if your license has expired.

**Suggested solution** <br /> You can choose from the options below.

1. Renew your subscription through the [renewals page](https://www.syncfusion.com/account/my-renewals).
2. Purchase a new license from the [Syncfusion sales page](https://www.syncfusion.com/sales/products).
3. Contact the sales team at sales@syncfusion.com.
4. Extend the 30-day trial period after your trial license has expired. For steps to extend the trial, see the [trial extension guide](https://www.syncfusion.com/sales/communitylicense).
5. After renewing or purchasing, re-run the installer and enter the new unlock key to apply the license.

## Unable to find a valid license or trial

**Error Message:** Sorry, we are unable to find a valid license or trial for Essential<sup style="font-size:70%">&reg;</sup> Studio for JavaScript – EJ2 under your account.

**Offline Installer**

![No valid license offline installer](images/error3.png)

**Online Installer**

![No valid license online installer](images/error4.png)

**Applies to:** Both online and offline installers on Windows (Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio, EJ2 platform).

**Reason** <br /> The following are possible causes of this error:

* Your trial period has expired.
* You do not have a license or an active trial.
* You are not the license holder for the license.
* Your account administrator has not yet assigned you a license.

**Suggested solution** <br /> You can choose from the options below.

1. Purchase a new license from the [Syncfusion sales page](https://www.syncfusion.com/sales/products).
2. Contact your account administrator to verify that a license is assigned to your account.
3. Send an email to clientrelations@syncfusion.com to request a license.
4. Contact the sales team at sales@syncfusion.com for assistance.

## Unable to install because another installation is in progress

**Error Message:** Another installation is in progress. You cannot start this installation without completing all other currently active installations. Click Cancel to end this installer, or click Retry after the current installation is complete to try again.

![Another installation in progress](images/error5.png)

**Applies to:** Windows installers (online and offline) using MSI-based setup.

**Reason** <br /> You are trying to install when another installation is already running on your machine.

**Suggested solution** <br /> End the active `msiexec.exe` process through Windows Task Manager, then run the Syncfusion<sup style="font-size:70%">&reg;</sup> installer again. If the problem persists, restart the computer and retry.

1. Open Windows Task Manager.
2. Go to the **Details** tab.
3. Select **msiexec.exe**, and then click **End task**.

![Task Manager Details tab - msiexec.exe](images/error6.png)

4. If the issue persists, restart the computer and run the Syncfusion<sup style="font-size:70%">&reg;</sup> installer again.

## Unable to install due to controlled folder access

**Offline Installer**

**Error Message:** Controlled folder access seems to be enabled in your machine. The provided install or samples location (e.g., Public Documents) is protected by the controlled folder access settings.

![Controlled folder access - offline installer](images/error7.png)

**Online Installer**

**Error Message:** Controlled folder access seems to be enabled in your machine. The provided install, samples, or download location (e.g., Public Documents) is protected by the controlled folder access settings.

![Controlled folder access - online installer](images/error8.png)

**Applies to:** Windows installers (online and offline) when installing into protected folders such as Public Documents.

**Reason** <br /> You have enabled controlled folder access on your computer, which prevents the installer from writing to protected directories.

**Suggested solution** <br /> Choose one of the following options.

**Option 1: Allow access or disable Controlled folder access**

1. By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> demos are installed in the Public Documents folder.
2. With Controlled folder access enabled, the installer cannot write to the Documents folder. If you need to install the demos there, follow the steps in this [Microsoft support article](https://support.microsoft.com/en-us/windows/allow-an-app-to-access-controlled-folders-b5b6627a-b008-2ca2-7931-7e51e912b034) to either allow the installer access or disable Controlled folder access.
3. You can re-enable Controlled folder access after installing the Syncfusion<sup style="font-size:70%">&reg;</sup> setup.

**Option 2: Install to a different directory**

1. If you do not want to disable Controlled folder access, run the installer and choose a non-protected location (for example, `C:\Syncfusion\`) on the install location screen for both the Syncfusion<sup style="font-size:70%">&reg;</sup> setup and the samples.