---
layout: post
title: Timezone in Angular Schedule Component | Syncfusion
description: Learn here all about Timezone in Syncfusion Essential Angular Schedule component, it's elements and more.
platform: ej2-angular
control: Timezone 
documentation: ug
domainurl: ##DomainURL##
---

# Timezone in Angular Schedule Component

The Scheduler makes use of the current system time zone by default. If it needs to follow some other user-specific time zone, then the `timezone` property needs to be used. Apart from the default action of applying specific timezone to the Scheduler, it is also possible to set different time zone values for each appointments through the properties `startTimezone` and `endTimezone` which can be defined as separate fields within the event fields collection.

>Note: **timezone** property only applicable for the appointment processing and current time indication.

## Understanding date manipulation in JavaScript

The `new Date()` in JavaScript returns the exact current date object with complete time and timezone information. For example, it may return value such as `Wed Dec 12 2018 05:23:27 GMT+0530 (India Standard Time)` which indicates that the current date is December 12, 2018 and the current time is 5.23 AM on browsers following the IST timezone.

## Scheduler with no timezone

When no specific time zone is set to Scheduler, appointments will be displayed based on the client system's timezone which is the default behavior. Here, the same appointment when viewed from different timezone will have different start and end times.

The following code example displays an appointment from 9.00 AM to 10.00 AM when you open the Scheduler from any of the timezone. This is because, we are providing the start and end time enclosing with `new Date()` which works based on the client browser's timezone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs66/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/schedule/default-cs66/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs66/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs66" %}

## Scheduler set to specific timezone

When a time zone is set to Scheduler through `timezone` property, the appointments will be displayed exactly based on the Scheduler timezone regardless of its client timezone. In the following code example, appointments will be displayed based on Eastern Time (UTC -05:00).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs67/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/schedule/default-cs67/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs67/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs67" %}

## Display events on same time everywhere with no time difference

Setting `timezone` to UTC for Scheduler will display the appointments on same time as in the database for all the users in different time zone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs68/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/schedule/default-cs68/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs68/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs68" %}

## Set specific timezone for events

It is possible to set different timezone for Scheduler events by setting `startTimezone` and `endTimezone` properties within the `eventSettings` option. It allows each appointment to maintain different timezone and displays on Scheduler with appropriate time differences.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs69/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/schedule/default-cs69/src/app.module.ts %}
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/schedule/default-cs70/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs70/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs70" %}

## Timezone methods

### offset

This method is used to calculate the difference between passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object.|
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

This method is used to add the time difference between passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object.|
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
| Date | Date | UTC as date object.|
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

This method is used to remove the local offset time from the date passed.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC as date object.|

Returns `Date`

```typescript
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.removeLocalOffset(date);
    console.log(convertedDate); //2018-12-05T15:25:11.000Z
```

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/schedule/overview) to knows how to present and manipulate data.
