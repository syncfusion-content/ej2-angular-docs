---
layout: post
title: Angular Grid - Style and Appearance | Syncfusion
description: Angular Grid style and appearance provides a consolidated guide to theming, CSS customization, and style tokens to match application design.
platform: ej2-angular
control: Style and appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular Grid Component

The Angular DataGrid provides flexible styling and appearance customization options to align with your application's design requirements. You can choose from a wide range of built-in themes, customize visual elements using CSS, and create consistent experiences through theme-based styling.

## Built In Themes

Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid components include a comprehensive collection of themes to match popular design systems and provide both light and dark variants. Available themes include:

|Theme |Style Sheet Name|
|--------|--------|
|Tailwind 3.4 | tailwind3.css |
|Tailwind 3.4 Dark | tailwind3-dark.css |
|Bootstrap 5.3 | bootstrap5.3.css |
|Bootstrap 5.3 Dark | bootstrap5.3-dark.css |
|Fluent 2 | fluent2.css |
|Fluent 2 Dark | fluent2-dark.css |
|Material 3 | material3.css |
|Material 3 Dark | material3-dark.css |
|Bootstrap 5 | bootstrap5.css |
|Bootstrap 5 Dark | bootstrap5-dark.css |
|Fluent | fluent.css |
|Fluent Dark | fluent-dark.css |
|Google's Material | material.css |
|Google's Material-Dark | material-dark.css |
|Tailwind CSS | tailwind.css |
|TailwindDark CSS | tailwind-dark.css |
|Microsoft Office Fabric | fabric.css |
|Microsoft Office Fabric Dark | fabric-dark.css |
|High Contrast | highcontrast.css |

## Theme packages

Syncfusion built-in themes are distributed as theme packages available on npm. These packages include CSS/SCSS files for all components. The following table lists all available theme packages:

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

Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid components support two size modes to optimize user experience across different devices and input methods:

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

### Default CSS overrides

The Data Grid themes are built using CSS variables that follow the unified --sf naming convention. This approach ensures visual consistency, simplifies customization, and enables global updates. With centralized variables, colors, backgrounds, and borders can be easily managed across the entire grid.

The below CSS reference is given for tailwind3 theme

```css
/* In the component's CSS file */
    :root {
        --e-font-name: 'Verdana';
        --color-sf-content-bg-color: rgba(240, 253, 244);
        --color-sf-content-bg-color-hover: rgba(70, 100, 20, 0.05);
        --color-sf-border-light: rgba(34, 197, 94);
        --color-sf-table-bg-color-hover: rgba(70, 100, 20, 0.05);
        --color-sf-primary: rgba(34, 197, 94);
        --color-sf-table-bg-color-selected: rgba(215, 235, 212, 0.65);
      }
```

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

For more CSS variables, including those for other themes, refer to the [variables reference section](https://ej2.syncfusion.com/angular/documentation/appearance/overview#common-variables).

### Using Theme Studio

Syncfusion's Theme Studio tool allows creation of custom themes for all controls, including the grid. This advanced approach defines a comprehensive set of styles to achieve a consistent look and feel across an application.

1. Visit the [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).
2. Select the grid control from the left panel.
3. Customize various aspects of the control's appearance, such as colors, typography, and spacing.
4. Download the generated CSS file and include it in the Angular project.

## See Also

* [Footer template styling in Angular Grid](https://ej2.syncfusion.com/angular/documentation/grid/style-and-appearance/style-and-appearance)
* [Customize Header](./header.md)
* [Customize Paging](./paging.md)
* [Customize Sorting](./sorting.md)
* [Customize Filtering](./filtering.md)
* [Customize Grouping](./grouping.md)
* [Customize Toolbar](./tool-bar.md)
* [Customize Editing](./editing.md)
* [Customize Aggregate](./aggregate.md)
* [Customize Selection](./selection.md)