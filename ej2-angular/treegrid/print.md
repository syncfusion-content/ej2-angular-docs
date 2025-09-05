---
layout: post
title: Print in Angular TreeGrid component | Syncfusion
description: Learn how to print the Syncfusion Angular TreeGrid component, including toolbar integration, printing modes, page setup, column visibility customization, and performance considerations.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular TreeGrid component

To print the TreeGrid, call the [`print`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#print) method of the TreeGrid instance. The print option can also be added to the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) by including the `print` toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs33/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs33" %}

## Page setup

Certain print options, such as layout, paper size, and page margins, are controlled by the browser's print dialog and cannot be configured via JavaScript. Refer to the following browser-specific resources for more information:

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)
* [`Safari`](http://www.mintprintables.com/print-tips/adjust-margins-osx/)
* [`Internet Explorer`](http://www.helpteaching.com/help/print/index.htm)

## Print using an external button

To print the TreeGrid with an external button, invoke the [`print`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#print) method programmatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs27/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/columns-cs27" %}

## Print the visible page

By default, TreeGrid prints all pages. To print only the current page, set the [`printMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#printmode) property to `CurrentPage`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs34/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs34" %}

## Print large numbers of columns

Browsers use A4 as the default page size, and content exceeding the printable area is hidden in the print preview. As a result, TreeGrid with many columns may have columns cut off or hidden in printouts.

To display more columns, adjust the scale option in the print setup panel according to your content size.

<!-- markdownlint-disable MD033 -->
<img src="images/print-preview.png" alt="Print preview of TreeGrid with many columns" style="width:320px;height: 620px">
<!-- markdownlint-enable MD033 -->

## Show or hide columns while printing

You can control column visibility during printing by handling the [`toolbarClick`](../api/treegrid/#toolbarclick) and [`printComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#printcomplete) events. 

In the `toolbarClick` event, based on `args.item.text` as `Print`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the printComplete event, We have reversed the state back to the previous state.

In the below example, we have `Duration` as a hidden column in the treegrid. While printing, we have changed `Duration` to visible column and `StartDate` as hidden column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs35/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs35" %}

## Printing limitations with large data

Printing a TreeGrid containing large volumes of data at once is not optimal for browser performance. Rendering all DOM elements simultaneously can slow down or hang the browser.

If it is necessary to print all data, consider exporting the TreeGrid to Excel, CSV, or PDF, and then printing from a dedicated application.

> For more information on TreeGrid capabilities, visit the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid) or try the [TreeGrid interactive demo](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to explore real-world data manipulation and presentation.