---
layout: post
title: Style in Angular Sidebar component | Syncfusion
description: Learn here all about Style in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Sidebar component

The Sidebar component can be customized using CSS to modify its appearance based on its state, position, or configuration. The following sections provide CSS rules targeting component-specific classes (e.g., `.e-sidebar`, `.e-dock`, `.e-rtl`) that are automatically applied based on properties like `position`, `enableDock`, or `enableRtl`. Apply these styles in `styles.css` or a component-specific stylesheet, ensuring specificity to avoid conflicts.

## Styling the Sidebar root element

The `.e-sidebar` class targets the `<ejs-sidebar>` element to customize its overall appearance, such as the background color.

```css
.e-sidebar {
    background: #898b2b;
}
```

## Styling Sidebar positions

Customize the Sidebar’s appearance based on its position, set via the [`position`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#position) property (default: `Left`).

### Left-Positioned Sidebar

Add a border to a left-positioned Sidebar:

```css
.e-sidebar.e-left {
    border-right: 2px solid red;
}
```

### Right-Positioned Sidebar

Add a border to a right-positioned Sidebar:

```css
.e-sidebar.e-right {
    border-left: 2px solid red;
}
```

## Styling Sidebar active states

Customize transitions for the Sidebar’s open or closed states, which use the `.e-open` or `.e-close` classes, applied based on the [`isOpen`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#isopen) property.

### Open state for left Sidebar

Adjust the transition for a left-positioned Sidebar when open:

```css
.e-sidebar.e-left.e-open {
    transition: transform 2.5s ease;
}
```

### Open state for right Sidebar

Adjust the transition for a right-positioned Sidebar when open:

```css
.e-sidebar.e-right.e-open {
    transition: transform 2.5s ease;
}
```

### Closed state for left Sidebar

Customize the transition and visibility for a left-positioned Sidebar when closed:

```css
.e-sidebar.e-left.e-transition.e-close {
    transition: transform 2.5s ease, visibility 1200ms;
}
```

### Closed state for right Sidebar

Customize the transition and visibility for a right-positioned Sidebar when closed:

```css
.e-sidebar.e-right.e-transition.e-close {
    transition: transform 2.5s ease, visibility 1200ms;
}
```

## Styling Sidebar with Dock state

When you enable the Dock support, the `e-dock` class will be added to the root element. Based on that class, you can also customize all the above stated customization. Use the following CSS to customize the Sidebar element with a dock state.

```css
.e-sidebar.e-dock {
    background: #2d323e;
}
```

## Styling Sidebar types

Customize the Sidebar based on its [`type`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#type) property (default: `Auto`), which applies classes like `.e-auto`, `.e-push`, `.e-over`, or `.e-slide`.

### Auto Type Sidebar

Style a left-positioned Sidebar with `type="Auto"`:

```css
.e-sidebar.e-left.e-auto {
    background-color: pink;
}
```

### Push type Sidebar

Style a left-positioned Sidebar with `type="Push"`:

```css
.e-sidebar.e-left.e-push {
    background-color: beige;
}
```

### Over type Sidebar

Style a left-positioned Sidebar with `type="Over"`:

```css
.e-sidebar.e-left.e-over {
    background-color: aqua;
}
```

### Slide type Sidebar

Style a left-positioned Sidebar with `type="Slide"`:

```css
.e-sidebar.e-left.e-slide {
    background-color: green;
}
```

## Styling the Sidebar Backdrop

When the [`showBackdrop`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#showbackdrop) property is set to `true`, the `.e-sidebar-overlay` class is applied to the backdrop, allowing customization of its appearance.

```css
.e-sidebar-overlay {
    background-color: aqua;
}
```

## Styling Sidebar in right-to-left mode

When you enable the RTL (right to left direction) support, the `e-rtl` class will be added to the root element. Based on that class, you can also customize all the above stated customization. Use the following CSS to customize the Sidebar element in the RTL (right to left direction) mode.

```css
.e-sidebar.e-left.e-rtl {
    background-color: antiquewhite;
}
```

## Disabling animation transitions

To disable animation transitions for the Sidebar, typically controlled by the [`animate`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#animate) property (default: `true`), override the `.e-content-animation` class to remove transitions for the main content area.

```css
.e-sidebar-context .e-content-animation {
    transition: none;
    transform: none;
}
```
