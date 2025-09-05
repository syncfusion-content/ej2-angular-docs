---
layout: post
title: Row selection in Angular TreeGrid component | Syncfusion
description: Learn how to use row selection in the Syncfusion Angular TreeGrid component, including programmatic selection, getting selected indexes and records, and persistent selection.
platform: ej2-angular
control: Row selection
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in Angular TreeGrid component

## Select row at initial rendering

To select a row when the TreeGrid first renders, set the [`selectedRowIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectedrowindex) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs4" %}

## Get selected row indexes

Obtain selected row indexes using the [`getSelectedRowIndexes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrowindexes) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs5" %}

## Clear selection programmatically

Clear TreeGrid selection programmatically by using the [`clearSelection`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#clearselection) method.

In the demo below, the third row is selected initially using [`selectedRowIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectedrowindex). You can clear this selection by calling the `clearSelection` method, such as on an external button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs6" %}

## Get selected records on various pages

Enable the [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#persistselection) property to maintain selection across all TreeGrid operations. With persistence enabled, selection is retained on every page, even after navigation.

Get the selected records using the [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrecords) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs7" %}

> To persist selection, at least one column must be defined as a primary key using the [`columns.isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property.

## Get selected rows programmatically

Retrieve selected row elements using the [`getSelectedRows`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrows) method in the TreeGrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs13" %}