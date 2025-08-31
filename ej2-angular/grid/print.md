---
layout: post
title: Print in Angular Grid component | Syncfusion
description: Learn here all about Print in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular Grid component

The printing feature in Syncfusion Grid allows you to easily generate and print a representation of the grid's content for physical documentation and offline reference. You can enable this feature using either the grid's toolbar or the programmatically available `print` method.

To add the printing option to the grid's toolbar, include the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property in your grid configuration and add **Print** as a toolbar item. This allows you to directly initiate the printing process when clicking on the Print item from the toolbar.

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

When printing a webpage, print options such as layout, paper size, and margin settings cannot be configured through JavaScript code due to browser security restrictions. Instead, you need to customize these settings using the browser's page setup dialog. Below are links to the page setup guides for popular web browsers:

* [Chrome](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)
* [Safari](http://www.mintprintables.com/print-tips/adjust-margins-osx/)
* [IE](http://www.helpteaching.com/help/print/index.htm)

## Print using external button

You can print the grid's content using an external button by utilizing the [print](https://ej2.syncfusion.com/angular/documentation/api/grid/#print) method. This method allows you to trigger the printing process programmatically without requiring the built-in toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs2" %}

## Print current visible page only

By default, the Syncfusion Angular Grid prints all pages of the grid data. The [printMode](https://ej2.syncfusion.com/angular/documentation/api/grid/#printmode) property allows you to control the printing scope. To print only the current visible page, set the [printMode](https://ej2.syncfusion.com/angular/documentation/api/grid/#printmode) property to **CurrentPage**.

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

By default, the Syncfusion Angular Grid prints all data bound to its dataSource. However, you can print only the selected records from the grid by handling the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeprint) event, where you can replace the rows of the printing grid with the selected rows.

The following example demonstrates how to print only the selected records from the Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs4" %}

## Print hierarchy grids

The Syncfusion Angular Grid supports printing hierarchy grids, which consist of a parent grid and its child grids. By default, when you print a hierarchy grid, it includes the parent grid and expanded child grids only. You can customize the print behavior using the [hierarchyPrintMode](https://ej2.syncfusion.com/angular/documentation/api/grid/#hierarchyprintmode) property.

The `hierarchyPrintMode` property allows you to control the printing behavior for hierarchy grids. You can choose from three options:

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

The Syncfusion Angular Grid provides the option to visualize details of a record in another grid in a master-detail manner. By default, when you print a master-detail grid, only the master grid is included in the print output. You can customize the print behavior to include both the master and detail grids using the `beforePrint` event of the grid.

The [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeprint) event triggers before the actual printing process begins. You can handle this event to customize the print output. By adding the detail grid to the `element` argument of the `beforePrint` event, you can ensure that both the master and detail grids are printed on the page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs6" %}

## Print grids with many columns

When printing a grid with a large number of columns, the browser's default page size (usually A4) might not be sufficient to display all columns properly. As a result, the browser's print preview may automatically hide the overflowed content, leading to a cut-off appearance.

To display all columns when printing, you can adjust the scale option from the print option panel based on your content size. This allows you to fit the entire grid content within the printable area.

![Scale Option Setting](./images/print-preview.png)

## Show or hide columns during printing

In the Syncfusion Angular Grid, you have the flexibility to control column visibility during the printing process. You can dynamically show or hide specific columns using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) and [printComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#printcomplete) events. This capability allows you to tailor the printed grid to your specific requirements.

In the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, you can show or hide columns by setting the [column.visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property to **true** or **false** respectively.

In the `printComplete` event, the column visibility state is reset back to its original configuration.

The following example demonstrates how to show a hidden column (CustomerID) and hide a visible column (ShipCity) during printing and then reset their visibility after printing:

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

You can add a title to the header when printing the Syncfusion Grid by utilizing the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeprint) event. This event allows you to customize the print layout, including the addition of a title element, ensuring that the printed document is informative and visually appealing.

The following example shows how to add a title to your Grid when using the print function:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-method/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-method" %}

## Limitations when printing large datasets

Printing a large volume of data all at once in the grid can have certain limitations due to potential browser performance issues. Rendering numerous DOM elements on a single page can lead to browser slowdowns or even hang the browser. The grid offers a solution to manage extensive datasets through virtualization. However, virtualization for both rows and columns is not feasible during the printing process.

If printing all data remains a requirement, an alternative approach is recommended. Exporting the grid data to formats like [Excel](https://ej2.syncfusion.com/angular/documentation/grid/excel-exporting/), [CSV](https://ej2.syncfusion.com/angular/documentation/grid/excel-exporting/), or [PDF](https://ej2.syncfusion.com/angular/documentation/grid/pdf-export/) is advised. This exported data can then be printed using non-web-based applications, mitigating the potential performance challenges associated with printing large datasets directly from the browser.

## Retain grid styles while printing

The Syncfusion Angular Grid provides a [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeprint) event that allows you to customize the appearance and styles of the grid before it is sent to the printer. By handling this event, you can ensure that the grid retains its styles and appearance during the printing process.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs8" %}

## Print grid with other components

To print the Syncfusion Angular Grid along with another component, such as a chart, you can use the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeprint) event of the grid. In this event, you can clone the content of the other component and append it to the print document.

The following example shows how to print grid along with chart component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs9" %}