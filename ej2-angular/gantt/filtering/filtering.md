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

Filtering allows you to view specific or related records based on filter criteria. This can be done in the Gantt Component by using the filter menu support and toolbar search support. 

To enable filtering in the Angular Gantt component, set [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) to **true**. Menu-based filtering is configured using the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/) property, and toolbar-based search is configured using the [searchSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/) property.

To activate filtering functionality, inject the `FilterService` in the provider section.

## Initial filter

To apply filtering during the initial render of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt, define the filter conditions using a **predicate** object within the [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/#columns) property.

The following sample demonstrates how to apply an initial filter where **TaskName** starts with **Identify** and **TaskID** equals **2**, using a `predicate` condition set to `and`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/initialfilter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/initialfilter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/initialfilter-cs1" %}

### Filter operators

Filter operators can be set using the `filterSettings.columns.operator` property to define the comparison logic for each column.

Supported operators and their applicable data types:

| Operator             | Description                                         | Supported Types                  |
|----------------------|-----------------------------------------------------|----------------------------------|
| `startswith`         | Matches values beginning with the specified text.   | String                           |
| `endswith`           | Matches values ending with the specified text.      | String                           |
| `contains`           | Matches values that include the specified text.     | String                           |
| `equal`              | Matches values exactly equal to the specified text. | String, Number, Boolean, Date    |
| `notequal`           | Matches values not equal to the specified text.     | String, Number, Boolean, Date    |
| `greaterthan`        | Matches values greater than the specified value.    | Number, Date                     |
| `greaterthanorequal` | Matches values greater than or equal to the value.  | Number, Date                     |
| `lessthan`           | Matches values less than the specified value.       | Number, Date                     |
| `lessthanorequal`    | Matches values less than or equal to the value.     | Number, Date                     |

> The default value for `filterSettings.columns.operator` is `equal`.

## Filter hierarchy modes

The Angular Gantt component supports multiple filtering modes, configurable using the [filterSettings.hierarchyMode](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/#hierarchymode) property. The available modes are:

- **Parent**: This is the default mode. Filtered records are displayed along with their parent records. If no parent exists, only the filtered records are shown.

- **Child**: Displays filtered records along with their child records. If no child exists, only the filtered records are shown.

- **Both**: Displays filtered records along with both parent and child records. If neither exists, only the filtered records are shown.

- **None**: Displays only the filtered records without any parent or child context.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filterhierarchy-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filterhierarchy-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filterhierarchy-cs1" %}

## Diacritics

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component ignores diacritic characters during filtering. To enable filtering with diacritic sensitivity, set the [filterSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/#ignoreaccent) property to **true**.

The following sample demonstrates this behavior: when filtering the `TaskName` column, entries containing diacritic characters (e.g., “Próject”, “Projéct”) will be matched if you enter the base text **Project**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/diacritics-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/diacritics-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/diacritics-cs1" %}

## Filtering specific and multiple values using method

You can apply dynamic filtering in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt by using the [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/gantt/#filterbycolumn) method. This enables programmatic filtering without relying on UI interactions.

The following sample demonstrates how to filter the **TaskName** and **TaskID** columns using single and multiple values. The filtering is triggered through an external button click by calling the `filterByColumn` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filtercolumn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filtercolumn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filtercolumn-cs1" %}

## Clear filtered columns

You can clear all the filtering conditions applied in the Gantt component by using the [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#clearfiltering) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/clearfilter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/clearfilter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/clearfilter-cs1" %}

## Enable different filter for a column

You can enable different filter types for each column in the Gantt component by setting the `column.filter.type` property. This allows you to apply specific filtering behaviors such as Menu, Excel, or Checkbox filters based on your requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/different-filter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/different-filter/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/different-filter" %}

## Customize filtering action

You can customize the filtering behavior in the Syncfusion Angular Gantt using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/gantt/events#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#actioncomplete) events. These events allow you to inject custom logic at different stages of the filtering workflow.

The following sample demonstrates how to handle different filtering stages using `args.requestType`:
  
- For **filterBeforeOpen**, customize filter operators based on `args.columnType` (number or string).  
- For **filtering**, cancel the action if `args.currentFilteringColumn` is **StartDate**.  
- For **filterAfterOpen**, apply background styling to the filter dialog content and footer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filter-events/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filter-events/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filter-events" %}