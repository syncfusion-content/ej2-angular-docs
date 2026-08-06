---
layout: post
title: Angular Grid Aggregate Customization | Syncfusion
description: Learn how to customize aggregate styles in Angular Data Grid with aggregate rows, cells, templates, and visual formatting options.
platform: ej2-angular
control: Aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregate Style in Angular Data Grid

The appearance of aggregate elements in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) component can be customized using CSS. Below are examples for customizing the aggregate root element and the aggregate cell elements.

## Customizing the aggregate root element

The `.e-gridfooter` class is used to style the aggregate root element in the grid footer.

```css
.e-grid .e-gridfooter {
    font-family: cursive;
}
```

![Customize aggregate root element](../images/aggregate-root-element.png)

## Customizing the aggregate cell elements

The `.e-summaryrow` class is used to style the summary row, and the `.e-summarycell` class is used to style individual aggregate cells.

```css
.e-grid .e-summaryrow .e-summarycell {
    background-color: #deecf9;
}
```

![Customize aggregate cell element](../images/aggregate-cell-element.png)
