---
layout: post
title: Angular Toolbar Styling and Customization | Syncfusion
description: Learn here all about Style in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# Angular Toolbar styling and customization

The following content provides the exact CSS structure that can be used to modify the Toolbar component's appearance based on user preference.

## Customizing the Toolbar container

Use the following CSS to customize the Toolbar container.

```CSS

.e-toolbar {
    border: 5px solid rgb(173, 255, 47);
}

```

## Customizing Toolbar items

Use the following CSS to customize the items within the Toolbar.

```CSS

 .e-toolbar .e-toolbar-item {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```

Use the following CSS to customize the button elements within the Toolbar items.

```CSS

.e-toolbar .e-tbar-btn {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```

## Customizing Toolbar item icons

Use the following CSS to customize the icon appearance within Toolbar items.

```CSS

.e-toolbar .e-tbar-btn .e-icons {
    background: #185655;
    color: #d7f9d4;
}

```

## Customizing hover state

Use the following CSS to customize the appearance of Toolbar items during hover interactions.

```CSS

.e-toolbar .e-tbar-btn:hover {
    background: #c0e3a1;
    border: 1px solid green;
}

```

## Customizing selected item state

Use the following CSS to customize the appearance of focused or selected Toolbar items.

```CSS

.e-toolbar .e-tbar-btn:focus {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```