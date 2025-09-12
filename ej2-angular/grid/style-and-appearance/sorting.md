---
layout: post
title: Sorting in Angular Grid component | Syncfusion
description: Learn here all about Sorting in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Angular Grid component

Customize the appearance of sorting and multi-sorting icons in the Syncfusion Angular Grid component using CSS. Theme-based Syncfusion [icons](https://ej2.syncfusion.com/documentation/appearance/icons/#material) can be used as needed.

## Customize the Grid Sorting Icon

Modify the sorting icon displayed in the Grid header by applying this CSS:

```css
.e-grid .e-icon-ascending::before {
    content: '\e7a3'; /* Icon code for ascending order */
}
.e-grid .e-icon-descending::before {
    content: '\e7b6'; /* Icon code for descending order */
}
```
Here, **.e-icon-ascending::before** sets the icon for ascending order, and **.e-icon-descending::before** specifies the icon for descending order. Icon codes may vary by theme; refer to Syncfusion icon documentation for details.

![Screenshot showing grid sorting icons](../images/grid-sorting-icons.png)

## Customize the Grid Multi Sorting Icon

Change the appearance of the multi sorting icon shown in grid headers when multiple columns are sorted:

```css
.e-grid .e-sortnumber {
    background-color: #deecf9;
    font-family: cursive;
}
```
The **.e-sortnumber** class sets the background color and font for the multi sorting icon, enabling you to customize its appearance.

![Screenshot of the grid multi sorting icon with custom style](../images/grid-multi-sorting-icon.png)
