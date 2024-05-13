---
layout: post
title: Filter bar in Angular TreeGrid component | Syncfusion
description: Learn here all about Filter bar in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter bar 
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in Angular TreeGrid component

The filter bar feature provides a user-friendly way to filter data in the Syncfusion Angular Tree Grid. It displays an input field for each column, allowing you to enter filter criteria and instantly see the filtered results.

By defining the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) to true, then filter bar row will be rendered next to header which allows you to filter data. You can filter the records with different expressions depending upon the column type.

**Filter bar expressions:**

You can enter the following filter expressions(operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A |Always **equal** operator will be used for Date filter |Date
N/A |N/A |Always **equal** operator will be used for Boolean filter |Boolean

The following example demonstrates how to activate default filtering in the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs4" %}

> To enable or dynamically switch the filter type, you must set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filtersettings/#type) as **FilterBar**.

## Filter bar modes

In the TreeGrid component, the filter bar can operate in two different ways when filtering criteria are applied. These modes, "OnEnter Mode" and "Immediate Mode," provide different experiences and behaviors when interacting with the filter bar. The **OnEnter** mode is the default mode of the filter bar in the TreeGrid component.

**OnEnter Mode:**
By settings [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#mode) as **OnEnter**, the filter bar captures the filter criteria entered but doesn't initiate filtering until the **Enter** key is pressed. This allows multiple criteria modifications without triggering immediate filtering actions.

**Immediate Mode:**
By settings [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#mode) as **Immediate**, the filter bar instantly applies filtering as filter criteria are entered. Filtering actions take place as soon as criteria are input or modified, providing real-time previews of filtering results.

The following example illustrates how to enable different filter bar modes in the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs5/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs5" %}

## Display filter text in pager

The TreeGrid component provides an option to display filter text within the pager, indicating the current filtering status. Enabling this feature provides you with a clear understanding of the applied filters and the criteria used for filtering.

To enable the display of filter text within the pager, you should set the [showFilterBarStatus](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#showfilterbarstatus) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/) configuration.

The following example demonstrates how to display the filter text in the pager of the tree grid by using the `showFilterBarStatus` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs23/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs23/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs23" %}

## Show or hide filter bar operator in filter bar cell

In the TreeGrid component, you have the ability to modify the filter operator for a column directly within the interface while filtering through the filter bar cell. For instance, the default operator for filtering string-type columns in the filter bar is "startswith". Now, you can customize the default operator for a specific column using the filter operator feature.

To achieve this functionality, you can enable the  [showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#showfilterbaroperator) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/) of the grid object using the tree grid instance in the [load](https://helpej2.syncfusion.com/angular/documentation/api/treegrid/#load) event of the tree grid.

The following example demonstrates how to show or hide the filter bar operator in the filter bar cell of the tree grid by using the `showFilterBarOperator` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs24/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs24/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs24" %}

## Hide filter bar for template column

By default, the filter bar is set to a disabled mode for template columns in the grid. However, in certain cases, you may want to hide the filter bar for a template column to provide a customized filtering experience.

To hide the filter bar for a template column, you can use the [filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filtertemplate) property of the [column](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/) and remove the html content of the filter bar. This property allows you to define a custom template for the filter bar of a column.

Here's an example that demonstrates how to hide the filter bar for a template column in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs25/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs25/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/filtering-cs25" %}

## Filter bar template with custom component

Normally, text box is the default element rendered in the filter bar cell. You can customize the components displayed in the filter bar cell using the [filterBarTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filterbartemplate) feature. This flexibility allows you to use various components, such as datepicker, numerictextbox, combobox, and multiselect, within the filter bar based on your specific requirements.

You can check this video to learn about how to use custom component in filter bar in Angular Tree Grid.

{% youtube "https://www.youtube.com/watch?v=LZQjc7DFni4" %}


To utilize this feature, you can define a custom template for the filter bar by setting the `filterBarTemplate` property of a column in your Angular application.

The following example demonstrates how to show a custom component in the filter bar cell of the tree grid by using the `filterBarTemplate` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filter-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filter-template-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filter-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filter-template-cs1" %}