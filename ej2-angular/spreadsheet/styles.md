---
layout: post
title: Styles in Angular Spreadsheet component | Syncfusion
description: Learn here all about Styles in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Styles 
documentation: ug
domainurl: ##DomainURL##
---

# Styles in Angular Spreadsheet component

To modify the Spreadsheet appearance, you need to override the default CSS of the spreadsheet. Please find the CSS structure that can be used to modify the Spreadsheet appearance. Also, you have an option to create your own custom theme for all the JavaScript controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

## Customizing the Spreadsheet

Use the below CSS to customize the Spreadsheet root element.

```css

.e-spreadsheet {
    font-family: cursive;
}

```

## Header

### Customizing the Spreadsheet Ribbon

Use the below CSS to customize the Spreadsheet Ribbon.

```css

.e-spreadsheet .e-ribbon {
    background-color: #808080;
}

```

### Customizing the Spreadsheet formula bar panel

You can customize the Spreadsheet formula bar panel by using this CSS.

```css

.e-spreadsheet .e-formula-bar-panel {
   border: none;
}

```

### Customizing the Spreadsheet formula bar text

You can customize the Spreadsheet formula bar text by using this CSS.

```css

.e-spreadsheet .e-formula-bar-panel .e-formula-bar {
    font-weight: bold;
}

```

## Sheet

### Customizing the Spreadsheet sheet element

Using this CSS, you can customize the Spreadsheet sheet element.

```css

.e-spreadsheet .e-sheet-panel .e-sheet {
    border-color: #000000;
}

```

### Customizing the Spreadsheet sheet header

Use the below CSS to customize the Spreadsheet sheet header.

```css

.e-spreadsheet .e-sheet-panel .e-sheet .e-header-panel {
    font-style: oblique;
}

```

### Customizing the Spreadsheet row header

Use the below CSS to customize the Spreadsheet row header.

```css
.e-spreadsheet .e-row-header .e-header-cell {
    color: #0000FF !important;
}

```

### Customizing the Spreadsheet column header

Use the below CSS to customize the Spreadsheet column header.

```css
.e-spreadsheet .e-column-header .e-header-cell {
    color: #0000FF !important;
}

```

### Customizing the Spreadsheet selection element

Customize the Spreadsheet selection element.

```css

.e-spreadsheet .e-selection {
    border-color: #0000FF;
}

```

### Customizing the Spreadsheet active cell element

Customize the Spreadsheet active cell element.

```css

.e-spreadsheet .e-active-cell {
    border-color: #0000FF;
}

```

### Customizing the Spreadsheet cell element

Using this CSS, you can customize the Spreadsheet cell element.

```css

.e-spreadsheet .e-cell {
    background-color: #0078d7 !important;
}

```

## Ribbon Items

### Customizing the Spreadsheet sorting icon

Use the below CSS to customize the Spreadsheet sorting icon in the Spreadsheet ribbon. You can use the available Syncfusion<sup style="font-size:70%">&reg;</sup> [icons](https://ej2.syncfusion.com/documentation/appearance/icons/#material) based on your theme.

```css

.e-spreadsheet .e-sort-filter-icon:before {
    background-color: #deecf9;
    content: '\e306';
}

```

### Customizing the filter dialog content

Use the below CSS to customize the Spreadsheet filter dialog content element.

```css

.e-spreadsheet .e-filter-popup .e-dlg-content {
    background-color: #deecf9;
}

```

### Customizing the filter dialog footer

Spreadsheet filter dialog footer element can be customized by using the below CSS.

```css

.e-spreadsheet .e-filter-popup .e-footer-content {
    background-color: #ccffff;
}

```

### Customizing the filter dialog input element

Use the below CSS to customize the Spreadsheet filter dialog input element.

```css

.e-spreadsheet .e-filter-popup .e-input-group input.e-input{
      font-family: cursive;
}

```

### Customizing the filter dialog button element

Use the below CSS to customize the Spreadsheet filter dialog button element.

```css

.e-spreadsheet .e-filter-popup .e-btn{
    font-family: cursive;
}

```

### Customizing the Excel filter dialog number filters element

Spreadsheet Excel filter dialog number filters element can be customized by using the below CSS.

```css

.e-spreadsheet .e-filter-popup .e-contextmenu-wrapper ul{
    background-color: #deecf9;
}

```

## Footer

### Customizing the Spreadsheet sheet tab panel

Spreadsheet sheet tab panel can be customized by using the below CSS.

```css

.e-spreadsheet .e-sheet-tab-panel {
    background: #08fbfb;
}

```

### Customizing the Spreadsheet sheet tab

Spreadsheet sheet tab element can be customized by using the below CSS.

```css

.e-spreadsheet .e-sheet-tab-panel .e-tab-header .e-toolbar-item.e-active .e-tab-wrap .e-tab-text {
    font-weight: bold;
}

```