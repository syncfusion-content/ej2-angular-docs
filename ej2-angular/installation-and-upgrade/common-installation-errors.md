---
layout: post
title: Common installation errors in Angular Common control | Syncfusion
description: Learn here all about Common installation errors in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Common Installation Errors

This article describes the most common installation errors, as well as the causes and solutions to those errors.

* Unlocking the license installer using the trial key
* License has expired
* Unable to find a valid license or trial
* Unable to install because of another installation
* Unable to install due to controlled folder access

## Unlocking the License Installer using the Trial Key

**Error Message:** Sorry, the provided unlock key is a trial unlock key and cannot be used to unlock the licensed version of our Essential Studio for JavaScript installer.

![license download](images/error1.png)

**Reason** <br /> You are attempting to use a Trial unlock key to unlock the licensed installer.

**Suggested solution** <br /> Only a licensed unlock key can unlock a licensed installer. So, to unlock the Licensed installer, use the Licensed unlock key. To generate the licensed unlock key, refer to [this](https://www.syncfusion.com/kb/2326/how-to-generate-syncfusion-setup-unlock-key-from-syncfusion-support-account) article.

## License has Expired

**Error Message:** Your license for Syncfusion Essential Studio for JavaScript – EJ2 has been expired since {date}. Please renew your subscription and try again.

***Online Installer***

![license download](images/error2.png)

**Reason** <br /> This error message will appear if your license has expired.

**Suggested solution** <br /> You can choose from the options below.

1. You can renew your subscription [here](https://www.syncfusion.com/account/my-renewals).

2. You can get a new license [here](https://www.syncfusion.com/sales/products).

3. You can reach out to our sales team by emailing sales@syncfusion.com.

4. You can also extend the 30-day trial period after your trial license has expired.

## Unable to find a valid license or trial

**Error Message:** Sorry, we are unable to find a valid license or trial for Essential Studio for JavaScript – EJ2 under your account.

***Offline installer***

![license download](images/error3.png)

***Online installer***

![license download](images/error4.png)

**Reason** <br /> The following are possible causes of this error:

The following are possible causes of this error:

* When your trial period expired
* When you don’t have a license or an active trial
* You are not the license holder of your license
* Your account administrator has not yet assigned you a license.

**Suggested solution** <br />

1. You can get a new license [here](https://www.syncfusion.com/sales/products).

2. Contact your account administrator.

3. Send an email to clientrelations@syncfusion.com to request a license.

4. You can reach out to our sales team by emailing sales@syncfusion.com.

## Unable to Install because of Another Installation

**Error Message:** Another installation is in progress. You cannot start this installation without completing all other currently active installations. Click cancel to end this installer or retry to attempt after currently active installation completed to install again.

![license download](images/error5.png)

**Reason** <br /> You are trying to install when another installation is already running in your machine.

**Suggested solution** <br /> Open and kill the msiexec process in the task manager and then continue to install Syncfusion. If the problem is still present, restart the computer and try Syncfusion installer.

1. Open the Windows Task Manager.

2. Browse the Details tab.

3. Select the msiexec.exe and click **End task**.

![license download](images/error6.png)

## Unable to Install due to Controlled Folder Access

***Offline***

**Error Message:** Controlled folder access seems to be enabled in your machine. The provided install or samples location (e.g., Public Documents) is protected by the controlled folder access settings.

![license download](images/error7.png)

***Online***

**Error Message:** Controlled folder access seems to be enabled in your machine. The provided install, samples, or download location (e.g., Public Documents) is protected by the controlled folder access settings.

![license download](images/error8.png)

**Reason** <br /> You have enabled controlled folder access settings on your computer.

***Suggested solution***

**Suggestion 1:** <br />
1. We will ship our demos in the public documents folder by default.
2. You have controlled folder access enabled on your machine, so our demos cannot be installed in the documents folder. If you need to install our demos in the Documents folder, follow the steps in this [link](https://support.microsoft.com/en-us/windows/allow-an-app-to-access-controlled-folders-b5b6627a-b008-2ca2-7931-7e51e912b034) and disable the controlled folder access.
3. You can enable this option after the installing our Syncfusion setup.

**Suggestion 2:** <br />
1. If you do not want to disable controlled folder access, you can install our demos in another directory.
