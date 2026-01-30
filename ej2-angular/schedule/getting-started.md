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

This section explains how to create [**Angular Scheduler**](https://www.syncfusion.com/angular-components/angular-scheduler) component and configure its features in an Angular environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

For a quick start with the Angular Schedule component using CLI and Schematics, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=dE_9t5HJ8rc" %}

## Prerequisites

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to set up your Angular applications. To install the Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular application

Create a new Angular application using the following Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. You can find all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on [npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) use the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. Use the following command to install the latest Ivy package.

Add [`@syncfusion/ej2-angular-schedule`](https://www.npmjs.com/package/@syncfusion/ej2-angular-schedule/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-schedule --save
```

### Angular compatibility compiled (NGCC) package

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-schedule@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-schedule/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-schedule@ngcc --save
```

To specify the NGCC package in `package.json`, add the `-ngcc` suffix to the version number.

```bash
@syncfusion/ej2-angular-schedule:"20.2.38-ngcc"
```

>**Note**: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

The necessary CSS files for the Schedule component are located in the `ej2-angular-schedule` package. You can reference them in your `[src/styles.css]` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-angular-schedule/styles/tailwind3.css';
```

## Module injection

The Schedule component includes several view types that are available as individual modules. To use these views, you must inject the required modules. The available modules are:

*   **Day**: For displaying the day view.
*   **Week**: For displaying the week view.
*   **WorkWeek**: For displaying the work week view.
*   **Month**: For displaying the month view.
*   **Year**: For displaying the year view.
*   **Agenda**: For displaying the agenda view.
*   **MonthAgenda**: For displaying the month agenda view.
*   **TimelineViews**: For displaying timeline day, timeline week, and timeline work week views.
*   **TimelineMonth**: For displaying the timeline month view.
*   **TimelineYear**: For displaying the timeline year view.

Inject these modules into the Schedule component using the `providers` array in your `app.component.ts` file, as shown below. Only the injected views will be available in the Schedule.

`[src/app/app.component.ts]`

```typescript
import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, TimelineYearService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, TimelineYearService]
  // ...
})
export class AppComponent { }
```

## Initialize the Schedule component

Modify the template in `[src/app/app.component.ts]` to render the `ejs-schedule` component.

`[src/app/app.component.ts]`

```typescript
import { Component } from '@angular/core';
import { ScheduleModule, View } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

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
export class AppComponent { }
```

Now, run the application using the following command.

```bash
npm start
```

The output will display an empty Schedule component.

## Populating appointments

To populate the Schedule with appointments, you can use either a local JSON array or a remote data service. Assign the data to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#datasource) property, which is part of the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) configuration.

The `StartTime` and `EndTime` fields are mandatory for each appointment. The following example uses default fields like `Id`, `Subject`, `StartTime`, and `EndTime`.

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
  };
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
    // Specifies the template string for the Schedule component
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

For a full list of available appointment fields, refer to the [event fields documentation](./appointments#event-fields).

## Setting the date

By default, the Schedule component displays the current system date. To set a specific date, use the [`selectedDate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#selecteddate) property.

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

## Setting the view

The default view of the Schedule is `Week`. To change the current view, set the [`currentView`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#currentview) property to one of the following view names:

*   Day
*   Week
*   WorkWeek
*   Month
*   Year
*   Agenda
*   MonthAgenda
*   TimelineDay
*   TimelineWeek
*   TimelineWorkWeek
*   TimelineMonth
*   TimelineYear

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

> You can also explore our [Angular Schedule Example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/schedule/overview), which shows how to use toolbar buttons to interact with Schedule features.
```