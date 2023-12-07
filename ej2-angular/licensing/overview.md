---
layout: post
title: Overview in Angular Licensing component | Syncfusion
description: Learn here all about Overview in Syncfusion Angular Licensing component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Overview 
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Licensing Overview

We have introduced license key validation for Essential JS2 platforms from the 2022 Volume 1 release. This licensing key validation will enforce the developer to register the valid licensing key in an application while referring to any of the latest JavaScript packages, either from npm or CDN or build.

License key can be obtained from the [My Account >> License and downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion website. To obtain a license key, you will need to have an active trial or license or community license.

Before using any JavaScript controls, you must register the obtained license key in the application code. Otherwise you will get license validation error message in application as shown in below

> This application was built using a trial version of Syncfusion Essential Studio. Please include a valid license to permanently remove this license validation message. You can also obtain a free 30 day evaluation license to temporarily remove this message during the evaluation period. Please refer to this [help topic](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-errors#license-key-not-registered) for more information.

## Difference between unlock key and license key

Please note that this license key is different from the installer unlock key that you might have used in the past and needs to be separately generated from Syncfusion website.

* **Unlock Key** - Syncfusion Unlock Key is used to unlock the Syncfusion installers alone.

* **License Key** - Syncfusion License Key is a string that needs to be registered in your script to avoid licensing warning.

> Refer to [this](https://www.syncfusion.com/kb/8950/difference-between-the-unlock-key-and-licensing-key) KB article to know more about difference between the Syncfusion Unlock Key and the Syncfusion License Key.

## Registering Syncfusion license keys in Build server

| Source of Syncfusion assemblies | Details | License Key needs to be registered? | Where to get license key from |
| ------------- | ------------- | ------------- | ------------- |
| **NuGet package** | If the Syncfusion assemblies used in Build Server were from the Syncfusion NuGet packages, then no need to install any Syncfusion installer. We can directly use the required Syncfusion NuGet packages at [nuget.org](http://nuget.org/). <br><br>But, if using NuGet packages from the [nuget.org](https://www.nuget.org/packages?q=syncfusion), then we should register the Syncfusion license key in the application.| Yes | Use any developer license to [generate](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation) keys for Build Environments as well. |
| **Trial installer** | If the Syncfusion assemblies used in Build Server were from Trial Installer, we should register the license key in the application for the corresponding version and platforms, to avoid trial license warning. | Yes | Use any developer trial license to [generate](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation) keys for Build Environments as well. |
| **Licensed installer** |If the Syncfusion assemblies used in Build Server were from Licensed Installer, then there is no need to register the license keys.<br><br>You can [download](https://ej2.syncfusion.com/angular/documentation/installation-and-upgrade/download#download-the-license-version) and [install](https://ej2.syncfusion.com/angular/documentation/installation-and-upgrade/installation-using-web-installer) the licensed version of our installer. | No | Not applicable |

## See Also

* [How to Generate Syncfusion EJ2-Angular License Key?](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation/)
* [How to Register Syncfusion License Key in EJ2-Angular Application?](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration/)
* [Licensing FAQ](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot/)
