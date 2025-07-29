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

[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) also known as custom properties, are powerful tools in modern web development that allow developers to define reusable values in CSS. These variables begin with a double hyphen (`--`) followed by a custom identifier and can store various CSS values such as colors, sizes, or font families. By using the `var()` function, developers can reference these variables throughout their stylesheets, enabling consistent and maintainable styling.

Syncfusion<sup style="font-size:70%">&reg;</sup> leverages CSS variables in its Essential<sup style="font-size:70%">&reg;</sup> JS 2 (EJ2) Angular components to provide highly customizable themes that ensure a cohesive and visually appealing user experience across applications. This approach simplifies theme management, supports dynamic styling, and enhances flexibility for developers working on Angular projects.

## CSS Themes - Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Controls

Syncfusion<sup style="font-size:70%">&reg;</sup> offers the following themes with light and dark variants:

* Material 3 Theme
* Fluent 2 Theme
* Bootstrap 5.3 Theme
* Tailwind 3.4 Theme

These themes use CSS variables for easy color customization and support seamless light/dark mode switching.

> Note: In the Material 3 theme, color CSS variables are defined with `rgb()` values. Using hex values might cause improper functionality. For instance, earlier versions of Material used $primary: #6200ee;. Now in Material 3, it's --color-sf-primary: 98, 0, 238;.

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

To include a theme via npm, install the package (e.g., `npm install @syncfusion/ej2-material3-theme`) and import it in your Angular project’s styles. For CDN, simply add the `<link>` tag to your HTML file’s `<head>` section.

## Using CSS Variables in Modern Themes

Each Syncfusion<sup style="font-size:70%">&reg;</sup> theme defines a unique set of CSS variables tailored to its design system, enabling developers to customize component appearances efficiently. These variables control properties like primary colors, backgrounds, and text styles, ensuring consistency across all EJ2 components. By overriding these variables, developers can adapt the theme to match their user preferences.

Below are examples of CSS variable definitions for each theme, which can be placed in a `:root`.

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

CSS variables enable dynamic and real-time color customization, allowing developers to create interactive designs that adapt to user interactions or application states. By overriding variables like `--color-sf-primary`, you can change the appearance of buttons, inputs, and other components instantly. This can be done via CSS for static changes or JavaScript for dynamic updates. Below is an example of customizing the primary color in the Material 3 theme using an Angular component:

Below is an example of `Material 3` customization using CSS classes.

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

Example of `Bootstrap 5.3` customization using CSS classes.

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

> Note: Some themes, like Fluent 2, Bootstrap 5.3, etc., require updating multiple related variables (e.g., hover and pressed states) for consistency. So we have provided the option in `theme studio` application to override the all variables in single selection and you can utilize this customization using [theme studio](https://ej2.syncfusion.com/themestudio/?theme=tailwind3) application.

### Light and Dark Mode Switching

Syncfusion<sup style="font-size:70%">&reg;</sup> themes support seamless light and dark mode switching within a `single theme file`, using separate CSS variable sets for each mode. This allows applications to adapt to user preferences or environmental conditions, such as enabling dark mode for better visibility in low-light settings. To activate dark mode, simply add the `e-dark-mode` class to the `<body>` element. Below is an example of implementing a toggle for light and dark modes in the Material 3 theme:

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

The same approach applies to Fluent 2, Bootstrap 5.3, and Tailwind 3.4 themes, each using the `e-dark-mode` class to activate their dark variants, which adjust colors, backgrounds, and text for optimal contrast and readability.

### Theme Studio Application

The ThemeStudio application now offers integration with the our latest themes, creating a comprehensive solution for theme customization. It supports both light and dark variants, allowing developers to experiment with color schemes and other styles effortlessly.

Access the Syncfusion<sup style="font-size:70%">&reg;</sup> ThemeStudio application with our themes via this link: [Link to Syncfusion<sup style="font-size:70%">&reg;</sup> ThemeStudio](https://ej2.syncfusion.com/themestudio/?theme=material3)
