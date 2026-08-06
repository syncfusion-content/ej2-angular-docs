---
layout: post
title: Angular Grid Sorting Customization | Syncfusion
description: Learn how to customize sorting icons and multi-sort indicators in Angular Data Grid using CSS and built-in Syncfusion icons for different themes.
platform: ej2-angular
control: Sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting Style in Angular Data Grid

The appearance of the sorting icons and multi sorting icons in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) component can be customized using CSS. Available Syncfusion<sup style="font-size:70%">&reg;</sup> [icons](https://ej2.syncfusion.com/angular/documentation/appearance/icons#material) can be used based on the active theme.

## Customize the Grid sorting icon

The `.e-icon-ascending::before` and `.e-icon-descending::before` classes are used to style the sorting icons for ascending and descending order.

```css
.e-grid .e-icon-ascending::before {
    content: '\e7a3'; /* Icon code for ascending order */
}
.e-grid .e-icon-descending::before {
    content: '\e7b6'; /* Icon code for descending order */
}
```

![Grid sorting icon](../images/grid-sorting-icons.png)

## Customize the Grid multi sorting icon

The `.e-sortnumber` class is used to style the multi sorting icon.

```css
.e-grid .e-sortnumber {
    background-color: #deecf9;
    font-family: cursive;
}
```

![Grid multi sorting icon](../images/grid-multi-sorting-icon.png)
