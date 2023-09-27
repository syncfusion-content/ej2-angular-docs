---
layout: post
title: Duration unit in Angular Gantt component | Syncfusion
description: Learn here all about Duration unit in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Duration unit 
documentation: ug
domainurl: ##DomainURL##
---

# Duration unit in Angular Gantt component

## Duration units

In Gantt, the task's duration value can be measured by the following duration units,

* Day
* Hour
* Minute

In Gantt, we can define duration unit for whole project by using [`durationUnit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#durationunit) property, when we defines the value for this property, this unit will be applied for all task which don't has duration unit value. And each task in the project can be defined with different duration units and the duration unit of a task can be defined by the following ways,

* Using [`taskFields.durationUnit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#durationunit) property, to map the duration unit data source field.
* Defining the duration unit value along with the duration field in the data source.

### Mapping the duration unit field

The below code snippet explains the mapping of duration unit data source field to the Gantt control using the [`taskFields.durationUnit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#durationunit) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/mapping-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/scheduling-tasks/mapping-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/mapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/mapping-cs1" %}

> NOTE
The default value of the [`durationUnit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#durationunit) property is `day`.

### Defining duration unit along with duration field

Duration units for the tasks can also be defined along with the duration values, the below code snippet explains the duration unit for a task along with duration value,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/durationfield-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/scheduling-tasks/durationfield-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/durationfield-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/durationfield-cs1" %}

>NOTE:
The edit type of the duration column in Gantt is string, to support editing the duration field along with duration units.