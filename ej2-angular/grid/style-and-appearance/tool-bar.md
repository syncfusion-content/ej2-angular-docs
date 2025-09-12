---
layout: post
title: Tool bar in Angular Grid component | Syncfusion
description: Learn here all about Tool bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Angular Grid component

Customize the appearance of the toolbar in the Syncfusion Angular Grid component using CSS. The following examples show how to style the toolbar root element and the toolbar button elements.

## Customize the Toolbar Root Element

Change the toolbar's background color with this CSS:

```css
.e-grid .e-toolbar-items {
    background-color: #deecf9;
}
```

The **.e-toolbar-items** class sets the background color for the toolbar's root element.

![Screenshot of the customized grid toolbar root element](../images/grid-toolbar-root-element.png)

## Customize the Toolbar Button Element

Modify the appearance of toolbar buttons using the following CSS:

```css
.e-grid .e-toolbar .e-btn {
    background-color: #deecf9;
}
```

Here, **.e-toolbar .e-btn** targets the background color of all button elements inside the toolbar.

![Screenshot showing the styled grid toolbar button element](../images/grid-toolbar-button-element.png)
