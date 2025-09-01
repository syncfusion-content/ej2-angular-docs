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

The column chooser feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component allows dynamic showing or hiding of columns. This feature can be enabled by setting the [showColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showcolumnchooser) property to **true**.

To use the column chooser, inject the **ColumnChooserService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs1" %}

> The column chooser dialog displays the header text of each column by default. If no header text is defined for a column, the corresponding column field name is displayed instead.

## Hide column in column chooser dialog

Column names can be hidden in the column chooser by setting the [column.showInColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#showincolumnchooser) property to **false**. This feature is useful when working with numerous columns or when limiting the columns available for selection in the column chooser dialog.

In this example, the `column.showInColumnChooser` property is set to false for the **Task Name** column. As a result, the **Task Name** column will not appear in the column chooser dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs2" %}

>The `column.showInColumnChooser` property is applied to each `<e-column>` element individually. Setting it to false hides specific columns from the column chooser dialog.

## Open column chooser externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid provides flexibility to open the column chooser dialog using an external button. By default, the column chooser button appears in the right corner of the TreeGrid component, and clicking it opens the column chooser dialog below. However, the column chooser dialog can be programmatically opened at specific **X** and **Y** axis positions using the [openColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnChooser/#opencolumnchooser) method.

The following example demonstrates opening the column chooser in the TreeGrid using an external button:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs3" %}

## Customize column chooser dialog size
	
The column chooser dialog in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid comes with a default size, but the height and width can be modified according to specific requirements using CSS styles.

To customize the column chooser dialog size, use the following CSS styles:

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
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs4" %}

## Change default search operator of the column chooser 

The column chooser dialog in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid provides a search box for searching column names. By default, the search functionality uses the "startsWith" operator to match columns and display results in the column chooser dialog. However, the default search operator can be changed to achieve more precise data matching.

To change the default search operator of the column chooser in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid, use the [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooserSettings/#operator) property of the columnChooserSettings through the `grid` property object of the TreeGrid instance in the [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#load) event.

The following example demonstrates changing the default search operator of the column chooser to **contains** in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs5" %}

## Diacritics searching in column chooser

By default, the TreeGrid ignores diacritic characters when performing a search in the column chooser. However, diacritic characters can be included in the search by setting the [columnchoosersettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnChooserSettings/#ignoreaccent) property to **true** through the `grid` property object of the TreeGrid instance with the [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#load) event.

The following example demonstrates using the `ignoreAccent` property to include diacritic characters for searching in the column chooser:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs6" %}

## Column Chooser Template in Syncfusion Angular TreeGrid component
The Column Chooser Template feature allows full customization of the column chooser’s header, content, and footer, making it easier to manage column visibility. To enable the column chooser, set [showColumnChooser](../../api/treegrid/#showcolumnmenu) to **true** and add **ColumnChooser** to the [toolbar](../../api/treegrid/#toolbar) property.

To implement a custom column chooser template in the TreeGrid, use the following properties:

* **columnChooserSettings.headerTemplate** - Defines the header template of the column chooser.

* **columnChooserSettings.template**- Defines the content template.

* **columnChooserSettings.footerTemplate** - Defines the footer template.

* **columnChooserSettings.renderCustomColumnChooser** -  Allows you to override the default column chooser UI with a fully customized layout.

In this example, a Syncfusion TreeView component is rendered inside the column chooser. To use the TreeView component, install the Syncfusion TreeView package as described in the [documentation](../../treeview/getting-started). The `columnChooserSettings.template` property defines a element with the `id` set to **tree**, providing as a container for the TreeView component. The `columnChooserSettings.renderCustomColumnChooser` method initializes the TreeView with checkboxes and appends it to this template. Checkbox selection is handled using the [nodeClicked](../../api/treeview#nodeclicked) and [keyPress](../../api/treeview#keypress) events, which organize columns into **Task Info**, **Schedule**, and **Progress**.

The column chooser footer is customized using `columnChooserSettings.footerTemplate`, replacing the default buttons with customized **Apply** and **Close** buttons. The **Apply** button updates column visibility based on selection, while the **Close** button closes the column chooser via the `onClick` event. Additionally, the header is customized using `columnChooserSettings.headerTemplate` to include a title and an icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs7" %}