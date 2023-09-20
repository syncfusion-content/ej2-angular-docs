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

You can customize the appearance of the paging elements in the Syncfusion Angular Grid component using CSS. Here are examples of how to customize the pager root element, pager container element, pager navigation elements, pager page numeric link elements, and pager current page numeric element.

## Customizing the grid pager root element

To customize the appearance of the grid pager root element, you can use the following CSS code:

```css
.e-grid .e-gridpager {
    font-family: cursive;
    background-color: #deecf9;
}
```
In this example, the **.e-gridpager** class targets the pager root element. You can modify the `font-family` and `background-color` properties to change the font family and background color of the pager.

## Customizing the grid pager container element

To customize the appearance of the grid pager container element, you can use the following CSS code:

```css
.e-grid .e-pagercontainer {
    background-color: #deecf9;
}
```

In this example, the **.e-pagercontainer** class targets the pager container element. You can modify the `background-color` property to change the background color of the pager container.

## Customizing the grid pager navigation elements

To customize the appearance of the grid pager navigation elements, you can use the following CSS code:

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

In this example, the classes **.e-prevpagedisabled, .e-prevpage, .e-nextpage, .e-nextpagedisabled, .e-lastpagedisabled, .e-lastpage, .e-firstpage,** and **.e-firstpagedisabled** target the various pager navigation elements. You can modify the `background-color` property to change the background color of these elements.

## Customizing the grid pager page numeric link elements

To customize the appearance of the grid pager current page numeric link elements, you can use the following CSS code:

```css
.e-grid .e-gridpager .e-numericitem {
    border-radius: initial;
}
```

In this example, the **.e-numericitem** class targets the page numeric link elements. You can modify the `border-radius` property to change the border radius of these elements.

## Customizing the grid pager current page numeric element

To customize the appearance of the grid pager current page numeric element, you can use the following CSS code:

```css
.e-grid .e-gridpager .e-currentitem {
    background-color: #0078d7;
}
```

In this example, the **.e-currentitem** class targets the current page numeric item. You can modify the `background-color` property to change the background color of this element.
