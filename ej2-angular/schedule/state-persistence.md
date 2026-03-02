---
layout: post
title: State persistence in Angular Schedule component | Syncfusion
description: Learn here all about State persistence in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular Schedule component

State persistence allows the Scheduler to retain the [`currentView`](https://ej2.syncfusion.com/angular/documentation/api/schedule#currentview), [`selectedDate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#selecteddate) and scroll position values in the [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) for state maintenance even if the browser is refreshed or you navigate to another page. This behavior is enabled through the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/schedule#enablepersistence) property, which is disabled by default. When set to `true`, the Scheduler’s `currentView`, `selectedDate` and scroll position values are preserved after a page refresh.

> **Note**: The Scheduler `id` is required to enable state persistence.

The following sample demonstrates how to set state persistence of the Scheduler component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs62/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs62/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs62" %}

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to know how to present and manipulate data.