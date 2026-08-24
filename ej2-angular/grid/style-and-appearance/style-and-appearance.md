---
layout: post
title: Angular Grid Style and Appearance | Syncfusion
description: Learn how to customize the style and appearance of Angular Data Grid with built-in themes, CSS customization, theme packages, and design configuration.
platform: ej2-angular
control: Style and appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular Data Grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) provides flexible styling and appearance customization options to align with your application's design requirements. You can choose from a wide range of built-in themes, customize visual elements using CSS, and create consistent experiences through theme-based styling.

## Built-in Themes

The Data Grid components include a comprehensive collection of themes to match popular design systems and provide both light and dark variants. Available themes include:

| Theme                         | Style Sheet Name                         |
|------------------------------|------------------------------------------|
| Tailwind 3.4                 | tailwind3.css / tailwind3.scss           |
| Tailwind 3.4 Dark            | tailwind3-dark.css / tailwind3-dark.scss |
| Bootstrap 5.3               | bootstrap5.3.css / bootstrap5.3.scss     |
| Bootstrap 5.3 Dark          | bootstrap5.3-dark.css / bootstrap5.3-dark.scss |
| Fluent 2                    | fluent2.css / fluent2.scss               |
| Fluent 2 Dark               | fluent2-dark.css / fluent2-dark.scss     |
| Material 3                  | material3.css / material3.scss           |
| Material 3 Dark             | material3-dark.css / material3-dark.scss |
| Bootstrap 5                 | bootstrap5.css / bootstrap5.scss         |
| Bootstrap 5 Dark            | bootstrap5-dark.css / bootstrap5-dark.scss |
| Fluent                      | fluent.css / fluent.scss                 |
| Fluent Dark                 | fluent-dark.css / fluent-dark.scss       |
| Google's Material           | material.css / material.scss             |
| Google's Material Dark      | material-dark.css / material-dark.scss   |
| Tailwind CSS                | tailwind.css / tailwind.scss             |
| Tailwind Dark CSS           | tailwind-dark.css / tailwind-dark.scss   |
| Microsoft Office Fabric     | fabric.css / fabric.scss                 |
| Microsoft Office Fabric Dark| fabric-dark.css / fabric-dark.scss       |
| High Contrast               | highcontrast.css / highcontrast.scss     |

## Theme packages

