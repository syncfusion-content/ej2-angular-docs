---
layout: post
title: Style and appearance in Angular Color picker component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style and appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular Color picker component

The following CSS structure can be used to customize the ColorPicker appearance based on user preference. Alternatively, create a custom theme using the [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

| CSS Class | Purpose |
|-----|-----|
|.e-custom-picker .e-container .e-handler|Customizes the color selection handler appearance|
|.color-picker.e-dropdown-popup ul .e-container|Customizes the main ColorPicker container|
|.color-picker.e-dropdown-popup ul .e-item.e-palette-item|Customizes individual palette color tiles|
|.color-picker.e-dropdown-popup .e-container .e-switch|Customizes the mode switcher button|
|.color-picker.e-dropdown-popup .e-container .e-slider-preview|Customizes the slider and color preview area|

## Custom Styling with cssClass Property in ColorPicker

The ColorPicker component allows for customization using the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/color-picker/index-default#cssclass) property, enabling you to apply custom styles such as increasing the height of the input elements.

### Apply cssClass Property

Add the `cssClass` attribute to the ColorPicker component to attach a custom class:

```html
<ejs-colorpicker cssClass="custom-class" value="#008000"></ejs-colorpicker>
```

### Target the Button Wrapper

Use the `.e-split-btn-wrapper` class to control the height of the visible input/button:

```css
.custom-class.e-split-btn-wrapper {
    height: 40px;
}
```

### Adjust Popup Input Fields

To ensure consistent height across all input fields (HEX, R, G, B, A) in the popup, use the following CSS:

```css
.custom-class .e-float-input.e-control-wrapper.e-input-group.e-valid-input {
    height: 40px;
}
```

> **Note:** The `cssClass="custom-class"` property adds a custom class to the ColorPicker component. `.e-split-btn-wrapper` targets the main ColorPicker UI height. `.e-float-input.e-control-wrapper.e-input-group.e-valid-input` adjusts the height of input fields (HEX & RGBA) inside the popup for uniformity.