---
layout: post
title: Style and appearance in Angular Menu component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular Menu component

This section explains how to customize the visual appearance of the Angular Menu component by overriding default CSS classes or using Theme Studio at [https://ej2.syncfusion.com/themestudio/?theme=material3](https://ej2.syncfusion.com/themestudio/?theme=material3) to create custom themes like material3, Bootstrap, and more.

To modify the Menu’s appearance, define custom styles in the application’s stylesheet (e.g., `styles.css`) targeting the CSS classes listed below, ensuring styles are applied after importing required Syncfusion CSS files (e.g., `@syncfusion/ej2-navigations/styles/material3.css`). Alternatively, use the `cssClass` property to apply custom styles directly to the Menu component.

The following table lists CSS classes and their corresponding sections in the Menu component.

| CSS Class | Purpose of Class |
|-----|-----|
|.e-menu-wrapper|Customizes the main menu container.|
|.e-menu-wrapper.e-menu-popup|Customizes the popup submenu container.|
|.e-menu-wrapper ul .e-menu-item|To customize the menu items.|
|.e-menu-wrapper.e-menu-popup .e-menu-item|Customizes individual popup submenu items.|
|.e-menu-wrapper ul .e-menu-item .e-caret|Customizes the arrow icon indicating submenus.|