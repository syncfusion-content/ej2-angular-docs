---
layout: post
title: Filtering in Angular Gantt component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Gantt component

Filtering allows you to view specific or related records based on filter criteria. This can be done in the Gantt Component by using the filter menu support and toolbar search support. To enable filtering in the Gantt Component, set the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) to `true`. Menu filtering support can be configured using the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/) property and toolbar searching can be configured using the [`searchSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/) property.

To use the filter, inject the `FilterService` in the provider section of `AppModule`.

## Filter hierarchy modes

The Gantt supports a set of filtering modes with the [`filterSettings.hierarchyMode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/#hierarchymode) property. The following are the types of filter hierarchy modes available in the Gantt component:

* `Parent`: This is the default filter hierarchy mode in Gantt. The filtered records are displayed with its parent records. If the filtered records do not have any parent record, then only the filtered records will be displayed.

* `Child`: Displays the filtered records with its child record. If the filtered records do not have any child record, then only the filtered records will be displayed.

* `Both`: Displays the filtered records with its both parent and child records. If the filtered records do not have any parent and child records, then only the filtered records will be displayed.

* `None`: Displays only the filtered records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filterhierarchy-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/filtering/filterhierarchy-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filterhierarchy-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filterhierarchy-cs1" %}

### Initial filter

To apply the filter at initial rendering, set the filter to predicate object in the [`filterSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/#columns) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/initialfilter-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/filtering/initialfilter-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/initialfilter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/initialfilter-cs1" %}

### Filter operators

The filter operator for a column can be defined in the `filterSettings.columns.operator` property.

The available operators and its supported data types are:

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether the value begins with the specified value. |String
endswith |Checks whether the value ends with the specified value. |String
contains |Checks whether the value contains the specified value. |String
equal |Checks whether the value is equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks for values not equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether the value is greater than the specified value. |Number &#124; Date
greaterthanorequal|Checks whether a value is greater than or equal to the specified value. |Number &#124; Date
lessthan |Checks whether the value is less than the specified value. |Number &#124; Date
lessthanorequal |Checks whether the value is less than or equal to the specified value. |Number &#124; Date

> By default, the `filterSettings.columns.operator` value is equal.

### Diacritics

By default, the Gantt component ignores the diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/#ignoreaccent) to `true`.

In the following sample, type **Project** in the `TaskName` column to filter diacritic characters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/diacritics-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/filtering/diacritics-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/diacritics-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/diacritics-cs1" %}

## Filtering a specific column by method

You can filter the columns dynamically by using the [`filterByColumn`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#filterbycolumn) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filtercolumn-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/filtering/filtercolumn-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filtercolumn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filtercolumn-cs1" %}

## Clear filtered columns

You can clear all the filtering conditions done in the Gantt component by using the [`clearFiltering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#clearfiltering) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/clearfilter-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/filtering/clearfilter-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/clearfilter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/clearfilter-cs1" %}