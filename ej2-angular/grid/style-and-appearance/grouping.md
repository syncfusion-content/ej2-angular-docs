---
layout: post
title: Grouping in Angular Grid component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Grid component

You can customize the appearance of grouping elements in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component using CSS. Here are examples of how to customize the group header, group expand/collapse icons, group caption row, and grouping indent cell.

## Customizing the group header

To customize the appearance of the group header element, you can use the following CSS code:

```css
.e-grid .e-groupdroparea {
    background-color: #132f49;
}

```
In this example, the **.e-groupdroparea** class targets the group header element. You can modify the `background-color` property to change the color of the group header.

![Group header](../images/group-header.png)

## Customizing the group expand or collapse icons

To customize the appearance of the group expand/collapse icons in the grid, you can use the following CSS code:

```css
.e-grid .e-icon-gdownarrow::before{
    content:'\e7c9'
    }
    .e-grid .e-icon-grightarrow::before{
    content:'\e80f'
}
```

In this example, the **.e-icon-gdownarrow** and **.e-icon-grightarrow** classes target the expand and collapse icons, respectively. You can modify the `content` property to change the icon displayed. You can use the available Syncfusion<sup style="font-size:70%">&reg;</sup> icons based on your theme.

![Group expand or collapse icons](../images/group-expand-or-collapse-icons.png)

## Customizing the group caption row

To customize the appearance of the group caption row and the icons indicating record expansion or collapse, you can use the following CSS code:

```css
.e-grid .e-groupcaption {
    background-color: #deecf9;
}

.e-grid .e-recordplusexpand,
.e-grid .e-recordpluscollapse {
    background-color: #deecf9;
}
```

In this example, the **.e-groupcaption** class targets the group caption row element, and the **.e-recordplusexpand** and **.e-recordpluscollapse** classes target the icons indicating record expansion or collapse. You can modify the `background-color` property to change the color of these elements.

![Group caption row](../images/group-caption-row.png)

## Customizing the grouping indent cell

To customize the appearance of the grouping indent cell element, you can use the following CSS code:

```css
.e-grid .e-indentcell {
    background-color: #deecf9;
}
```

In this example, the **.e-indentcell** class targets the grouping indent cell element. You can modify the `background-color` property to change the color of the indent cell.

![Grouping indent cell](../images/indent-cell.png)
