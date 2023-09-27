---
layout: post
title: Change schedule dates in Angular Gantt component | Syncfusion
description: Learn here all about Change schedule dates in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change schedule dates 
documentation: ug
domainurl: ##DomainURL##
---
# Change schedule dates in Angular Gantt component

In the Gantt component, you can change the schedule start and end dates by clicking the custom button programmatically using the [`updateProjectDates`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#updateprojectdates) method. You can pass the start and end dates as method arguments to the [`updateProjectDates`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#updateprojectdates) method. You can also pass the Boolean value as an additional parameter, which is used to round-off the schedule start and end dates displayed in Gantt timeline.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/changescheduledates-cs1" %}
