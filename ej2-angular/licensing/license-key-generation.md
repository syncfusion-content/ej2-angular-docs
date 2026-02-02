---
layout: post
title: License key generation in Angular Licensing component | Syncfusion
description: Learn here all about License key generation in Syncfusion Angular Licensing component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: License key generation 
documentation: ug
domainurl: ##DomainURL##
---

# Generate Syncfusion<sup>®</sup> EJ2-Angular License Key

Syncfusion<sup style="font-size:70%">®</sup> license keys can be generated from the [License & Downloads](https://syncfusion.com/account/downloads) or [Trial & Downloads](https://www.syncfusion.com/account/manage-trials/downloads) sections of the Syncfusion<sup style="font-size:70%">&reg;</sup> website.

![Get Community License Key](images/get-community-license-key.png)

> * Syncfusion<sup style="font-size:70%">&reg;</sup> license keys are **version and platform specific**. Refer to the [KB](https://www.syncfusion.com/kb/8976/how-to-generate-license-key-for-licensed-products) to generate the license key for the required version and platform.
> * Refer to the [KB](https://www.syncfusion.com/kb/8951/which-version-syncfusion-license-key-should-i-use-in-my-application) to know which version of the Syncfusion<sup style="font-size:70%">&reg;</sup> license key should be used in the application.

## Claim a License Key

Syncfusion<sup style="font-size:70%">&reg;</sup> License keys can also be generated from the **"Claim License Key"** page based on the trial or valid license associated with your Syncfusion<sup style="font-size:70%">&reg;</sup> account.

You can get the license key, based on license availability in your Syncfusion<sup style="font-size:70%">&reg;</sup> account.

### Active License

If your Syncfusion<sup style="font-size:70%">&reg;</sup> account has a valid active license, you can generate a full license key valid for the licensed version and all covered features.

![Active License](images/active-license.png)

### Active Trial

If your account has a valid trial license, you can generate a trial license key that includes the trial expiry date. Trial keys have limited validity (typically 30 days).

![Active Trial](images/active-trial.png)

### Expired License

If you have a Syncfusion<sup style="font-size:70%">&reg;</sup> account with an expired license, your license subscription must be renewed in order to obtain a valid license key for the latest Essential Studio<sup style="font-size:70%">&reg;</sup> version. Meanwhile, a temporary license key with a five day validity period will be generated.

![Expired License](images/expired-license.png)

### No Trial, No License, or Expired Trial

If your account is not associated with any trial or license, or if your trial has expired, you can attempt to claim a new trial or valid license from the Claim License Key page.

![No Trial or No License](images/no-active-trial-or-license.png)

## Licensing Update for Essential Studio (v31.1 and later)

Starting with Essential Studio version 31.1.17 (2025 Volume 3 release), Syncfusion has transitioned from a platform-based to an edition-based licensing model. This change simplifies license management by aligning keys with specific editions rather than individual platforms.

The editions are:

- Essential Studio UI Edition
- Essential Studio Document SDK
- Essential Studio PDF Viewer SDK
- Essential Studio DOCX Editor SDK
- Essential Studio Spreadsheet Editor SDK
- Essential Studio Enterprise Edition (includes all of the above)

## Key Changes in the Licensing Model

Effective from the 2025 Volume 3 release (v31.1.17), the licensing model has been updated as follows:

- **Edition-Based License Keys**: License keys are now generated per edition (e.g., UI Edition, Document SDK) instead of per platform (e.g., ASP.NET Core, Blazor). This minimizes the need for multiple platform-specific keys.

- **Enterprise Edition Coverage**:  A single Enterprise Edition license key unlocks all editions and SDKs. This key is available to customers with an Enterprise Edition license or those who purchased or registered before v31.1.17, by selecting all options during key generation.

- **Unchanged Registration Process**: The method for registering license keys within your application remains the same. See the [License Key Registration Guide](https://ej2.syncfusion.com/documentation/licensing/license-key-registration) for instructions.

- **Recommendation for Existing Customers**: Users with licenses from before v31.1.17 are advised to select all five editions (UI Component Suite, Document SDK, DOCX Editor SDK, PDF Viewer SDK, Spreadsheet Editor SDK) when generating a key for v31.1.17 or higher to ensure compatibility with applications using controls or libraries from multiple editions.

## How to Generate License Keys (v31.1.17 or higher)

Follow these steps for the edition-based model:

**Step 1:** Go to the [Downloads and Keys](https://www.syncfusion.com/account/downloads) page.

**Step 2:** Click the **Get License Key** link.

![Get License Key](images/get-License-Key.png)

**Step 3:** In the dialog that appears, select version **31.x.x or higher** from the version dropdown.

**Step 4:** Select the required edition(s) or SDK(s) from the drop-down menu based on your application’s component usage.

- Customers who purchased or registered before v31.1.17 will see all available editions and SDKs.
- New customers purchasing the Essential Studio Enterprise Edition will also see all available editions and SDKs.
- New customers purchasing specific editions or SDKs will see only those in the drop-down menu.

To generate an Enterprise Edition key, select all available options:

- UI Edition
- Document SDK
- DOCX Editor SDK
- PDF Viewer SDK
- Spreadsheet Editor SDK

![License Key Generation for SDK](images/license-Key-SDKV1.png)

>**Note:** Customers who purchased a license before v31.x.x are strongly advised to select all five editions and SDKs when generating a key for v31.x.x or higher to ensure continued functionality, as your application might use resources from multiple editions.

**Step 5:** Click **Get License Key**. This generates the Enterprise Edition license key, which covers all SDKs and UI components.

![Generate License Key](images/generate-License-Key.png)

## How to Generate License Keys (v30.x.x or earlier)

For versions 30.x.x and earlier, follow the platform-based licensing model:

**Step 1:** Go to the [Downloads and Keys](https://www.syncfusion.com/account/downloads) page.

**Step 2:** Click the **Get License Key** link.

**Step 3:** In the pop-up dialog, select the required version (v30.x.x or earlier).

**Step 4:**  From the drop-down menu, select the platform(s) used in your application. You can select multiple platforms.

* Select **Angular** for EJ2-Angular applications
* Select multiple platforms if your application uses components across different platforms
- Note: When selecting an older version, the menu will display platforms (e.g., JavaScript, Angular) instead of the new editions.

![License Key Platform](images/license-Key-Platform.png)

**Step 5:** Click **Get License Key** to generate the platform-specific license key.

## See Also

* [How to Register Syncfusion<sup style="font-size:70%">&reg;</sup> License Key in the Application?](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration)
* [Syncfusion Licensing Overview](https://ej2.syncfusion.com/angular/documentation/licensing/overview)
* [Licensing FAQ and Troubleshooting](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot)