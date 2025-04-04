---
layout: post
title: Header in Angular Grid component | Syncfusion
description: Learn here all about Header in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Header 
documentation: ug
domainurl: ##DomainURL##
---

# Header in Angular Grid component

You can customize the appearance of the header elements in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component using CSS. Here are examples of how to customize the Grid header, header cell, and header cell div element.

## Customizing the grid header

To customize the appearance of the Grid header root element, you can use the following CSS code:

```css

.e-grid .e-gridheader {
    border: 2px solid green;
}
```
In this example, the **.e-gridheader** class targets the Grid header root element. You can modify the `border` property to change the style of the header border. This customization allows you to override the thin line between the header and content of the grid.

![Grid header](../images/grid-header.png)

## Customizing the grid header cell

To customize the appearance of the grid header cell elements, you can use the following CSS code:

```css

.e-grid .e-headercell {
    color: #ffffff;
    background-color: #1ea8bd;
}

```
In this example, the **.e-headercell** class targets the header cell elements. You can modify the `color` and `background-color` properties to change the text color and background of the header cells.

![Grid header cell](../images/grid-header-cell.png)

## Customizing the grid header cell div element

To customize the appearance of the grid header cell div element, you can use the following CSS code:

```css

.e-grid .e-headercelldiv {
    font-size: 15px;
    font-weight: bold;
    color: darkblue;
}
```
In this example, the **.e-headercelldiv** class targets the div element within the header cell. You can modify the `font-size`, `font-weight`, `color` properties to change the font size, font-weight and color of the header text content.

![Grid header cell div element](../images/grid-header-cell-div-element.png)
