---
layout: post
title: Add edit and remove events in Angular Scheduler | Syncfusion
description: Learn here all about Add edit and remove events in Angular Scheduler component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Perform CRUD Actions Dynamically in Angular Scheduler

CRUD actions can be manually performed on appointments using the [`addEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule#addevent), [`saveEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule#saveevent), and [`deleteEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule#deleteevent) methods in the [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler), as shown below.

## Normal events

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs44/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs44" %}

## Recurring events

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs45/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/default-cs45" %}
```