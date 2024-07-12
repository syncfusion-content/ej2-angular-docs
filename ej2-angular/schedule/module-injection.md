---
layout: post
title: Module injection in Angular Schedule component | Syncfusion
description: Learn here all about Module injection in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Module injection 
documentation: ug
domainurl: ##DomainURL##
---

# Module injection in Angular Schedule component

The crucial step on creating a Scheduler with required views, is to import and inject the required modules. The modules that are available on Scheduler to work with its related functionalities are as follows.

* `DayService` - Inject this module to work with day view.
* `WeekService` - Inject this module to work with week view.
* `WorkWeekService` - Inject this module to work with work week view.
* `MonthService` - Inject this module to work with month view.
* `YearService` - Inject this module to work with year view.
* `AgendaService` - Inject this module to work with agenda view.
* `MonthAgendaService` - Inject this module to work with month agenda view.
* `TimelineViewsService` - Inject this module to work with timeline day, timeline week, and timeline work week views.
* `TimelineMonthService` - Inject this module to work with timeline month view.
* `TimelineYearService` - Inject this module to work with timeline year view.
* `DragAndDropService` - Inject this module to allow drag and drop of appointments on Scheduler.
* `ResizeService` - Inject this module for enabling the resize functionality of appointments on Scheduler.
* `ExcelExportService` - Inject this module for exporting the Scheduler events data as excel file format.
* `ICalendarExportService` - Inject this module for exporting the Scheduler events data to an ICS file.
* `ICalendarImportService` - Inject this module for importing the Scheduler events data from an ICS file.

## Module injection

The required modules should be injected into the Scheduler using the `@NgModule.providers` section within the `app.component.ts` file as shown below. On doing so, only the injected module functionalities will be loaded and can be worked with Scheduler.

`[src/app/app.component.ts]`

```typescript
@NgModule(({
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService]
})
```

**Note:** If a Scheduler [`currentView`](https://ej2.syncfusion.com/angular/documentation/api/schedule#currentview) is set to any one of the available views without injecting that respective view module, then a script error will occur and the Scheduler will not render.

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
