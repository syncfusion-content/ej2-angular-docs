---
layout: post
title: Style in Angular Toast | Syncfusion
description: Customize Syncfusion Angular Toast title, content, icon, and background colors with CSS targeting e-toast-container and inner classes.
platform: ej2-angular
control: Style 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Toast

The following content provides the exact CSS structure that can be used to modify the component's appearance based on the user preference.

## Customizing the Angular Toast title

Use the following CSS to customize the default Angular Toast's content properties like font-family, font-size and color.

```CSS
/* To change color, font family and font size */
.e-toast-container .e-toast .e-toast-message .e-toast-title {
    color: red;
    font-size: 18px;
    font-weight: bold;
}
```

## Customizing the Angular Toast content

Use the following CSS to customize the default toast's content properties like font-family, font-size and color.

```CSS
/* To change color, font family and font size */
.e-toast-container .e-toast .e-toast-message .e-toast-content {
    color: aqua;
    font-size: 13px;
    font-weight: normal;
}
```

## Customizing the Angular Toast icon

Use the following CSS to customize the default Angular Toast icon color.

```CSS
/* To change icon color */
.e-toast-container .e-toast .e-toast-icon {
    color: yellow;
}
```

## Customizing the Angular Toast background

Use the following CSS to customize the default Angular Toast's background color.

```CSS
/* To change background color */
.e-toast-container .e-toast {
    background-color: navy;
}
```