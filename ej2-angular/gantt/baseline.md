---
layout: post
title: Baseline in Angular Gantt component | Syncfusion
description: Learn here all about Baseline in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Baseline 
documentation: ug
domainurl: ##DomainURL##
---

# Baseline in Angular Gantt component

The baseline feature enables users to view the deviation between the planned dates and actual dates of the tasks in a project. Baseline dates or planned dates of a task may or may not be same as the actual task dates. The baseline can be enabled by setting the [`renderBaseline`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#renderbaseline) property to `true` and the baseline color can be changed using the [`baselineColor`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#baselinecolor) property. To render the baseline, you should map the baseline start and end date values from the data source. This can be done using the [`baselineStartDate`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#baselinestartdate) and [`baselineEndDate`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#baselineenddate) properties. The following code example shows how to enable a baseline in the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/baseline/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/baseline/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/baseline/default-cs1" %}