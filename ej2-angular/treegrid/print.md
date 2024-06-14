---
layout: post
title: Print in Angular TreeGrid component | Syncfusion
description: Learn here all about Print in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular TreeGrid component

The printing feature in TreeGrid component allows you to easily generate and print a representation of the tree grid's content for better offline accessibility and documentation. You can enable this feature using either the tree grid's toolbar or the programmatically available [print](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#print) method.

To add the printing option to the tree grid's toolbar, simply include the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property in your tree grid configuration and add the **Print** as toolbar item. This will allow you to directly initiate the printing process while click on the **Print** item from the toolbar.

The following example demonstrates how to use the print option using a toolbar item in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/print-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/print-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/print-cs1" %}

## Page setup

When printing a webpage, some print options, such as layout, paper size, and margin settings, cannot be configured through JavaScript code. Instead, you need to customize these settings using the browser's page setup dialog. Below are links to the page setup guides for popular web browsers:

* [Chrome](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)
* [Safari](http://www.mintprintables.com/print-tips/adjust-margins-osx/)
* [IE](http://www.helpteaching.com/help/print/index.htm)

## Print by external button

You can print the tree grid's content using an external button by utilizing the [print](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#print) method. This method allows you to trigger the printing process programmatically.

The following example demonstrates how to use printing with an external button in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/print-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/print-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/print-cs2" %}

## Print only visible page records

By default, the tree grid prints all the pages of the tree grid. The [printMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#printmode) property within the tree grid grants you control over the printing process. However, if you want to print only the current visible page, you can achieve this by setting the `printMode` property to **CurrentPage**.

The following example demonstrates how to print only the visible page records in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/print-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/print-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/print-cs3" %}

## Print all parent rows in expanded state

The TreeGrid component allows you to print both parent and child records, even if they are in a collapsed state. This can be achieved by using the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeprint) and [printComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#printcomplete) events. By handling the `beforePrint` event, you can expand all rows temporarily for printing, and then restore the original state in the `printComplete` event.

Here is an example demonstrating how to print both the parent and child records when the tree grid is in the collapsed state:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/print-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/print-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/print-cs8" %}

## Print only selected records

By default, the tree grid prints all the data bound to its [dataSource]() property. However, there might be cases where you want to print only the selected records from the tree grid. The tree grid provides an option to achieve this by binding to the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeprint) event, where you can replace the rows of the printing tree grid with the selected rows.

The following example demonstrates how to print only the selected records from the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/print-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/print-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/print-cs4" %}

## Print large number of columns

When printing a tree grid with a large number of columns, the browser's default page size (usually A4) might not be sufficient to display all the columns properly. As a result, the browser's print preview may automatically hide the overflowed content, leading to a cut-off appearance.

To show a large number of columns when printing, you can adjust the scale option from the print option panel based on your content size. This will allow you to fit the entire grid content within the printable area.

![Scale Option Setting](./images/print-preview.png)

## Show or hide columns while printing

In the TreeGrid component, you have the flexibility to control the visibility of columns during the printing process. You can dynamically show or hide specific columns using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid#toolbarclick) and [printComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid#printcomplete) events while printing. This capability enhances your control over which columns are included in the printed output, allowing you to tailor the printed tree grid to your specific needs.

In the `toolbarClick` event, you can show or hide columns by setting [column.visible](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#visible) property to **true** or **false** respectively.

In the `printComplete` event, the column visibility state is reset back to its original configuration.

Here's a code example that demonstrates how to show a hidden column (Progress) and hide a visible column (duration) during printing and then reset their visibility after printing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/print-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/print-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/print-cs5" %}

## Limitations of printing large data

Printing a large volume of data all at once in the tree grid can have certain limitations due to potential browser performance issues. Rendering numerous DOM elements on a single page can lead to browser slowdowns or even hang the browser. The tree grid offers a solution to manage extensive datasets through virtualization. However, it's important to note that virtualization for both rows and columns is not feasible during the printing process.

If printing all the data remains a requirement, an alternative approach is recommended. Exporting the grid data to formats like [Excel](https://ej2.syncfusion.com/angular/documentation/treegrid/excel-exporting/) or [CSV](https://ej2.syncfusion.com/angular/documentation/treegrid/excel-exporting/) or [Pdf](https://ej2.syncfusion.com/angular/documentation/treegrid/pdf-export/) is advised. This exported data can then be printed using non-web-based applications, mitigating the potential performance challenges associated with printing large datasets directly from the browser.

## Retain grid styles while printing

The TreeGrid component provides a [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeprint) event that allows you to customize the appearance and styles of the tree grid before it is sent to the printer. By handling this event, you can ensure that the grid retains its styles and appearance while printing.

Here is an example demonstrating how to retain the styles while printing in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/print-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/print-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/print-cs6" %}

## Print treegrid along with other components

To print the tree grid along with another component, such as a chart, grid, you can use the [beforePrint](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeprint) event of the tree grid. In this event, you can clone the content of the other component and append it to the print document.

Here is an example of how to print tree grid along with grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/print-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/print-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/print-cs7" %}
