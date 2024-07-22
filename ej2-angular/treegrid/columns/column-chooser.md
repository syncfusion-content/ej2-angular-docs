---
layout: post
title: Column chooser in Angular TreeGrid component | Syncfusion
description: Learn here all about Column chooser in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column chooser 
documentation: ug
domainurl: ##DomainURL##
---

# Column chooser in Angular TreeGrid component

The column chooser feature in the Syncfusion Angular TreeGrid component allows you to dynamically show or hide columns. This feature can be enabled by defining the [showColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showcolumnchooser) property as **true**.

To use the column chooser, you need to inject the **ColumnChooserService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs1" %}

> The column chooser dialog displays the header text of each column by default. If the header text is not defined for a column, the corresponding column field name is displayed instead.

## Hide column in column chooser dialog

You can hide the column names in column chooser by defining the [column.showInColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#showincolumnchooser) as **false**. This feature is useful when working with a large number of columns or when you want to limit the number of columns that are available for selection in the column chooser dialog.

In this example, the `column.showInColumnChooser` property is set to false for the **Task Name** column. As a result, the **Task Name** column will not be displayed in the column chooser dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs2" %}

>The `column.showInColumnChooser` property is applied to each `<e-column>` element individually. By setting it to false, you can hide specific columns from the column chooser dialog.

## Open column chooser by externally

The Syncfusion Angular Tree Grid provides the flexibility to open the column chooser dialog on a web page using an external button. By default, the column chooser button is displayed in the right corner of the TreeGrid component, and clicking the button opens the column chooser dialog below it. However, you can programmatically open the column chooser dialog at specific **X** and **Y** axis positions by using the [openColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnChooser/#opencolumnchooser) method.

Here's an example of how to open the column chooser in the tree grid using an external button:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs3" %}

## Customize column chooser dialog size
	
The column chooser dialog in Syncfusion Angular Tree Grid comes with default size, but you can modify its height and width as per your specific needs using CSS styles.

To customize the column chooser dialog size, you can use the following CSS styles:

```css
.e-treegrid .e-dialog.e-ccdlg {
    height: 500px;
    width: 200px;
}
.e-treegrid .e-ccdlg .e-cc-contentdiv {
    height: 200px;
    width: 230px;
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs4" %}

## Change default search operator of the column chooser 

The column chooser dialog in the Syncfusion Angular Tree Grid provides a search box that allows you to search for column names. By default, the search functionality uses the "startsWith" operator to match columns and display the results in the column chooser dialog. However, there might be cases where you need to change the default search operator to achieve more precise data matching.

To change the default search operator of the column chooser in Syncfusion Tree Grid, you need to use the [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooserSettings/#operator) property of the columnChooserSettings through `grid` property object of tree grid instance in [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid/load) event of the tree grid.

Here's an example of how to change the default search operator of the column chooser to **contains** in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs5" %}

## Diacritics searching in column chooser

By default, the tree grid ignores diacritic characters when performing a search in the column chooser. However, in some cases, you may want to include diacritic characters in the search. To enable this behavior, you can set the [columnchoosersettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnChooserSettings/#ignoreaccent) property to **true** through `grid` property object of tree grid instance with [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid/load) event.

Here is an example that demonstrates the usage of the `ignoreAccent` property to include diacritic characters for searching in the column chooser:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs6" %}