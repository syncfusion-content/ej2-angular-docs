---
layout: post
title: Style in Angular Chips | Syncfusion
description: Override Angular Chips CSS classes to customize chip text, icons, avatar, delete button, and focus styles.
platform: ej2-angular
control: Style 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Chips

The following content provides the exact CSS structure that can be used to modify the component's appearance based on the user preference.

## Customizing the Angular Chips text

Use the following CSS to customize the Angular Chips text properties.

```css
.e-chip .e-chip-text {
    font-size: 20px;
    color: black;
    font-weight: normal;
}
```

## Customizing the Angular Chips icon

Use the following CSS to customize the Angular Chips icon properties.

```css
.e-chip .e-icon {
    background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/laura.png');
    opacity: 0.8;
}
```

## Customizing the Angular Chips delete button

Use the following CSS to customize the Angular Chips delete button.

```css
.e-chip-list .e-chip .e-chip-delete.e-dlt-btn {
    color: #e3165b;
    font-size: 12px;
}
```

## Customizing the Angular Chips outline

Use the following CSS to customize the Angular Chips outline.

```css
.e-chip-list .e-chip.e-outline {
    border-color: #e3165b;
    border-width: 3px;
}
```

## Customizing the Angular Chips on selection

Use the following CSS to customize the Angular Chips on selection.

```css
/* To customize single Angular Chips on selection */
.e-chip-list.e-selection .e-chip.e-active {
    background-color: #ffca1c;
    color: #e3165b;
}

/* To customize multiple Angular Chips on selection */
.e-chip-list .e-chip.e-active {
    background-color: #e3165b;
    color: white;
}
```

## Customizing the Angular Chips avatar text

Use the following CSS to customize the Angular Chips avatar text properties.

```css
.e-chip-list .e-chip .e-chip-avatar {
    background-color: #d51a1a;
    color: #fafafa;
}
```

## Customizing the Angular Chips height

Use the following CSS to customize the Angular Chips height.

```css
.e-chip-list.e-chip {
    height: 60px;
  }
```
