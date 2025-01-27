---
layout: post
title: Style in Angular Chips component | Syncfusion
description: Learn here all about Style in Syncfusion Angular Chips component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Chips component

The following content provides the exact CSS structure that can be used to modify the component's appearance based on the user preference.

## Customizing the Chips text

Use the following CSS to customize the Chips text properties.

```css
.e-chip .e-chip-text {
    font-size: 20px;
    color: black;
    font-weight: normal;
}
```

## Customizing the Chips icon

Use the following CSS to customize the Chips icon properties.

```css
.e-chip .e-icon {
    background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/laura.png');
    opacity: 0.8;
}
```

## Customizing the Chips delete button

Use the following CSS to customize the Chips delete button.

```css
.e-chip-list .e-chip .e-chip-delete.e-dlt-btn {
    color: #e3165b;
    font-size: 12px;
}
```

## Customizing the Chips outline

Use the following CSS to customize the Chips outline.

```css
.e-chip-list .e-chip.e-outline {
    border-color: #e3165b;
    border-width: 3px;
}
```

## Customizing the Chips on selection

Use the following CSS to customize the Chips on selection.

```css
/* To customize single Chips on selection */
.e-chip-list.e-selection .e-chip.e-active {
    background-color: #ffca1c;
    color: #e3165b;
}

/* To customize multiple Chips on selection */
.e-chip-list .e-chip.e-active {
    background-color: #e3165b;
    color: white;
}
```

## Customizing the Chips avatar text

Use the following CSS to customize the Chips avatar text properties.

```css
.e-chip-list .e-chip .e-chip-avatar {
    background-color: #d51a1a;
    color: #fafafa;
}
```