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

You can customize the appearance of the header elements in the Syncfusion Angular Grid component using CSS. Here are examples of how to customize the Grid header, header cell, and header cell div element.

## Customizing the Grid header

To customize the appearance of the Grid header root element, you can use the following CSS code:

```css

.e-grid .e-gridheader {
    border: 2px solid green;
}
```
In this example, the **.e-gridheader** class targets the Grid header root element. You can modify the `border` property to change the style of the header border. This customization allows you to override the thin line between the header and content of the grid.

## Customizing the grid header cell

To customize the appearance of the grid header cell elements, you can use the following CSS code:

```css

.e-grid .e-headercell {
    color: darkblue;
}
```
In this example, the **.e-headercell** class targets the header cell elements. You can modify the `color` property to change the text color of the header cells.

## Customizing the grid header cell div element

To customize the appearance of the grid header cell div element, you can use the following CSS code:

```css

.e-grid .e-headercelldiv {
    font-size: 15px;
}
```
In this example, the **.e-headercelldiv** class targets the div element within the header cell. You can modify the `font-size` property to change the font size of the header text content.
