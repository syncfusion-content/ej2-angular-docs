---
layout: post
title: Tree Column in Angular TreeGrid component | Syncfusion
description: Learn here all about tree column in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns  
documentation: ug
domainurl: ##DomainURL##
---

# Tree Column in Angular TreeGrid component

The Syncfusion Angular TreeGrid component provides a convenient way to represent parent-child relationships using expand and collapse icons in the tree column cell. This can be achieved by utilizing the [treeColumnIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#treecolumnindex) property by setting its value to a column index. This guide outlines how to configure and use this property to display the expand or collapse icon in the desired column.

```ts

<ejs-treegrid [dataSource]='data' [treeColumnIndex]='2'>
    <!-- Other tree grid configurations -->
</ejs-treegrid>

```

## Change expand and collapse icon 

The Syncfusion Angular TreeGrid component allows to customize the default expand and collapse icons by applying custom CSS styles.

To customize the expand and collapse icons, use the following CSS styles:

```ts

.e-treegrid .e-treegridexpand::before {
  content: "\2795";
}

.e-treegrid .e-treegridcollapse::before {
  content: "\2796";
}

```

In the following demo, the expand and collapse icons are customized using the CSS styles

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="custom-column.style.css" %}
{% include code-snippet/treegrid/tree-column-cs1/src/custom-column.style.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs1" %}

## Change indent space of tree column cell text 

The TreeGrid component allows to customize the indent space of tree column cell text by leveraging the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid#querycellinfo) event. 

In the following demonstration, apply an indent space by adding a CSS class to the tree column cell using the `queryCellInfo` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs2" %}

## Render parent rows in collapsed state 

You can easily render all the parent rows in a collapsed state in the TreeGrid component using the [enableCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablecollapseall) property. Using this property, all parent rows are collapsed during the initial rendering.

In the following demo, all parent rows are rendered in a collapsed state in initial rendering. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs3" %}

## Retain expanded and collapsed state 

To maintain the expanded and collapsed state of specific parent rows during initial rendering in the 
Tree Grid, you can utilize the [expandStateMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandstatemapping) property. This property corresponds to a value within the data object of the data source, signifying the expand/collapse status of the parent row. 

In the following demonstration, the JSON object has an `isExpanded` property with a boolean value. Based on this value, the parent rows are shown in an expanded or collapsed state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs4/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/tree-column-cs4/src/datasource.ts  %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs4" %}

## Persist expanded and collapsed states on page refresh using localStorage

To persist the expanded and collapsed state of rows using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event when the page refreshes in the browser, this guide illustrates how to utilize localStorage to save and retrieve the state of rows.

   1. Save the collapsed record’s primarykey value to localStorage in the [collapsed](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsed) event of the Tree Grid by using the [setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) method of the local storage.
   2. On page refresh, the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event will be triggered. In that event, retrieve the saved records by using the [getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) method of the local storage.
   3. Then, collapsed the specific rows by using the [CollapseByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsebykey) method of Tree Grid by passing the primary key value as a parameter. and collapse the specific rows by using the [collapseRow] method of the Tree Grid by passing the row detail.
 
In the following demo, the above-mentioned steps have been followed to persist the expanded or collapsed state while refreshing the page in the browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs5" %}

## Programmatically expand and collapse a row  

In the Tree Grid, you can programmatically expand and collapse rows using various methods provided by the tree grid. This guide demonstrates how to leverage these methods to control the expansion and collapse of rows based on different criteria.

* **[expandAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandall)**:

To expand all rows in the tree grid, use the `expandAll` method.

```ts
this.treegrid.expandAll();
```

* **[collapseAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapseall)**:

To collapse all rows in the tree grid, use the `collapseAll` method.

```ts
this.treegrid.collapseAll();
```

* **[expandAtLevel](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandatlevel)**:

To expand the records at a specific hierarchical level, use the `expandAtLevel` method.

```ts
this.treegrid.expandAtLevel(0);
```

* **[collapseAtLevel](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapseatlevel)**:

To collapse the records at a specific hierarchical level, use the `collapseAtLevel` method.

```ts
this.treegrid.collapseAtLevel(0);
```

* **[expandByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandbykey)**:

To expand records based on a given primary key value, use the `expandByKey` method.

```ts
this.treegrid.expandByKey(1); //Here pass the primary key value
```

* **[collapseByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsebykey)**:

To collapse records based on a given primary key value, use the `collapseByKey` method

```ts
this.treegrid.collapseByKey(1);//Here pass the primary key value
```

* **[expandRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandrow)**:

To expand child rows based on the row element, use the `expandRow` method. 

```ts
this.treegrid.expandRow(tr); //Here pass the row element as parameter
```

* **[collapseRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapserow)**:

To collapse child rows based on the row element, use the `collapseRow` method. 

```ts
this.treegrid.collapseRow(tr);//Here pass the row element as parameter
```

## Expand and collapse action events 

In the Tree Grid, you can customize the behavior and perform specific actions when the expand or collapse icon is clicked. This can be achieved using a set of events provided by the tree grid.

The following events are available for handling expand and collapse actions:

* [expanding](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expanding): This event is triggered before a row is expanded. You can perform custom actions or cancel the row expansion based on certain conditions.

* [expanded](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expanded): This event is triggered after a row is expanded. You can perform additional actions or updates after the row expansion is completed.

* [collapsing](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsing): This event is triggered before a row is collapsed. You can perform custom actions or cancel the row collapse based on certain conditions.

* [collapsed](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsed): This event is triggered after a row is collapsed. You can perform additional actions or updates after the row collapse is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs6" %}
