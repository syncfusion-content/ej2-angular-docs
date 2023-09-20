---
layout: post
title: Filtering in Angular Grid component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Grid component

You can customize the appearance of filtering elements in the Syncfusion Angular Grid component using CSS. Below are examples of how to customize various filtering elements, including filter bar cell elements, filter bar input elements, focus styles, clear icons, filter icons, filter dialog content, filter dialog footer, filter dialog input elements, filter dialog button elements, and Excel filter dialog number filters.

## Customizing the filter bar cell element

To customize the appearance of the filter bar cell element in the grid header, you can use the following CSS code:

```css

.e-grid .e-filterbarcell {
      background-color: #deecf9;
}

```
In this example, the **.e-filterbarcell** class targets the filter bar cell element in the grid header. You can modify the `background-color` property to change the color of the filter bar cell element.

## Customizing the filter bar input element

To customize the appearance of the filter bar input element in the grid header, you can use the following CSS code:

```css

.e-grid .e-filterbarcell .e-input-group input.e-input{
      font-family: cursive;
}

```
In this example, the **.e-filterbarcell** class targets the filter bar cell element, and the **.e-input** class targets the input element within the cell. You can modify the `font-family` property to change the font of the filter bar input element.

## Customizing the filter bar input focus

To customize the appearance of the filter bar input element's focus highlight, you can use the following CSS code:

```css

.e-grid .e-filterbarcell .e-input-group.e-input-focus::after,
.e-grid .e-filterbarcell .e-input-group.e-input-focus::before{
      background-color: #0078d7;
}

```
In this example, the **.e-filterbarcell** class targets the filter bar cell element, and the **.e-input-group.e-input-focus** class targets the focused input element. You can modify the `background-color` property to change the color of the focus highlight.

## Customizing the filter bar input clear icon

To customize the appearance of the filter bar input element's clear icon, you can use the following CSS code:

```css

.e-grid .e-filterbarcell .e-input-group .e-clear-icon::before {
    content: '\e825';
}

```
In this example, the **.e-clear-icon** class targets the clear icon element within the input group. You can modify the `content` property to change the icon displayed.

## Customizing the grid filtering icon

To customize the appearance of the grid's filtering icon in the grid header, you can use the following CSS code:

```css

.e-grid .e-icon-filter::before{
    content: '\002a';
}

```
In this example, the **.e-icon-filter** class targets the filtering icon element. You can modify the `content` property to change the icon displayed.

## Customizing the filter dialog content

To customize the appearance of the filter dialog's content element, you can use the following CSS code:

```css

.e-grid .e-filter-popup .e-dlg-content {
    background-color: #deecf9;
}

```
In this example, the **.e-filter-popup .e-dlg-content** classes target the content element within the filter dialog. You can modify the `background-color` property to change the color of the dialog's content.

## Customizing the filter dialog footer

To customize the appearance of the filter dialog's footer element, you can use the following CSS code:

```css

.e-grid .e-filter-popup .e-footer-content {
    background-color: #deecf9;
}

```
In this example, the **.e-filter-popup .e-footer-content** classes target the footer element within the filter dialog. You can modify the `background-color` property to change the color of the dialog's footer.

## Customizing the filter dialog input element

To customize the appearance of the filter dialog's input elements, you can use the following CSS code:

```css

.e-grid .e-filter-popup .e-input-group input.e-input{
      font-family: cursive;
}

```
In this example, the **.e-filter-popup** class targets the filter dialog, and the **.e-input** class targets the input elements within the dialog. You can modify the `font-family` property to change the font of the input elements.

## Customizing the filter dialog button element

To customize the appearance of the filter dialog's button elements, you can use the following CSS code:

```css

.e-grid .e-filter-popup .e-btn{
      font-family: cursive;
}

```
In this example, the **.e-filter-popup** class targets the filter dialog, and the **.e-btn** class targets the button elements within the dialog. You can modify the `font-family` property to change the font of the button elements.

## Customizing the excel filter dialog number filters element

To customize the appearance of the excel filter dialog's number filters, you can use the following CSS code:

```css

.e-grid .e-filter-popup .e-contextmenu-wrapper ul{
      background-color: #deecf9;
}

```
In this example, the **.e-filter-popup .e-contextmenu-wrapper** ul classes target the number filter elements within the excel filter dialog. You can modify the `background-color` property to change the color of these elements.
