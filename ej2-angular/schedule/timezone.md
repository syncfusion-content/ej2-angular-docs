---
layout: post
title: Timezone in Angular Schedule component | Syncfusion
description: Learn here all about Timezone in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Timezone support in Angular Schedule component

The Scheduler component uses the current system timezone by default. To schedule events according to a different timezone, use the [`timezone`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/#timezone) property. In addition to applying a specific timezone at the Scheduler level, individual appointments can have their own timezones using the [`startTimezone`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/field/#starttimezone) and [`endTimezone`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/field/#endtimezone) properties within the event fields collection.

> Note: The **timezone** property applies only to appointment processing and the current time indicator.

## Understanding date manipulation in JavaScript

The `new Date()` constructor in JavaScript returns the exact current date with the complete time and timezone information. For example, it may return a value such as `Wed Dec 12 2018 05:23:27 GMT+0530 (India Standard Time)`, indicating the current date as December 12, 2018, and the current time as 5:23 AM in the IST timezone.

## Scheduler without a specific timezone

When the Scheduler's `timezone` property is not set, appointments are displayed based on the client system's timezone. As a result, the same appointment may appear with different start and end times to users in different timezones.

The following code example displays an appointment from 9:00 AM to 10:00 AM when you open the Scheduler from any of the timezone. This is because, we are providing the start and end time enclosing with `new Date()` which works based on the client browser's timezone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs66/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs66/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs66" %}

## Set a specific timezone for the Scheduler

When a timezone is set through the [`timezone`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/#timezone) property, appointments are displayed according to the Scheduler's timezone, regardless of the user's system timezone. In the following example, appointments are shown in Eastern Time (UTC -05:00).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs67/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs67/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs67" %}

## Display events on same time everywhere with no time difference

Setting [`timezone`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/#timezone) to UTC for Scheduler will display the appointments on same time as in the database for all the users in different time zone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs68/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs68/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs68" %}

## Assign specific timezones to events

It is possible to set different timezone for Scheduler events by setting [`startTimezone`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/field/#starttimezone) and [`endTimezone`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/field/#endtimezone) properties within the [`eventSettings`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) option. It allows each appointment to maintain different timezone and displays on Scheduler with appropriate time differences.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs69/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs69/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs69" %}

## Add or remove timezone names to/from the timezone collection

Instead of displaying all the timezone names within the timezone collection (more than 200 are displayed on the editor window timezone fields by default), you can customize the timezone collection at application end as shown in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs70/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs70/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs70" %}

## Timezone methods

Scheduler developers can use the following timezone utility methods to manage date and time conversions between different timezones. These methods facilitate accurate time comparisons and conversions for appointment handling.

### offset

Calculates the difference, in minutes, between the specified UTC date and a target timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as a date object.|
| Timezone | String | Timezone.|

Returns `number`

```typescript
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let timeZoneOffset: number = timezone.offset(date,"Europe/Paris");
    console.log(timeZoneOffset); //-60
```

### convert

This method is used to convert the passed date from one timezone to another timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object.|
| fromOffset | number/string | Timezone from which date need to be converted.|
| toOffset | number/string | Timezone to which date need to be converted.|

Returns `Date`

```typescript
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.convert(date, "Europe/Paris", "Asia/Tokya");
    let convertedDate1: Date = timezone.convert(date, 60, -360);
    console.log(convertedDate); //2018-12-05T08:55:11.000Z
    console.log(convertedDate1); //2018-12-05T16:55:11.000Z
```

### add

Adds the time difference between the specified UTC date and a target timezone to the date.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as a date object.|
| Timezone | String | Timezone.|

Returns `Date`

```typescript
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.add(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T05:25:11.000Z
```

### remove

This method is used to remove the time difference between passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as a date object.|
| Timezone | String | Timezone.|

Returns `Date`

```typescript
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.remove(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T14:25:11.000Z
```

### removeLocalOffset

Removes the local timezone offset from the given date.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as a date object.|

Returns `Date`

```typescript
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.removeLocalOffset(date);
    console.log(convertedDate); //2018-12-05T15:25:11.000Z
```

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
