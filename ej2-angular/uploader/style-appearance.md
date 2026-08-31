---
layout: post
title: Style and Appearance in Angular Uploader | Syncfusion
description: Style the Angular Uploader wrapper, browse button, drop area, file list, and progress bar with custom CSS for height, width, colors, and fonts.
platform: ej2-angular
control: Style appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular Uploader

The following CSS structure allows you to customize the Uploader component's appearance to match your design preferences.

> Add these CSS rules to your application's global stylesheet (for example, `styles.css`) or to the component's `styleUrls` with the appropriate view-encapsulation setting, so the overrides apply to the Uploader's internal elements. The selectors that include `.e-bigger.e-small` target the bigger/small size variants of the Syncfusion theme.

## Customize the Uploader wrapper element

The wrapper is the outer container that holds the browse button, drop area, and file list. Use the following CSS to set its height and width:

```css
/* Specify height and width */
.e-upload.e-control-wrapper, .e-bigger.e-small .e-upload.e-control-wrapper {
    height: 300px;
    width: 300px;
}
```

## Customize the browse button

The browse button is the primary action button used to open the file dialog. Use the following CSS to set its font family, size, and color:

```css
/* Specify font family, size, and color */
.e-upload .e-file-select-wrap .e-btn, .e-upload .e-upload-actions .e-btn, .e-bigger.e-small .e-upload .e-file-select-wrap .e-btn, .e-bigger.e-small .e-upload .e-upload-actions .e-btn {
    font-family: cursive;
    height: 40px;
    background-color: aquamarine;
    color: coral;
}
```

## Customize the drop area content

The drop area shows the hint text where files can be dragged and dropped. Use the following CSS to set its font size and color:

```css
/* Specify font size and color */
.e-upload .e-file-select-wrap .e-file-drop, .e-bigger.e-small .e-upload .e-file-select-wrap .e-file-drop {
    font-size: 20px;
    color: aqua;
}
```

## Customize the file list container

The file list container holds each selected file's name, size, status, and action icons. Use the following CSS to set its background color. When many files are present, the list supports overflow/scroll and may be styled (for example, by setting a `max-height` and `overflow-y: auto`) accordingly:

```css
/* Specify background color */
.e-upload .e-upload-files .e-upload-file-list {
    background-color: beige;
}
```

## Customize the progress bar

The progress bar indicates the upload progress of each file. Use the following CSS to style the progress fill that appears within the progress track:

```css
/* Specify progress bar fill color */
.e-upload .e-upload-files .e-file-progress .e-progress-inner, .e-bigger.e-small .e-upload .e-upload-files .e-file-progress .e-progress-inner {
    background-color: #00bcd4;
}
```

## See also

* [Customize the appearance of uploader using a template](https://ej2.syncfusion.com/angular/documentation/uploader/template)