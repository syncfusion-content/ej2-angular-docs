---
layout: post
title: Aggregate in Angular Grid component | Syncfusion
description: Learn how to customize the appearance of aggregate elements in the Syncfusion Angular Grid component using CSS for root and cell-level styling.
platform: ej2-angular
control: Aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregate in Angular Grid component

You can customize the appearance of aggregate elements in the Syncfusion Angular Grid component with CSS. The following examples show how to style the aggregate root element and individual aggregate cell elements.

## Customizing the aggregate root element

To style the aggregate row at the grid footer (root element), use this CSS:

```css
.e-grid .e-gridfooter {
    font-family: cursive;
}
```

The **.e-gridfooter** class targets the root element of the aggregate row in the grid footer. Change the `font-family` property as needed to customize the font.

![Customize aggregate root element](../images/aggregate-root-element.png)

## Customizing the aggregate cell elements

To style individual aggregate (summary) cell elements in the summary row, use the following CSS:

```css
.e-grid .e-summaryrow .e-summarycell {
    background-color: #deecf9;
}
```

Here, **.e-summaryrow** identifies the summary row, and **.e-summarycell** targets the individual aggregate cells within that row. Adjust the `background-color` property to modify the background of the aggregate cell elements.

![Customize aggregate cell element](../images/aggregate-cell-element.png)
