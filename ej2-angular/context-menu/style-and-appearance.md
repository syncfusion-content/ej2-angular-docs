---
layout: post
title: Styles and Appearance in Angular Context Menu | Syncfusion
description: Customize Angular Context Menu appearance by overriding wrapper, parent, caret, and icon CSS classes or using Theme Studio.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Styles and Appearance in Angular Context Menu

To modify the ContextMenu appearance, you need to override the default CSS of the ContextMenu component. The ContextMenu provides extensive customization options through CSS classes that target specific elements within the component structure. You can customize everything from the overall wrapper to individual menu items, icons, and visual states. Additionally, you have an option to create your own custom theme for the controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

The following table lists the essential CSS classes and their purposes for customizing the ContextMenu component:

| CSS Class | Purpose of Class |
| --- | --- |
| `.e-contextmenu-wrapper` | To customize the context menu wrapper. |
| `.e-contextmenu-wrapper .e-menu-parent` | To customize the context menu items. |
| `.e-contextmenu-wrapper ul .e-menu-item.e-selected .e-caret::before` | To customize the context menu caret icon. |
| `.e-contextmenu-wrapper ul .e-menu-item .e-menu-icon::before` | To customize the icons of the context menu. |

## Customization example

You can override any of the classes listed above in your application's global stylesheet. The following example shows how to change the wrapper background, item hover color, and caret style.

Add the following rules to `src/styles.css`:

```css
/* Customize the wrapper background */
.e-contextmenu-wrapper {
    background-color: #fafafa;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Customize the menu item hover state */
.e-contextmenu-wrapper .e-menu-parent .e-menu-item:hover {
    background-color: #e3f2fd;
    color: #0d47a1;
}

/* Customize the caret icon */
.e-contextmenu-wrapper ul .e-menu-item .e-caret::before {
    color: #0d47a1;
}
```

## Customizing Theme Studio

When applying the Syncfusion Material 3 theme stylesheet, the styles cascade into the ContextMenu wrapper using the same selectors. To override per-component, prepend a project-specific selector or scope with a custom CSS class on the `<ejs-contextmenu>` element.

> **Note:** When the ContextMenu is rendered inside a modal Dialog or Popup, set explicit `z-index` values on the wrapper to keep it above other layers:
> ```css
> .e-contextmenu-wrapper { z-index: 1005; }
> ```