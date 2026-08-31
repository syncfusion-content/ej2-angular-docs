---
layout: post
title: Islamic Calendar in Angular Calendar | Syncfusion®
description: Learn how to display the Islamic (Hijri) calendar in the Syncfusion Angular Calendar alongside the Gregorian calendar with full feature support.
platform: ej2-angular
control: Islamic calendar 
documentation: ug
domainurl: ##DomainURL##
---

# Islamic Calendar in Angular Calendar

In addition to the Gregorian calendar, the Calendar control supports the Islamic (Hijri) calendar. The Islamic calendar or Hijri calendar is a lunar calendar consisting of 12 months in a year of 354 or 355 days. To know more about the Islamic calendar, please refer to this [Wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar) link. The Hijri month names are rendered from the loaded culture/CLDR data.

It also consists of all Gregorian calendar functionalities such as min and max dates, week number, start day of the week, multi selection, enable RTL, start and depth view, localization, and highlighting and customizing the specific dates.

## Enable the Islamic Calendar

By default, the calendar mode is `Gregorian`. The `calendarMode` property accepts `Gregorian` (default) or `Islamic`. You can enable the Islamic mode by setting the `calendarMode` to `Islamic`. When `calendarMode` is `Islamic`, the `value` property still accepts and returns a Gregorian `Date` object; the Calendar handles the Gregorian-to-Hijri conversion internally for display.

You also need to import and inject the `IslamicService` module into the `providers` section of the root `NgModule` or component class from `@syncfusion/ej2-angular-calendars` as shown below.

```typescript
import { IslamicService } from '@syncfusion/ej2-angular-calendars';
```

Register the `IslamicService` in the `providers` of the `NgModule`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalendarModule, IslamicService } from '@syncfusion/ej2-angular-calendars';

@NgModule({
    imports: [BrowserModule, CalendarModule],
    providers: [IslamicService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

The following example demonstrates how to display the Islamic Calendar (Hijri Calendar). The sample requires both `calendarMode="Islamic"` and the `IslamicService` registration shown above to work.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/islamic-calendar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/islamic-calendar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/islamic-calendar-cs1" %}

## See Also

* [Globalization and Localization](./globalization)
* [Calendar Views](./calendar-views)
* [Right-To-Left support](./globalization#right-to-left)
* [Customization](./customization)