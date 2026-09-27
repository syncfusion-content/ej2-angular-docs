---
layout: post
title: Angular Grid Sorting Customization | Syncfusion
description: Learn how to customize sorting icons and multi-sort indicators in Angular Data Grid using CSS and built-in Syncfusion icons for different themes.
platform: ej2-angular
control: Sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting Styles in Angular Data Grid

Customize the appearance of sorting icons and multi-sort indicators in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) using CSS. Use the appropriate Syncfusion<sup style="font-size:70%">&reg;</sup> [icons](https://ej2.syncfusion.com/angular/documentation/appearance/icons#material) based on the active theme.

## Customize the sorting icon

Use the `.e-icon-ascending::before` and `.e-icon-descending::before` classes to style the sorting icons for ascending and descending order.

```css
.e-grid .e-icon-ascending::before {
    content: '\e7a3'; /* Icon code for ascending order */
}
.e-grid .e-icon-descending::before {
    content: '\e7b6'; /* Icon code for descending order */
}
```

![Data Grid sorting icon](../images/grid-sorting-icons.png)

> The icon codes in this example are for the "Material 3" theme. Use the corresponding icon codes for the active Syncfusion<sup style="font-size:70%">®</sup> theme.

## Customize the multi-sorting icon

Use the `.e-sortnumber` class to style the multi-sort icon.

```css
.e-grid .e-sortnumber {
    background-color: #deecf9;
    font-family: cursive;
}
```

![Data Grid multi sorting icon](../images/grid-multi-sorting-icon.png)
