---
layout: post
title: Eventmarkers in Angular Gantt component | Syncfusion
description: Learn here all about Eventmarkers in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Eventmarkers 
documentation: ug
domainurl: ##DomainURL##
---

# Eventmarkers in Angular Gantt component

The event markers in the Gantt component is used to highlight the important events in a project. Event markers can be initialized by using the [`eventMarkers`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#eventmarkers) property, and you can define date and label for the event markers using the [`day`](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/#day) and [`label`](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/#label) properties. You can also customize it using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/#cssclass) properties. The following code example shows how to add event markers in the Gantt component.

To highlight the days, inject the `DayMarkersService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/eventmarkers/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/eventmarkers/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/eventmarkers/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/eventmarkers/default-cs1" %}