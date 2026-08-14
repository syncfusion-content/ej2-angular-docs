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

To modify the ContextMenu appearance, you need to override the default CSS of ContextMenu component. The ContextMenu provides extensive customization options through CSS classes that target specific elements within the component structure. You can customize everything from the overall wrapper to individual menu items, icons, and visual states. Additionally, you have an option to create your own custom theme for the controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

The following table lists the essential CSS classes and their purposes for customizing the ContextMenu component:

| CSS Class | Purpose of Class |
|-----|-----|
|.e-contextmenu-wrapper | To customize the context menu wrapper |
|.e-contextmenu-wrapper .e-menu-parent | To customize the context menu items |
|.e-contextmenu-wrapper ul .e-menu-item.e-selected .e-caret::before | To customize the context menu caret icon |
|.e-contextmenu-wrapper ul .e-menu-item .e-menu-icon::before|To customize the icons of the context menu |