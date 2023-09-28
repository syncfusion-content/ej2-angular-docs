---
layout: post
title: Change non workingday in Angular Gantt component | Syncfusion
description: Learn here all about Change non workingday in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change non workingday 
documentation: ug
domainurl: ##DomainURL##
---

# Change non workingday in Angular Gantt component

Non-working days/weekend are used to represent the non-productive days in a project. You can define the non-working days in a week using the `workWeek` property in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/changenonworkingday-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/how-to/changenonworkingday-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/changenonworkingday-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/changenonworkingday-cs1" %}

> By default, Saturdays and Sundays are considered as non-working days/weekend in a project.
> In the Gantt component, you can make weekend as working day by setting the `includeWeekend` property to true.