Syncfusion<sup style="font-size:70%">&reg;</sup> built-in themes are available as [npm](https://www.npmjs.com/) packages. Each package includes the CSS and SCSS files required for all components. The following table lists the available theme packages.

| Theme | Light Package | Dark Package |
|-------|---------------|---------------|
| Tailwind 3 | [`@syncfusion/ej2-tailwind3-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) | [`@syncfusion/ej2-tailwind3-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-dark-theme) |
| Bootstrap 5.3 | [`@syncfusion/ej2-bootstrap5.3-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-theme) | [`@syncfusion/ej2-bootstrap5.3-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-dark-theme) |
| Fluent 2 | [`@syncfusion/ej2-fluent2-theme`](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) | [`@syncfusion/ej2-fluent2-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-dark-theme) |
| Material 3 | [`@syncfusion/ej2-material3-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) | [`@syncfusion/ej2-material3-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material3-dark-theme) |
| Bootstrap 5 | [`@syncfusion/ej2-bootstrap5-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5-theme) | [`@syncfusion/ej2-bootstrap5-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5-dark-theme) |
| Bootstrap 4 | [`@syncfusion/ej2-bootstrap4-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap4-theme) | - |
| Bootstrap | [`@syncfusion/ej2-bootstrap-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap-theme) | [`@syncfusion/ej2-bootstrap-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap-dark-theme) |
| Material | [`@syncfusion/ej2-material-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material-theme) | [`@syncfusion/ej2-material-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material-dark-theme) |
| Tailwind | [`@syncfusion/ej2-tailwind-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind-theme) | [`@syncfusion/ej2-tailwind-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind-dark-theme) |
| Fluent | [`@syncfusion/ej2-fluent-theme`](https://www.npmjs.com/package/@syncfusion/ej2-fluent-theme) | [`@syncfusion/ej2-fluent-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-fluent-dark-theme) |
| Fabric | [`@syncfusion/ej2-fabric-theme`](https://www.npmjs.com/package/@syncfusion/ej2-fabric-theme) | [`@syncfusion/ej2-fabric-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-fabric-dark-theme) |
| High Contrast | [`@syncfusion/ej2-highcontrast-theme`](https://www.npmjs.com/package/@syncfusion/ej2-highcontrast-theme) | - |

## Size Modes

The Data Grid components support two size modes to optimize user experience across different devices and input methods:

- **Normal mode** (default) — Standard sizing optimized for mouse and keyboard interactions.
- **Touch mode** (bigger) — Larger elements with increased padding, font sizes, and touch targets for improved touch interaction and accessibility. Apply the `e-bigger` CSS class to the `<body>` element to enable touch-friendly sizing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/style-appearance-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/grid/style-appearance-cs2/index.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/style-appearance-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/style-appearance-cs2" %}

## Theme Customization

The Data Grid provides flexible theme customization options to help align the control appearance with your application's design requirements. You can customize built-in themes either by overriding the default CSS variables or by creating a completely customized theme using Syncfusion Theme Studio.

### Default CSS overrides

The Data Grid themes use CSS variables with the unified naming convention. This ensures visual consistency, simple customization, and global updates. Centralized variables allow quick adjustments to colors, backgrounds, and borders across the grid.

**Material 3 theme color variables**

The Material 3 theme applies scalable CSS custom properties to maintain consistency within the Data Grid. Variables are designed for straightforward theming and responsive behavior.
The following table highlights commonly used color-related variables in the Material 3 theme.

| Name | Purpose |
|------|--------------|
| --e-font-name | Specifies the default font family used across the Data Grid |
| --color-sf-surface | 	Controls the base surface styling for UI elements |
| --color-sf-on-surface | Sets text appearance on surface elements |
| --color-sf-primary | Defines the core theme styling used across the Data Grid |
| --color-sf-primary-container|Used for background styling of active or highlighted row states|
| --color-sf-outline-variant | Defines border and separator styling |

**Bootstrap 5.3 theme color variables**

The Bootstrap 5.3 theme extends Bootstrap's framework with CSS custom properties for the Data Grid. The following table lists color-related variables defined for the Bootstrap 5.3 theme.

| Name | Purpose |
|------|-------------|
| --e-font-name | Specifies the default font family used across the Data Grid |
| --color-sf-content-bg-color-alt1 | Controls the background of the Data Grid header |
| --color-sf-content-bg-color | Controls the background of the Data Grid content |
| --color-sf-table-bg-color-hover | Defines the background styling for selected rows during hover interaction |
| --color-sf-content-bg-color-hover | Defines background behavior when primary elements are hovered |
| --color-sf-primary | Defines the main theme styling used across components |
| --color-sf-primary-light | Provides a softer variation of the primary theme for backgrounds |
| --color-sf-border-light | Specifies styling for light borders and separators |

**Tailwind 3 theme color variables**

The Tailwind 3 theme uses utility first CSS custom properties to deliver a flexible, modern design system. The following table presents color-related variables available in the Tailwind 3 theme.

| Name | Purpose |
|------|--------------|
| --e-font-name | Specifies the default font family used across the UI |
| --color-sf-content-bg-color | Controls the main background of the application area |
| --color-sf-table-bg-color-hover | Defines background behavior during hover interaction |
| --color-sf-content-bg-color-hover | Defines the background color for pager during hover interaction |
| --color-sf-primary | Defines the main theme color used across components |
| --color-sf-border-light | Defines the border color used across the component |

**Fluent 2 theme color variables**

The Fluent 2 theme leverages modern CSS custom properties to provide a clean and consistent design aligned with Fluent 2 UI principles. The following table outlines the color-related variables available in the Fluent 2 theme.

| Name | Purpose |
|------|-------------|
| --e-font-name | Specifies the default font family used across the Data Grid |
| --color-sf-content-bg-color-alt1 | Controls the main background of the Data Grid |
| --color-sf-table-bg-color-hover | Defines the background styling for selected rows during hover interaction |
| --color-sf-content-bg-color-hover | Defines background behavior when primary elements are hovered |
| --color-sf-primary | Defines the main theme styling used across components |
| --color-sf-border-light | Specifies styling for light borders and separators |
| --color-sf-border-alt | Defines alternate border styling for Data Grid elements |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/style-appearance-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/grid/style-appearance-cs1/index.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/style-appearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/style-appearance-cs1" %}

### Using Theme Studio

Syncfusion's Theme Studio tool allows creation of custom themes for all controls, including the grid. This advanced approach defines a comprehensive set of styles to achieve a consistent look and feel across an application.

1. Visit the [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).
2. Select the grid control from the left panel.
3. Customize various aspects of the control's appearance, such as colors, typography, and spacing.
4. Download the generated CSS file and include it in the Angular project.

## See Also

* [Customize Header](./header.md)
* [Customize Paging](./paging.md)
* [Customize Sorting](./sorting.md)
* [Customize Filtering](./filtering.md)
* [Customize Grouping](./grouping.md)
* [Customize Toolbar](./tool-bar.md)
* [Customize Editing](./editing.md)
* [Customize Aggregate](./aggregate.md)
* [Customize Selection](./selection.md)