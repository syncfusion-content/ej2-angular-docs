---
layout: post
title: Themes using CSS Variables in Angular | Syncfusion
description: Learn how Syncfusion Angular components use CSS variables for theme customization, light/dark mode switching.
platform: ej2-angular
control: CSS Variables
documentation: ug
domainurl: ##DomainURL##
---

# Overview of CSS Variables in Themes

[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (also known as CSS custom properties) are custom values defined once and reused throughout stylesheets. They start with a double hyphen (--) and are accessed using the var() function.

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 (EJ2) Angular components rely heavily on CSS variables to enable flexible, consistent, and maintainable theming. Key benefits include:

- Easy theme customization without altering core component files
- Seamless light/dark mode toggling via class application
- Uniform appearance across all components
- Runtime dynamic style updates without page reloads
- Improved maintainability and scalability for large applications

## CSS Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Controls

Syncfusion<sup style="font-size:70%">&reg;</sup> provides the following modern themes, each available in light and dark variants:

- Material 3 Theme
- Fluent 2 Theme
- Bootstrap 5.3 Theme
- Tailwind 3.4 Theme

These themes define appearance through CSS variables, enabling straightforward color adjustments and automatic light/dark mode support.

> **Note:** Material 3 uses rgb() values (e.g., --color-sf-primary: 98, 0, 238;) rather than hex codes. This format supports better opacity handling and color manipulation. Using hex values directly may lead to inconsistent rendering.

### Obtaining Themes

Syncfusion<sup style="font-size:70%">&reg;</sup> themes are available via npm packages or CDN links. Use a recent version for the latest features and fixes.

| Theme              | Light Package / CDN                                                                 | Dark Package / CDN                                                                    |
|--------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| Material 3        | [@syncfusion/ej2-material3-theme](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme)<br>https://cdn.syncfusion.com/ej2/32.1.19/material3.css | [@syncfusion/ej2-material3-dark-theme](https://www.npmjs.com/package/@syncfusion/ej2-material3-dark-theme)<br>https://cdn.syncfusion.com/ej2/32.1.19/material3-dark.css |
| Fluent 2          | [@syncfusion/ej2-fluent2-theme](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme)<br>https://cdn.syncfusion.com/ej2/32.1.19/fluent2.css | [@syncfusion/ej2-fluent2-dark-theme](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-dark-theme)<br>https://cdn.syncfusion.com/ej2/32.1.19/fluent2-dark.css |
| Bootstrap 5.3     | [@syncfusion/ej2-bootstrap5.3-theme](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-theme)<br>https://cdn.syncfusion.com/ej2/32.1.19/bootstrap5.3.css | [@syncfusion/ej2-bootstrap5.3-dark-theme](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-dark-theme)<br>https://cdn.syncfusion.com/ej2/32.1.19/bootstrap5.3-dark.css |
| Tailwind 3        | [@syncfusion/ej2-tailwind3-theme](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme)<br>https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css | [@syncfusion/ej2-tailwind3-dark-theme](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-dark-theme)<br>https://cdn.syncfusion.com/ej2/32.1.19/tailwind3-dark.css |

#### Using npm packages

1. Install the desired theme:
   ```bash
   npm install @syncfusion/ej2-material3-theme
   ```

2. Import it in your global styles file (src/styles.scss or src/styles.css):
   ```css
   @import '@syncfusion/ej2-material3-theme/styles/material3.css';
   ```

#### Using CDN

Include the stylesheet in the <head> of your index.html:
```html
<link href="https://cdn.syncfusion.com/ej2/32.1.19/material3.css" rel="stylesheet" />
```

## Using CSS Variables in Modern Themes

Each Syncfusion<sup style="font-size:70%">&reg;</sup> theme defines a set of CSS variables that control various aspects of component appearance. These variables follow a consistent naming pattern:

- **Primary Colors**: --color-sf-primary, --color-sf-secondary, --color-sf-tertiary
- **Surface Colors**: --color-sf-surface, --color-sf-surface-variant, --color-sf-on-surface
- **Semantic Colors**: --color-sf-error, --color-sf-warning, --color-sf-success
- **Neutral Colors**: --color-sf-white, --color-sf-black, --color-sf-content-bg-color

Below are examples of CSS variable definitions for each theme:

{% tabs %}
{% highlight css tabtitle="material3.css" %}
{% include code-snippet/common/css-value-cs1/material3.css %}
{% endhighlight %}

{% highlight css tabtitle="fluent2.css" %}
{% include code-snippet/common/css-value-cs1/fluent2.css %}
{% endhighlight %}

{% highlight css tabtitle="bootstrap5.3.css" %}
{% include code-snippet/common/css-value-cs1/bootstrap5.3.css %}
{% endhighlight %}

{% highlight css tabtitle="tailwind3.4.css" %}
{% include code-snippet/common/css-value-cs1/tailwind3.4.css %}
{% endhighlight %}
{% endtabs %}

### Customizing Themes with CSS Variables

Override variables in your application styles after the theme import to customize appearance while preserving consistency.

**Material 3 primary color customization example:**

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/material3-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/material3-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/common/material3-cs2" %}

**Default Material 3 Primary**  
![default primary value](images/material3-default.png)

**Customized Material 3 Primary**  
![customized primary value](images/material3-customize.png)

**Bootstrap 5.3 theme customization**

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/bootstrap5.3-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/bootstrap5.3-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/common/bootstrap5.3-cs2" %}

**Default Bootstrap 5.3 Primary Value**

![default primary value](images/bootstrap5.3-default.png)

**Customized Bootstrap 5.3 Primary Value**

![customized primary value](images/bootstrap5.3-customize.png)

Similar overrides work for other themes.Some themes like Fluent 2, Bootstrap 5.3, etc., require updating multiple related variables (e.g., hover and pressed states) for consistency. For comprehensive customizations requiring coordinated changes (e.g., hover, active states), use the [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material3) to generate consistent values.

### Light and Dark Mode Switching

All themes support light/dark variants. To enable dark mode, add the e-dark-mode class to the <body> tag.

**Example toggle implementation (Material 3):**

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/material3-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/material3-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/common/material3-cs1" %}

**Dark Mode Example**  
![dark mode](images/material3-dark.png)

The same e-dark-mode class activates dark variants in Fluent 2, Bootstrap 5.3, and Tailwind 3 themes, adjusting backgrounds, text, and accents for readability and contrast.

### Theme Studio Application

For advanced customization, use the web-based [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material3). It allows you to:

- Interactively customize colors
- Preview changes across components in real time
- Toggle between light and dark modes
- Generate and export custom theme CSS files
