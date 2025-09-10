---
layout: post
title: Style in Angular Splitter component | Syncfusion
description: Learn here all about Style in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Splitter component

This guide outlines the CSS structure used to customize the appearance of the Angular Splitter component based on user preferences.

## Customizing the split bar

Use the following CSS rules to modify the default, hover, and active states of the split bar.

### Horizontal split bar

```CSS
/* default split bar color */
.e-splitter .e-split-bar.e-split-bar-horizontal{
   background: blue;
}

/* split bar color in hover and active state */
.e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover,
.e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-active {
   background: green;
}
```

### Vertical split bar

```CSS
/* default split bar color */
.e-splitter .e-split-bar.e-split-bar-vertical {
    background: blue;
}

/* split bar color in hover and active state */
.e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-hover,
.e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-active {
    background: green;
}
```

## Customizing the split bar resize handle

Adjust the appearance of the resize handle within the split bar.

### Horizontal split bar resize handle

```CSS
/* default split bar resize handle color */
.e-splitter .e-split-bar.e-split-bar-horizontal .e-resize-handler {
    color: rgba(20, 27, 233, 0.54);
}

/* default split bar resize handle color in hover and active state */
.e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover .e-resize-handler,
.e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-active .e-resize-handler {
    color: green;
}
```

### Vertical split bar resize handle

```CSS
/* default split bar resize handle color */
.e-splitter .e-split-bar.e-split-bar-vertical .e-resize-handler {
    color: rgba(20, 27, 233, 0.54);
}

/* default split bar resize handle color in hover and active state */
.e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-hover .e-resize-handler,
.e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-active .e-resize-handler {
    color: green;
}
```

## Customizing the split bar arrows

Modify the appearance of the navigation arrows displayed on the split bar.

### Horizontal split bar resize arrows

```CSS
/* split bar arrows */
.e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover .e-navigate-arrow.e-arrow-left::before, .e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-active .e-navigate-arrow.e-arrow-left::before, .e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover .e-navigate-arrow.e-arrow-left::after, .e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-active .e-navigate-arrow.e-arrow-left::after, .e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover .e-navigate-arrow.e-arrow-right::before, .e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-active .e-navigate-arrow.e-arrow-right::before, .e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover .e-navigate-arrow.e-arrow-right::after, .e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-active .e-navigate-arrow.e-arrow-right::after {
    background-color: green;
}

/* split bar arrows - circular border */
.e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover .e-navigate-arrow.e-arrow-left, .e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover .e-navigate-arrow.e-arrow-right {
    border-color: rgba(33, 227, 22, 0.5);
}
```

### Vertical split bar resize arrows

```CSS
/* split bar arrows */
.e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-hover .e-navigate-arrow.e-arrow-up::before, .e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-active .e-navigate-arrow.e-arrow-up::before, .e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-hover .e-navigate-arrow.e-arrow-up::after, .e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-active .e-navigate-arrow.e-arrow-up::after, .e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-hover .e-navigate-arrow.e-arrow-down::before, .e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-active .e-navigate-arrow.e-arrow-down::before, .e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-hover .e-navigate-arrow.e-arrow-down::after, .e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-active .e-navigate-arrow.e-arrow-down::after {
    background-color: green;
}

/* split bar arrows - circular border */
.e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-hover .e-navigate-arrow.e-arrow-up, .e-splitter .e-split-bar.e-split-bar-vertical.e-split-bar-hover .e-navigate-arrow.e-arrow-down {
    border-color: rgba(33, 227, 22, 0.5);
}
```

## To hide the resize handle in Splitter

To remove the resize handle from the split bar, apply the following CSS:

### Hide the horizontal split bar resize arrow

```CSS
.e-splitter .e-split-bar.e-split-bar-horizontal .e-resize-handler {
    display: none;
}
```

### Hide the vertical split bar resize arrow

```CSS
.e-splitter .e-split-bar.e-split-bar-vertical .e-resize-handler {
    display: none;
}
```
