---
layout: post
title: Filter in Angular Spreadsheet component | Syncfusion
description: Learn here all about Filter in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter 
documentation: ug
domainurl: ##DomainURL##
---

# Filter in Angular Spreadsheet component

Filtering helps you to view specific rows in the spreadsheet by hiding the other rows. You can use the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowfiltering) property to enable or disable filtering functionality.

> * The default value for `allowFiltering` property is `true`.

By default, the `Filter` module is injected internally into Spreadsheet to perform filtering.

## Apply filter on UI

In the active Spreadsheet, select a range of cells to filter by value of the cell. The filtering can be done by any of the following ways:

* Select the filter item in the Ribbon toolbar.
* Right-click the sheet, select the filter item in the context menu.
* Use the [`applyFilter()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#applyfilter) method programmatically.
* Use `Ctrl + Shift + L` keyboard shortcut to apply the filter.

> * Use `Alt + Up/Down` keyboard shortcut to open the filter dialog.

## Filter by criteria

The [`applyFilter()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#applyfilter) method will apply the filter UI, based on the predicate and range given in the arguments.

> * The [`beforeFilter`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforefilter) event will be triggered before filtering the specified range.
> * The [`filterComplete`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#filtercomplete) event will be triggered after the filter action is completed successfully.

The following code example shows `filter` functionality in the Spreadsheet control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/filter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/filter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/filter-cs1" %}

## Filter by cell value

To apply a filter for a cell value, right-click the cell and choose filter -> `Filter By Selected Cell's Value` option from the menu. It applies the filter based on the value of the selected cell in the current sheet.

## Clear filter

After applying filter to a certain column, you may want to clear it to make all filtered rows visible again. It can be done in the following ways,

* Choose `Clear` option in ribbon toolbar under `Filter and Sort`. It clears the filters applied in the spreadsheet for all fields.

* Use the `clearFilter()` method programmatically, to clear the applied filters in spreadsheet for all fields.

## Clear filter on a field

After filtering, you can clear/reset the filter for a field alone. It can be done in the following ways,

* Click filter icon in the column’s header and then choose `Clear Filter` option from the filter dialog.
* You can right-click on a filtered column cell and choose `Clear Filter from <Column Name>.` option from the context menu.
* Use the `clearFilter(field)` method programmatically, to clear the filter in a particular column.

## Reapply filter

When you want to reapply the filter after some changes happened in the rows. It can be done in the following ways,

* You can choose `Reapply` option in ribbon toolbar under `Filter and Sort` to reapply the filtered columns again.
* You can right-click on a filtered cell and choose `Reapply` option from the context menu. It reapplies the filters again in the Spreadsheet for all the fields.

## Known error validations

The following errors have been handled for filtering,
* *Out of range validation:* When the selected range is not a used range of the active sheet, it is considered as invalid and the out of range alert with the message `Select a cell or range inside the used range and try again` will be displayed. No filter will be performed if the range is invalid.

## Get data from filtered rows

Filtering allows you to view specific rows in a spreadsheet while hiding the others. The [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowfiltering) property allows you to enable or disable filtering functionality through the UI. You can also use the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowfiltering) property and [`applyFilter`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#applyfilter) method combination to filter data via code behind. The filtered rows can be identified by iterating through the row collection on the sheet and using the `isFiltered` property available in each row object.

The following code example shows how to get the filtered rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/filter-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/filter-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/filter-cs2" %}

## Limitations

The following features have some limitations in Filter:

* Insert/delete row/column between the filter applied cells.
* Merge cells with filter.
* Copy/cut paste the filter applied cells.

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Sorting](./sort)
* [Hyperlink](./link)
* [Undo Redo](./undo-redo)