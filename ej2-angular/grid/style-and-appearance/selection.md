---
layout: post
title: Selection in Angular Grid component | Syncfusion
description: Learn how to customize the appearance of selection in the Syncfusion Angular Grid component using CSS for row, cell, and column selection backgrounds.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular Grid component

You can customize the selection appearance in the Syncfusion Angular Grid component with CSS. The following examples show how to style the row, cell, and column selection backgrounds.

## Customizing the row selection background

To change the background color of selected rows, use the following CSS:

```css
.e-grid td.e-selectionbackground {
    background-color: #00b7ea;
}
```
The **.e-selectionbackground** class targets the selection background in rows. Adjust the `background-color` property as desired.

![Row selection](../images/row-selection.png)

## Customizing the cell selection background

To style the background of selected cells, use this CSS:

```css
.e-grid td.e-cellselectionbackground {
    background-color: #00b7ea;
}
```

The **.e-cellselectionbackground** class controls the background color for selected cells. Update the `background-color` property to customize the cell selection.

![Cell selection](../images/cell-selection.png)

## Customizing the column selection background

To modify the column selection's background color, apply the following CSS:

```css
.e-grid .e-columnselection {
    background-color: #aec2ec;
}
```
The **.e-columnselection** class targets the background for selected columns. Change the `background-color` as needed for your column selection styling.

![Cell selection](../images/column-selection.png)
