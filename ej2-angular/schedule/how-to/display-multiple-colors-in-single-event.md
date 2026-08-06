---
layout: post
title: Display Multiple Colors in a Single Event in Scheduler | Syncfusion
description: Learn how to render a single appointment with multiple colors in the Syncfusion Angular Scheduler component.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Multi-Color events in Angular Scheduler

In [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) we can display the multiple colors within a single event. This can be achieved by using the `template` option available within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings) property. Here, we've used `SubCount` as an additional field. The SubCount field contains the background color and height values. Based on these values, events will be divided into different colors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/multiple-color-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/multiple-color-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/multiple-color-event" %}