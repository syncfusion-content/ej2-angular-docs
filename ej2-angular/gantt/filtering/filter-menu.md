---
layout: post
title: Filter menu in Angular Gantt component | Syncfusion
description: Learn here all about Filter menu in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter menu 
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in Angular Gantt component

The Gantt Component provides the menu filtering support for each column. You can enable the filter menu by setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) to `true`. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filtermenu-cs2" %}

>[`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) must be set as `true` to enable filter menu.
>Setting [`columns.allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowfiltering) as `false` will prevent filter menu rendering for a particular column.