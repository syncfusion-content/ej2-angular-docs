---
layout: post
title: Angular Grid - Filtering Style | Syncfusion
description: Angular Grid filtering style customizes filter UI appearance and templates, including filter bars, menus, and Excel-like filtering components.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering Customization in Angular Grid Component

The appearance of filtering elements in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component can be customized using CSS. Below are examples for customizing various filtering elements, including filter bar cell elements, filter bar input elements, focus styles, clear icons, filter icons, filter dialog content, filter dialog footer, filter dialog input elements, filter dialog button elements, and excel filter dialog number filters.

## Customize the Filter Bar Cell Element

The `.e-filterbarcell` class is used to style the filter bar cell element in the grid header.

```css
.e-grid .e-filterbarcell {
    background-color: #045fb4;
}
```

![Filter bar cell element](../images/filter-bar-cell-element.png)

## Customize the Filter Bar Input Element

The `.e-filterbarcell` and `.e-input` classes are used to style the filter bar input element.

```css
.e-grid .e-filterbarcell .e-input-group input.e-input{
    font-family: cursive;
}
```

![Filter bar input element](../images/filter-bar-input-element.png)

## Customize the Filter Bar Input Focus

The `.e-filterbarcell` and `.e-input-group.e-input-focus` classes are used to style the focused filter bar input element.

```css
.e-grid .e-filterbarcell .e-input-group.e-input-focus{
    background-color: #deecf9;
}
```

![Filter bar input focus](../images/filter-bar-input-element-focus.png)

## Customize the Filter Bar Input Clear Icon

The `.e-clear-icon` class is used to style the clear icon element within the input group.

```css
.e-grid .e-filterbarcell .e-input-group .e-clear-icon::before {
    content: '\e72c';
}
```

![Filter bar input clear icon](../images/filter-bar-input-clear-icon.png)

## Customize the Grid Filtering Icon

The `.e-icon-filter` class is used to style the filtering icon element in the grid header.

```css
.e-grid .e-icon-filter::before{
      content: '\e81e';
}
```

![Grid filtering icon](../images/grid-filtering-icon.png)

## Customize the Filter Dialog Content

The `.e-filter-popup .e-dlg-content` classes are used to style the content element within the filter dialog.

```css
.e-grid .e-filter-popup .e-dlg-content {
    background-color: #deecf9;
}
```

![Filter dialog content](../images/filter-dialog-content.png)

## Customize the Filter Dialog Footer

The `.e-filter-popup .e-footer-content` classes are used to style the footer element within the filter dialog.

```css
.e-grid .e-filter-popup .e-footer-content {
    background-color: #deecf9;
}
```

![Filter dialog footer](../images/filter-dialog-footer.png)

## Customize the Filter Dialog Input Element

The `.e-filter-popup` and `.e-input` classes are used to style the input elements within the filter dialog.

```css
.e-grid .e-filter-popup .e-input-group input.e-input{
    font-family: cursive;
}
```

![Filter dialog input element](../images/filter-dialog-input-element.png)

## Customize the Filter Dialog Button Element

The `.e-filter-popup` and `.e-btn` classes are used to style the button elements within the filter dialog.

```css
.e-grid .e-filter-popup .e-btn{
    font-family: cursive;
}
```

![Filter dialog button element](../images/filter-dialog-button-element.png)

## Customize the Excel Filter Dialog Number Filters Element

The `.e-filter-popup .e-contextmenu-wrapper ul` classes are used to style the number filter elements within the `Excel` filter dialog.

```css
.e-grid .e-filter-popup .e-contextmenu-wrapper ul{
    background-color: #deecf9;
}
```

![Excel filter dialog number filters element](../images/excel-filter-dialog-number-filters-element.png)
