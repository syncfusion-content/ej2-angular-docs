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

The filter bar feature provides an efficient way to filter data in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid. It displays an input field for each column, enabling quick entry of filter criteria with instant display of filtered results.

To enable filter bar functionality, set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) property to true, then the filter bar row will be rendered next to the header which allows filtering data. Records can be filtered with different expressions depending upon the column type.

**Filter bar expressions:**

The following filter expressions (operators) can be entered manually in the filter bar.

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

The following example demonstrates how to activate default filtering in the TreeGrid.

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

> To enable or dynamically switch the filter type, set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filtersettings/#type) as **FilterBar**.

## Filter bar modes

In the TreeGrid component, the filter bar can operate in two different ways when filtering criteria are applied. These modes, "OnEnter Mode" and "Immediate Mode," provide different experiences and behaviors when interacting with the filter bar. The **OnEnter** mode is the default mode of the filter bar in the TreeGrid component.

**OnEnter Mode:**
By setting [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#mode) as **OnEnter**, the filter bar captures the filter criteria entered but doesn't initiate filtering until the **Enter** key is pressed. This allows multiple criteria modifications without triggering immediate filtering actions.

**Immediate Mode:**
By setting [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#mode) as **Immediate**, the filter bar instantly applies filtering as filter criteria are entered. Filtering actions take place as soon as criteria are input or modified, providing real-time previews of filtering results.

The following example illustrates how to enable different filter bar modes in the TreeGrid.

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

The TreeGrid component provides an option to display filter text within the pager, indicating the current filtering status. Enabling this feature provides a clear understanding of the applied filters and the criteria used for filtering.

To enable the display of filter text within the pager, set the [showFilterBarStatus](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#showfilterbarstatus) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/) configuration.

The following example demonstrates how to display the filter text in the pager of the TreeGrid by using the `showFilterBarStatus` property:

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

In the TreeGrid component, the filter operator for a column can be modified directly within the interface while filtering through the filter bar cell. For instance, the default operator for filtering string-type columns in the filter bar is "startswith". The default operator for a specific column can be customized using the filter operator feature.

To achieve this functionality, enable the [showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#showfilterbaroperator) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/) of the grid object using the TreeGrid instance in the [load](https://helpej2.syncfusion.com/angular/documentation/api/treegrid/#load) event of the TreeGrid.

The following example demonstrates how to show or hide the filter bar operator in the filter bar cell of the TreeGrid by using the `showFilterBarOperator` property.

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

By default, the filter bar is set to a disabled mode for template columns in the TreeGrid. However, in certain cases, the filter bar may need to be hidden for a template column to provide a customized filtering experience.

To hide the filter bar for a template column, use the [filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filtertemplate) property of the [column](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/) and remove the HTML content of the filter bar. This property allows defining a custom template for the filter bar of a column.

Here's an example that demonstrates how to hide the filter bar for a template column in the TreeGrid:

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

Normally, a text box is the default element rendered in the filter bar cell. The components displayed in the filter bar cell can be customized using the [filterBarTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filterbartemplate) feature. This flexibility allows using various components, such as datepicker, numerictextbox, combobox, and multiselect, within the filter bar based on specific requirements.

This video demonstrates how to use custom components in the filter bar in Angular TreeGrid:

{% youtube "https://www.youtube.com/watch?v=LZQjc7DFni4" %}

To utilize this feature, define a custom template for the filter bar by setting the `filterBarTemplate` property of a column in the Angular application.

The following example demonstrates how to show a custom component in the filter bar cell of the TreeGrid by using the `filterBarTemplate` property.

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