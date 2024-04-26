---
layout: post
title: Row selection in Angular Treegrid component | Syncfusion
description: Learn here all about Row selection in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row selection 
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in Angular Treegrid component

## Select row at initial rendering

To select a row at initial rendering, set the [`selectedRowIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectedrowindex) value.

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

Selected row indexes can be obtained by using the [`getSelectedRowIndexes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrowindexes) method.

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

Clear the tree grid selection programmatically by using the [clearSelection](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#clearselection) method.

In the demo below, we initially selected the third row using [selectedRowIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectedrowindex). You can clear this selection by calling the `clearSelection` method in an external button click.

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

Enabling the [selectionSettings.persistSelection](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#persistselection) property will persist the selection in all tree grid operations.

So the selection will be maintained on every page even after navigating to another page.

You can get the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrecords) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/selection-cs7" %}

> To persist the tree grid selection, it is necessary to define any one of the columns as a primary key using the [columns.isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property.

## Get selected rows programmatically

Selected rows can be obtained by using the [`getSelectedRows`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrows) method in the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/selection-cs13" %}