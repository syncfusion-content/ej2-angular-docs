---
layout: post
title: Style in Angular Card component | Syncfusion
description: Learn here all about Style in Syncfusion Angular Card component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Card 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Card component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on user preference.

## Customizing the card

Use the following CSS to customize the card appearance.

```css
.e-card {
    background-color: aqua;
    padding-left: 20px;
    margin-bottom: 20px;
}
```

## Customizing the header element

Use the following CSS to customize the header element appearance.

```css
.e-card .e-card-header {
    font-family: cursive;
    font-style: italic;
}
```

## Customizing the card content

Use the following CSS to customize the card content appearance.

```css
.e-card .e-card-content {
    font-size: 20px;
    color: gray;
    line-height: initial;
    font-weight: normal;
}
```

## Customizing the divider used to separate elements inside the card

Use the following CSS to customize the divider used to separate elements inside the card.
```css
.e-card .e-card-separator {
   padding-bottom: 30px;
}
```

## Including image within card element

Use the following CSS to include image within card element.

```css
.e-card .e-card-image {
    background-image: url(images.png);
    background-color: yellow;
    height: 160px;
}
```

## Including title or caption for the image

Use the following CSS to include title or caption for the image.

```css
.e-card .e-card-image .e-card-title {
    font-family: cursive;
    font-style: italic;
}
```

## Including heading image within the header

Use the following CSS to include heading image within the header.

```css
.e-card .e-card-header .e-card-header-image  {
    height: 48px;
    width: 48px;
}
```

## Customizing the header main title

Use the following CSS to customize the header main title.

```css
.e-card .e-card-header .e-card-header-caption .e-card-header-title  {
    font-size: large;
    color: aquamarine;
}
```

## Customizing the header subtitle

Use the following CSS to customize the header subtitle.

```css
.e-card .e-card-header .e-card-header-caption .e-card-sub-title  {
    font-size: 20px;
    font-variant: all-petite-caps;
}
```

## Including action buttons or anchor tags

Use the following CSS to include action buttons or anchor tags.

```css
.e-card .e-card-actions .e-card-btn  {
    padding-left: 20px;
    background-color: wheat;
}
```

## Aligning card elements horizontally

Use the following CSS to align card elements horizontally.

```css
.e-card .e-card-horizontal  {
    margin: auto;
    width: inherit;
}
```

## Aligning elements vertically within the horizontal layout

Use the following CSS to align elements vertically within the horizontal layout.

```css
.e-card .e-card-horizontal .e-card-stacked  {
    justify-content: flex-start;
    margin: initial;
}
```