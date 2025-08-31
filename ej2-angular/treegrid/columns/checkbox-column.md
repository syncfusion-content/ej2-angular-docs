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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component supports checkbox selection in the tree column with hierarchical selection functionality using the [autoCheckHierarchy](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#autocheckhierarchy) property and the showCheckbox property of the column.

When the `autoCheckHierarchy` property is enabled, selecting a parent record's checkbox automatically selects all checkboxes of its child records, maintaining the hierarchical relationship. Checkboxes can be rendered only in the tree column by setting the [column.showCheckbox](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#showcheckbox) property to true.

The following example demonstrates the hierarchical selection of checkboxes in the TreeGrid by enabling the `autoCheckHierarchy` and `column.showCheckbox` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs1" %}

>* The `column.showCheckbox` property will be utilized only when the column serves as a tree column cell (i.e., the treeColumnIndex column).

## Programmatically select checkboxes 

The TreeGrid allows programmatic checkbox selection using the [selectCheckboxes](https://ej2.syncfusion.com/angular/documentation/api/treegrid#selectcheckboxes) method. This method accepts an array of row indexes to check the corresponding checkboxes.

When a parent record index is passed to the selectCheckboxes method, all child record checkboxes for that parent will be automatically selected due to the hierarchical relationship. Therefore, passing child record indexes along with the parent record index is unnecessary.

The following example demonstrates programmatic checkbox selection in the TreeGrid using the `selectCheckboxes` method with row indexes as parameters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs2" %}

## Get checked record details

The TreeGrid provides methods to retrieve information about checked records when using the checkbox column feature:

* [getCheckedRecords](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcheckedrecords): Returns an array of data objects for all checked records.

* [getCheckedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcheckedrowindexes): Returns an array of row indexes for all checked records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs7" %}

## Render checkbox in checked state at initial rendering 

The TreeGrid allows rendering checkboxes in a checked state during initial rendering by combining the [selectCheckboxes](https://ej2.syncfusion.com/angular/documentation/api/treegrid#selectcheckboxes) method with the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid#databound) event. This enables conditional checkbox selection during the data binding process.

The following example demonstrates rendering checkboxes in a checked state at initial rendering using the `dataBound` event. The `dataBound` event triggers after initial data rendering, where checkboxes are selected using the `selectCheckboxes` method with specific row indexes.

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

The TreeGrid allows customization of checkbox visibility for parent or child rows using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowdatabound) event when utilizing the checkbox column feature. This enables conditional hiding of checkboxes for specific rows based on custom logic.

The rowDataBound event provides access to the row element, allowing customization of checkbox visibility based on specific conditions.

The following example demonstrates hiding checkboxes for parent rows in the TreeGrid using the `rowDataBound` event. The checkboxes are hidden by setting the display style property based on the row's hierarchical level.

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

The following example demonstrates hiding checkboxes for child rows in the TreeGrid using the `rowDataBound` event. The checkboxes are hidden by setting the display style property based on the row's hierarchical level condition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs6" %}

## Change row background color on checkbox change event

The TreeGrid enables customization of row background color when checkbox selection changes using the [checkboxChange](https://ej2.syncfusion.com/angular/documentation/api/treegrid#checkboxchange) event. This provides visual feedback for selected rows based on checkbox interactions.

The [checkboxChange](https://ej2.syncfusion.com/angular/documentation/api/treegrid#checkboxchange) event provides access to the row element through the [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrowbyindex) method, enabling background color modification based on checkbox selection state.

The following example demonstrates customizing the background color of selected rows using the checkboxChange event and getRowByIndex method. The row element is obtained and the background color is changed by adding or removing CSS classes. The styles are defined based on the CSS class in the stylesheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/checkbox-column-cs5/src/main.ts %} 
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/checkbox-column-cs5" %}