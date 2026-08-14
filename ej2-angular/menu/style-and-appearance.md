---
layout: post
title: Styles and Appearance in Angular Menu Bar | Syncfusion
description: Customize the Angular Menu Bar appearance by overriding wrapper, popup, item, and caret CSS classes or using Theme Studio.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Styles and Appearance in Angular Menu Bar

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