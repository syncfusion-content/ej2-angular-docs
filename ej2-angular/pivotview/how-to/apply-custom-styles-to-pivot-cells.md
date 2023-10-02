---
layout: post
title: Apply custom style to pivot cells in Angular Pivotview component | Syncfusion
description: Learn here all about Apply custom style to pivot cells in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Apply custom style to pivot cells 
documentation: ug
domainurl: ##DomainURL##
---

# Apply custom style to pivot cells in Angular Pivotview component

The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event in [gridSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings) can be used to apply custom style to row and value cells, and the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#headercellinfo) event in [gridSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings) can be used to apply custom styles to column cells.

In the following example, a custom style has been applied to the column header **"Sold Amount"** under **"FY 2016"** via the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#headercellinfo) event and to the row header **"Germany"** and its aggregated value via the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event by adding the **"e-custom"** class to the cell element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs310/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs310/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs310/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs310" %}

N> The **dot(.)** character in **FY 2016.Sold Amount** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [headerDelimiter](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/valueSortSettingsModel/#headerdelimiter) in the [valueSortSettings](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#valuesortsettings) property to any other delimiter instead of the default separator.