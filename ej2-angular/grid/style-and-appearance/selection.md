---
layout: post
title: Angular Grid Selection Customization | Syncfusion
description: Learn how to customize selection styles in Angular Data Grid for selected rows, cells, and columns using CSS and selection templates.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection Style in Angular Data Grid

The appearance of selection in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) component can be customized using CSS. Here are examples for customizing the row selection background, cell selection background, and column selection background.

## Customizing the row selection background

The `.e-selectionbackground` class is used to style the row selection background.

```css
.e-grid td.e-selectionbackground {
    background-color: #00b7ea;
}
```

![Row selection](../images/row-selection.png)

## Customizing the cell selection background

The `.e-cellselectionbackground` class is used to style the cell selection background.

```css
.e-grid td.e-cellselectionbackground {
    background-color: #00b7ea;
}
```

![Cell selection](../images/cell-selection.png)

## Customizing the column selection background

The `.e-columnselection` class is used to style the column selection background.

```css
.e-grid .e-columnselection {
    background-color: #aec2ec;
}
```

![Cell selection](../images/column-selection.png)
