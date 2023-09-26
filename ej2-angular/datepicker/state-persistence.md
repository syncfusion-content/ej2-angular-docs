---
layout: post
title: State persistence in Angular Datepicker component | Syncfusion
description: Learn here all about State persistence in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: State persistence 
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular Datepicker component

The persistence is a process of maintaining the user interacted settings on page refresh.

In DatePicker, the selected or entered value has to be persisted on page refresh or navigation to another page. To persist the value set the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#enablepersistence) property as true

> It persists the value in local storage of the browser.

The following example demonstrates the persistence of selected date on page refresh.

Select or enter a date value and then refresh the page by clicking the button (Refresh). Now the previously selected date will be persisted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/state-persistence-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/state-persistence-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/state-persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/state-persistence-cs1" %}