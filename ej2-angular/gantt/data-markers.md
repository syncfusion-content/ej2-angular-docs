---
layout: post
title: Data markers in Angular Gantt component | Syncfusion
description: Learn here all about Data markers in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data markers 
documentation: ug
domainurl: ##DomainURL##
---

# Data markers in Angular Gantt component

Data markers are a set of events used to represent the schedule events for a task. Data markers are defined in data source as array of objects, and this value is mapped to the Gantt control using the [`taskFields.indicators`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#indicators) property. You can represent more than one data marker in a task.

Data markers can be defined using the following properties:

* [`date`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator/#date): Defines the date of indicator.
* [`iconClass`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator/#iconclass): Defines the icon class of indicator.
* [`name`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator/#name): Defines the name of indicator.
* [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator/#tooltip): Defines the tooltip of indicator.

>Note: Data Marker `tooltip` will be rendered only if tooltip property has value.

The following code example demonstrates how to implement data markers in the Gantt chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/datamarkers/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/datamarkers/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/datamarkers/default-cs1" %}