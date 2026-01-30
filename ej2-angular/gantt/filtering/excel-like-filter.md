---
layout: post
title: Excel Like Filter in Angular Gantt Chart Component | Syncfusion
description: Learn here all about excel like filter in Syncfusion Angular Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel like filter 
documentation: ug
domainurl: ##DomainURL##
---

# Excel-like Filtering in Angular Gantt Chart Component

The Excel-like filter in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart component enables column-level filtering similar to Microsoft Excel. It supports sorting, clearing filters, and applying advanced conditions through a submenu available in each column header. This feature is highly effective for working with large datasets and applying multiple filter criteria.

To enable this feature, configure [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt#filtersettings) as **Excel** and set [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt#allowfiltering) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filtermenu-cs1" %}

## Show customized text in checkbox list data

To customize the text displayed in a checkbox list, use `filterItemTemplate` and assign it to the desired column. This allows rendering custom content for each item in the filter list.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/show-custom-template/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/show-custom-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/show-custom-template" %}

## Hide Excel filter dialog elements

You can hide elements such as the context menu, search box, sorting options, and checkbox list in the Gantt Excel filter dialog using the following CSS:

```css

.e-gantt .e-excelfilter .e-contextmenu-wrapper {
    display: none;
}

```

If you want to hide only the built-in sorting options (ascending, descending, and separator), apply the following CSS:

```css
 .e-excel-ascending,
 .e-excel-descending,
 .e-separator.e-excel-separator {
    display: none;
  }

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/customize-filtermenu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/customize-filtermenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/customize-filtermenu-cs1" %}

## Customize filter choice count

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart component displays up to 1000 distinct values per column in the filter dialog by default. These values are taken from the first 1000 records bound to the component and shown as checkbox list items to maintain optimal performance. Additional values can be accessed using the search option within the filter dialog.

To customize this behavior, the `filterChoiceCount` property can be adjusted to increase or decrease the number of distinct values displayed, depending on the dataset size and filtering requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/choice-count-filtermenu/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/choice-count-filtermenu/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/choice-count-filtermenu" %}

## Bind custom remote data source for Excel-like filtering

You can dynamically bind a custom remote data source to the Excel filter in the Gantt Chart component by using a [DataManager](https://ej2.syncfusion.com/angular/documentation/data/getting-started) with [WebApiAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#web-api-adaptor). This can be done by assigning the data source directly or storing fetched data in a global variable. Then, bind it to the filter module’s `dataSource` within the [actionBegin](https://ej2.syncfusion.com/angular/documentation/gantt/events#actionbegin) event when `requestType` is **filterBeforeOpen**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/remote-datasource-filtermenu/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/remote-datasource-filtermenu/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/remote-datasource-filtermenu" %}

