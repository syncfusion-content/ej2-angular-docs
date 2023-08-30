---
layout: post
title: Row in Angular Treegrid component | Syncfusion
description: Learn here all about Row in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row 
documentation: ug
domainurl: ##DomainURL##
---

# Row in Angular Treegrid component

The row represents record details fetched from data source.

## Customize rows

You can customize the appearance of a row by using the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event.
The [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event triggers for every row. In the event handler, you can get the `RowDataBoundEventArgs` that contains details of the row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs1" %}

## Styling alternate rows

 You can change the treegrid's alternative rows' background color by overriding the `.e-altrow` class.

```css
.e-treegrid .e-altrow {
    background-color: #fafafa;
}
```

> The above style customization works only when we elevate the CSS to global scope using the encapsulation: ViewEncapsulation.None
> If you need to apply style for ViewEncapsulation other than None, use ng-deep like shown in the below example code snippet,

```css
::ng-deep .e-treegrid .e-altrow  {
    background-color: #fafafa;
}
```

Please refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/alt-row-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/alt-row-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/alt-row-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/alt-row-cs1" %}

## Perform Expand/Collapse on parent row programmatically

To expand and collapse all the records of the tree grid by using the [`expandAll`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandall) and [`collapseAll`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapseall) methods respectively in the tree grid.

You can expand/collapse a specific row by using the following methods.
1. [`collapseRow`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapserow) - By passing the row element in this method of tree grid.
2. [`expandRow`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandrow) - By passing the row element in this method of tree grid.
3. [`collapseAtLevel`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapseatlevel) - By passing the record levels in this method.
4. [`expandAtLevel`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandatlevel) - By passing the record levels in this method.
5. [`collapseByKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsebykey) - By passing the primary key of parent record into the method.
6. [`expandByKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandbykey) - By passing the primary key of parent record into the method.

To get row element you can use [`getRows`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrows) method by passing the row index as parameter as used in the sample below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs41/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs41/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs41/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs41" %}

> You can get the row elements by [`getDataRows`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getdatarows) method in the tree grid.
> Refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to know how to present and manipulate data.