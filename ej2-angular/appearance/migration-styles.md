---
layout: post
title: Migrating Styles to Theme Packages in Angular Components | Syncfusion
description: Migrate Syncfusion Angular components to theme packages for centralized styling, single file reference, and automatic dependency management.
control: Theme
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Migrating Styles from Component Packages to Theme Packages

Enhanced Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 theme architecture now offers a more structured and scalable approach to managing styles. This update centralizes all theme-related styles, improves `SCSS` structure and usage, and provides greater flexibility for customization.

[Theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/overview#theme-packages) now include built-in automatic dependency management, ensuring that all required styles are included and applied consistently without the need for manual imports. Each component provides dedicated `index.css` or `index.scss` files that automatically load all necessary style dependencies. This simplifies development, reduces configuration effort, and helps maintain a consistent visual experience across components.

## Key improvements

- **Centralized theme management** through theme packages
- **Optimized style file size** by loading only the required dependent component styles rather than importing all component package styles
- **Improved SCSS usage** and structure
- **Automatic inclusion** of dependency styles
- **Better support** for global and component-level customization

## SCSS reference migration

The following table shows `SCSS` examples migrating from component package imports, the EJ2 combined package, and multiple component style references to the new theme-package imports.

| Type | Previous Styles Reference | Theme Package Styles Reference |
|------|----------------------------|--------------------------------|
|  Components packages | @use '@syncfusion/ej2-base/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-buttons/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-calendars/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-dropdowns/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-inputs/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-navigations/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-popups/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-splitbuttons/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-angular-grids/styles/tailwind3.scss' as *; | @use '@syncfusion/ej2-tailwind3-theme/styles/grid/index.scss' as *; |
| EJ2 combined package | @use "@syncfusion/ej2/tailwind3.scss" as *; | @use "@syncfusion/ej2-tailwind3-theme/styles/tailwind3.scss" as *; |
| Multiple components | @import '@syncfusion/ej2-base/styles/tailwind3.scss';<br>@import '@syncfusion/ej2-icons/styles/tailwind3.scss';<br>@import '@syncfusion/ej2-calendars/styles/tailwind3.scss';<br>@import '@syncfusion/ej2-dropdowns/styles/tailwind3.scss';<br>@import '@syncfusion/ej2-inputs/styles/tailwind3.scss';<br>@import '@syncfusion/ej2-navigations/styles/tailwind3.scss';<br>@import '@syncfusion/ej2-popups/styles/tailwind3.scss';<br>@import '@syncfusion/ej2-splitbuttons/styles/tailwind3.scss';<br>@import "@syncfusion/ej2-lists/styles/tailwind3.scss";<br>@import '@syncfusion/ej2-layouts/styles/tailwind3.scss';<br>@import "@syncfusion/ej2-angular-grids/styles/tailwind3.scss";<br>@import "@syncfusion/ej2-angular-schedule/styles/tailwind3.scss";<br>@import '@syncfusion/ej2-richtexteditor/styles/tailwind3.scss';<br>@import "@syncfusion/ej2-angular-filemanager/styles/tailwind3.scss"; | @import "@syncfusion/ej2-tailwind3-theme/styles/grid/index.scss";<br>@import '@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.scss';<br>@import "@syncfusion/ej2-tailwind3-theme/styles/schedule/index.scss";<br>@import '@syncfusion/ej2-tailwind3-theme/styles/file-manager/index.scss'; |

### CSS reference migration

The following table shows `CSS` examples migrating from component package imports, the EJ2 combined package, and multiple component style references to the new theme-package imports.

| Type | Previous Styles Reference | Theme Package Styles Reference |
|------|----------------------------|--------------------------------|
|  Components packages | @import '@syncfusion/ej2-base/styles/tailwind3.css';<br>@import '@syncfusion/ej2-buttons/styles/tailwind3.css';<br>@import '@syncfusion/ej2-calendars/styles/tailwind3.css';<br>@import '@syncfusion/ej2-dropdowns/styles/tailwind3.css';<br>@import '@syncfusion/ej2-inputs/styles/tailwind3.css';<br>@import '@syncfusion/ej2-navigations/styles/tailwind3.css';<br>@import '@syncfusion/ej2-popups/styles/tailwind3.css';<br>@import '@syncfusion/ej2-splitbuttons/styles/tailwind3.css';<br>@import "@syncfusion/ej2-angular-grids/styles/tailwind3.css"; | @import "@syncfusion/ej2-tailwind3-theme/styles/grid/index.css"; |
| EJ2 combined package | @import "@syncfusion/ej2/tailwind3.css"; | @import "@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css"; |
| Multiple components | @import '@syncfusion/ej2-base/styles/tailwind3.css';<br>@import '@syncfusion/ej2-icons/styles/tailwind3.css';<br>@import '@syncfusion/ej2-calendars/styles/tailwind3.css';<br>@import '@syncfusion/ej2-dropdowns/styles/tailwind3.css';<br>@import '@syncfusion/ej2-inputs/styles/tailwind3.css';<br>@import '@syncfusion/ej2-navigations/styles/tailwind3.css';<br>@import '@syncfusion/ej2-popups/styles/tailwind3.css';<br>@import '@syncfusion/ej2-splitbuttons/styles/tailwind3.css';<br>@import "@syncfusion/ej2-lists/styles/tailwind3.css";<br>@import '@syncfusion/ej2-layouts/styles/tailwind3.css';<br>@import "@syncfusion/ej2-angular-grids/styles/tailwind3.css";<br>@import "@syncfusion/ej2-angular-schedule/styles/tailwind3.css";<br>@import '@syncfusion/ej2-richtexteditor/styles/tailwind3.css';<br>@import "@syncfusion/ej2-angular-filemanager/styles/tailwind3.css"; | @import "@syncfusion/ej2-tailwind3-theme/styles/grid/index.css";<br>@import '@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';<br>@import "@syncfusion/ej2-tailwind3-theme/styles/schedule/index.css";<br>@import '@syncfusion/ej2-tailwind3-theme/styles/file-manager/index.css'; |

## SASS styles customizations

This section explains how to customize `SCSS` styles in Syncfusion<sup style="font-size:70%">&reg;</sup> components when migrating from component package–based styling to theme packages. Theme packages provide a flexible and scalable way to override default styling, either globally or at the component level.

SASS customization enables you to override built-in theme variables before importing component styles. This approach ensures consistent and maintainable styling across your application.


| Type | Previous Styles Reference | Theme Package Styles Reference |
|------|---------------------------|--------------------------------|
| Global customization | @use '@syncfusion/ej2-base/styles/base/definition/tailwind3.scss' with (<br>  $primary-bg-color: rgb(240, 20, 20)<br>);<br>@use '@syncfusion/ej2-base/styles/base/tailwind3.scss' as *;<br>@use "@syncfusion/ej2-buttons/styles/tailwind3.scss" as *; | @use '@syncfusion/ej2-tailwind3-theme/styles/base/definition/tailwind3.scss' with (<br>  $primary-bg-color: rgb(240, 20, 20)<br>);<br>@use "@syncfusion/ej2-tailwind3-theme/styles/button/index.scss" as *; |
| Component specific customization | @use '@syncfusion/ej2-base/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-buttons/styles/button/tailwind3-definition' with (<br>  $btn-primary-bgcolor: red<br>);<br>@use '@syncfusion/ej2-buttons/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-calendars/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-dropdowns/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-inputs/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-navigations/styles/pager/tailwind3-definition' as pager with (<br>  $pager-active-bg-color: red<br>);<br>@use '@syncfusion/ej2-navigations/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-popups/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-splitbuttons/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-angular-grids/styles/tailwind3.scss' as *; | @use '@syncfusion/ej2-tailwind3-theme/styles/button/tailwind3-definition' with (<br>  $btn-primary-bgcolor: red<br>);<br>@use '@syncfusion/ej2-tailwind3-theme/styles/pager/tailwind3-definition' as pager with (<br>  $pager-active-bg-color: red<br>);<br>@use "@syncfusion/ej2-tailwind3-theme/styles/grid/index.scss" as *; |
| CSS variable customization | @use '@syncfusion/ej2-base/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-buttons/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-calendars/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-dropdowns/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-inputs/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-navigations/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-popups/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-splitbuttons/styles/tailwind3.scss' as *;<br>@use '@syncfusion/ej2-angular-grids/styles/tailwind3.scss' as *;<br><br>:root {<br>  --color-sf-primary: red;<br>} | @use '@syncfusion/ej2-tailwind3-theme/styles/base/tailwind3.scss' as *;<br>@use "@syncfusion/ej2-tailwind3-theme/styles/grid/index.scss" as *;<br><br>:root {<br>  --color-sf-primary: red;<br>} |
