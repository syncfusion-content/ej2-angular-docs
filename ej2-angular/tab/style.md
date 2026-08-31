---
layout: post
title: Style and Appearance in Angular Tab | Syncfusion
description: Style the Angular Tab by overriding e-tab, e-tab-header, content, icon, and active item CSS classes for selected and hover states.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular Tab

The following content provides the exact CSS structure that can be used to modify the Tab component's appearance based on user preference. These styles can be applied through Angular component styles, external stylesheets, or global CSS files.

> **Tip:** To scope CSS to a specific Tab instance, assign a custom class via the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#cssclass) property of the Tab and prefix your selectors with that class.
>
> **Angular component style encapsulation:** Styles defined in a component's `.css` file are scoped by default. Use `::ng-deep` to pierce encapsulation when applying CSS to Syncfusion's internal classes, or move styles to a global stylesheet.
>
> **RTL support:** Most of the selectors below apply symmetrically in RTL mode; directional classes such as `.e-hor-nav` continue to work without mirroring.

## Container

### Customizing Tab

Use the following CSS to customize the overall Tab component container, including its border and background appearance.

```CSS

.e-tab {
    border: 5px solid rgb(173, 255, 47);
}

```

## Header items

### Customizing the Tab items

Apply this CSS to restyle the toolbar that hosts the tab header items, controlling the visual treatment of the tab header area where tab titles are displayed.

```CSS

.e-tab .e-tab-header .e-toolbar-items {
    background: #9faed8;
    border: 2px solid blue;
}

```

### Customizing Tab's header

Apply this CSS to restyle the header section of the Tab component where tab titles are rendered.

```CSS

.e-tab .e-tab-header {
    background: #badfba !important;
}

```

### Customizing Tab's header icon

Apply this CSS to restyle the header item icon of the Tab component.

```CSS

.e-tab .e-tab-header .e-toolbar-item .e-tab-icon {
    color: #badfba !important;
}

```

## Content

### Customizing Tab's content items

Apply this CSS to restyle the content items of the Tab component, modifying the appearance of the content area shown when each tab is selected.

```CSS

.e-tab .e-content .e-item {
    color: #a78515;
    font-size: 14px;
}

```

### Customizing Tab's content

Apply this CSS to restyle the content area of the Tab component as a whole.

```CSS

.e-tab .e-content {
    background: #d1f6d1 !important;
}

```

## States

### Customizing the hover state of Tab component

Apply this CSS to restyle the appearance of tab items when users hover over them.

```CSS

.e-tab .e-tab-header .e-toolbar-item .e-tab-wrap:hover {
    background: #d1f6d1 !important;
}

```

Use the following CSS to restyle the tab item popup navigation arrows when hovering.

```CSS

.e-tab .e-tab-header .e-hor-nav .e-popup-up-icon:hover,
.e-tab .e-tab-header .e-hor-nav .e-popup-down-icon:hover {
    background: #d1f6d1 !important;
}

```

### Customizing selected item of Tab component

Apply this CSS to restyle the visual appearance of the currently selected tab item.

```CSS

.e-tab .e-tab-header .e-toolbar-item.e-active {
    background: #d1f4d1;
}

```

Apply this CSS to restyle the selected tab item's text and icon.

```CSS

.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-text,
.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-icon {
    color: green !important;
}

```

## See Also

* [Header configuration](./header)
* [Getting Started](./getting-started)
* [Synchronizing theme variables](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio)