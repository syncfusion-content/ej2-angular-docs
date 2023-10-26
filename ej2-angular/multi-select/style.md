---
layout: post
title: Style in Angular Multiselect Component | Syncfusion
description: Learn here all about style in Syncfusion Essential  Angular Multiselect component,it's elements and more details.
platform: ej2-angular
control: Style 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Multiselect Component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the background color of wrapper element

Use the following CSS to customize the background color of wrapper element.

```css
.e-multiselect.e-input-group .e-multi-select-wrapper {
    background-color: red;
}
```

## Customizing the appearance of the delimiter wrapper element

Use the following CSS to customize the appearance of delimiter wrapper element.

```css
.e-multiselect .e-delim-values {
    -webkit-text-fill-color: blue;
    font-size: 16px;
    font-family: cursive;
}
```

## Customizing the appearance of chips

Use the following CSS to customize the appearance of selected chips.

```css
.e-multiselect .e-multi-select-wrapper .e-chips .e-chipcontent {
    font-family: cursive;
    font-size: 20px;
    -webkit-text-fill-color: blue;
}

.e-multi-select-wrapper .e-chips {
    background-color: aqua;
    height: 26px;
}
```

## Customizing the dropdown icon’s color

Use the following CSS to customize the dropdown icon’s color.

```css
.e-multiselect.e-input-group .e-input-group-icon, .e-multiselect.e-input-group.e-control-wrapper .e-input-group-icon:hover {
    color: red;
    font-size: 14px;
}
```

## Customizing the focus color

Use the following CSS to customize the focusing color of input element.

```css
.e-multiselect.e-input-group.e-control-wrapper.e-input-focus::before, .e-multiselect.e-input-group.e-control-wrapper.e-input-focus::after {
    background: #c000ff;
}
```

## Customizing the disabled component’s text color

Use the following CSS to customize the text color when the component is disabled.

```css
.e-multiselect.e-disabled .e-multi-select-wrapper .e-delim-values {
    -webkit-text-fill-color: red;
}
```

## Customizing the color of the placeholder text

Use the following CSS to customize the text color of placeholder.

```css
.e-multiselect input.e-dropdownbase::placeholder {
        color: red;
}
```

## Customizing the placeholder to add mandatory indicator(*)

Use the following CSS to add the mandatory indicator * to the float label element.

```css
.e-input-group.e-control-wrapper.e-float-input .e-float-text::after {
    content: "*";
    color: red;
}
```

## Customizing the float label element's focusing color

Use the following CSS to customize the focusing color of float label element.

```css
.e-float-input.e-input-group:not(.e-float-icon-left) .e-float-line::before,.e-float-input.e-control-wrapper.e-input-group:not(.e-float-icon-left) .e-float-line::before,.e-float-input.e-input-group:not(.e-float-icon-left) .e-float-line::after,.e-float-input.e-control-wrapper.e-input-group:not(.e-float-icon-left) .e-float-line::after {
    background-color: #2319b8;
}

.e-multiselect.e-input-group.e-control-wrapper.e-float-input.e-input-focus .e-float-text.e-label-top, .e-float-input.e-control-wrapper:not(.e-error).e-input-focus input ~ label.e-float-text {
    color: #2319b8;
}

```

## Customizing the outline theme's focus color

Use the following CSS to customize the focusing color of outline theme.

```css
.e-outline.e-input-group.e-input-focus:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled):not(.e-float-icon-left),.e-outline.e-input-group.e-input-focus.e-control-wrapper:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled):not(.e-float-icon-left),.e-outline.e-input-group.e-input-focus:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled),.e-outline.e-input-group.e-control-wrapper.e-input-focus:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled) {
    border-color: #b1bd15;
    box-shadow: inset 1px 1px #b1bd15, inset -1px 0 #b1bd15, inset 0 -1px #b1bd15;
}
```

## Customizing the background color of focus, hover, and active item's

Use the following CSS to customize the background color of focus, hover and active item's.

```css
.e-dropdownbase .e-list-item.e-item-focus, .e-dropdownbase .e-list-item.e-active, .e-dropdownbase .e-list-item.e-active.e-hover, .e-dropdownbase .e-list-item.e-hover {
    background-color: #1f9c99;
    color: #2319b8;
}
```

## Customizing the appearance of pop-up element

Use the following CSS to customize the appearance of popup element.

```css
.e-dropdownbase .e-list-item, .e-dropdownbase .e-list-item.e-item-focus {
    background-color: #29c2b8;
    color: #207cd9;
    font-family: emoji;
    min-height: 29px
}
```

## Customizing the color of the checkbox

Use the following CSS to customize the color of checkbox.

```css
.e-popup .e-checkbox-wrapper .e-frame.e-check, .e-popup .e-checkbox-wrapper:hover .e-frame.e-check {
    background-color: green;
    color: white;
}
```