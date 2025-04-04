---
layout: post
title: Tree Column in Angular Gantt component | Syncfusion
description: Learn here all about Tree Column in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tree Column 
documentation: ug
domainurl: ##DomainURL##
---

# Tree Column in Angular Gantt component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component provides a convenient way to represent parent-child relationships using expand and collapse icons in the tree column cell. This can be achieved by utilizing the [treeColumnIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt/#treecolumnindex) property by setting its value to a column index. This guide outlines how to configure and use this property to display the expand or collapse icon in the desired column.

```ts

<ejs-gantt [dataSource]='data' [treeColumnIndex]='2'>
    <!-- Other gantt configurations -->
</ejs-gantt>

```

## Change expand and collapse icon

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component allows to customize the default expand and collapse icons by applying custom CSS styles.

To customize the expand and collapse icons, use the following CSS styles:

```css
.e-gantt .e-grid .e-treegridexpand::before {
  content: "\2795";
} 
.e-gantt .e-grid .e-treegridcollapse::before {
  content: "\2796";
}
```

In the following demo, the expand and collapse icons are customized using the CSS styles

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/gantt/columns/treecolumn-cs1/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs1" %}

## Change indent space of tree column cell text 

The Gantt component allows to customize the indent space of tree column cell text by leveraging the [queryCellInfo](https://helpej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) event. 

In the following demonstration, indent space is applied by adding a CSS class to the tree column cell using the `queryCellInfo` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs2" %}

## Render parent rows in collapsed state

You can easily render all the parent rows in a collapsed state in the Gantt component using the [collapseAllParentTasks](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapseallparenttasks) property. Using this property, all parent rows are collapsed during the initial rendering. 

In the following demo, all parent rows are rendered in collapsed state in initial rendering. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs3" %}

## Retain expanded and collapsed state

To maintain the expanded and collapsed state of specific parent rows in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt, utilize the [`expandState`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#expandstate) property. This property corresponds to a value within the data object of the data source, signifying the expand status of the parent row.

In the following demonstration, the parent rows are rendered in an expanded or collapsed state based on the value of the `expandState` property in the data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs4/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs4/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs4" %}

## Persist expanded and collapsed state on page refresh using localStorage

To persist the expanded and collapsed state of rows using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event when the page refreshes in the browser, this guide illustrates how to utilize localStorage to save and retrieve the state of rows.

   1. Save the collapsed record’s primarykey value to localStorage in the [collapsed](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsed) event of the Gantt  by using the [setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) method of the local storage.
   2. On page refresh, the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event will be triggered. In that event, retrieve the saved records by using the [getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) method of the local storage.
   3. Then, collapsed the specific rows by using the [CollapseByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsebykey) method of treegrid object in gantt instance by passing the primary key value as a parameter. and collapse the specific rows by using the `collapseRow` method of the Tree Grid by passing the row detail.
 
In the following demo, the above-mentioned steps have been followed to persist the expanded or collapsed state while refreshing the page in the browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %} 
{% include code-snippet/gantt/columns/treecolumn-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs5" %}

## Programmatically expand and collapse a row  

In the Gantt, you can programmatically expand and collapse rows using various methods provided by the gantt. This guide demonstrates how to leverage these methods to control the expansion and collapse of rows based on different criteria.

* **[expandAll](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expandall)**:

To expand all rows in the gantt, use the `expandAll` method.

```ts
this.gantt.expandAll();
```

* **[collapseAll](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapseall)**:

To collapse all rows in gantt, use the `collapseAll` method.

```ts
this.gantt.collapseAll();
```

* **[expandAtLevel](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandatlevel)**:

To expand the records at a specific hierarchical level, use the `expandAtLevel` method.

```ts
this.gantt.treegrid.expandAtLevel(0);
```

* **[collapseAtLevel](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapseatlevel)**:

To collapse the records at a specific hierarchical level, use the `collapseAtLevel` method.

```ts
this.gantt.treegrid.collapseAtLevel(0);
```

* **[expandByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandbykey)**:

To expand records based on a given primary key value, use the `expandByKey` method.

```ts
this.gantt.treegrid.expandByKey(1); //Here pass the primary key value
```

* **[collapseByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsebykey)**:

To collapse records based on a given primary key value, use the `collapseByKey` method

```ts
this.gantt.treegrid.collapseByKey(1);//Here pass the primary key value
```

* **[expandRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandrow)**:

To expand child rows based on the row element, use the `expandRow` method. 

```ts
this.gantt.treegrid.expandRow(tr); //Here pass the row element as parameter
```

* **[collapseRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapserow)**:

To collapse child rows based on the row element, use the `collapseRow` method. 

```ts
this.gantt.treegrid.collapseRow(tr);//Here pass the row element as parameter
```

## Expand and collapse action events

In the Gantt, you can customize the behavior and perform specific actions when the expand or collapse icon is clicked. This can be achieved using a set of events provided by the gantt.

The following events are available for handling expand and collapse actions:

* [expanding](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expanding): This event is triggered before a row is expanded. You can perform custom actions or cancel the row expansion based on certain conditions.

* [expanded](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expanded): This event is triggered after a row is expanded. You can perform additional actions or updates after the row expansion is completed.

* [collapsing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsing): This event is triggered before a row is collapsed. You can perform custom actions or cancel the row collapse based on certain conditions.

* [collapsed](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsed): This event is triggered after a row is collapsed. You can perform additional actions or updates after the row collapse is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs6" %}
