---
layout: post
title: Angular Grid Header Customization | Syncfusion
description: Learn how to customize header styles in Angular Data Grid with header templates, icons, and interactive header elements.
platform: ej2-angular
control: Header 
documentation: ug
domainurl: ##DomainURL##
---

# Header Styles in Angular Data Grid

Customize the appearance of the header in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) using CSS. The following examples demonstrate styling the grid header, header cells, and header cell content.

## Customize the header

Use the `.e-gridheader` class to style the root element of the grid header.

```css
.e-grid .e-gridheader {
    border: 2px solid green;
}
```

![Grid header](../images/grid-header.png)

## Customize the header cell

Use the `.e-headercell` class to style the root element of the header cell elements.

```css
.e-grid .e-headercell {
    color: #ffffff;
    background-color: #1ea8bd;
}
```

![Data Grid header cell](../images/grid-header-cell.png)

## Customize the header cell content

Use the `.e-headercelldiv` class to apply custom styles to the div element inside each grid header cell.

```css
.e-grid .e-headercelldiv {
    font-size: 15px;
    font-weight: bold;
    color: darkblue;
}
```

![Data Grid header cell div element](../images/grid-header-cell-div-element.png)
