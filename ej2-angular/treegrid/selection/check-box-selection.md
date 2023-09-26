---
layout: post
title: Check box selection in Angular Treegrid component | Syncfusion
description: Learn here all about Check box selection in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Check box selection 
documentation: ug
domainurl: ##DomainURL##
---

# Check box selection in Angular Treegrid component

Checkbox Selection provides an option to select multiple TreeGrid records with help of checkbox in each row.

To render checkbox in each treegrid row, you need to use checkbox column with type as `CheckBox` using
column [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/selection-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/selection-cs2" %}

> By default selection is allowed by clicking a treegrid row or checkbox in that row. To allow Selection only through checkbox, you can set [`selectionSettings.checkboxOnly`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#checkboxonly) property to true.
> Selection can be persisted on all the operations using [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#persistselection) property.
For persisting selection on the TreeGrid, any one of the column should be defined as a primary key using [`columns.isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, selection can also be done by clicking on rows. This selection provides two types of Checkbox Selection mode which can be set by using the following API, [`selectionSettings.checkboxMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#checkboxmode). The modes are;

* **`Default`**: This is the default value of the checkboxMode. In this mode, user can select multiple rows by clicking rows one by one.
* **`ResetOnRowClick`**: In ResetOnRowClick mode, when user clicks on a row it will reset previously selected row. Also you can perform multiple-selection in this mode by press and hold CTRL key and click the desired rows. To select range of rows, press and hold the SHIFT key and click the rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/selection-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/selection-cs3" %}