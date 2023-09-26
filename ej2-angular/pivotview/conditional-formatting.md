---
layout: post
title: Conditional formatting in Angular Pivotview component | Syncfusion
description: Learn here all about Conditional formatting in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Conditional formatting 
documentation: ug
domainurl: ##DomainURL##
---

# Conditional formatting in Angular Pivotview component

Allows end user to change the appearance of the pivot table value cells with its background color, font color, font family, and font size based on specific conditions.

The conditional formatting can be applied at runtime through the built-in dialog, invoked from the toolbar. To do so, set [`allowConditionalFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#allowconditionalformatting) and [`showToolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#showtoolbar) properties in pivot table to **true**. Also, include the item **ConditionalFormatting** within the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#toolbar) property in pivot table. End user can now see the "Conditional Formatting" icon in toolbar UI automatically, which on clicking will invoke the formatting dialog to perform necessary operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs16" %}

Conditional formatting can also be included in the pivot table through code-behind using the [`conditionalFormatSetting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/). The required properties to apply a new conditional formatting are,

* [`measure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/#measure): Specifies the value field name for which style will be applied.
* [`conditions`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/#conditions): Specifies the operator type such as equals, greater than, less than, etc.
* [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/#value1): Specifies the start value.
* [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/#value2): Specifies the end value.
* [`style`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/#style): Specifies the style for the cell.

The available style properties in [`style`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/style/), to set in value cells are:

* [`backgroundColor`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/style/#backgroundcolor): Specifies the background color.
* [`color`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/style/#color): Specifies the font color.
* [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/style/#fontfamily): Specifies the font family.
* [`fontSize`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/style/#fontsize): Specifies the font size.

Meanwhile, user can also view conditional formatting dialog in UI by invoking `showConditionalFormattingDialog` method on an external button click which is shown in the below code sample.

To use the conditional formatting feature, User need to inject the `ConditionalFormatting` module in pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs17/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs17" %}

## Conditional formatting for all fields

Allows end user to apply conditional formatting commonly for all value fields just by ignoring the [`measure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/#measure) property and setting rest of the properties in [`conditionalFormatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs18/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs18" %}

## Conditional formatting for specific value field

Allows end user to apply conditional formatting to a specific value field by setting the [`measure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/#measure) property with specific value field name in [`conditionalFormatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalFormatSettings/#measure).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs19" %}

## Editing and removing existing conditional format

Editing and removing existing conditional format can be done through the UI at runtime. To do so, open the conditional formatting dialog and edit the "Value", "Condition" and "Format" options based on user requirement and click "OK". To remove a conditional format, click the "Delete" icon besides the respective condition.  

![output](images/cformatting_remove.png)

## Event

### ConditionalFormatting

The event [`conditionalFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#conditionalformatting) is triggered initially while clicking the “ADD CONDITION” button inside the conditional formatting dialog in-order to fill user specific condition instead of default condition at runtime. To use this event, [`allowConditionalFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#allowconditionalformatting) property in PivotView must be set to **true**. It has following parameters -

* `applyGrandTotals` - boolean property, by setting this to true user can enable formatting to grand totals.
* `conditions` - condition to be filled in conditional formatting dialog.
* `label` - Label value for conditional formatting dialog.
* `measure` - measure value for the conditional formatting dialog.
* `style` - style property of the conditional formatting dialog.
* `value1` - value 1 for conditional formatting dialog.
* `value2` - value 2 for conditional formatting dialog, this is applicable only for selected conditions like **Between** and **NotBetween**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs20/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs20" %}

## See Also

* [Apply conditional formatting for specific row or column](./how-to/apply-conditional-formatting-for-specific-row-or-column)