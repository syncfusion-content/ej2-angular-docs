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

Customize the appearance of header elements in the Syncfusion Angular Grid component using CSS. The sections below demonstrate how to modify the grid header root, header cell, and header cell content.

## Customize the Grid Header Root

Change the border of the header root using this CSS:

```css
.e-grid .e-gridheader {
    border: 2px solid green;
}
```
The **.e-gridheader** selector applies a custom border to the grid header root element, overriding the default line between the header and the grid content.

![Screenshot displaying the customized grid header](../images/grid-header.png)

## Customize the Grid Header Cell

Modify the text color and background of grid header cells using the following CSS:

```css
.e-grid .e-headercell {
    color: #ffffff;
    background-color: #1ea8bd;
}
```
The **.e-headercell** class targets individual header cell elements, letting you set both text `color` and `background-color`.

![Screenshot showing a styled grid header cell](../images/grid-header-cell.png)

## Customize the Grid Header Cell Content

Adjust the font size, weight, and text color for header cell content with this CSS:

```css
.e-grid .e-headercelldiv {
    font-size: 15px;
    font-weight: bold;
    color: darkblue;
}
```
Here, **.e-headercelldiv** styles the div containing header cell text, enabling modifications of font and color properties.

![Screenshot of the grid header cell content with custom font and color](../images/grid-header-cell-div-element.png)
