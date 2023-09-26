---
layout: post
title: Sorting and grouping in Angular List box component | Syncfusion
description: Learn here all about Sorting and grouping in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sorting and grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting and grouping in Angular List box component

## Sorting

The ListBox supports sorting of available items in the alphabetical order that can be either ascending or descending. This can achieved using [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#sortorder) property. Sort order can be `None`, `Ascending` or `Descending`.

In the following example, the `SortOrder` is set as `Descending`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/getting-started-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs16" %}

## Grouping

The ListBox supports to wrap the nested element into a group based on its category. The category of each list item can be mapped with [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/list-box/fieldSettingsModel/#groupby) field in the data table.

In the following example, vegetables are grouped based on its category.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/getting-started-cs17/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs17" %}
