---
layout: post
title: Angular Grid Aggregate Customization | Syncfusion
description: Learn how to customize aggregate styles in Angular Data Grid with aggregate rows, cells, templates, and visual formatting options.
platform: ej2-angular
control: Aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregate Styles in Angular Data Grid

Customize the appearance of aggregate elements in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) using CSS. The following examples demonstrate styling the aggregate footer, summary rows, and summary cells.

## Customize the aggregate root element

Use the `.e-gridfooter` class to style the aggregate root element in the grid footer.

```css
.e-grid .e-gridfooter {
    font-family: cursive;
}
```

![Customize aggregate root element](../images/aggregate-root-element.png)

## Customize summary rows and cells

Use the `.e-summaryrow` class to style the summary row, and the `.e-summarycell` class to style individual aggregate cells.

```css
.e-grid .e-summaryrow .e-summarycell {
    background-color: #deecf9;
}
```

![Customize aggregate cell element](../images/aggregate-cell-element.png)
