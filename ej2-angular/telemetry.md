---
layout: post
title: Telemetry in Angular component | Syncfusion
description: Learn here all about Telemetry in Syncfusion Angular component, including telemetry collection, usage tracking, configuration, and troubleshooting.
platform: ej2-angular
control: Telemetry
documentation: ug
domainurl: ##DomainURL##
---

# Telemetry in Syncfusion® Angular Components

Syncfusion<sup style="font-size:70%">&reg;</sup> Telemetry collects anonymous usage information to help improve product quality, usability, and feature planning for Essential<sup style="font-size:70%">&reg;</sup> JS 2 (EJ2) components.

Telemetry is enabled by default in development environments. However, you can disable it at any time if required.

> Note: Telemetry is automatically disabled in production environments. No data is collected from deployed applications or end users.

## Why telemetry is collected

Telemetry helps Syncfusion understand how EJ2 components are used during development. This information is used to:

* Understand feature adoption and usage trends.
* Identify commonly used components and packages.
* Prioritize future product planning and improvements.
* Detect compatibility trends across browsers, operating systems, and development environments.

## Telemetry data collected during development

Syncfusion collects only a limited set of anonymous development-time usage data. No user-generated content is collected.

The following information may be collected in development mode:

<!-- markdownlint-disable MD033 -->

<table>
	<tr>
		<th>Data</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Component name</td>
		<td>The Syncfusion EJ2 component being used.</td>
	</tr>
	<tr>
		<td>Feature Name</td>
		<td>Syncfusion feature being used.</td>
	</tr>
	<tr>
		<td>SDK name</td>
		<td>The Syncfusion EJ2 SDK associated with the component.</td>
	</tr>
	<tr>
		<td>SDK version</td>
		<td>The installed Syncfusion EJ2 version.</td>
	</tr>
	<tr>
		<td>Framework or platform</td>
		<td>The development platform or framework, such as JavaScript, TypeScript, Angular, React, or Vue.</td>
	</tr>
		<td>Framework Version</td>
		<td>The version of the detected framework or platform.</td>
	</tr>
	<tr>
		<td>Operating system</td>
		<td>The operating system on which the application is running.</td>
	</tr>
	<tr>
		<td>System architecture</td>
		<td>Architecture information, such as x64, x86, ARM, or ARM64.</td>
	</tr>
	<tr>
		<td>Session ID</td>
		<td>Unique session identifier (hashed value).</td>
	</tr>
	<tr>
		<td>Machine Name</td>
		<td>Hashed value of browser information, so it cannot be traced back.</td>
	</tr>
	<tr>
		<td>Event name</td>
		<td>Anonymous product usage events related to EJ2 component initialization or usage.</td>
	</tr>
</table>

> Note: Personal information, application data, source code, business data, authentication credentials, and license keys are not collected.

## Where telemetry applies in EJ2

Telemetry applies only to the usage of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components during development.

* It is limited to developer environments.
* It focuses only on product and feature usage.
* It does not apply to production applications.
* It does not collect information from end users.

Telemetry is designed to improve the developer experience without affecting production applications.

## Telemetry in development environments only

Telemetry is designed to run only in development environments.

* Enabled by default during development.
* Automatically disabled in production builds.
* No telemetry data is collected from deployed applications.

This ensures telemetry does not affect application users or live production systems.

## Data that is not collected

Syncfusion does not collect:

* Personal information such as name, email address, customer ID, company name, or account details.
* Source code.
* Documents or uploaded files.
* Application business data.
* User-generated content.
* Business data
* Prompts or AI conversations
* Authentication credentials.
* License keys.
* Any information that directly identifies an individual.

## Disable telemetry in EJ2

If you do not want telemetry to be collected during development, disable it before initializing any Syncfusion EJ2 components.


### Disable telemetry using ES modules

If you are using npm packages and ES module imports, call `Telemetry` from `@syncfusion/ej2-base` before creating any EJ2 component.

```ts

import { Component, OnInit } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'
import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Telemetry } from '@syncfusion/ej2-base';

Telemetry.disable();

@Component({
    imports: [
        GridModule
    ],
    providers: [PageService,
        SortService,
        FilterService,
        GroupService],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.html'
})
export class App implements OnInit {
    public data?: object[];
    public pageSettings?: PageSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageSize: 6 };
    }
}
```

> Note: Call `Telemetry.disable();` before creating or using any Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component.

## FAQs

### Does telemetry affect production applications?

No. Telemetry is automatically disabled in production environments and does not collect information from deployed applications or end users.

### Does telemetry collect personal or application data?

No. Telemetry collects only limited anonymous usage information related to EJ2 components in development environments.

### When should `Telemetry.disable()` be called?

Call `Telemetry.disable()` at application startup, before creating any Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component instance.

### Why do I see a console error in offline mode?

When running an application without internet connectivity, the telemetry module may attempt to send anonymous usage data to the telemetry service. If the network is unavailable, the browser may report a network-related error in the Console and Network tabs.

**Reason**

This can occur in the following situations:

* The application is running without internet access.
* Telemetry is enabled and attempts to transmit usage data.
* The telemetry endpoint cannot be reached due to network, DNS, or connectivity issues.
* The browser reports failed network requests such as `ERR_NAME_NOT_RESOLVED` or `ERR_INTERNET_DISCONNECTED`.

> **Note:** These messages are generated by the browser when a network request fails and do not impact Syncfusion component functionality.

**Solution**

To prevent this issue, disable telemetry at application startup by calling `Telemetry.disable()` before creating any Syncfusion EJ2 component. This stops telemetry data collection entirely during development.
