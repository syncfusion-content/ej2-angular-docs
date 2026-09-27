---
layout: post
title: Angular Grid Row Styles | Syncfusion
description: Learn how to customize row appearance in Angular Data Grid using CSS classes, events, conditional styling, and row-level customization features.
platform: ej2-angular
control: Row 
documentation: ug
domainurl: ##DomainURL##
---

# Row Styles in Angular Data Grid

Customizing the styles of rows in a [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) allows modification of row appearance to meet specific design requirements. This feature is useful when highlighting certain rows or changing the font style, background color, and other properties of the row to enhance the visual appeal of the grid. To customize row appearance, the Angular Data Grid provides support for CSS styling, properties, methods, and events.

## Style rows with event

The [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#rowdatabound) event provides the most flexible approach for row styling, triggering for every row during data binding. This event handler receives [RowDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/rowdataboundeventargs) containing row details, enabling conditional styling based on data values.

**When to use:**
- Applying conditional formatting based on row data.
- Highlighting rows that meet specific business rules.
- Automatically preserving styles after sorting, filtering, paging, or data updates.

Here's an example of customizing row styles based on the value of the "Freight" column using the `rowDataBound` event. This example involves checking the value of the "Freight" column for each row and adding a CSS class to the row based on the value. The CSS classes "below-30", "below-80", and "above-80" can be defined in the stylesheet to apply the desired styles to the rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-css-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-css-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-css-cs11" %}

> The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event provides similar functionality for individual cell customization and can be combined with row-level styling for comprehensive appearance control.

## Style rows with CSS selectors

Row styles can be applied using CSS selectors. The Data Grid provides a class name for each row element, which can be used to apply styles to that specific row.

**When to use:**
- Customizing the Data Grid theme and appearance.
- Styling alternate, hover, or selected rows.
- Applying consistent styling across all rows.

### Customize alternate row styles

The appearance of alternate rows in the Data Grid can be customized with CSS to improve readability and distinguish rows more clearly. By default, the `.e-altrow` class is applied, which can be overridden with custom styles.

To change the background color of the alternate rows, add the following CSS code to the application's stylesheet:

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

The following example demonstrates using the `.e-altrow` class to style alternate rows:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-style-alt-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-style-alt-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-style-alt-cs1" %}

### Customize selected row styles

The appearance of the selected row in the Data Grid can be customized with CSS to highlight the active selection and enhance visual appeal. By default, the .`e-selectionbackground` class is applied, which can be overridden with custom styles.


```css
.e-grid .e-selectionbackground {
    background-color: #f9920b;
}
```

Here's an example of styling the selected row using the `.e-selectionbackground` class:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-style-selected-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-style-selected-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-style-selected-cs1" %}

## Style rows programmatically

The Data Grid provides comprehensive methods for programmatic row styling and manipulation:

**When to use:**
- Highlighting rows in response to user actions.
- Dynamically adding or removing row styles at runtime.

| Method | Description |
|--------|-------------|
| [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowbyindex) | Returns the HTML element of a row at the specified index. This method applies custom styles to a specific row. |
| [getRowIndexByPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowindexbyprimarykey) | Returns the index of the row with the specified primary key. This method gets the index of a specific row and applies custom styles to it. |
| [getRows](https://ej2.syncfusion.com/angular/documentation/api/grid#getrows) | Returns an array of all the row elements in the grid. This method applies custom styles to all rows or to a specific set of rows based on conditions. |
| [getRowInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowinfo) | Returns the data object and index of the row corresponding to the specified row element. This method applies custom styles based on the data in a row. |
| [getSelectedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrowindexes) | Returns an array of the indexes of the selected rows in the grid. This method applies custom styles to the selected rows. |
| [getSelectedRows](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrows) | Returns an array of the HTML elements representing the selected rows in the grid. This method directly loops through the selected rows and customizes their styles. |

The following example demonstrates customizing the appearance of the row using the [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyindex) method inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#databound) event of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-event-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-event-cs1" %}
