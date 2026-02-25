---
layout: post
title: Style appearance in Angular Maskedtextbox component | Syncfusion
description: Learn here all about Style appearance in Syncfusion Angular Maskedtextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in Angular Maskedtextbox component

The following content provides the exact CSS structure that can be used to modify the control’s appearance based on the user preference.

## Customizing the appearance of MaskedTextBox wrapper element

Use the following CSS to customize the appearance of the MaskedTextBox wrapper:

```css
/* To specify height, font size, and border */
.e-input-group input.e-input,
.e-input-group.e-control-wrapper input.e-input,
.e-input-group textarea.e-input,
.e-input-group.e-control-wrapper textarea.e-input {
    font-size: 20px;
    border-color: red;
    height: 40px;
    border: 2px solid;
}
```

## Customizing the MaskedTextBox element on hovering

Use the following CSS to customize the MaskedTextBox element on hover:

```css
/* To specify border on hover */
.e-input-group input.e-input:hover:not(.e-success):not(.e-warning):not(.e-error):not([disabled]):not(:focus) {
      border: 3px solid red;
}
```