---
layout: post
title: Excel like filter in Angular Grid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel like filter 
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in Angular Grid component

The Syncfusion Grid component offers an Excel-like filter feature, providing a familiar and user-friendly interface for filtering data within the grid. This feature simplifies complex filtering operations on specific columns, allowing for quick data location and manipulation, similar to Microsoft Excel. Excel like filtering is especially useful when dealing with large datasets and complex filtering requirements.

Here is an example that showcasing how to render the excel like filter within the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-like-filtering-cs1" %}

>* The Excel-like filter feature supports various filter conditions, including text-based, number-based, date-based, and boolean-based filters.
>* The filter dialog provides additional options, such as sorting filter values, searching for specific values, and clearing applied filters.

## Checkbox filtering

The checkbox filtering feature in Syncfusion Angular Grid enables you to filter data based on checkbox selections within a column. This powerful filtering option simplifies the process of narrowing down data, providing a more efficient and user-friendly experience. The check box filter feature is particularly useful when dealing with columns containing categorical data.

Here is an example that showcasing how to render the check box filter within the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/check-box-filter-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/check-box-filter-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/check-box-filter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/check-box-filter-cs1" %}

## Show customized text in checkbox list data

The Syncfusion Angular Grid component provides you with the flexibility to customize the text displayed in the Excel/Checkbox filtering options. This allows you to modify the default text and provide more meaningful and contextual labels for the filtering.

To customize the text in the Excel/Checkbox filter, you can define a `filterItemTemplate` and bind it to the desired column. The `filterItemTemplate` property allows you to create custom templates for filter items. You can use any logic and HTML elements within this template to display the desired text or content.

In the example below, you can see how you can customize the text displayed in the filter checkbox list for the **Delivered** column. This is achieved by defining a `filterItemTemplate` within the <e-column> element for that specific column. Inside the template, you can use Angular's template syntax to conditionally display **Delivered** if the data value is true and **Not delivered** if the value is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-like-filtering-cs7" %}

## Show template in checkbox list data

The `filterItemTemplate` property in the Syncfusion Angular Grid allows you to customize the appearance of filter items in the grid's filter checkbox list for a specific column. This property is useful when you want to provide a custom UI or additional information within the filter checkbox list, such as icons, text, or any HTML elements, alongside the default filter items.

In this example, you can see how to use the `filterItemTemplate` to render icons along with the category names in the filter checkbox list for the **Category Name** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-like-filtering-cs4" %}

> * By default, while opening the excel/checkbox filter in the Grid, the filter dialog will get and display the distinct data from the first 1000 records bound to the Grid to optimize performance. The remaining records will be returned as a result of the search option of the filter dialog.
> * However, we can increase the excel/checkbox filter count by modifying the `filterChoiceCount` argument value(as per our need) in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionBegin) event when the [requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#requesttype) is `filterchoicerequest` or `filtersearchbegin`. This is demonstrated in the below code snippet,

```typescript
actionBegin(args: FilterSearchBeginEventArgs) {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
    }
}
```

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)
* [How to change loading indicator in Angular Grid](../data-binding/data-binding.md#loading-animation)
