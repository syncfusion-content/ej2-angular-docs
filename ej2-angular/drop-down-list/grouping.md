---
layout: post
title: Grouping in Angular Drop down list component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Drop down list component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Drop down list component

The DropDownList supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

To get started quickly with grouping in angular DropDownList component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=tn6EC6WBHwM" %}

In the following sample, vegetables are grouped according on its category using `groupBy` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs14" %}

## Customization

The grouping header is also provided with customization option. This allows custom designing using the [groupTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#grouptemplate) property for both inline and fixed headers.

## See Also

* [How to limit the search result while filtering](./how-to/search-on-filtering)
* [How to highlight the matched characters in filtering](./how-to/highlight-filtering)
* [How to modify the result data using remote data source](./how-to/modify-data)