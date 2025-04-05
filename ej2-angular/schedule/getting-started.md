---
layout: post
title: Getting started with Angular Schedule component | Syncfusion
description:  Checkout and learn about Getting started with Angular Schedule component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Schedule component

This section briefly explains how to create [**Angular Scheduler**](https://www.syncfusion.com/angular-components/angular-scheduler) component and configure its available functionalities in Angular Environment.

To get start quickly with Angular Scheduler using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=dE_9t5HJ8rc" %}

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the following Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-schedule`](https://www.npmjs.com/package/@syncfusion/ej2-angular-schedule/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-schedule --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-schedule@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-schedule/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-schedule@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-schedule:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

Schedule CSS files are available in the ej2-angular-schedule package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-schedule/styles/material.css';
```

## Module injection

Each view types available in scheduler are maintained as individual modules and to work with those views, it is necessary to inject the required modules. The following modules are available in scheduler namely,

* **Day** - Inject this module for displaying day view.
* **Week** - Inject this module for displaying week view.
* **WorkWeek** - Inject this module for displaying work week view.
* **Month** - Inject this module for displaying month view.
* **Year** - Inject this module for displaying year view.
* **Agenda** - Inject this module for  displaying agenda view.
* **MonthAgenda** - Inject this module for displaying month agenda view.
* **TimelineViews** - Inject this module for displaying  timeline day, timeline week, timeline work week view.
* **TimelineMonth** - Inject this module for displaying timeline month view.
* **TimelineYear** - Inject this module for displaying timeline year view.

These modules should be injected into the schedule using the `providers` method within the `app.component.ts` file as shown below. On doing so, only the injected views will be loaded and displayed on the schedule.

`[src/app/app.component.ts]`

```typescript
@Component({
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
```

## Initialize the Schedule

Modify the template in [src/app/app.component.ts] file to render the `ej2-angular-schedule` component.

`[src/app/app.component.ts]`

```typescript

import { ScheduleModule, View } from '@syncfusion/ej2-angular-schedule'
import { Component } from '@angular/core';
import { WeekService, MonthService, WorkWeekService, DayService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [       
      ScheduleModule
    ],
  standalone: true,
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule> </ejs-schedule>`
})
export class AppComponent { }

```

Now, run the application in the browser using the following command.

```sh
npm start
```

The output will display the empty scheduler.

## Populating appointments

To populate an empty Scheduler with appointments, define either the local JSON data or remote data through the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#datasource) property available within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) option. To define any appointments, start and end time fields are mandatory. In the following example, you can see the appointment defined with default fields such as Id, Subject, StartTime and EndTime.

`[src/app/app.component.ts]`

```typescript

import { ScheduleModule, ScheduleAllModule } from '@syncfusion/ej2-angular-schedule'
import { Component } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [       
      ScheduleModule, ScheduleAllModule
    ],
  standalone: true,
  selector: 'app-root',
  // specifies the template string for the Schedule component
  template: `<ejs-schedule [eventSettings]='eventSettings'></ejs-schedule>`
})
export class AppComponent {
  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30)
  }];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
}

```

You can also provide different names to these default fields, for which the custom names of those fields must be mapped appropriately within `fields` property as shown below.

```typescript

import { ScheduleModule, ScheduleAllModule } from '@syncfusion/ej2-angular-schedule'
import { Component } from '@angular/core';
import { DayService, WeekService, MonthService, WorkWeekService, EventSettingsModel, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [       
      ScheduleModule, ScheduleAllModule
    ],
    standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate'
    [eventSettings]='eventSettings'></ejs-schedule>`
  })
  export class AppComponent {
    public data: object [] = [{
      id: 2,
      eventName: 'Meeting',
      startTime: new Date(2018, 1, 15, 10, 0),
      endTime: new Date(2018, 1, 15, 12, 30),
      isAllDay: false
    }];
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
      dataSource: this.data,
      fields: {
        id: 'id',
        subject: { name: 'eventName' },
        isAllDay: { name: 'isAllDay' },
        startTime: { name: 'startTime' },
        endTime: { name: 'endTime' },
      }
    };
  }

```

The other fields available in Scheduler can be referred from [here](./appointments#event-fields).

## Setting date

Scheduler usually displays the system date as its current date. To change the current date of Scheduler with specific date, define the [`selectedDate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#selecteddate) property.

`[src/app/app.component.ts]`

```typescript

import { ScheduleModule, ScheduleAllModule, View } from '@syncfusion/ej2-angular-schedule'
import { Component } from '@angular/core';
import { DayService, WeekService, MonthService, WorkWeekService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [       
      ScheduleModule, ScheduleAllModule
    ],
    standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate'></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
}

```

## Setting view

Scheduler displays `week` view by default. To change the current view, define the applicable view name to the [`currentView`](https://ej2.syncfusion.com/angular/documentation/api/schedule#currentview) property. The applicable view names are,

* Day
* Week
* WorkWeek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

```typescript

import { ScheduleModule, ScheduleAllModule, View } from '@syncfusion/ej2-angular-schedule'
import { Component } from '@angular/core';
import { DayService, WeekService, MonthService, WorkWeekService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [       
      ScheduleModule, ScheduleAllModule
    ],
    standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [currentView]='currentView' ></ejs-schedule>`
  })
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public currentView: View = 'Month';
}

```

## Individual view customization

Each individual Scheduler views can be customized with its own options such as setting different start and end hour on Week and Work Week views, whereas hiding the weekend days on Month view alone.
This can be achieved by defining views property to accept the array of object type, where each object depicts the individual view customization.

The output will display the Scheduler with the specified view configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/views-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/views-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/views-cs1" %}

> You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/schedule/overview) that shows how to use the toolbar buttons to play with Scheduler functionalities.
