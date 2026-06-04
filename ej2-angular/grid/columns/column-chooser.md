---
layout: post
title:  Angular Grid - Column Chooser | Syncfusion
description: Angular Grid column chooser supports dynamic column visibility, a customizable chooser UI, and options to persist selected visibility preferences.
platform: ej2-angular
control: Column chooser
documentation: ug
domainurl: ##DomainURL##
---

# Column Chooser in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid includes a built-in Column Chooser feature that allows columns to be shown or hidden through a simple dialog with checkboxes.

To enable the Column Chooser, configure the following properties in the Grid component:

- To use the Column Chooser, inject the `ColumnChooserService` to the providers array.
- Set the [showColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid#showcolumnchooser) property to `true`.

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

Column names can be hidden in the column chooser by setting the [showInColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid/column#showincolumnchooser) property to `false`. This is useful when a column should always remain visible in the Grid and should not be hidden through the Column Chooser.

In this example, the `showInColumnChooser` property is set to `false` for the "Order ID" column, preventing it from appearing in the Column Chooser dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnchooser-cs2" %}

> * The `columns.showInColumnChooser` property must be set individually for each `<e-column>` element  that should be hidden. 
> * At least one column in the grid must remain in a visible state to allow showing and hiding columns.

## Open column chooser externally

The column chooser dialog can be opened using an external button through the [openColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooser#opencolumnchooser) method. By default, the column chooser button appears in the right corner of the Grid and opens the dialog below it when clicked. The method allows programmatically opening the dialog at specific "X" and "Y" axis positions.

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
	
The column chooser dialog comes with a default size, but height and width can be modified using CSS styles to meet specific needs.

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

## Customize column order in column chooser dialog

By default, the Column Chooser displays columns in the same order as they appear in the Grid. However, this display order can be customized to prioritize specific columns without altering their actual arrangement in the Grid layout. This customization is especially useful when working with a large number of columns, as it enhances clarity and helps quickly locate important columns within the column chooser dialog.

### Sorting columns in the column chooser

The Grid allows sorting the list of columns displayed in the column chooser dialog. Sorting behavior can be controlled by specifying the [sortDirection](https://ej2.syncfusion.com/angular/documentation/api/grid/columnchoosereventargs) in the event argument of the [beforeOpenColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#beforeopencolumnchooser) event. The available sorting options are:

Option     | Description
---------- | ---------------------------------------------------------------
`None`       | No sorting is applied to the column list.
`Ascending`  | Columns are sorted in ascending alphabetical order (A → Z).
`Descending` | Columns are sorted in descending alphabetical order (Z → A).

Here is an example for sort the column chooser list based on sort direction:

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

Specific columns can be shown in the column chooser by setting [selectedColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/columnchoosereventargs) in the event argument of the [beforeOpenColumnChooser](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#beforeopencolumnchooser) event.

Here is an example for show only specific columns in the column chooser:

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

The column chooser dialog provides a search box for searching column names. By default, the search functionality uses the `startsWith` operator to match columns and display results. The default search operator can be modified using the [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooserSettings#operator) property of the [columnChooserSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/columnchoosersettings) to achieve more precise matching.

The following example demonstrates changing the default search operator to `contains`.
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

By default, diacritic characters are ignored during search comparison in the column chooser. Diacritic characters can be included in the search by setting the [`columnChooserSettings.ignoreAccent`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooserSettings#ignoreaccent) property to `true`.
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

## Column chooser template

The Column Chooser template feature supports full customization of the column chooser dialog’s appearance. The column chooser consists of three main parts: the header, content area, and footer. Each section can be customized using the following properties:

* `columnChooserSettings.headerTemplate` – Customizes the header area of the column chooser. By default, it displays the text "Choose Column." This property allows changing the default header content. It is optional.
* `columnChooserSettings.template` – Customizes the main content area of the column chooser. Instead of showing a list of checkboxes with column names, a custom layout can be defined using this property.
* `columnChooserSettings.footerTemplate` – Customizes the footer area of the column chooser. By default, it includes "OK" and "Cancel" buttons. This property allows replacing or modifying the footer content. It is optional.

In this example, a Syncfusion<sup style="font-size:70%">&reg;</sup> `TreeView` component is rendered inside the column chooser. The Syncfusion<sup style="font-size:70%">&reg;</sup> `TreeView` package installation is described in the [documentation](https://ej2.syncfusion.com/angular/documentation/treeview/getting-started). The `columnChooserSettings.template` property renders the `TreeView` with checkboxes. Checkbox selection is handled using the [nodeClicked](https://ej2.syncfusion.com/angular/documentation/api/treeview#nodeclicked) and [keyPress](https://ej2.syncfusion.com/angular/documentation/api/treeview#keypress) events, organizing columns into "Order Details", "Shipping Details", and "Delivery Status".

The column chooser footer is customized using the `columnChooserSettings.footerTemplate` reference variable, which is assigned an `ng-template`, replacing the default buttons with customized "Apply" and "Close" buttons. The "Apply" button updates column visibility based on selection, while the "Close button closes the column chooser via the `Click` event. Additionally, the header is customized using the `columnChooserSettingsHeaderTemplate` reference variable, which is assigned an `ng-template` to include a title and an icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-chooser-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-chooser-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-chooser-template" %}

## Enable or disable search in column chooser

The column chooser includes a built-in search box by default that allows to quickly filter and find columns from the list. This search functionality can be controlled using the [enableSearching](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooserSettings#enablesearching) property of the `columnChooserSettings`.

**Property values:**

- `true` (default): The search box is displayed in the column chooser dialog.
- `false`: The search box is hidden from the column chooser dialog.

The following example demonstrates dynamically enabling or disabling the search option using the Syncfusion<sup style="font-size:70%">&reg;</sup> [Switch](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event updates the `enableSearching` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-enable-disable/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-enable-disable/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/columnchooser-enable-disable" %}