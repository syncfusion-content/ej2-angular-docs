---
layout: post
title: Style in Angular Dialog component | Syncfusion
description: Learn here all about Style in Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Dialog component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the dialog header

Use the following CSS to customize the dialog header properties.

```CSS
.e-dialog .e-dlg-header {
    color: green;
    font-size: 20px;
    font-weight: normal;
}
```

## Customizing the dialog content

Use the following CSS to customize the dialog content properties.

```CSS
.e-dialog .e-dlg-content {
    color: red;
    font-size: 10px;
    font-weight: normal;
    line-height: normal;
}
```

## Customizing modal dialog overlay

Use the following CSS to customize the modal dialog overlay.

```CSS
.e-dlg-overlay {
    background-color: slategray;
    opacity: 0.6;
}
```

## Customizing the dialog resize icon

Use the following CSS to customize the dialog resize icon.

```CSS
/* To change the icon content */
.e-dialog .e-south-east::before, .e-dialog .e-south-west::before {
    content: '\f047';
}

/* To set the icon pack */
.e-dialog .e-resize-handle {
    font: normal normal normal 14px/1 FontAwesome;
}
```

The above CSS demonstration uses the font awesome icon.

## Customizing the dialog close button

Use the following CSS to customize the dialog close button.

```CSS
/* To specify font size and color */
.e-dialog .e-btn .e-btn-icon.e-icon-dlg-close {
    font-size: 12px;
    color: red;
}
```

## Customizing the dialog footer button

Use the following CSS to customize the dialog footer button.

```CSS
/* To specify font color, background color and border color */
.e-btn.e-flat.e-primary, .e-css.e-btn.e-flat.e-primary {
    background-color: transparent;
    border-color: transparent;
    color: blue;
}
```