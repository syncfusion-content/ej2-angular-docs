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

Customize the appearance of grouping elements in the Syncfusion Angular Grid component using CSS. This includes modifying the group drop area header, expand/collapse icons, group caption row, and grouping indent cells.

## Customize the Group Drop Area Header

Modify the appearance of the group drop area header using the following CSS:

```css
.e-grid .e-groupdroparea {
    background-color: #132f49;
}
```
In this CSS, the **.e-groupdroparea** selector applies the background color to the group drop area header.

![Screenshot displaying the customized group drop area header](../images/group-header.png)

## Customize the Group Expand and Collapse Icons

Adjust the appearance of the group expand and collapse icons using this CSS:

```css
.e-grid .e-icon-gdownarrow::before{
    content:'\e7c9'
    }
    .e-grid .e-icon-grightarrow::before{
    content:'\e80f'
}
```

The **.e-icon-gdownarrow** and **.e-icon-grightarrow** selectors target the group expand and collapse icons, respectively. The `content` property sets the Unicode icon; available icon codes may vary depending on the theme. Refer to Syncfusion icon documentation for icon selection.

![Screenshot showing customized group expand or collapse icons](../images/group-expand-or-collapse-icons.png)

## Customize the Group Caption Row and Record Icons

Change the appearance of both the group caption row and the associated expand/collapse record icons with the following CSS:

```css
.e-grid .e-groupcaption {
    background-color: #deecf9;
}

.e-grid .e-recordplusexpand,
.e-grid .e-recordpluscollapse {
    background-color: #deecf9;
}
```

The **.e-groupcaption** selector targets the group caption row, while **.e-recordplusexpand** and **.e-recordpluscollapse** modify the background color of the record expand/collapse icons within the caption row.

![Screenshot illustrating the customized group caption row](../images/group-caption-row.png)

## Customize the Grouping Indent Cell

To modify the appearance of the grouping indent cell, use the following CSS:

```css
.e-grid .e-indentcell {
    background-color: #deecf9;
}
```

Here, **.e-indentcell** applies a background color to the grouping indent cell.

![Screenshot of the grouping indent cell with custom background color](../images/indent-cell.png)
