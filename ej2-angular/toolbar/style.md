---
layout: post
title: Style and Appearance in Angular Toolbar | Syncfusion
description: Style the Angular Toolbar by overriding e-toolbar, e-tbar-btn, e-icons, hover, and focus CSS classes for a custom appearance.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular Toolbar

The following content provides the exact CSS structure that can be used to modify the Toolbar component's appearance based on user preference.

## Customizing the Toolbar container

Use the following CSS to customize the Toolbar container.

```css

.e-toolbar {
    border: 5px solid rgb(173, 255, 47);
}

```

## Customizing Toolbar items

Use the following CSS to customize the items within the Toolbar.

```css

 .e-toolbar .e-toolbar-item {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```

Use the following CSS to customize the button elements within the Toolbar items.

```css

.e-toolbar .e-tbar-btn {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```

## Customizing Toolbar item icons

Use the following CSS to customize the icon appearance within Toolbar items.

```css

.e-toolbar .e-tbar-btn .e-icons {
    background: #185655;
    color: #d7f9d4;
}

```

## Customizing hover state

Use the following CSS to customize the appearance of Toolbar items during hover interactions.

```css

.e-toolbar .e-tbar-btn:hover {
    background: #c0e3a1;
    border: 1px solid green;
}

```

## Customizing selected item state

Use the following CSS to customize the appearance of focused or selected Toolbar items.

```css

.e-toolbar .e-tbar-btn:focus {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```