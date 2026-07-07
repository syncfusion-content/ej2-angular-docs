---
layout: post
title: Row auto height in Angular Schedule component | Syncfusion
description: Learn here all about Row auto height in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Row auto height in Angular Schedule component

By default, the height of the Scheduler rows in Timeline views is static. Therefore, when the same time ranges hold multiple overlapping appointments, a `+n more` text indicator is displayed. With this feature enabled, you can now view all overlapping appointments in a specific time range by auto-adjusting the row height according to the number of appointments, instead of displaying the `+n more` text indicators.

To enable auto row height adjustments on Scheduler Timeline views and the Month view, set the [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#rowautoheight) property to `true` (default is `false`).

> This auto row height adjustment applies only to all Timeline views and the calendar Month view.

Now, let us see how it works on those applicable views with examples.

![Row Auto Height](images/schedule-row-auto-height.png)

## Calendar month view

By default, the rows of the calendar Month view can hold only a limited number of appointments based on its row height, and the rest of the overlapping appointments are indicated with a `+n more` text indicator. The following example shows how the month view row auto-adjusts based on the number of appointments when this [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#rowautoheight) feature is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs59/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs59/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs59" %}

## Timeline views

When the [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#rowautoheight) feature is enabled in Timeline views, the row height auto-adjusts based on the number of overlapping events in the same time range, as demonstrated in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs60/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs60/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs60" %}

![Timeline Month View](images/schedule-timeline-month.png)

## Timeline views with multiple resources

The following example shows how the auto row adjustment feature works on Timeline views with multiple resources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs61/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs61/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs61" %}

![Timeline views with multiple resources](images/schedule-timeline-resource.png)

## Appointments occupying entire cell

By default, with the feature [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#rowautoheight), there will be a space in the bottom of the cell when appointment is rendered. To avoid this space, we can set true to the property [`ignoreWhitespace`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#ignorewhitespace) with in [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/) whereas its default property value is false. In the following code example, the whitespace below the appointments has been ignored.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/ignore-whitespace-cs1" %}

![Ignoring Whitespace](images/schedule-ignore-whitespace.png)

**Note**: The [`ignoreWhitespace`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/#ignorewhitespace) property applies only when the [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#rowautoheight) feature is enabled in the Scheduler.

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
