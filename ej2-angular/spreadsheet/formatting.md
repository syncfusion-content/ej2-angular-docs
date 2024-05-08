---
layout: post
title: Formatting in Angular Spreadsheet component | Syncfusion
description: Learn here all about Formatting in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Formatting 
documentation: ug
domainurl: ##DomainURL##
---

# Formatting in Angular Spreadsheet component

Formatting options make your data easier to view and understand. The different types of formatting options in the Spreadsheet are,
* Number Formatting
* Text Formatting
* Cell Formatting

## Number Formatting

Number formatting provides a type for your data in the Spreadsheet. Use the [`allowNumberFormatting`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allownumberformatting) property to enable or disable the number formatting option in the Spreadsheet. The different types of number formatting supported in Spreadsheet are,

| Types | Format |
|-------|---------|
| General(default) | NA |
| Number | `0.00` |
| Currency | `$#,##0.00` |
| Accounting | `_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)` |
| ShortDate | `mm-dd-yyyy` |
| LongDate | `dddd, mmmm dd, yyyy` |
| Time | `h:mm:ss AM/PM` |
| Percentage | `0.00%` |
| Fraction | `# ?/?` |
| Scientific |`0.00E+00`  |
| Text | `@` |

Number formatting can be applied in following ways,
* Using the `format` property in `cell`, you can set the desired format to each cell at initial load.
* Using the [`numberFormat`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#numberformat) method, you can set the number format to a cell or range of cells.
* Selecting the number format option from ribbon toolbar.

### Custom Number Formatting

Spreadsheet supports custom number formats to display your data as numbers, dates, times, percentages, and currency values. If the pre-defined number formats do not meet your needs, you can set your own custom formats using custom number formats dialog or `numberFormat` method.

The different types of custom number formatting supported in Spreadsheet are,

| Types | Format |
|-------|---------|
| General(default) | NA |
| Number | `0` |
| Number | `0.00` |
| Number | `#,##0` |
| Number | `#,##0.00` |
| Number | `#,##0_);(#,##0)` |
| Number | `#,##0_);[Red](#,##0)` |
| Number | `#,##0.00_);(#,##0.00)` |
| Number | `#,##0.00_);[Red](#,##0.00)` |
| Currency | `$#,##0_);($#,##0)` |
| Currency | `$#,##0_);[Red]($#,##0)` |
| Currency | `$#,##0.00_);($#,##0.00)` |
| Currency | `$#,##0.00_);[Red]($#,##0.00)` |
| Percentage | `0%` |
| Percentage | `0.00%` |
| Scientific |`0.00E+00`  |
| Scientific |`##0.0E+0`  |
| Fraction | `# ?/?` |
| Fraction | `# ??/??` |
| ShortDate | `dd-mm-yy` |
| Custom | `dd-mmm-yy` |
| Custom | `dd-mmm` |
| Custom | `mmm-yy` |
| Custom | `h:mm AM/PM` |
| Custom | `h:mm:ss AM/PM` |
| Custom | `h:mm` |
| Custom | `h:mm:ss` |
| Custom | `dd-mm-yy h:mm` |
| Custom | `mm:ss` |
| Custom | `mm:ss.0` |
| Text | `@` |
| Custom | `[h]:mm:ss` |
| Accounting | `_($* #,##0_);_($* (#,##0);_($* "-"_);_(@_)` |
| Accounting | `_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)` |
| Accounting | `_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)` |
| Accounting | `_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)` |

Custom Number formatting can be applied in following ways,
* Using the [`numberFormat`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#numberformat) method, you can set your own custom number format to a cell or range of cells.
* Selecting the custom number format option from custom number formats dialog or type your own format in dialog input and then click apply button. It will apply the custom format for selected cells.

The following code example shows the number formatting in cell data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/format/number-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/format/number-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/format/number-cs1" %}

## Text and cell formatting

Text and cell formatting enhances the look and feel of your cell. It helps to highlight a particular cell or range of cells from a whole workbook. You can apply formats like font size, font family, font color, text alignment, border etc. to a cell or range of cells. Use the [`allowCellFormatting`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowcellformatting) property to enable or disable the text and cell formatting option in Spreadsheet. You can set the formats in following ways,
* Using the `style` property, you can set formats to each cell at initial load.
* Using the [`cellFormat`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#cellformat) method, you can set formats to a cell or range of cells.
* You can also apply by clicking the desired format option from the ribbon toolbar.

### Fonts

Various font formats supported in the spreadsheet are font-family, font-size, bold, italic, strike-through, underline and font color.

### Text Alignment

You can align text in a cell either vertically or horizontally using the  `textAlign` and `verticalAlign` property.

### Indents

To enhance the appearance of text in a cell, you can change the indentation of a cell content using `textIndent` property.

### Fill color

To highlight cell or range of cells from whole workbook you can apply background color for a cell using `backgroundColor` property.

### Borders

You can add borders around a cell or range of cells to define a section of worksheet or a table. The different types of border options available in the spreadsheet are,

| Types | Actions |
|-------|---------|
| Top Border | Specifies the top border of a cell or range of cells.|
| Left Border | Specifies the left border of a cell or range of cells.|
| Right Border | Specifies the right border of a cell or range of cells.|
| Bottom Border | Specifies the bottom border of a cell or range of cells.|
| No Border | Used to clear the border from a cell or range of cells.|
| All Border | Specifies all border of a cell or range of cells.|
| Horizontal Border | Specifies the top and bottom border of a cell or range of cells.|
| Vertical Border | Specifies the left and right border of a cell or range of cells.|
| Outside Border | Specifies the outside border of a range of cells.|
| Inside Border | Specifies the inside border of a range of cells.|

You can also change the color, size, and style of the border. The size and style supported in the spreadsheet are,

| Types | Actions |
|-------|---------|
| Thin | Specifies the `1px` border size (default).|
| Medium | Specifies the `2px` border size.|
| Thick | Specifies the `3px` border size.|
| Solid | Used to create the `solid` border (default).|
| Dashed | Used to create the `dashed` border.|
| Dotted | Used to create the `dotted` border.|
| Double | Used to create the `double` border.|

Borders can be applied in the following ways,
* Using the  `border`, `borderLeft`, `borderRight`, `borderBottom` properties, you can set the desired border to each cell at initial load.
* Using the `setBorder` method, you can set various border options to a cell or range of cells.
* Selecting the border options from ribbon toolbar.

The following code example shows the style formatting in text and cells of the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/format/number-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/format/number-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/format/number-cs2" %}

### Limitations of Formatting

The following features are not supported in Formatting:

* Insert row/column between the formatting applied cells.
* Formatting support for row/column.

## Conditional Formatting

Conditional formatting helps you to format a cell or range of cells based on the conditions applied. You can enable or disable conditional formats by using the [`allowConditionalFormat`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowconditionalformat) property.

> * The default value for the `allowConditionalFormat` property is `true`.

### Apply Conditional Formatting

You can apply conditional formatting by using one of the following ways,

* Select the conditional formatting icon in the Ribbon toolbar under the Home Tab.
* Using the [`conditionalFormat()`](../api/spreadsheet/#conditionalformat) method to define the condition.
* Using the `conditionalFormats` in sheets model.

Conditional formatting has the following types in the spreadsheet,

### Highlight cells rules

Highlight cells rules option in the conditional formatting enables you to highlight cells with a preset color depending on the cell's value.

The following options can be given for the highlight cells rules as type,

>* 'GreaterThan', 'LessThan', 'Between', 'EqualTo', 'ContainsText', 'DateOccur', 'Duplicate', 'Unique'.

The following preset colors can be used for formatting styles,

>* `"RedFT"` - Light Red Fill with Dark Red Text,
>* `"YellowFT"` - Yellow Fill with Dark Yellow Text,
>* `"GreenFT"` - Green Fill with Dark Green Text,
>* `"RedF"` - Red Fill,
>* `"RedT"` - Red Text.

### Top bottom rules

Top bottom rules option in the conditional formatting allows you to apply formatting to the cells that satisfy a statistical condition with other cells in the range.

The following options can be given for the top bottom rules as type,

>* 'Top10Items', 'Bottom10Items', 'Top10Percentage', 'Bottom10Percentage', 'BelowAverage', 'AboveAverage'.

### Data Bars

You can apply data bars to represent the data graphically inside a cell. The longest bar represents the highest value and the shorter bars represent the smaller values.

The following options can be given for the data bars as type,

>* 'BlueDataBar', 'GreenDataBar', 'RedDataBar', 'OrangeDataBar', 'LightBlueDataBar', 'PurpleDataBar'.

### Color Scales

Using color scales, you can format your cells with two or three colors, where different color shades represent the different cell values. In the Green-Yellow-Red(GYR) Color Scale, the cell that holds the minimum value is colored as red. The cell that holds the median is colored as yellow, and the cell that holds the maximum value is colored as green. All other cells are colored proportionally.

The following options can be given for the color scales as type,

>* 'GYRColorScale', 'RYGColorScale', 'GWRColorScale', 'RWGColorScale', 'BWRColorScale', 'RWBColorScale', 'WRColorScale', 'RWColorScale', 'GWColorScale', 'WGColorScale', 'GYColorScale', 'YGColorScale'.

### Icon Sets

Icon sets will help you to visually represent your data with icons. Every icon represents a range of values. In the Three Arrows(colored) icon, the green arrow icon represents the values greater than 67%, the yellow arrow icon represents the values between 33% to 67%, and the red arrow icon represents the values less than 33%.

The following options can be given for the icon sets as type,

>* 'ThreeArrows', 'ThreeArrowsGray', 'FourArrowsGray', 'FourArrows', 'FiveArrowsGray', 'FiveArrows', 'ThreeTrafficLights1', 'ThreeTrafficLights2', 'ThreeSigns', 'FourTrafficLights', 'FourRedToBlack', 'ThreeSymbols', 'ThreeSymbols2', 'ThreeFlags', 'FourRating', 'FiveQuarters', 'FiveRating', 'ThreeTriangles', 'ThreeStars', 'FiveBoxes'.

### Custom Format

Using the custom format for conditional formatting you can set cell styles like color, background color, font style, font weight, and underline.

In the MAY and JUN columns, we have applied conditional formatting custom format.

>* In the Conditional format, custom format supported for Highlight cell rules and Top bottom rules.

### Clear Rules

You can clear the defined rules by using one of the following ways,

* Using the “Clear Rules” option in the Conditional Formatting button of HOME Tab in the ribbon to clear the rule from selected cells.
* Using the [`clearConditionalFormat()`](../api/spreadsheet/#clearconditionalformat) method to clear the defined rules.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/conditional-formatting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/conditional-formatting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/conditional-formatting-cs1" %}

### Limitations of Conditional formatting

The following features have some limitations in Conditional Formatting:

* Insert row/column between the conditional formatting.
* Conditional formatting with formula support.
* Copy and paste the conditional formatting applied cells.
* Custom rule support.

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Rows and columns](./rows-and-columns)
* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)
* [`Ribbon customization`](./ribbon#ribbon-customization)
