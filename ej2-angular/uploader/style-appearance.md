---
layout: post
title: Style appearance in Angular Uploader component | Syncfusion
description: Learn here all about Style appearance in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular Uploader component

The following CSS structure allows you to customize the Uploader component's appearance to match your design preferences.

## Customize the Uploader wrapper element

Use the following CSS to customize the wrapper element's dimensions:

```css
/* To specify height and width */
.e-upload.e-control-wrapper, .e-bigger.e-small .e-upload.e-control-wrapper {
        height: 300px;
        width: 300px;
}
```

## Customize the browse button

Use the following CSS to customize the browse button's styling:

```css
/* To specify font family, size, and color */
.e-upload .e-file-select-wrap .e-btn, .e-upload .e-upload-actions .e-btn, .e-bigger.e-small .e-upload .e-file-select-wrap .e-btn, .e-bigger.e-small .e-upload .e-upload-actions .e-btn {
        font-family: cursive;
        height: 40px;
        background-color: aquamarine;
        color: coral;
}
```

## Customize the drop area content

Use the following CSS to customize the drop area text styling:

```css
/* To specify font size and color */
.e-upload .e-file-select-wrap .e-file-drop, .e-bigger.e-small .e-upload .e-file-select-wrap .e-file-drop {
        font-size: 20px;
        color: aqua;
}
```

## Customize the file list container

Use the following CSS to customize the uploaded file list appearance:

```css
/* To specify background color */
.e-upload .e-upload-files .e-upload-file-list {
        background-color: beige;
}
```

## See Also

* [Customize the appearance of uploader using a template](https://ej2.syncfusion.com/angular/documentation/uploader/template/)
