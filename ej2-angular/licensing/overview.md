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

We have introduced license key validation for Essential<sup style="font-size:70%">&reg;</sup> JS2 platforms from the 2022 Volume 1 release. This licensing key validation will enforce the developer to register the valid licensing key in an application while referring to any of the latest JavaScript packages, either from npm or CDN or build.

License key can be obtained from the [My Account >> License and downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website. To obtain a license key, you will need to have an active trial or license or community license.

Before using any JavaScript controls, you must register the obtained license key in the application code. Otherwise you will get license validation error message in application as shown in below

> This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. Please include a valid license to permanently remove this license validation message. You can also obtain a free 30 day evaluation license to temporarily remove this message during the evaluation period. Please refer to this [help topic](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-errors#license-key-not-registered) for more information.

## Privacy Assurance

The Syncfusion<sup style="font-size:70%">&reg;</sup> license does not store any user-specific information or details related to the user's company. The license key provided contains solely the encrypted values necessary for Syncfusion<sup style="font-size:70%">&reg;</sup> component validation. This ensures the privacy and security of user data while enabling effective validation of the components.

It's crucial to emphasize that the encrypted license key undergoes validation entirely on the client side, eliminating the need for network connections or HTTP requests. This approach enhances privacy, as Syncfusion<sup style="font-size:70%">&reg;</sup> neither accesses personal data nor collects information about users or devices. Whether working on a local development machine or within a CI/CD system, the license key validation process remains consistent, offering a secure and efficient experience without any data transmission to Syncfusion<sup style="font-size:70%">&reg;</sup> servers or third-party entities.

## Difference between unlock key and license key

Please note that this license key is different from the installer unlock key that you might have used in the past and needs to be separately generated from Syncfusion<sup style="font-size:70%">&reg;</sup> website.

* **Unlock Key** - Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key is used to unlock the Syncfusion<sup style="font-size:70%">&reg;</sup> installers alone.

* **License Key** - Syncfusion<sup style="font-size:70%">&reg;</sup> License Key is a string that needs to be registered in your script to avoid licensing warning.

> Refer to [this](https://www.syncfusion.com/kb/8950/difference-between-the-unlock-key-and-licensing-key) KB article to know more about difference between the Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key and the Syncfusion<sup style="font-size:70%">&reg;</sup> License Key.

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
