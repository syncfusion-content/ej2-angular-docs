---
layout: post
title: Getting started with Angular Schedule component | Syncfusion
description:  Checkout and learn about Getting started with Angular Schedule component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Schedule
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Schedule component

This section explains how to create [**Angular Scheduler**](https://www.syncfusion.com/angular-components/angular-scheduler) and configure its features in an Angular environment.

> **Ready to streamline your Angular development?** Discover the full potential of Angular components with AngularAI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, AngularCodeStudio and more. [Explore AngularAI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

For a quick start with the Angular Schedule component using CLI and Schematics, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=dE_9t5HJ8rc" %}

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Angular | 12 and above |
| Node.js | 14.0.0 or above, Recommended: Latest Version |

### Angular supported versions

| Angular Version | Minimum Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Scheduler Version |
|-----------------|-----------------------------------------------|
|[Angular v20](https://www.syncfusion.com/blogs/post/whats-new-in-angular-20)| 29.2.8|
|[Angular v19](https://blog.angular.dev/meet-angular-v19-7b29dfd05b84/)| 26.1.35 |
|[Angular v18](https://blog.angular.dev/angular-v18-is-now-available-e79d5ac0affe/) | 25.2.3 |
|[Angular v17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b/)| 23.2.4 |
|[Angular v16](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d/)| 21.1.39 |
|[Angular v15](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8/) | 20.4.38 |
|[Angular v14](https://blog.angular.io/angular-v14-is-now-available-391a6db736af/)| 20.2.36 |
|[Angular v13](https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296/) | 19.4.38 and above |
|[Angular v12](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49/)| 19.3.43 |

### Browser Support

| Browser | Supported Versions |
|:--------|:-------------------|
| Google Chrome, including Android & iOS  | Latest 2 versions |
| Mozilla Firefox	 | Latest version |
| Microsoft Edge	    | Latest 2 versions |
| Apple Safari, including iOS	  | Latest 2 versions |

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to set up your Angular applications. To install the Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular application

Create a new Angular application using the following Angular CLI command.

```bash
ng new my-app
```

This command will prompt you for a few settings for the new project, such as which stylesheet format to use.

![Stylesheet setup prompt](images/schedule-angular-setup1.png)

By default, it will create a CSS-based application.

Then the CLI also displays an additional prompt whether to enable Server Side Rendering (SSR), and Static Site Generation (SSG) as shown below:

![SSR SST setup prompt](images/schedule-angular-setup2.png)

For this setup, when prompted for the Server-side rendering (SSR) option, select **No** for a standard Angular application.

Then the CLI displays another prompt related to AI tooling support, as shown below:

![AI setup prompt](images/schedule-angular-setup3.png)

Any preferred option can be selected based on the development workflow or project needs.

Next, navigate to the project folder:

```bash
cd my-app
```

## Installing Schedule package

Angular packages are distributed on npm as `@syncfusion` scoped packages. To use the Schedule component in your Angular application, install the [@syncfusion/ej2-angular-schedule](https://www.npmjs.com/package/@syncfusion/ej2-angular-schedule/) package from npm.

```bash
npm install @syncfusion/ej2-angular-schedule --save
```

## Adding CSS reference

Themes for Syncfusion® Schedule components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). Available themes include Bootstrap, Fabric, Material, Tailwind 3, and others. For the complete list and comparison, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/style.css** file:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";

{% endhighlight %}
{% endtabs %}

## Initialize the Schedule component and configure module injection

This section explains how to set up the Syncfusion Angular Schedule component in your application by registering the necessary services (such as Day, Week, WorkWeek, Month, and Agenda) in the providers array, and rendering the Scheduler component in the template.

### Setting up the component

Replace the contents of `src/app/app.ts` with the following code:

`[src/app/app.ts]`

```typescript
import { Component } from '@angular/core';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
	imports: [
		ScheduleModule
	],
	standalone: true,
	selector: 'app-root',
	providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
	// Specifies the template string for the Schedule component
	template: `<ejs-schedule></ejs-schedule>`
})
export class App { }
```

### Running the development server

Run the following command in the terminal to start the development server. This compiles the project, launches a local server, and allows you to view changes in real-time during development.

```
ng serve
```

> **Note:** If `ng serve` was already running, restart it to apply the CSS theme changes and component imports.

### Verification

Open your browser and navigate to `http://localhost:4200/`. You should see a blank calendar with the current week displayed and a Tailwind 3 theme applied.

## Populating appointments

To populate the Schedule with appointments, you can use either a local JSON array or a remote data service. Assign the data to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings#datasource) property, which is part of the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings) configuration.

The `StartTime` and `EndTime` fields are mandatory for each appointment. The following example uses default fields like `Id`, `Subject`, `StartTime`, and `EndTime`.

`[src/app/app.ts]`

```typescript
import { Component } from '@angular/core';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
	imports: [
		ScheduleModule
	],
	standalone: true,
	selector: 'app-root',
	providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
	// specifies the template string for the Schedule component
	template: `<ejs-schedule [eventSettings]='eventSettings'></ejs-schedule>`
})
export class App {
	public data: object[] = [{
		Id: 1,
		Subject: 'Meeting',
		StartTime: new Date(new Date().setHours(9, 0, 0)),
		EndTime: new Date(new Date().setHours(10, 0, 0))
	}];
	public eventSettings: EventSettingsModel = {
		dataSource: this.data
	};
}
```

## Setting the date

By default, the Schedule component displays the current system date. To set a specific date, use the [`selectedDate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#selecteddate) property.

`[src/app/app.ts]`

```typescript
import { Component } from '@angular/core';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
	imports: [
		ScheduleModule
	],
	standalone: true,
	selector: 'app-root',
	providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
	// specifies the template string for the Schedule component
	template: `<ejs-schedule [selectedDate]='selectedDate'></ejs-schedule>`
})
export class App {
	public selectedDate: Date = new Date(2026, 4, 18);
}
```

## Setting the view

The default view of the Schedule is `Week`. To change the current view, set the [`currentView`](https://ej2.syncfusion.com/angular/documentation/api/schedule#currentview) property to one of the following default view names:

*   **Day** — Shows a single day with hourly time slots
*   **Week** — Shows a seven-day week with hourly time slots (default)
*   **WorkWeek** — Shows Monday to Friday with hourly time slots
*   **Month** — Shows a full month calendar view
*   **Agenda** — Shows upcoming events in a list format

For detailed information on each view, see [Explore available views and their customization options](./views.md).

```typescript
import { Component } from '@angular/core';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, View } from '@syncfusion/ej2-angular-schedule';

@Component({
	imports: [
		ScheduleModule
	],
	standalone: true,
	selector: 'app-root',
	providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
	// specifies the template string for the Schedule component
	template: `<ejs-schedule [currentView]='currentView' ></ejs-schedule>`
})
export class App {
	public currentView: View = 'Day';
}
```

## See also

* [Explore available views and their customization options](./views.md)
* [Explore appointments and event data handling](./appointments.md)