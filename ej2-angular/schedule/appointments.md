---
layout: post
title: Appointments in Angular Schedule component | Syncfusion
description: Learn here all about Appointments in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Appointments and Event management in Angular Scheduler

Appointments represent scheduled items for a specific time period within the Scheduler. Appointments can be created for various time ranges, with each appointment categorized according to its duration and recurrence. The Scheduler categorizes events as follows:

* [Normal events](#normal-events)
* [Spanned events](#spanned-events)
* [All-day events](#all-day-events)
* [Recurring events](#recurring-events)

To see how to add appointments to the Angular Scheduler and utilize its advanced event-handling features, watch this overview video:

{% youtube "https://www.youtube.com/watch?v=z4n09yn1Jq0" %}

## Normal events

Represents an appointment that is created for any specific time interval within a day.

### Creating a normal event

The following example demonstrates defining a normal event in the Scheduler using event data loaded from JSON.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs1" %}

## Spanned events

Spanned events are appointments created for durations longer than 24 hours and are typically displayed in the all-day row. Another category includes events that span more than one day but less than 24 hours, which are displayed across the relevant days.

> For example, an appointment scheduled from November 25, 2018, 11:00 PM to November 26, 2018, 2:00 AM—spanning less than 24 hours—will be split and displayed on both days.

## All-day events

Represents an appointment that is created for an entire day such as holiday events. It is usually displayed separately in an all-day row, a separate row for all-day appointments below the date header section. In Timeline views, the all-day appointments displays in the working space area, and no separate all-day row is present in that view.

> To set a normal appointment as an all-day event, set the[`isAllDay`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#isallday) field to `true`.

### Hiding all-day row events

Use CSS customization to hide all-day row appointments in the Scheduler UI.

```typescript
<style>
    .e-schedule .e-date-header-wrap .e-schedule-table thead {
        display: none;
    }
</style>
```

> Scrolling for the all-day row can be enabled. For details, [refer here](./how-to/enable-scroll-option-on-all-day-section).

### Expanding all-day appointments view on load

To display all all-day appointments in expanded view when the Scheduler loads, use the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#databound) event. This eliminates the need to manually expand all-day events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs2" %}

## Customize the rendering of spanned events

By default, Scheduler will renders the spanned events (appointment with more than 24 hours duration) in the all-day row by setting `AllDayRow` will the default type renders to the [`spannedEventPlacement`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#spannedeventplacement) option within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) property. Now we can customize rendering of the that events inside the work cells itself by modifying the [`spannedEventPlacement`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#spannedeventplacement) option as `TimeSlot`. In this following example, shows how to render the spanned appointments inside the work cells as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs3" %}

## Recurring events

Recurring events are appointments scheduled to repeat at regular intervals (daily, weekly, monthly, or yearly) based on a recurrence rule. These events are marked with a repeat indicator at the lower-right corner.

### Creating a recurring event

The following example illustrates creating a recurring event using a specific recurrence rule. In this case, the event repeats daily and ends after five occurrences.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs4" %}

### Adding exceptions

To exclude specific instances from a recurrence series, add the exception dates to the [`recurrenceException`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrenceexception) field in ISO date time format without hyphens.

For example, February 22, 2018 is written as 20180222. The time portion in UTC should add "Z" at the end, such as "073000Z" for "07:30:00 UTC".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs5" %}

### Editing an occurrence from a series

To dynamically edit a particular occurrence from an event series and display it on the initial load of Scheduler, the edited occurrence needs to be added as a new event to the dataSource collection, with an additional [`recurrenceID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrenceid) field defined to it. The [`recurrenceID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrenceid) field of edited occurrence usually maps the ID value of the parent event.

In this example, a recurring instance that displays on the date 30th Jan 2018 is edited with different timings. Therefore, this particular date is excluded from the parent recurring event that repeats from 28th January 2018 to 4th February 2018. This can be done by adding the [`recurrenceException`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrenceexception) field with the excluded date value on the parent event. Also, the edited occurrence event which is created as a new event should carry the [`recurrenceID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrenceid) field pointing to the parent event's [`Id`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#id) value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs6" %}

### Edit only the current and following events

To edit only the current and following events enable the property [`editFollowingEvents`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#editfollowingevents) within [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) property. The edited occurrence needs to be added as a new event to the dataSource collection, with an additional [`followingID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#followingid) field defined to it. The [`followingID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#followingid) field of edited occurrence usually maps the ID value of the immediate parent event.

In this example, a recurring instance that displays on the date 30th Jan 2018 and its following dates are edited with different subject. Therefore, this particular date and its following dates are excluded from the parent recurring event that repeats from 28th January 2018 to 4th February 2018. This can be done by updating the [`recurrenceRule`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrencerule)field with the until date value on the parent event. Also, the edited events which is created as a new event should carry the [`followingID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#followingid) field pointing to the immediate parent event's [`Id`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#id) value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs7" %}

![Editing Events](images/schedule-editing-events.png)

### Recurrence options and rules

Events can be repeated on a daily, weekly, monthly or yearly basis based on the recurrence rule which accepts the string value. The following details should be assigned to the [`recurrenceRule`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrencerule) property to generate the recurring instances.

* Repeat type - daily/weekly/monthly/yearly.
* How many times it needs to be repeated?
* The interval duration.
* The time period to render the appointment, etc.

There are four repeat types:

* **Daily**: Repeat on a daily basis.
* **Weekly**: Repeat on specified days of the week.
* **Monthly**: Repeat on specified days each month, with additional recurrence criteria.
* **Yearly**: Repeat annually on specified months and days.

### Recurrence properties

The following table summarizes the properties for creating recurring appointments. Valid rule strings follow [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) standards.

 > Refer [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications for valid recurrence rule string.

 Property | Purpose | Example |
|----------|---------|---------|
| FREQ | Maintains the repeat type (Daily, Weekly, Monthly, Yearly) value of the appointment. | FREQ=DAILY;INTERVAL=1|
| INTERVAL | Maintains the interval value of the appointments. When you create the daily appointment at an interval of 2, the appointments are rendered on the days Monday, Wednesday and Friday (Creates an appointment on all days by leaving the interval of one day gap). | FREQ=DAILY;INTERVAL=2|
| COUNT | It holds the appointment’s count value. When the COUNT value is 10, then 10 instances of appointments are created in the recurrence series. | FREQ=DAILY;INTERVAL=1;COUNT=10|
| UNTIL | This property holds the end date value (in ISO format) denoting when the recurrence actually ends. | FREQ=DAILY;INTERVAL=1;UNTIL=20180530T041343Z;|
| BYDAY | It holds the day value(s), representing on which the appointments actually renders. Create the weekly appointment, and select the day(s) from the day options (Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday). When Monday is selected, the first two letters of the selected day "MO" is saved in the BYDAY property. When multiple days are selected, the values are separated by commas. | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE;COUNT=10|
| BYMONTHDAY | This property is used to store the date value of the Month, while creating the Month recurrence appointment. When you create a Monthly recurrence appointment for every 3rd day of the month, then BYMONTHDAY holds the value 3 and creates the appointment on 3rd day of every month. | FREQ=MONTHLY;BYMONTHDAY=3;INTERVAL=1;COUNT=10|
| BYMONTH | This property is used to store the index value of the selected Month while creating the yearly appointments. When you create the yearly appointment on June month, the index value of June month 6 will get stored in the BYMONTH field. The appointment is created on every 6th month of a year. | FREQ=YEARLY;BYMONTHDAY=16;BYMONTH=6;INTERVAL=1;COUNT=10|
| BYSETPOS | This property is used to store the index value of the week. When you create the monthly appointment in second week of a month, the index value of the second week (2) is stored in BYSETPOS. | FREQ=MONTHLY;BYDAY=MO;BYSETPOS=2;COUNT=10|

> The default recurrence related validation has been included for recurrence appointments similar to the one available in Outlook. The validation usually occurs during the recurrence appointment creation, editing, drag and drop or resizing of the recurrence appointments and also if any single occurrence changes.

### Daily Frequency

| Description | Example |
|-------------|---------|
| Daily recurring event that never ends | FREQ=DAILY;INTERVAL=1 |
| Daily recurring event that ends after 5 occurrences | FREQ=DAILY;INTERVAL=1;COUNT=5 |
| Daily recurring event that ends exactly on 12/12/2018 | FREQ=DAILY;INTERVAL=1;UNTIL=20181212T041343Z |
| Daily event that recurs on alternative days and repeats for 10 occurrences | FREQ=DAILY;INTERVAL=2;COUNT=10 |

### Weekly Frequency

| Description | Example |
|-------------|---------|
| Weekly recurring event that repeats on every Monday, Wednesday and Friday and never ends | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR |
| Repeats every week Thursday and ends after 10 occurrences | FREQ=WEEKLY;INTERVAL=1;BYDAY=TH; COUNT=10 |
| Repeats every week Monday and ends on 12/12/2018 | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO; UNTIL=20181212T041343Z |
| Repeats on Monday, Wednesday and Friday of alternative weeks and ends after 10 occurrences | FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE,FR;COUNT=10 |

### Monthly Frequency

| Description | Example |
|-------------|---------|
| Monthly recurring event that repeats on every 15th day of a month and never ends | FREQ=MONTHLY; BYMONTHDAY=15;INTERVAL=1 |
| Monthly recurring event that repeats on every 16th day of a month and ends after 10 occurrences | FREQ=MONTHLY;BYMONTHDAY=16;INTERVAL=1;COUNT=10 |
| Repeats every 17th day of a month and ends on 12/12/2018 | FREQ=MONTHLY;BYMONTHDAY=17; INTERVAL=1;UNTIL=20181212T041343Z |
| Repeats every 2nd Friday of a month and never ends | FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2; INTERVAL=1 |
| Repeats every 4th Wednesday of a month and ends after 10 occurrences | FREQ=MONTHLY;BYDAY=WE; BYSETPOS=4;INTERVAL=1;COUNT=10 |
| Repeats every 4th Friday of a month and ends on 12/12/2018 | FREQ=MONTHLY;BYDAY=FR;BYSETPOS=4; INTERVAL=1;UNTIL=20181212T041343Z; |

### Yearly Frequency

| Description | Example |
|-------------|---------|
| Yearly event that repeats on every 15th day of December month and never ends | FREQ=YEARLY; BYMONTHDAY=15;BYMONTH=12;INTERVAL=1 |
| Event that repeats on every 10th day of December month and ends after 10 occurrences | FREQ=YEARLY; BYMONTHDAY=10;BYMONTH=12;INTERVAL=1;COUNT=10 |
| Repeats on every 12th day of December month and ends on 12/12/2025 | FREQ=YEARLY;BYMONTHDAY=12; BYMONTH=12;INTERVAL=1;UNTIL=20251212T041343Z |
| Repeats on every 3rd Friday of December month and never ends | FREQ=YEARLY;BYDAY=FR;BYMONTH=12; BYSETPOS=3;INTERVAL=1 |
| Repeats on every 3rd Tuesday of December month and ends after 10 occurrences | FREQ=YEARLY; BYDAY=TU;BYMONTH=12;BYSETPOS=3;INTERVAL=1;COUNT=10 |
| Repeats on every 4th Wednesday of December month and ends on 12/12/2028 | FREQ=YEARLY;BYDAY=WE; BYMONTH=12;BYSETPOS=4;INTERVAL=1;UNTIL=20281212T041343Z |

### Recurrence Validation

The built-in validation support has been added by default for recurring appointments during its creation, edit, drag and drop or resize action. The following are the possible validation alerts that displays on Scheduler while creating or editing the recurring events.

| Validation messages | Description |
|-------|---------|
| The recurrence pattern is not valid. | This alert will raise, when the selected recurrence rule value is not a valid one. For example, when you try to select the end date value (using `Until` option) for a recurring event, which occurs before the start date, an alert will popup out saying that the chosen pattern is invalid. |
| The changes made to specific instances of this series will be cancelled and those events will match the series again. | This alert will raise, when you try to edit the whole series, whose occurrence might have been already edited. For example, If there are five occurrences and one of the occurrence is already edited. Now, when you try to edit the entire series, you will get this validation alert. |
| The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor. | This validation will occur, if the event duration is longer than the selected frequency. For example, if you create a recurring appointment with two days duration in `Daily` frequency with no intervals set to it, you may get this alert. |
| Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month. | When you try to create a recurring appointment on 31st of every month, where few months won’t have 31 days and in this scenario, you will get this alert. |
| Two occurrences of the same event cannot occur on the same day. | This validation will occur, when you try to edit or move any single occurrence to some other date, where another occurrence of the same event is already present. |

## Event fields

The Scheduler's dataSource usually holds the event instances, where each of the instance includes a collection of appropriate [fields](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/). It is mandatory to map these fields with the equivalent fields of database, when remote data is bound to it. When the local JSON data is bound, then the field names defined within the instances needs to be mapped with the scheduler event fields correctly.

> To create an event, both [`startTime`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#starttime) and [`endTime`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#endtime) are required. The [`id`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#id) field is mandatory for all CRUD actions.

### Built-in fields

The built-in fields available on Scheduler event object are as follows.

|   Field name   | Description |
|----------------|-------------|
| id | The [`id`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#id) field needs to be defined as mandatory and this field usually assigns a unique ID value to each of the events.|
| subject | The [`subject`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#subject) field is optional, and usually assigns the summary text to each of the events.|
| startTime | The [`startTime`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#starttime) field defines the start time of an event and it is mandatory to provide it for any of the valid event objects.|
| endTime | The [`endTime`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#endtime) field defines the end time of an event and it is mandatory to provide the end time for any of the valid event objects.|
| startTimezone | It maps the [`startTimezone`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#starttimezone) field from the dataSource and usually accepts the valid IANA timezone names. It is assumed that the value provided for this field is taken into consideration while processing the `startTime` field. When this field is not mapped with any timezone names, then the events will be processed based on the timezone assigned to the Scheduler.|
| endTimezone | It maps the [`endTimezone`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#endtimezone) field from the dataSource and usually accepts the valid IANA timezone names. It is assumed that the value provided for this field is taken into consideration while processing the `endTime` field. When this field is not mapped with any timezone names, then the events will be processed based on the timezone assigned to the Scheduler.|
| location | It maps the [`location`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#location) field from the dataSource and the location text value will be displayed over the events.|
| description | It maps the [`description`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#description) field from the dataSource and denotes the event description which is optional.|
| isAllDay | The [`isAllDay`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#isallday) field is mapped from the dataSource and is used to denote whether an event is created for an entire day or for specific time alone. Usually, an event with `isAllDay` field set to true will be considered as an all-day event. |
| recurrenceID | It maps the [`recurrenceID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrenceid) field from dataSource and usually holds the ID value of the parent recurrence event. This field is applicable only for the edited occurrence events.|
| recurrenceRule | It maps the [`recurrenceRule`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrencerule) field from dataSource and holds the recurrence rule value in a string format. Also, it uniquely identifies whether the event belongs to a recurring type or normal ones. |
| recurrenceException | It maps the [`recurrenceException`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#recurrenceexception) field from dataSource and is used to hold the collection of exception dates, on which the recurring occurrences needs to be excluded. The `recurrenceException` should be specified in UTC format. |
| isReadonly | It maps the [`isReadonly`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#isreadonly) field from dataSource. It is mainly used to make specific appointments as readonly when set to `true`. |
| isBlock | It maps the [`isBlock`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#isblock) field from dataSource. It is used to block the particular time ranges in the Scheduler and prevents the event creation on those time slots. |

### Binding different field names

When the fields of event instances has the default mapping name, it is not mandatory to map them manually. If a Scheduler's dataSource holds the events collection with different field names, then it is necessary to map them with its equivalent field name within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs8" %}

> The [`id`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#id) mapping is a string type with no extra validation, while other fields have object type and additional options.

### Event field settings

Scheduler event fields offer additional customization such as default values, field mappings, validation, and label assignment.

|   Options  | Description |
|------------|-------------|
| default | Accepts the default value to the applicable fields (Subject, Location and Description), when no values are provided to them from dataSource. |
| name | Accepts the field name to be mapped from the dataSource fields. |
| title | Accepts the label values to be displayed for the fields of event editor. |
| validation | Defines the validation rules to be applied on the event fields within the event editor. |

In following example, the Subject field in event editor will display its appropriate label as **Summary**. When no subject value is provided while saving an event, then the appointment will be saved with the default subject value as **Add Summary**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs9" %}

## Adding custom fields

In addition to default fields, you can add any number of custom fields to Scheduler appointments. For example, the code below adds **Status** and **Priority**. Custom fields don't need to be mapped in [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/), but can be accessed for internal processing or application logic.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs10" %}

## Customize the order of overlapping events

By default, overlapping appointments are rendered sequentially based on their start and end times. Use the [`sortComparer`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#sortcomparer) property within [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) to customize their sorting order, for example by a custom field.

The following code example shows how to sort the appointments based on the custom field as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs11" %}

![Overlapping Events](images/schedule-overlapping-events.png)

## Preventing Overlapping Events

By default, the scheduler displays overlapping events according to their start and end times. To prevent overlapping, you can set the [`allowOverlap`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowoverlap) property to `false`.

When this property is set to `false`, any new or updated events that overlap with existing ones will trigger an overlap alert. The overlapping events will be collected in the [`overlapEvents`](https://ej2.syncfusion.com/angular/documentation/api/schedule/popupOpenEventArgs/#overlapevents) within the [`PopupOpenEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/schedule/popupOpenEventArgs/).

When the [`allowOverlap`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowoverlap) property is set to `false`, the scheduler behaves as follows:

**Initial Load Behavior:**  Upon initial loading, the scheduler prioritizes non-overlapping events based on their duration and all-day status. Events with longer durations and those marked as all-day receive higher priority to ensure there are no overlaps.

**Recurring Appointments:**  If there are conflicts within a recurring appointment series during the initial load, the scheduler will display all occurrences of the series, except for the conflicting instance.

**Event Modifications:**  When a user edits, saves, or removes appointments, the scheduler checks for potential overlaps. If a conflict is detected, the action is blocked, and a conflict alert is displayed to the user to address the issue.

**Dynamic Recurrence Series Creation or Editing:**  When a user creates or edits a recurrence series dynamically, the scheduler will prevent any occurrences of the series from being added if a conflict is found within the series.

The following code example demonstrates how to enable the [`allowOverlap`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowoverlap) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/overlap-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/overlap-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/overlap-cs1" %}

**Limitations**

The [`allowOverlap`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowoverlap) property checks for event overlaps only within the currently visible date range. Events scheduled outside the rendered date range are not included in the overlap check by default.

If you need to check for overlaps with events outside the visible date range, you can leverage the [`promise`](https://ej2.syncfusion.com/angular/documentation/api/schedule/actionEventArgs/#promise) field within the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#actionbegin) event to validate all events before proceeding. By implementing a custom validation method inside the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#actionbegin) event, you can assign the result (a boolean) to the [`promise`](https://ej2.syncfusion.com/angular/documentation/api/schedule/actionEventArgs/#promise) field. If the result is `true`, the action (e.g., adding or saving the event) will proceed; if `false`, the action will be blocked.

Additionally, you can use the public method [`openOverlapAlert`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#openoverlapalert) to show an alert popup whenever an overlap occurs and the result is `false`.

The following code example demonstrates how to check for overlaps when an event is added. If an overlap is found, the event won't be added, and an alert will be shown.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/overlap-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/overlap-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/overlap-cs2" %}

## Drag and drop appointments

Reschedule appointments by dragging and dropping them. Inject the `DragAndDrop` module and set [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowdraganddrop) to `true`. In mobile mode, you can drag and drop the events by tap holding an event and dropping them on to the desired location.

Learn more about dragging external items and advanced drag/resize options in this video:

{% youtube "https://www.youtube.com/watch?v=z4n09yn1Jq0" %}

> Drag and drop is supported in all Scheduler views except Agenda, Month-Agenda, and Year View.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs12" %}

### Drag and drop multiple appointments

We can drag and drop multiple appointments by enabling the [`allowMultiDrag`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowmultidrag) property. We can select multiple appointments by holding the CTRL key. Once the events are selected, we can leave the CTRL key and start dragging the event.

> Multiple event drag is not supported on mobile devices.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs13" %}

### Disabling drag action

To disable drag and drop, set [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowdraganddrop) to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs14" %}

### Preventing drag and drop on specific targets

Use the [`excludeSelectors`](https://ej2.syncfusion.com/angular/documentation/api/schedule/dragEventArgs/#excludeselectors) property within the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#dragstart) event to prevent dragging on specific targets, such as the all-day row.

In this example, we have prevented the drag action on all-day row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs15" %}

### Disable scrolling on drag action

By default, while dragging an appointment to the edges, either top or bottom of the Scheduler, scrolling action takes place automatically. To prevent this scrolling, set `false` to the [`scroll`](https://ej2.syncfusion.com/angular/documentation/api/schedule/dragEventArgs/#scroll) value within the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#dragstart) event arguments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs16" %}

### Controlling scroll speed while dragging

The speed of the scrolling action while dragging an appointment to the Scheduler edges, can be controlled within the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#dragstart) event by setting the desired value to the [`scrollBy`](https://ej2.syncfusion.com/angular/documentation/api/schedule/scrollOptions/#scrollby) and [`timeDelay`](https://ej2.syncfusion.com/angular/documentation/api/schedule/scrollOptions/#timedelay) option whereas its default value is 30 minutes and 100ms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs17" %}

### Auto navigation of date ranges on dragging an event

When an event is dragged either to the left or right extreme edges of the Scheduler and kept hold for few seconds without dropping, the auto navigation of date ranges will be enabled allowing the Scheduler to navigate from current date range to back and forth respectively. This action is set to `false` by default and to enable it, you need to set [`navigation`](https://ej2.syncfusion.com/angular/documentation/api/schedule/dragEventArgs/#navigation) to true within the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#dragstart) event.

By default, the navigation delay is set to 2000ms. The navigation delay decides how long the user needs to drag and hold the appointments at the extremities. You can also set your own delay value for letting the users to navigate based on it, using the [`timeDelay`](https://ej2.syncfusion.com/angular/documentation/api/schedule/scrollOptions/#timedelay) within the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#dragstart)  event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs18" %}

### Setting drag time interval

By default, while dragging an appointment, it moves at an interval of 30 minutes. To change the dragging time interval, pass the appropriate values to the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/schedule/dragEventArgs/#interval) option within the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#dragstart) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs19" %}

### Drag and drop items from external source

It is possible to drag and drop the unplanned items from any of the external source into the scheduler, by manually saving those dropped item as a new appointment data through [`addEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#addevent) method of Scheduler.

In this example, we have used the tree view control as an external source and the child nodes from the tree view component are dragged and dropped onto the Scheduler. Therefore, it is necessary to make use of the [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) event of the TreeView component, where we can form an event object and save it using the [`addEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#addevent)  method.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/external-drag-drop-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/external-drag-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/external-drag-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/external-drag-drop-cs1" %}

### Opening the editor window on drag stop

There are scenarios where you want to open the editor filled with data on newly dropped location and may need to proceed to save it, only when `Save` button is clicked on the editor. On clicking the cancel button should revert these changes. This can be achieved using the [`dragStop`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#dragstop) event of Scheduler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs1" %}

## Inline Appointment

In Scheduler, another easier way for `adding` or `editing` the appointment’s subject alone can be achieved by using the inline Add/Edit support. It allows the user to add and edit the appointments inline. To get familiar with the inline Add mode, single click on any of the Scheduler cells or press enter key on the selected cells.

When the inline adding mode is ON, a text box will get created within the clicked Scheduler cells with a blinking cursor in it, requiring the user to enter the subject of an appointment. Once the subject is entered, the appointment will be saved on pressing the enter key.

To enable the inline edit mode, single click on any of the existing appointment’s subject, so that the user can edit the subject of that appointment. The edited subject of that appointment will be updated on pressing the enter key.

The inline option can be enabled/disabled on the Scheduler by using the allowInline API, whereas its default value is set to false.

While using the [`allowInline`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowinline) the [`showQuickInfo`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#showquickinfo) will be turned off. The `quickPopup` will not show on clicking the work cell or clicking the appointment when the `allowInline` property is set to `true`.
In work cells, select multiple cells using keyboard, and then press enter key. The appointment wrapper will be created, and focus will be on the subject field. Also, consider the overlapping scenarios when creating an inline event.

### Normal Event

While editing appointments, single-click the appointment subject, the `editable` option will be enabled in UI and the cursor will focus at the end of the text. Inline editing will be considered for all possible views.

### Recurrence Event

While editing the occurrence from the recurrence series, it is only possible to edit a `single occurrence`, not an entire series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs20" %}

## Appointment Resizing

Another way of rescheduling an appointment can be done by resizing it through either of its handlers. To work with resizing functionality, it is necessary to inject the module `Resize` and make sure that [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowresizing) property is set to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs2" %}

### Disabling resize action

Resize is enabled by default except in Agenda and Month-Agenda views. To disable, set [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#allowresizing) to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs3" %}

### Disabling scrolling on resize action

To prevent automatic scrolling during resizing, set [`scroll`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resizeEventArgs/#scroll) to `false` in the [`resizeStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#resizestart) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs4" %}

### Controlling scroll speed while resizing an event

Control the scroll speed using [`scrollBy`](https://ej2.syncfusion.com/angular/documentation/api/schedule/scrollOptions/#scrollby) in the [`resizeStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#resizestart) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs5" %}

### Setting resize time interval

By default, while resizing an appointment, it extends or shrinks at an interval of 30 minutes. To change this default resize interval, set appropriate values to [`interval`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resizeEventArgs/#interval) option within the  [`resizeStart`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#resizestart) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs6" %}

## Appointment customization

Scheduler events can be customized using one of the following:

* [Using event templates](#using-template)
* [Using the eventRendered event](#using-eventrendered-event)
* [Using custom CSS class](#using-cssclass)

### Using template

Incorporate text, images, and links using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#template) property under [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/). The following example demonstrates changing an event's color and time format.

Learn how easily you can customize the basic look and feel of Angular Scheduler appointments using its built-in ng-template option from this video:

{% youtube "https://www.youtube.com/watch?v=z4n09yn1Jq0" %}

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/event-cs7/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs7" %}

> All the built-in fields that are mapped to the appropriate field properties within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/), as well as custom mapped fields from the Scheduler dataSource can be accessed within the template code.

### Using eventRendered event

The [`eventRendered`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#eventrendered) event triggers before the appointment renders on the Scheduler. Therefore, this client-side event can be utilized to customize the look of events based on any specific criteria, before rendering them on the scheduler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs8" %}

### Using cssClass

The customization of events can also be achieved using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#cssclass) property of the Scheduler. In the following example, the background of appointments has been changed using the cssClass.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs9" %}

## Setting minimum height

It is possible to set minimal height for appointments on Scheduler using [`eventRendered`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#eventrendered) event, when its start and end time duration is less than the default duration of a single slot.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs10" %}

## Block Dates and Times

It is possible to block a set of dates or a particular time ranges on the Scheduler. To do so, define an appointment object within [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) along with the required time range to block and set the [`isBlock`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#isblock) field to true. Usually, the event objects defined with isBlock field set to true will block the entire time cells lying within the appropriate time ranges specified through [`startTime`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#starttime) and [`endTime`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#endtime) fields.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs11" %}

![Block Date and Time](images/schedule-block-events.png)

Block events can also be defined to repeat on several days as shown in the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs12" %}

![Block Several Date and Time](images/schedule-multiple-block-events.png)

## Readonly

An interaction with the appointments of Scheduler can be enabled/disabled using the [`readonly`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#readonly) property. With this property enabled, you can simply navigate between the Scheduler dates, views and can be able to view the appointment details in the quick info window. Most importantly, the users are not allowed to perform any CRUD actions on Scheduler, when this property is set to true. By default, it is set as `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs13" %}

## Make specific events readonly

There are scenarios where you need to restrict the CRUD action on specific appointments alone based on certain conditions. In the following example, the events that has occurred on the past hours from the current date of the Scheduler are made as read-only and the CRUD actions has been prevented only on those appointments. This can be achieved by setting [`isReadonly`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#isreadonly) field of read-only events to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs14" %}

> By default, the event editor is prevented to open on the read-only events when [`isReadonly`](https://ej2.syncfusion.com/angular/documentation/api/schedule/field/#isreadonly) field is set to `true`.

## Restricting event creation on specific time slots

You can restrict the users to create and update more than one appointment on specific time slots. Also, you can disable the CRUD action on those time slots if it is already occupied, which can be achieved using Scheduler's public method [`isSlotAvailable`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#isslotavailable).

>Note: The **isSlotAvailable** is centered around verifying appointments within the present view's date range. Yet, it does not encompass an evaluation of availability for recurrence occurrences that fall beyond this particular date range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs15" %}

## Differentiate the past time events

To differentiate the appearance of the appointments based on specific criteria such as displaying the past hour appointments with different colors on Scheduler [`eventRendered`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#eventrendered) event can be used which triggers before the appointment renders on the Scheduler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs16" %}

## Appointments occupying entire cell

The Scheduler allows the event to occupies the full height of the cell without its header part by setting `true` for [`enableMaxHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#enablemaxheight) Property.

We can show more indicator if more than one appointment is available in a same cell by setting `true` to [`enableIndicator`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#enableindicator) property whereas its default value is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/event-cs17" %}

![Differentiate Past Time Events](images/schedule-appointments-entirecell.png)

## Limiting maximum number of events displayed

In the Scheduler, the default behavior is to display concurrent events based on cell height, with each new event represented as 
`+n more` characters. However, you may want to improve the quality of the presentation by limiting the number of concurrent events. This can be accomplished by using the [maxEventsPerRow](https://ej2.syncfusion.com/angular/documentation/api/schedule/views/#maxeventsperrow) property, which is defaulted to the [views](https://ej2.syncfusion.com/angular/documentation/api/schedule/views/) property.

The [maxEventsPerRow](https://ej2.syncfusion.com/angular/documentation/api/schedule/views/#maxeventsperrow) property is specific to the month, timeline month, and timeline year views, allowing you to view events visually in these rows. Below is a code example that demonstrates how to use this constraint and the events displayed in a cell have been created:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/max-events-per-row-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/max-events-per-row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/max-events-per-row-cs1" %}

> The property [maxEventsPerRow](https://ej2.syncfusion.com/angular/documentation/api/schedule/views/#maxeventsperrow) will be applicable only when [rowAutoHeight](https://ej2.syncfusion.com/angular/documentation/api/schedule/#rowautoheight) feature is disabled in the Scheduler.

## Display tooltip for appointments

The tooltip shows the Scheduler appointment's information in a formatted style by making use of the tooltip related options.

### Show or hide built-in tooltip

The tooltip can be displayed for appointments by setting `true` to the [`enableTooltip`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#enabletooltip) option within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-cs18" %}

![Built-in Tooltip](images/schedule-appointments-tooltip.png)

### Customizing event tooltip using template

After enabling the default tooltip, it is possible to customize the display of needed event information on tooltip by making use of the [`tooltipTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#tooltiptemplate) option within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/).

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/tooltip-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/tooltip-cs1" %}

![Tooltip](images/schedule-appointments-tooltip-template.png)

> All the field names that are mapped from the Scheduler dataSource to the appropriate field properties such as subject, description, location, startTime and endTime within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) can be accessed within the template.

### How to prevent the tooltip for specific events

By using the [`tooltipOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#tooltipOpen) event, you can selectively control when tooltips appear, based on appointment data or other custom conditions.

To prevent a tooltip from appearing for certain events, you can set the `cancel` property to `true` within the [`tooltipOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#tooltipOpen) event. This ensures that tooltips are only displayed for the relevant appointments, improving user experience by minimizing unnecessary distractions.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/tooltip-cs2/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/tooltip-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/tooltip-cs2" %}

## Appointment filtering

The appointments can be filtered by passing the predicate value to [`query`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#query) option in [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/). The following code example shows how to filter and render the selected appointments alone in the Scheduler.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/event-filter-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-filter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-filter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-filter-cs1" %}

## Appointment selection

Select appointments with mouse or keyboard. Selected events are visually highlighted with a box shadow.

| Action | Description |
|-------|---------|
| Mouse click or Single tap on appointments | Selects single appointment. |
| Ctrl + [Mouse click] or [Single tap] on appointments | Selects multiple appointments.|

## Deleting multiple appointments

With the options available to select multiple appointments, it is also possible to delete the multiple selected appointments simply by pressing the `delete` key. In case of deleting multiple selected occurrences of an event series, only those occurrences will be deleted and not the entire series.

## Retrieve event details from the UI of an event

It is possible to access the information about the event fields of an appointment element displayed on the Scheduler UI. This can be achieved by passing an appointment element as argument to the public method [`getEventDetails`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#geteventdetails).

In the following example, the subject of the appointment clicked has been displayed.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/event-template-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-template-cs1" %}

## Get the current view appointments

To retrieve the appointments present in the current view of the Scheduler, you can make use of the [`getCurrentViewEvents`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#getcurrentviewevents) public method. In the following example, the count of current view appointment collection rendered has been traced in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#databound) event.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/event-data-bound-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-data-bound-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-data-bound-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-data-bound-cs1" %}

## Get the entire appointment collections

The entire collection of appointments rendered on the Scheduler can be accessed using the [`getEvents`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#getevents) public method. In the following example, the count of entire appointment collection rendered on the Scheduler has been traced in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#databound) event.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/event-data-bound-cs2/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/event-data-bound-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/event-data-bound-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/event-data-bound-cs2" %}

## Refresh appointments

To refresh events only (without re-rendering the Scheduler UI), call the [`refreshEvents`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#refreshevents) public method.

```typescript
this.scheduleObj.refreshEvents();
```

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
