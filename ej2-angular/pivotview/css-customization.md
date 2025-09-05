---
layout: post
title: CSS customization in Angular Pivot Table component | Syncfusion
description: Learn here all about CSS customization in Syncfusion Angular Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: CSS customization 
documentation: ug
domainurl: ##DomainURL##
---

# CSS customization in Angular Pivot Table component

The Angular Pivot Table component provides extensive CSS customization options, allowing users to modify the visual appearance and layout of various pivot table elements. This includes styling row headers, column headers, value cells, summary cells, Field List components, and Grouping Bar areas to match application themes and design requirements.

## Hiding Axis

The visibility of the row, column, value, and filter axis areas in both the Field List dialog and Grouping Bar can be controlled using custom CSS styling. Each axis area has specific CSS classes that allow precise targeting for customization.

The following code example demonstrates how to hide the column axis in both the Grouping Bar and Field List within the Pivot Table. The CSS includes necessary height and spacing adjustments to prevent layout gaps and maintain visual consistency:

```css
#PivotTable .e-group-columns {
    display: none;
}
#PivotTable .e-group-filters {
    height: 71px !important;
}
#PivotTable_PivotFieldList_Container .e-field-list-columns {
    display: none;
}
#PivotTable_PivotFieldList_Container .e-field-list-values {
    margin-top: 0px;
    height: 338px;
}
```

**Note:** The CSS selectors above assume the Pivot Table component has the ID **PivotTable**. Replace this with your actual component ID or use appropriate class-based selectors for your implementation.

The CSS selectors target the following Pivot Table elements:
- `.e-group-columns`: Hides the column axis in the Grouping Bar.
- `.e-group-filters`: Adjusts the height of the filter axis to compensate for the hidden column axis in the Grouping Bar.
- `.e-field-list-columns`: Hides the column axis in the Field List dialog.
- `.e-field-list-values`: Adjusts the layout of the values axis when the column section is hidden in the Field List dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/css-custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/css-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/css-custom-cs1" %}

## Text Alignment

The alignment of text inside row headers, column headers, value cells, and summary cells can be customized using CSS styling. The following example demonstrates how to center-align text in value cells:

```css
.e-pivotview .e-valuecontent {
    text-align: center !important;
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/text-align-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/text-align-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/text-align-cs1" %}

## Customize header, value and summary cell styles

The Pivot Table component elements including header cells, value cells, and summary cells can be styled using built-in CSS class names. This enables comprehensive visual customization of the component's appearance to match application themes and design requirements.

The following code sample demonstrates how to apply custom background colors to different cell types:

```css
.e-pivotview .e-headercell { 
    background-color: thistle !important; 
} 
.e-pivotview .e-rowsheader { 
    background-color: skyblue !important; 
} 
.e-pivotview .e-summary:not(.e-gtot) { 
    background-color: pink !important; 
} 
.e-pivotview .e-gtot { 
    background-color: greenyellow !important; 
}
```
The CSS classes target the following PivotView elements:
- `.e-headercell`: Styles column header cells
- `.e-rowsheader`: Styles row header cells  
- `.e-summary:not(.e-gtot)`: Styles subtotal summary cells (excluding grand totals)
- `.e-gtot`: Styles grand total cells

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/summary-cell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/summary-cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/summary-cell-cs1" %}