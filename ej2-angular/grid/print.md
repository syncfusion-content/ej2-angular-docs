---
layout: post
title: Angular Grid - Print | Syncfusion
description: Angular Grid printing prepares grid data, applies print‑focused styles, and uses configurable options to produce clean, readable printed output.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular Grid Component

The printing feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid generates a printable representation of the grid for offline access or documentation. Enable printing via the grid's toolbar or by calling the [print](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#print) method.

Enable printing in the grid by configuring the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property and adding `Print` to the list of toolbar items. This displays a `Print` button on the grid toolbar, and clicking it triggers the grid’s printing functionality.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs1" %}

## Page setup

Some print options (layout, paper size, margins) cannot be set via JavaScript; use the browser's print or page setup dialog instead. Below are links to page setup and printing guides for the most common browsers.

* [Chrome](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)
* [Safari](http://www.mintprintables.com/print-tips/adjust-margins-osx/)
* [IE](http://www.helpteaching.com/help/print/index.htm)

## Print by external button

The Grid's content can be printed using an external button by calling the `print` method. This method triggers printing programmatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs2" %}

## Print visible page 

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid prints all pages. Use the [printMode](https://ej2.syncfusion.com/angular/documentation/api/grid#printmode) property to control what is printed. To print only the current visible page, set `printMode` to `CurrentPage`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs3" %}

## Print only selected records

By default, the Angular Data Grid prints all data bound to its [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#datasource). In scenarios where only selected records should be printed, bind to the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid#beforeprint) event and replace the rows of the printing grid with the selected rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs4" %}

## Print the hierarchy grids

The Angular Data Grid supports printing hierarchy grids (a parent grid and its child grids). By default, printing includes the parent grid and expanded child grids only. The print behavior can be customized using the [hierarchyPrintMode](https://ej2.syncfusion.com/angular/documentation/api/grid#hierarchyprintmode) property.

The `hierarchyPrintMode` property in the Angular Grid controls printing behavior for hierarchy grids. Options:

| Mode     | Behavior                                                                         |
| -------- | -------------------------------------------------------------------------------  |
| Expanded | Prints the parent grid with expanded child grids.                                |
| All      | Prints the parent grid with all the child grids, whether expanded or collapsed.  |
| None     | Prints the parent grid alone.                                                    |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs5" %}

## Print master detail grids

The Angular Data Grid provides the option to visualize details of a record in another grid in a master-detail manner. By default, printing a master-detail grid includes only the master grid. The print output can be modified to include both master and detail grids using the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid#beforeprint) event.

The `beforePrint` event fires before printing. Handling this event and adding the detail grid to the `element` argument ensures both master and detail grids appear in the print output.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs6" %}

## Print large number of columns

When printing a grid with a large number of columns, the browser's default page size (usually A4) might not be sufficient to display all the columns properly. As a result, the browser's print preview may automatically hide the overflowed content, leading to a cut-off appearance.

For wide grids, adjust the **print scale** in the browser's print dialog to fits content within the printable area.

![Scale Option Setting](./images/print-preview.png)

## Show or hide columns during printing

The Angular Data Grid provides control over column visibility during printing. Columns can be shown or hidden dynamically using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) and [printComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#printcomplete) events. This allows tailoring of the printed grid output.

In the `toolbarClick` event, columns can be shown or hidden by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column#visible) property to `true` or `false` respectively.

The `printComplete` event resets column visibility to the original configuration.

The following example demonstrates showing a hidden column (Customer ID) and hiding a visible column (Ship City) during printing, then restoring their visibility once printing is complete:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs7" %}

## Add title to print header

Add a title to the printed header by utilizing the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid#beforeprint) event. This event allows customization of the print layout, including adding a title element to make the printed document informative and visually appealing.

Example: adding a title to the grid print output:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-method/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-method" %}

## Optimized approaches for printing full data sets

Printing very large datasets can cause browser performance issues because rendering many DOM elements may slow or hang the browser. The Grid supports virtualization for interactive viewing, but virtualization (rows and columns) is not supported for printing. If all data must be printed, export to [Excel](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-exporting), [CSV](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-exporting), or [PDF](https://ej2.syncfusion.com/angular/documentation/grid/pdf-export/pdf-export) and print the exported file with a desktop application.

## Retain grid styles while printing

The Angular Data Grid provides a [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid#beforeprint) event that enables customization of the grid's appearance and styles before printing. Handling this event ensures the grid retains its styles and appearance in the printed output.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs8" %}

## Print grid along with other components

To print the Angular Data Grid together with other components (for example, a `Chart`), use the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid#beforeprint) event to append cloned content from those components to the print document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs9" %}