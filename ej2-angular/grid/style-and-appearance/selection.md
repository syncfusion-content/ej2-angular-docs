---
layout: post
title: Angular Grid Selection Customization | Syncfusion
description: Learn how to customize selection styles in Angular Data Grid for selected rows, cells, and columns using CSS and selection templates.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection Styles in Angular Data Grid

Customize the appearance of row, cell, and column selection in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) using CSS. The following examples demonstrate styling the selection background for rows, cells, and columns.

## Customize the row selection background

Use the `.e-selectionbackground` class to customize the row selection background.

```css
.e-grid td.e-selectionbackground {
    background-color: #00b7ea;
}
```

![Row selection](../images/row-selection.png)

## Customize the cell selection background

Use the `.e-cellselectionbackground` class to customize the cell selection background.

```css
.e-grid td.e-cellselectionbackground {
    background-color: #00b7ea;
}
```

![Cell selection](../images/cell-selection.png)

## Customize the column selection background

Use the `.e-columnselection` class to customize the column selection background.

```css
.e-grid .e-columnselection {
    background-color: #aec2ec;
}
```

![Cell selection](../images/column-selection.png)
