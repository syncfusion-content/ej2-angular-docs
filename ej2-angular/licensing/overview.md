---
layout: post
title: Overview in Angular Licensing component | Syncfusion
description: Learn here all about Overview in Syncfusion Angular Licensing component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Overview 
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> Licensing Overview

Syncfusion<sup style="font-size:70%">&reg;</sup> introduced license key validation for Essential<sup style="font-size:70%">&reg;</sup> JS2 platforms with the 2022 Volume 1 release. This requirement ensures that a valid license key must be registered in any application using the latest JavaScript packages—whether obtained via npm, CDN, or build sources.

Generate a license key from the [License & Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion® website. An active trial, commercial, or community license is required to obtain a license key.

Before using any JavaScript controls, you must register the obtained license key in the application code. Otherwise you will get license validation error message in application as shown in below

> This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. Please include a valid license to permanently remove this license validation message. You can also obtain a free 30 day evaluation license to temporarily remove this message during the evaluation period. For more details, see the [license errors documentation](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-errors#license-key-not-registered).

## Privacy Assurance

The Syncfusion<sup style="font-size:70%">&reg;</sup> license does not store any user-specific information or details related to the user's company. The license key provided contains solely the encrypted values necessary for Syncfusion<sup style="font-size:70%">&reg;</sup> component validation. This ensures the privacy and security of user data while enabling effective validation of the components.

It's crucial to emphasize that the encrypted license key undergoes validation entirely on the client side, eliminating the need for network connections or HTTP requests. This approach enhances privacy, as Syncfusion<sup style="font-size:70%">&reg;</sup> neither accesses personal data nor collects information about users or devices. Whether working on a local development machine or within a CI/CD system, the license key validation process remains consistent, offering a secure and efficient experience without any data transmission to Syncfusion<sup style="font-size:70%">&reg;</sup> servers or third-party entities.

## Difference between unlock key and license key

Please note that this license key is different from the installer unlock key that you might have used in the past and needs to be separately generated from Syncfusion<sup style="font-size:70%">&reg;</sup> website.

* **Unlock Key** - Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key is used to unlock the Syncfusion<sup style="font-size:70%">&reg;</sup> installers alone.

* **License Key** - Syncfusion<sup style="font-size:70%">&reg;</sup> License Key is a string that needs to be registered in your script to avoid licensing warning.

> For further information, refer to the [unlock key vs. license key knowledge base article](https://www.syncfusion.com/kb/8950/difference-between-the-unlock-key-and-licensing-key).

## Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license keys in Build server

| Source of Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies | Details | License Key needs to be registered? | Where to get license key from |
| ------------- | ------------- | ------------- | ------------- |
| **NuGet package** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in Build Server were from the Syncfusion<sup style="font-size:70%">&reg;</sup> NuGet packages, then no need to install any Syncfusion<sup style="font-size:70%">&reg;</sup> installer. We can directly use the required Syncfusion<sup style="font-size:70%">&reg;</sup> NuGet packages at [nuget.org](http://nuget.org/). <br><br>But, if using NuGet packages from the [nuget.org](https://www.nuget.org/packages?q=syncfusion), then we should register the Syncfusion<sup style="font-size:70%">&reg;</sup> license key in the application.| Yes | Use any developer license to [generate](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation) keys for Build Environments as well. |
| **Trial installer** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in Build Server were from Trial Installer, we should register the license key in the application for the corresponding version and platforms, to avoid trial license warning. | Yes | Use any developer trial license to [generate](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation) keys for Build Environments as well. |
| **Licensed installer** |If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in Build Server were from Licensed Installer, then there is no need to register the license keys.<br><br>You can [download](https://ej2.syncfusion.com/angular/documentation/installation-and-upgrade/download#download-the-license-version) and [install](https://ej2.syncfusion.com/angular/documentation/installation-and-upgrade/installation-using-web-installer) the licensed version of our installer. | No | Not applicable |

> The license verification process implemented by Syncfusion<sup style="font-size:70%">&reg;</sup> has been designed to seamlessly integrate with your app's functionality without any adverse impact on its performance. Although keys are permitted to be included in the application source code/bundle, it is imperative to refrain from actively promoting, publishing, or distributing license keys. Any attempt to disseminate license key information with the intention of circumventing licensing requirements is strongly discouraged.

## See Also

* [How to Generate Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2-Angular License Key?](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation/)
* [How to Register Syncfusion<sup style="font-size:70%">&reg;</sup> License Key in EJ2-Angular Application?](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration/)
* [Licensing FAQ](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot/)
