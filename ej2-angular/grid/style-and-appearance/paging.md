---
layout: post
title: Paging in Angular Grid component | Syncfusion
description: Learn here all about Paging in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Paging 
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Angular Grid component

Customize the appearance of paging elements in the Syncfusion Angular Grid component using CSS. The sections below describe how to style the pager root, container, navigation elements, page numeric links, and the current page indicator.

## Customize the Grid Pager Root

Apply custom font and background color to the pager root element with the following CSS:

```css
.e-grid .e-gridpager {
    font-family: cursive;
    background-color: #deecf9;
}
```
The **.e-gridpager** selector styles the pager root, changing its font and background.

![Screenshot showing the customized grid pager root element](../images/grid-pager-root-element.png)

## Customize the Grid Pager Container

Change the border and font family of the pager container using:

```css
.e-grid .e-pagercontainer {
    border: 2px solid #00b5ff;
    font-family: cursive;
}
```
The **.e-pagercontainer** selector targets the pager container, enabling various layout and style modifications.

![Screenshot showing the styled grid pager container](../images/grid-pager-container-element.png)

## Customize the Grid Pager Navigation Elements

Style the pager navigation buttons with this CSS:

```css
.e-grid .e-gridpager .e-prevpagedisabled,
.e-grid .e-gridpager .e-prevpage,
.e-grid .e-gridpager .e-nextpage,
.e-grid .e-gridpager .e-nextpagedisabled,
.e-grid .e-gridpager .e-lastpagedisabled,
.e-grid .e-gridpager .e-lastpage,
.e-grid .e-gridpager .e-firstpage,
.e-grid .e-gridpager .e-firstpagedisabled {
    background-color: #deecf9;
}
```
These selectors target all pager navigation elements, applying the specified background color.

In this example, the classes **.e-prevpagedisabled, .e-prevpage, .e-nextpage, .e-nextpagedisabled, .e-lastpagedisabled, .e-lastpage, .e-firstpage,** and **.e-firstpagedisabled** target the various pager navigation elements. You can modify the `background-color` property to change the background color of these elements.

![Grid pager navigation elements](../images/grid-pager-navigation-element.png)

## Customizing the grid pager page numeric link elements

To customize the appearance of the grid pager current page numeric link elements, you can use the following CSS code:

```css
.e-grid .e-gridpager .e-numericitem {
    background-color: #5290cb;
    color: #ffffff;
    cursor: pointer;
    }
    
    .e-grid .e-gridpager .e-numericitem:hover {
    background-color: white;
    color:  #007bff;
}
```
In this example, the **.e-numericitem** class targets the page numeric link elements. You can modify the `background-color`, `color` properties to change the background color and text color of these elements.

![Grid pager page numeric link elements](../images/pager-page-numeric-link-elements.png)

## Customizing the grid pager current page numeric element

To customize the appearance of the grid pager current page numeric element, you can use the following CSS code:

```css
.e-grid .e-gridpager .e-currentitem {
    background-color: #0078d7;
    color: #fff;
}
```
Here, **.e-currentitem** targets the current page indicator, setting the background and text colors.

![Screenshot of the grid pager current page numeric element with custom style](../images/grid-pager-current-page-numeric-element.png)
