---
layout: post
title: Themes using CSS Variables in Angular | Syncfusion
description: Learn here all about Icons in Syncfusion Angular Appearance component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Themes using CSS variable
documentation: ug
domainurl: ##DomainURL##
---

# Overview of CSS Variables in Themes

[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (also known as custom properties) are reusable values that you can define once and use throughout your stylesheets. These variables begin with a double hyphen (`--`) and can store values like colors, font sizes, or spacing units. You can access these variables using the `var()` function anywhere in your CSS.

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 (EJ2) Angular components use CSS variables extensively to create consistent, customizable themes. This approach offers several advantages:

- Simplified theme customization without modifying core files
- Easy light/dark mode switching
- Consistent styling across all components
- Dynamic styling changes without page reloads

## CSS Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Controls

Syncfusion<sup style="font-size:70%">&reg;</sup> offers the following modern themes, each with light and dark variants:

* Material 3 Theme
* Fluent 2 Theme
* Bootstrap 5.3 Theme
* Tailwind 3.4 Theme

These themes use CSS variables for easy color customization and support seamless light/dark mode switching.

> Note: Material 3 theme defines color CSS variables using `rgb()` values rather than hex values. For example, while earlier Material versions used `$primary: #6200ee;`, Material 3 uses `--color-sf-primary: 98, 0, 238;`. Using incorrect value formats may cause styling issues.

### Obtaining Themes

Syncfusion<sup style="font-size:70%">&reg;</sup> themes are available via npm packages or CDN links:

|    |  Light  |  Dark  |
|-----------|---------|--------|
|Package  | [Material 3 Light](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) | [Material 3 Dark](https://www.npmjs.com/package/@syncfusion/ej2-material3-dark-theme) |
|  | [Fluent 2 Light](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) | [Fluent 2 Dark](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-dark-theme) |
|  | [Bootstrap 5.3 Light](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-theme) | [Bootstrap 5.3 Dark](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-dark-theme) |
|  | [Tailwind 3.4 Light](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) | [Tailwind 3.4 Dark](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-dark-theme) |
| CDN  | [Material 3 Light](https://cdn.syncfusion.com/ej2/27.1.48/material3.css)  |  [Material 3 Dark](https://cdn.syncfusion.com/ej2/27.1.48/material3-dark.css)  |
|  |  [Fluent 2 light](https://cdn.syncfusion.com/ej2/27.1.48/fluent2.css)  |  [Fluent 2 Dark](https://cdn.syncfusion.com/ej2/27.1.48/fluent2-dark.css)  |
|  |  [Bootstrap5.3 light](https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3.css)  |  [Bootstrap 5.3 Dark](https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3-dark.css)  |
|  | [Tailwind 3.4 Light](https://cdn.syncfusion.com/ej2/28.1.33/tailwind3.css) | [Tailwind 3.4 Dark](https://cdn.syncfusion.com/ej2/28.1.33/tailwind3-dark.css) |

#### Using npm packages:

1. Install the desired theme package:
   ```bash
   npm install @syncfusion/ej2-material3-theme
   ```

2. Import the theme in your Angular project's styles file:
   ```css
   @import '@syncfusion/ej2-material3-theme/styles/material3.css';
   ```

#### Using CDN:

Add the theme link to your HTML file's `<head>` section:
```html
<link href="https://cdn.syncfusion.com/ej2/30.1.37/material3.css" rel="stylesheet">
```

## Using CSS Variables in Modern Themes

Each Syncfusion<sup style="font-size:70%">&reg;</sup> theme defines a set of CSS variables that control various aspects of component appearance. These variables follow a consistent naming pattern:

- Color variables: `--color-sf-primary`, `--color-sf-secondary`, etc.
- Surface variables: `--color-sf-surface`, `--color-sf-surface-variant`, etc.
- Typography variables: `--color-sf-white`, `--color-sf-content-bg-color`, etc.

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

You can customize Syncfusion<sup style="font-size:70%">&reg;</sup> themes by overriding CSS variables in your application's styles. This approach is more maintainable than custom CSS rules and ensures consistent styling across components.

Here's an example of customizing the primary color in the `Material 3` theme:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/material3-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/material3-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/common/material3-cs2" %}

**Default Material 3 Primary Value**

![default primary value](images/material3-default.png)

**Customized Material 3 Primary Value**

![customized primary value](images/material3-customize.png)

Example of `Bootstrap 5.3` theme customization:

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

> Note: Some themes like Fluent 2, Bootstrap 5.3, etc., require updating multiple related variables (e.g., hover and pressed states) for consistency. For comprehensive customization, use the [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=tailwind3) application, which automatically handles these relationships.

### Light and Dark Mode Switching

Syncfusion<sup style="font-size:70%">&reg;</sup> themes support seamless switching between light and dark modes using a single theme file. Each theme defines two sets of CSS variables—one for light mode and one for dark mode.

To activate dark mode, simply add the `e-dark-mode` class to the `<body>` element. This class triggers the alternate set of CSS variables designed for dark backgrounds and improved contrast.

Here's an example of implementing a light/dark mode toggle with the Material 3 theme:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/material3-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/material3-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/common/material3-cs1" %}

This code toggles the `e-dark-mode` class, switching between light and dark variants. The dark mode for Material 3 is shown below:

![dark mode](images/material3-dark.png)

This same approach works with Fluent 2, Bootstrap 5.3, and Tailwind 3.4 themes, each using the `e-dark-mode` class to activate their dark variants, which adjust colors, backgrounds, and text for optimal contrast and readability.

### Theme Studio Application

Syncfusion<sup style="font-size:70%">&reg;</sup> offers a web-based Theme Studio application that makes theme customization even easier. With Theme Studio, you can:

- Interactively customize colors, typography, and spacing
- Preview changes in real-time across different components
- Generate custom theme files for your application
- Switch between light and dark variants
- Export your customized theme as CSS

Access the Syncfusion<sup style="font-size:70%">&reg;</sup> ThemeStudio at: [Link to Syncfusion<sup style="font-size:70%">&reg;</sup> ThemeStudio](https://ej2.syncfusion.com/themestudio/?theme=material3)
