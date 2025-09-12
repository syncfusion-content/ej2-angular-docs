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

Customize the appearance of filtering elements in the Syncfusion Angular Grid component using CSS. Below are examples for styling various filter bar elements, input fields, icons, dialog content, and Excel-style filter menus.

## Customize the Filter Bar Cell Element

Change the background color of the filter bar cell in the grid header using:

```css
.e-grid .e-filterbarcell {
    background-color: #045fb4;
}
```
The **.e-filterbarcell** class sets the background color for each filter bar cell in the header.

![Screenshot showing the filter bar cell element](../images/filter-bar-cell-element.png)

## Customize the Filter Bar Input Element

Set a custom font for filter bar input fields with this CSS:

```css
.e-grid .e-filterbarcell .e-input-group input.e-input{
    font-family: cursive;
}
```
In this example, the **.e-filterbarcell** class targets the filter bar cell element, and the **.e-input** class targets the input element within the cell. You can modify the `font-family` property to change the font of the filter bar input element.

![Screenshot showing the filter bar input element](../images/filter-bar-input-element.png)

## Customize the Filter Bar Input Focus

To customize the highlight color when the filter bar input is focused:

```css
.e-grid .e-filterbarcell .e-input-group.e-input-focus{
    background-color: #deecf9;
}
```
In this example, the **.e-filterbarcell** class targets the filter bar cell element, and the **.e-input-group.e-input-focus** class targets the focused input element. You can modify the `background-color` property to change the color of the focus highlight.

![Screenshot displaying filter bar input focus](../images/filter-bar-input-element-focus.png)

## Customize the Filter Bar Input Clear Icon

Update the icon for the filter bar input clear function using:

```css
.e-grid .e-filterbarcell .e-input-group .e-clear-icon::before {
    content: '\e72c';
}
```
The **.e-clear-icon** selector lets you set a custom icon for the clear icon within the filter bar input.

![Screenshot of the filter bar input clear icon](../images/filter-bar-input-clear-icon.png)

## Customize the Grid Filtering Icon

Use the following CSS to change the filter icon in the grid header:

```css
.e-grid .e-icon-filter::before{
      content: '\e81e';
}
```
The **.e-icon-filter** selector sets the icon for the filtering button in headers.

![Screenshot showing the grid filtering icon](../images/grid-filtering-icon.png)

## Customize the Filter Dialog Content

Change the appearance of filter dialog content using:

```css
.e-grid .e-filter-popup .e-dlg-content {
    background-color: #deecf9;
}
```
In this example, the **.e-filter-popup .e-dlg-content** classes target the content element within the filter dialog. You can modify the `background-color` property to change the color of the dialog's content.

![Screenshot of filter dialog content](../images/filter-dialog-content.png)

## Customize the Filter Dialog Footer

Modify the filter dialog's footer background color with:

```css
.e-grid .e-filter-popup .e-footer-content {
    background-color: #deecf9;
}
```
In this example, the **.e-filter-popup .e-footer-content** classes target the footer element within the filter dialog. You can modify the `background-color` property to change the color of the dialog's footer.

![Screenshot showing filter dialog footer](../images/filter-dialog-footer.png)

## Customize the Filter Dialog Input Element

Change the font for input elements within the filter dialog using:

```css
.e-grid .e-filter-popup .e-input-group input.e-input{
    font-family: cursive;
}
```
In this example, the **.e-filter-popup** class targets the filter dialog, and the **.e-input** class targets the input elements within the dialog. You can modify the `font-family` property to change the font of the input elements.

![Screenshot of the filter dialog input element](../images/filter-dialog-input-element.png)

## Customize the Filter Dialog Button Element

Style the buttons within the filter dialog with:

```css
.e-grid .e-filter-popup .e-btn{
    font-family: cursive;
}
```
In this example, the **.e-filter-popup** class targets the filter dialog, and the **.e-btn** class targets the button elements within the dialog. You can modify the `font-family` property to change the font of the button elements.

![Screenshot displaying the filter dialog button element](../images/filter-dialog-button-element.png)

## Customize the Excel Filter Dialog Number Filters Element

To customize the appearance of the excel filter dialog's number filters, you can use the following CSS code:

```css
.e-grid .e-filter-popup .e-contextmenu-wrapper ul{
    background-color: #deecf9;
}
```
In this example, the **.e-filter-popup .e-contextmenu-wrapper** ul classes target the number filter elements within the excel filter dialog. You can modify the `background-color` property to change the color of these elements.

![Screenshot of Excel filter dialog number filters element](../images/excel-filter-dialog-number-filters-element.png)
