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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component provides a structured way to display **parent-child relationships** using expand/collapse icons.  

To configure this, set the [treeColumnIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt/#treecolumnindex) property to the index of the column where these icons should appear.  This enables clear visualization and navigation of hierarchical tasks within the Gantt chart.


```ts

<ejs-gantt [dataSource]='data' [treeColumnIndex]='2'>
    <!-- Other gantt configurations -->
</ejs-gantt>

```

## Change expand and collapse icon

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component provides support for customizing default expand/collapse icons through CSS.  
To apply custom icons, override the default styles with the following CSS:

```css
.e-gantt .e-grid .e-treegridexpand::before {
  content: "\2795";
} 
.e-gantt .e-grid .e-treegridcollapse::before {
  content: "\2796";
}
```

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
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs1" %}

## Change indent space of tree column cell text 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component allows customization of the **indent space** in tree column cells using the [queryCellInfo](https://helpej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) event.  

In the following demonstration, indent space is applied by adding a CSS class to the tree column cell of **TaskName**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs2/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs2" %}

## Render parent rows in collapsed state

You can collapse all parent rows during initial rendering by setting the [collapseAllParentTasks](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapseallparenttasks) property in the Syncfusion Angular Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs3/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs3" %}

## Retain expanded and collapsed state

You can retain the expanded or collapsed state of parent rows during initial rendering by using the [expandState](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#expandstate) property in the data source.  This property indicates whether a parent row should be expanded or collapsed when the Gantt chart loads.

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
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs4" %}

## Persist expanded and collapsed state on page refresh using localStorage
 
To retain the expanded and collapsed state of rows after a page refresh in the Syncfusion Angular Gantt component:

1. Use the [collapsed](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsed) event to store the collapsed row's primary key in `localStorage` via [setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem).
2. On page reload, retrieve the stored keys in the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event using [getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem).
3. Collapse the corresponding rows using `CollapseByKey` or `collapseRow` methods by passing the saved key or row details.

This approach ensures that row states are preserved across browser sessions

In the following demo, the steps mentioned above are used to persist the expanded and collapsed state of rows during a browser page refresh.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %} 
{% include code-snippet/gantt/columns/treecolumn-cs5/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs5" %}

## Programmatically expand and collapse a row  

You can control row expansion and collapse programmatically in the Syncfusion Angular Gantt component using built-in methods:

* **[expandAll()](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expandall)**: Expands all rows. 

```ts
this.gantt.expandAll();
```

* **[collapseAll()](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapseall)**: Collapses all rows.

```ts
this.gantt.collapseAll();
```

* `expandAtLevel(level)`: Expands rows at a specific level. 

```ts
this.gantt.treegrid.expandAtLevel(0);
```

* `collapseAtLevel(level)`: Collapses rows at a specific level. 

```ts
this.gantt.treegrid.collapseAtLevel(0);
```

* `expandByKey(key)`: Expands a row by primary key. 

```ts
this.gantt.treegrid.expandByKey(1); //Here pass the primary key value
```

* `collapseByKey(key)`: Collapses a row by primary key. 

```ts
this.gantt.treegrid.collapseByKey(1);//Here pass the primary key value
```

* `expandRow(rowElement)`: Expands a row using its DOM element.  

```ts
this.gantt.treegrid.expandRow(tr); //Here pass the row element as parameter
```

* `collapseRow(rowElement)`: Collapses a row using its DOM element.

```ts
this.gantt.treegrid.collapseRow(tr);//Here pass the row element as parameter
```

## Expand and collapse action 

You can customize expand and collapse behavior in the Syncfusion Angular Gantt component using the [expanding](https://ej2.syncfusion.com/angular/documentation/gantt/events#expanding), [expanded](https://ej2.syncfusion.com/angular/documentation/gantt/events#expanded), [collapsing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsing), and [collapsed](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsed) events.  These events allow you to control and respond to row state changes programmatically based on your application logic.

The following sample demonstrates how to customize expand and collapse actions in the Syncfusion Angular Gantt component:

- Expanding is cancelled for the row where **TaskID** is 1.  
- Collapsing is cancelled for the row where **TaskID** is 5.  
- When a row is expanded and its **Progress** is greater than 50, a green background is applied.  
- When a row is collapsed and its **Progress** is less than 50, a red background is applied.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/treecolumn-cs6/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/treecolumn-cs6" %}
