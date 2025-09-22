---
layout: post
title: Style in Angular Tab component | Syncfusion
description: Learn here all about Style in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Tab component

The following content provides the exact CSS structure that can be used to modify the Tab component's appearance based on user preference. These styles can be applied through Angular component styles, external stylesheets, or global CSS files.

## Customizing Tab

Use the following CSS to customize the overall Tab component container, including its border and background appearance.

```CSS

.e-tab {
    border: 5px solid rgb(173, 255, 47);
}

```

## Customizing the Tab items

Use the following CSS to customize the header items of the Tab component. This affects the visual appearance of the tab header area where tab titles are displayed.

```CSS

.e-tab .e-tab-header .e-toolbar-items {
    background: #9faed8;
    border: 2px solid blue;
}

```

Use the following CSS to customize the content items of the Tab component. This modifies the appearance of the content area that displays when each tab is selected.

```CSS

.e-tab .e-content .e-item {
    color: #a78515;
    font-size: 14px;
}

```

## Customizing Tab's header

Use the following CSS to customize the header section of the Tab component where tab titles are rendered.

```CSS

.e-tab .e-tab-header {
    background: #badfba !important;
}

```

## Customizing Tab's header icon

Use the following CSS to customize the header item icon of the Tab component.

```CSS

.e-tab .e-tab-header .e-toolbar-item .e-tab-icon {
    color: #badfba !important;
}

```

## Customizing Tab's content

Use the following CSS to customize the content area of the Tab component.

```CSS

.e-tab .e-content {
    background: #d1f6d1 !important;
}

```

## Customizing the hover state of Tab component

Use the following CSS to customize the appearance of tab items when users hover over them.

```CSS

.e-tab .e-tab-header .e-toolbar-item .e-tab-wrap:hover {
    background: #d1f6d1 !important;
}

```

Use the following CSS to customize the tab item popup icon when hovering.

```CSS

.e-tab .e-tab-header .e-hor-nav .e-popup-up-icon:hover,
.e-tab .e-tab-header .e-hor-nav .e-popup-down-icon:hover {
    background: #d1f6d1 !important;
}

```

## Customizing selected item of Tab component

Use the following CSS to customize the visual appearance of the currently selected tab item.

```CSS

.e-tab .e-tab-header .e-toolbar-item.e-active {
    background: #d1f4d1;
}

```

Use the following CSS to customize the selected tab item text and icon.

```CSS

.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-text,
.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-icon {
    color: green !important;
}

```