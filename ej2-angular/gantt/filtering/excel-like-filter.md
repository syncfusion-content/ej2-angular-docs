---
layout: post
title: Excel like filter in Angular Gantt component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel like filter 
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in Angular Gantt component

You can enable Excel like filter by defining [`filterSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#filtersettings) as `Excel`. The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filtermenu-cs1" %}