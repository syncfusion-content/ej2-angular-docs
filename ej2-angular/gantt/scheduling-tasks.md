---
layout: post
title: Scheduling tasks in Angular Gantt component | Syncfusion
description: Learn here all about Scheduling tasks in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduling tasks 
documentation: ug
domainurl: ##DomainURL##
---

# Scheduling tasks in Angular Gantt component

## Duration units

In the Gantt component, the tasks’ duration value can be measured by the following duration units:

* Day
* Hour
* Minute

In the Gantt component, you can define the duration unit for whole project by using the [`durationUnit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#durationunit) property. When you define a value for this property, the duration unit will be applied for all tasks that do not have duration unit value.

Each task in the project can be defined with different duration units and the duration unit of a task can be defined by the following ways:
* Using the [`taskFields.durationUnit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#durationunit) property, you can map the duration unit of data source field.
* Defining the duration unit value along with duration field in the data source.

### Mapping the duration unit field

The following code snippet explains mapping the data source field of the duration unit to the Gantt component using the [`taskFields.durationUnit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#durationunit) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/mapping-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/mapping-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/mapping-cs2" %}

> NOTE
The default value of the [`durationUnit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#durationunit) property is `day`.

### Defining duration unit along with duration field

A duration unit for a task can be defined along with duration value, the following code snippet explains the duration unit for a task along with duration value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/durationfield-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/durationfield-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/durationfield-cs2" %}

>NOTE:
The edit type of the duration column in Gantt is string, to support editing the duration field along with duration units.

## Unscheduled tasks

Unscheduled tasks are planned for a project without any definite schedule dates. The Gantt component supports rendering the unscheduled tasks. You can create or update the tasks with anyone of start date, end date, and duration values or none. You can enable or disable the unscheduled tasks by using the [`allowUnscheduledTasks`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowunscheduledtasks) property.

## Unscheduled task types

The following images represent the various types of unscheduled tasks in Gantt.

### Start date only

![Alt text](images/startDate-only.png)

### End date only

![Alt text](images/endDate-only.png)

### Duration only

![Alt text](images/duration-only.png)

### Milestone

A milestone is a task that has no start and end dates, but it has a duration value of zero. It is represented as follows.

![Alt text](images/milestone.png)

### Define unscheduled tasks in data source

You can define the various types of unscheduled tasks in the data source as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/unscheduledtasks-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/unscheduledtasks-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/unscheduledtasks-cs1" %}

> NOTE
> If the [`allowUnscheduledTasks`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowunscheduledtasks) property is set to false, then the Gantt control automatically calculates the scheduled date values with a default value of duration 1 and the project start date is considered as the start date for the task.

## Working time range

In the Gantt component, working hours in a day for a project can be defined by using the [`dayWorkingTime`](https://ej2.syncfusion.com/angular/documentation/api/gantt/dayWorkingTime/) property. Based on the working hours, automatic date scheduling and duration validations for a task are performed.

The following code snippet explains how to define the working time range for the project in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/workingtimerange-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/workingtimerange-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/workingtimerange-cs1" %}

> NOTE
>* Individual tasks can lie between any time within the defined working time range of the project.
>* The [`dayWorkingTime`](https://ej2.syncfusion.com/angular/documentation/api/gantt/dayWorkingTime/) property is used to define the working time for the whole project.

## Weekend / Non-working days

Non-working days/weekend are used to represent the non-productive days in a project. You can define the non-working days in a week using the [`workWeek`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#workweek) property in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/changenonworkingday-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/changenonworkingday-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/changenonworkingday-cs1" %}

> By default, Saturdays and Sundays are considered as non-working days/weekend in a project.
> In the Gantt component, you can make weekend as working day by setting the [`includeWeekend`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#includeweekend) property to `true`.