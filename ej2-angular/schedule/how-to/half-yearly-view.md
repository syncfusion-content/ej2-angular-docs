---
layout: post
title: Half-yearly view in Angular Schedule component | Syncfusion
description: Learn here all about Half yearly view in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Half-yearly view in Angular Schedule component

The year view of the [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) displays all 365 days and their appointments for a given year. You can customize this view by using the following properties:

* [`firstMonthOfYear`](https://ej2.syncfusion.com/angular/documentation/api/schedule#firstmonthofyear)
* [`monthsCount`](https://ej2.syncfusion.com/angular/documentation/api/schedule#monthscount)
* [`monthHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#monthheadertemplate)

In the following code example, you can see how to render only the last six months of a year in the Schedule component. To start with June, set `firstMonthOfYear` to 6 and `monthsCount` to 6 to render six consecutive months.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/year-customizations-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/year-customizations-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/year-customizations-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/year-customizations-cs1" %}
