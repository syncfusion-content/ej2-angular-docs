---
layout: post
title: Angular Grid - Programmatic Filtering | Syncfusion
description: Learn Angular Grid programmatic filtering using filter APIs, retrieve filtered records, inspect filter details, and clear filters programmatically.
platform: ej2-angular
control: Filtering
documentation: ug
domainurl: ##DomainURL##
---

# Programmatic Filtering in Angular Grid

Programmatic filtering allows filters to be applied to specific columns through code, without relying on user interface interactions. This capability is useful for applying predefined filter criteria when the grid loads or for triggering filters from external application logic. Programmatic filtering is performed using the [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/grid#filterbycolumn) method.

The following example demonstrates programmatic filtering using single and multiple values for the "Order ID" and "Customer ID" columns. The `filterByColumn` method is called within an external button click function.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs8" %}

## Get filtered records

Use Data Grid methods and properties to retrieve records that satisfy the active filter criteria.

### Using the getFilteredRecords() method

The [getFilteredRecords](https://ej2.syncfusion.com/angular/documentation/api/grid#getfilteredrecords) method returns an array of records that match the filters currently applied on the grid. When the Data Grid is bound to remote data, this method returns a Promise that resolves to the filtered records.

The following example demonstrates getting filtered data using the `getFilteredRecords` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/filter-cs9/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs9" %}

### Using the properties in the FilterEventArgs object

Alternatively, use properties available in the [FilterEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs) object to obtain filter record details:

* [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs#columns): Returns the collection of filtered columns.
* [currentFilterObject](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs#currentfilterobject): Returns the filter object for the current filtering operation.
* [currentFilteringColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs#currentfilteringcolumn): Returns the name of the column currently being filtered.

Access these properties in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event handler:

```typescript
actionComplete(args: FilterEventArgs) {
    const filteredColumns = args.columns;
    const filterObject = args.currentFilterObject;
    const filteringColumn = args.currentFilteringColumn;
}
```

## Clear filters programmatically

The Data Grid provides the [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid#clearfiltering) method to remove filter conditions and reset the grid to its original state. To clear filters on specific columns, pass the column field names as an array to the optional `fields` argument of the method.

The following example demonstrates clearing filters using the `clearFiltering` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs10" %}

## See Also

* [How to apply initial filter on custom binding in Angular Data Grid](https://www.syncfusion.com/forums/152157/how-to-apply-initial-filter-on-custom-binding-in-angular-grid)
* [How to custom the display value of checkbox filter option in Angular Data Grid](https://www.syncfusion.com/forums/154478/how-to-custom-the-display-value-of-checkbox-filter-option-in-angular-grid)
* [How to perform filter using Wildcard and LIKE filter operators](./filtering#wildcard-and-like-filters)