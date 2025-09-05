---
layout: post
title: Column chooser in Angular Grid component | Syncfusion
description: Learn about the Column Chooser feature in the Syncfusion Angular Grid component for Essential JS 2, including dynamic column visibility, dialog customization, searching, and templating features.
platform: ej2-angular
control: Column chooser
documentation: ug
domainurl: ##DomainURL##
---

# Column chooser in Angular Grid component

The Column Chooser feature in the Syncfusion Angular Grid component enables users to dynamically show or hide columns within the grid. This capability is activated by setting the [showColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumnchooser) property to **true**.

To use the Column Chooser, inject the **ColumnChooserService** in the providers array of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/columnchooser-cs1" %}

> By default, the Column Chooser dialog displays the header text of each column. If a column does not have a header text, its field name is shown instead.

## Hide column in column chooser dialog

To exclude specific columns from appearing in the Column Chooser dialog, set the [columns.showInColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#showincolumnchooser) property to **false** for those columns. This is useful for grids with many columns or when only selected columns should be user-toggleable.

In the example below, the **Order ID** column is excluded from the Column Chooser dialog by setting `columns.showInColumnChooser` to false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnchooser-cs2" %}

> * The `columns.showInColumnChooser` property must be set individually for each `<e-column>` element you wish to hide.  
> * At least one column in the grid must remain in a visible state to allow showing and hiding columns.

## Open column chooser externally

The Syncfusion Angular Grid provides the flexibility to open the column chooser dialog on a web page using an external button. By default, the column chooser button is displayed in the right corner of the grid component, and clicking the button opens the column chooser dialog below it. However, you can programmatically open the column chooser dialog at specific **X** and **Y** axis positions by using the [openColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooser/#opencolumnchooser) method.

The following example illustrates invoking the Column Chooser dialog using an external button:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnchooser-cs3" %}

## Customize column chooser dialog size
	
The size of the Column Chooser dialog in the Syncfusion Angular Grid can be customized by overriding its default styles via CSS. Adjust the height and width properties to fit your layout requirements.

```css
.e-grid .e-dialog.e-ccdlg {
    height: 500px;
    width: 200px;
}
.e-grid .e-ccdlg .e-cc-contentdiv {
    height: 200px;
    width: 230px;
}
```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnchooser-cs4" %}

## Customizing the order of columns in the column chooser

The Syncfusion Angular Grid makes it easy to customize the order of columns in the column chooser, without affecting their actual order in the Grid.

By default, the column chooser displayed columns in the same order as they appeared in the Grid. With the introduction of customization options, the column list in the chooser can now be rearranged.

### Sorting columns in the column chooser

The Syncfusion Grid allows to sort the list of columns displayed in the column chooser dialog.

You can control the sorting behavior by specifying the `sortDirection` in the event argument of the `beforeOpenColumnChooser` event. The available sorting options are:

Option     | Description
---------- | ---------------------------------------------------------------
None       | No sorting is applied to the column list.
Ascending  | Columns are sorted in ascending alphabetical order (A → Z).
Descending | Columns are sorted in descending alphabetical order (Z → A).

Here is an example of how to sort the column chooser list based on sort direction:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnchooser-cs7" %}

### Displaying specific columns in the column chooser

The Grid also supports displaying only selected columns in the column chooser. This is helpful when only specific columns need to be shown in the column chooser, making it easier to focus on the most important ones.

To achieve this, you can specify which columns should appear in the column chooser by setting `selectedColumns` in the event argument of the `beforeOpenColumnChooser` event.

Here is an example of how to show only specific columns in the column chooser:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnchooser-cs8" %}

## Change default search operator of the column chooser 

The column chooser dialog in the Syncfusion Angular Grid provides a search box that allows you to search for column names. By default, the search functionality uses the "startsWith" operator to match columns and display the results in the column chooser dialog. However, there might be cases where you need to change the default search operator to achieve more precise data matching.

To change the default search operator of the column chooser in Syncfusion Grid, you need to use the [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooserSettings/#operator) property of the column chooser.

Here's an example of how to change the default search operator of the column chooser to **contains** in the Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnchooser-cs5" %}

## Diacritics searching in column chooser

The Syncfusion Angular Grid supports searching for columns that contain diacritic characters. By default, diacritics are ignored during search. To enable diacritic-sensitive searching in the Column Chooser, set the [ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooserSettings/#ignoreaccent) property to **true**.

The following example demonstrates enabling diacritic-sensitive searching:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/columnchooser-cs6" %}

## Column chooser template in Syncfusion Angular Grid

The Column Chooser supports full customization of its header, content, and footer via templates. Activate the Column Chooser by setting [showColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumnchooser) to **true** and including **ColumnChooser** in the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property.

The following template-related properties are available under `columnChooserSettings`:

* **headerTemplate**: Customizes the dialog header.
* **template**: Defines content rendered in the dialog body (such as custom selection UI or controls).
* **footerTemplate**: Customizes the dialog footer.

In this example, the Syncfusion TreeView component is rendered inside the column chooser using the **ng-template** directive. To use the TreeView component, install the Syncfusion TreeView package as described in the [documentation](https://ej2.syncfusion.com/angular/documentation/treeview/getting-started). The `columnChooserSettingsTemplate` reference variable is assigned an **ng-template**, where the TreeView component is rendered with checkboxes for selecting columns. Checkbox selection is handled using the [nodeClicked](https://ej2.syncfusion.com/angular/documentation/api/treeview#nodeclicked) and [keyPress](https://ej2.syncfusion.com/angular/documentation/api/treeview#keypress) events, which organize columns into **Order Details**, **Shipping Details**, and **Delivery Status**.

The column chooser footer is customized using the `columnChooserSettingsFooterTemplate` reference variable, which is assigned an **ng-template**, replacing the default buttons with customized **Apply** and **Close** buttons. The **Apply** button updates column visibility based on selection, while the **Close** button closes the column chooser via the `Click` event. Additionally, the header is customized using the `columnChooserSettingsHeaderTemplate` reference variable, which is assigned an **ng-template** to include a title and an icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-chooser-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-chooser-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-chooser-template" %}

## Enable and disable search option

The Column Chooser dialog's search feature is enabled by default. It can be dynamically enabled or disabled by setting the `columnChooserSettings.enableSearching` property to **true** or **false**.

The following example demonstrates how to dynamically enable or disable the search feature using the [Switch](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component and its [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-enable-disable/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-enable-disable/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/columnchooser-enable-disable" %}