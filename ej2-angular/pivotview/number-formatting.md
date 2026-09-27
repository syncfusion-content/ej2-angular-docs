---
layout: post
title: Number Formatting in Angular Pivot Table | Syncfusion
description: Learn how the Angular Pivot Table formats numeric value cells using number, currency, percent, and custom format strings.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Number formatting in Angular Pivot Table

The Pivot Table component lets you display numeric values in standard number, currency, percentage, or custom formats to match the reporting needs of your application.

## Supported format types

The Pivot Table component supports the following display formats for numeric values:

* **Number** - Standard numeric formatting with optional grouping separators and configurable decimal places.
* **Currency** - Formats currency values with appropriate symbols, optional grouping separators, and customizable decimal places.
* **Percentage** - Values displayed as percentages with the % symbol.
* **Custom** - User-defined formatting patterns for specific display requirements.

## Defining number format settings

To configure number formats for numeric values, use the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#formatsettings) property inside [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings).

The following properties are available inside each `formatSettings` entry:

### Essential formatting properties

| Property | Type | Description |
|----------|------|-------------|
| [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#name) | `string` | The field name to which the formatting should be applied. |
| [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#format) | `string` | The format pattern for the field. |

### Format type codes

Use these standard format codes as the value of the `format` property. You can also append a digit to set the number of decimal places (e.g., `N2` for two decimal places).

1. **N** - Numeric formatting (e.g., `N` produces `1,234.56`; `N2` produces `1,234.56`).
2. **C** - Currency formatting (e.g., `C0` produces `$1,234`; the symbol is taken from the `currency` property).
3. **P** - Percentage formatting (e.g., `P1` produces `12.3%` for the value `0.1234`).

> **Note:** When no format is specified, the component applies numeric formatting by default.

### Additional formatting options

* [`useGrouping`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#usegrouping) (`boolean`, default `true`): Controls the display of grouping separators. When `true` (default), values display with separators (for example, `$100,000,000`); when `false`, they display without separators (for example, `$100000000`).
* [`currency`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#currency) (`string`): The currency code to be considered for currency formatting (for example, `USD`, `EUR`, `GBP`).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs184/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs184/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs184" %}

You can also format the values at runtime using the formatting dialog. This option can be enabled by setting the [`allowNumberFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allownumberformatting) property to **true**. The same has been discussed in some of the upcoming topics.

> **Important:** To use the runtime formatting dialog (and the toolbar option), include the `NumberFormattingService` module in the `@NgModule.providers` section.

## Custom format

Custom format lets you display numbers in your preferred pattern by setting the [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#format) property within the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#formatsettings). You can use one or more format specifiers (shown in the table below) to control how values appear in the Pivot Table. The Input column shows the `format` value applied to the value `123` (except where noted).

| Specifier | Description | Input | Format Output |
| ------- |--------------- | ---------------- | --------------- |
| 0 | Replaces the zero with the corresponding digit if one is present. Otherwise, zero appears in the result string. | `{ format: '0000' }` | `'0123'` |
| # | Replaces the `#` symbol with the corresponding digit if one is present. Otherwise, no digit appears in the result string. | `{ format: '####' }` | `'1234'` |
| . | Denotes the number of digits permitted after the decimal point. | `{ format: '###0.##0#' }` | `'546321.000'` (value `546321`) |
| % | Percent specifier; multiplies the value by 100 and appends the `%` symbol. | `{ format: '0000 %' }` | `'0100 %'` (value `1`) |
| $ | Denotes currency formatting based on the global currency code specified in `currency`. | `{ format: '$ ###.00' }` | `'$ 13.00'` (value `13`) |
| ; | Denotes separate formats for positive, negative, and zero values. | `{ format: '###.##;(###.00);-0' }` | `'(120.00)'` (value `-120`) |
| `,` | Grouping separator (thousands). | `{ format: '###,###' }` | `'1,234,567'` (value `1234567`) |
| `'String'` | Characters enclosed in single quotes are included literally in the result string. | `{ format: "####.00 '@'" }` | `'123.00 @'` (value `123`) |

>NOTE: When you define a custom format, certain properties such as [`useGrouping`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#usegrouping) and [`currency`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#currency) in the format settings will be ignored.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs185/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs185/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs185" %}

## Toolbar

Number formatting can be applied at runtime through the built-in dialog, accessible from the toolbar. To enable this, set both the [`allowNumberFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allownumberformatting) and [`showToolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showtoolbar) properties to **true**, include the `NumberFormattingService` module in the `@NgModule.providers` section, and add the `'NumberFormatting'` option to the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#toolbar) property. The toolbar then displays the **Number Formatting** icon. Clicking this icon opens the dialog, where you can specify number formats for value fields directly within the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs186/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs186/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs186" %}

## Invoking formatting dialog through external button

The number formatting dialog can be opened programmatically by clicking an external button. Use a `@ViewChild` reference to access the `PivotView` instance and call the [`showNumberFormattingDialog`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#shownumberformattingdialog) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs187/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs187/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs187" %}

## Events

### NumberFormatting

The [`numberFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#numberformatting) event is triggered when the user clicks the 'Apply' button in the number formatting dialog to confirm their formatting settings. This event facilitates the validation or modification of the formatting settings applied by the user. It includes the following parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| [`formatName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/numberformattingeventargs#formatname) | `string` | Represents the name of the value field to which number formatting is applied in the dialog. |
| [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/numberformattingeventargs#formatsettings) | `IFormatSettings` | Contains the user-defined formatting options, such as decimal places (`minimumFractionDigits`, `maximumFractionDigits`), currency symbols (`currency`), or grouping separators (`useGrouping`), applied to the field. |
| [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/numberformattingeventargs#cancel) | `boolean` | It is a boolean property, and when set to **true**, the customization made in the number formatting dialog will not be applied. |

The following sample demonstrates how to prevent number formatting changes for the 'Amount' field by setting the [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/numberformattingeventargs#cancel) property to **true** in the [`numberFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#numberformatting) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs188/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs188/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs188" %}

## See Also

* [Customize number, date, and time values](./how-to/customize-number-date-and-time-values) — Recipe that shows how to apply custom formats to specific cells.
* [Number format options](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#number-formatting) — Underlying global number-formatting reference used by Syncfusion controls.
* [Toolbar](./tool-bar) — Configure the Pivot Table toolbar, including the Number Formatting option.