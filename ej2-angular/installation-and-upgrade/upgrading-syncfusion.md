---
layout: post
title: Upgrading Syncfusion Essential Studio | Syncfusion
description: Learn how to upgrade Syncfusion Essential JS 2 to the latest version, including Volume and Service Pack releases, and how to move from a trial to a licensed install.
platform: ej2-angular
control: Upgrading Syncfusion
documentation: ug
domainurl: ##DomainURL##
---

# Upgrading Syncfusion<sup style="font-size:70%">&reg;</sup>

Syncfusion<sup style="font-size:70%">&reg;</sup> releases new versions, called **Volume releases**, approximately every three months. These releases introduce new features and updates. For each Volume release, a subsequent **Service Pack** release is provided to address major bug fixes.

You can upgrade to the latest Syncfusion<sup style="font-size:70%">&reg;</sup> version directly from any previously installed version.

**Prerequisites**

* An existing installation of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 (any version) for the platform you are upgrading.
* For the desktop installer / Control Panel flow: a Windows machine with administrator privileges.
* For project (npm) upgrades: Node.js and npm, and an existing Angular / React / Vue / JavaScript project that uses Syncfusion<sup style="font-size:70%">&reg;</sup> packages.
* A valid Syncfusion<sup style="font-size:70%">&reg;</sup> account, or a Syncfusion<sup style="font-size:70%">&reg;</sup> unlock key for the target version.

## Upgrading to the Latest Version

The latest version of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript - EJ2 can be accessed and installed by selecting the **Latest Version: {Version}** link at the top of the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript - EJ2 Control Panel.

![Upgrade to latest version from Control Panel](images/upgrade3.png)

Alternatively, upgrade to the latest version by downloading and installing the required products from the [Syncfusion account downloads page](https://www.syncfusion.com/account/downloads). You do not need to uninstall any previously installed versions before upgrading.

**Volume and Service Pack** releases function independently. You can install a Service Pack release that contains major bug fixes without installing the corresponding Volume release. The steps below cover both flows.

### Upgrade Using the Syncfusion Control Panel (Recommended)

1. Open the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript - EJ2 Control Panel** from the Windows Start menu (search for "Syncfusion").
2. Click the **Latest Version: {Version}** link at the top of the control panel. The latest installer is downloaded and launched.
3. Follow the steps in [Installation Using the Web Installer](installation-using-web-installer.md) or [Installation Using the Offline Installer](installation-using-offline-installer.md) to complete the upgrade.
4. After the install completes, the Control Panel automatically reflects the new version.

### Upgrade Using the Offline / Web Installer

1. Sign in to your Syncfusion<sup style="font-size:70%">&reg;</sup> account and download the latest installer from the [Syncfusion account downloads page](https://www.syncfusion.com/account/downloads).
2. Run the installer. The installer detects your existing installation and offers to upgrade.
3. When prompted, you can also choose to uninstall previous versions (from 18.1 onward) during the same install run.
4. After the install completes, verify the new version in the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript - EJ2 Control Panel**.

### Upgrade Project (npm) Packages

If you consume Syncfusion<sup style="font-size:70%">&reg;</sup> through npm, upgrade the package version in your project's `package.json` and re-run `npm install`. See [Installation](installation.md) for the npm install steps.

```bash
npm update @syncfusion/ej2-angular-grids @syncfusion/ej2-angular-charts
```

After updating packages, rebuild and re-test your application. For projects that use the `ngcc` distribution (Angular versions below 12), append the `-ngcc` tag to the version.

## Upgrade from Trial Version to Licensed Version

To upgrade from a trial version to a licensed version, uninstall the trial version and install the fully licensed installer from the [License and Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion website.

> **Note:** License key registration is not required for JavaScript when you are consuming Syncfusion<sup style="font-size:70%">&reg;</sup> through script (`.js`) and CSS files. If you use npm packages, you must register the license key in the project; see the [License Key Registration](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration) documentation.

## Troubleshooting

| Issue | Possible Cause | Suggested Fix |
| --- | --- | --- |
| The "Latest Version" link is disabled in the Control Panel. | No active internet connection, or the account does not own a license. | Verify your internet connection and confirm the signed-in account owns a Syncfusion<sup style="font-size:70%">&reg;</sup> license. |
| Upgrade install fails midway. | Controlled folder access or another MSI installation is blocking the install. | See [Common Installation Errors](https://ej2.syncfusion.com/angular/documentation/installation-and-upgrade/common-installation-errors) for "Another installation is in progress" and "Controlled folder access" fixes. |
| `npm update` does not move the package to the new version. | The installed version is pinned in `package.json` (no `^` or `~` prefix). | Edit `package.json` to update the version, or run `npm install <package>@<version> --save`. |
| Old version still listed in the Control Panel after upgrade. | The previous version was not selected for uninstall during the install. | Re-run the installer and choose **Uninstall** for the old version, or remove it from **Apps & features** in Windows Settings. |