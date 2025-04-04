---
layout: post
title: Checkbox Column in Angular TreeGrid component | Syncfusion
description: Learn here all about Checkbox column in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Checkbox Columns  
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox Column in Angular TreeGrid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component supports checkbox selection in tree column with hierarchical selection of checkboxes using the [autoCheckHierarchy](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#autocheckhierarchy) property of tree grid and showcheckbox property of column. 

When the `autoCheckHierarchy` property is enabled, checking a parent record's checkbox automatically checks the checkboxes of its child records. Checkboxes can be rendered only in the tree column by setting the [column.showCheckbox](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#showcheckbox) property to true.

The following demo demonstrates the hierarchical selection of checkboxes in the tree grid by enabling the  `autoCheckHierarchy` and  `column.showCheckbox` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs1" %}

>* The `column.showCheckbox` property of the column will be utilized only when the column serves as a tree column cell (i.e., the treeColumnIndex column).

## Programmatically select checkboxes 

In the Tree Grid, you can programmatically select checkboxes using the [selectCheckboxes](https://ej2.syncfusion.com/angular/documentation/api/treegrid#selectcheckboxes) method. This method allows you to check checkboxes by passing the desired row indexes.

When you pass the parent record index in the selectCheckboxes method, all child record checkboxes for the corresponding parent record will be selected. So, there is no need to pass the child record index along with the parent record index.

The following demo demonstrates selecting checkboxes in the tree grid using the `selectCheckboxes` method with the parameters as indexes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs2" %}

## Get checked record's details.

In the Tree Grid, you can retrieve details of checked records when using the checkbox column feature through the following methods:

* [getCheckedRecords](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcheckedrecords): Utilize this method to obtain details of the checked records when checkboxes are selected.

* [getCheckedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcheckedrowindexes): Use this method to retrieve details of the row indexes for checked records when checkboxes are selected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs7" %}

## Render checkbox in checked at initial rendering 

In the Tree Grid, you can render checkboxes with a checked state at the initial rendering by using the [selectCheckboxes](https://ej2.syncfusion.com/angular/documentation/api/treegrid#selectcheckboxes) method and the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid#databound) event of the tree grid. This allows you to check checkboxes based on a condition during the data binding process.

In the following demo, rendering checkboxes with a checked state at the initial rendering in the tree grid by utilizing the `dataBound` event. The `dataBound` event triggers initial rendering. In this event, the checkboxes are selected in the tree grid using the `selectCheckboxes` method with the parameters as indexes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs3" %}

## Hide checkbox for parent rows 

In the  Tree Grid, you can customize the visibility of checkboxes for parent / child rows by using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowdatabound) event when utilizing the checkbox column feature. This allows you to conditionally hide checkboxes for specific rows.

In the rowDataBound event, you can access the row element and customize the visibility of checkboxes based on your conditions.

In the following demo, hiding checkboxes for parent rows in the tree grid by using the `rowDataBound` event. It hides the checkboxes by setting the style's display property based on a condition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs4" %}

**Hide checkbox for child rows

In the following demo, hiding checkboxes for child rows in the tree grid by using the `rowDataBound` event. It hides the checkboxes by setting the style's display property based on a condition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs6" %}

## Change row background color on checkbox change event. 

In the Tree Grid, you can customize the background color of the selected row when changing checkbox selection by using the [checkboxChange](https://ej2.syncfusion.com/angular/documentation/api/treegrid#checkboxchange) event. This allows you to provide a visual indication of the selected rows based on the checkbox interactions.

In the [checkboxChange](https://ej2.syncfusion.com/angular/documentation/api/treegrid#checkboxchange) event, you can access the row element by using the [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrowbyindex) method and modify its background color based on the checkbox selection.

In the following demo, customize the background color of selected rows by utilizing the checkboxChange event and getRowByIndex method. In this method, obtain the row element and change the background color by adding or removing the CSS class. Added styles based on the CSS class in the stylesheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs5/src/main.ts %} 
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs5" %}
