---
layout: post
title: CSS Structure in Angular Dashboard Layout | Syncfusion
description: Apply CSS selectors to customize panel headers, content, resize handles, and the dashboard background in Syncfusion Angular Dashboard Layout.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# CSS Structure in Angular Dashboard Layout

The Angular Dashboard Layout component provides extensive styling capabilities through CSS customization. This guide demonstrates how to modify the component's appearance using CSS selectors to match specific design requirements.

## Panel Header Customization

Use the following CSS to customize the dashboard layout panel header.

```css
.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {
    color: #754131;
    background-color: #c9e2f7;
    text-align: center;
}
```

## Panel Content Customization

Use the following CSS to customize the dashboard layout panel content.

```css
.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {
    background-color: #c9e2f7;
    padding: 50px;
}
```

## Resize Handle Customization

Use the following CSS to customize the dashboard layout resize icon.

```css
.e-dashboardlayout.e-control .e-panel .e-panel-container .e-resize.e-double{
    color: #0378d5;
    font-size: 30px;
    height: 20px;
    width: 20px;
}
```

## Dashboard Layout Background Customization

Use the following CSS to customize the dashboard layout panel background.

```css
.e-dashboardlayout.e-control.e-responsive {
    background: #b3d3ed;
}
```

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.