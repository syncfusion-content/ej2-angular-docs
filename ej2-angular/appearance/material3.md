---
layout: post
title: Material 3 Theme in Angular | Syncfusion
description: Learn here all about Icons in Syncfusion Angular Appearance component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Material 3 
documentation: ug
domainurl: ##DomainURL##
---

# Material 3 Theme

Material 3 is an updated theme that encompasses enhanced theming, components, and personalization features, including dynamic color capabilities. It has been specifically designed to align seamlessly with the new visual style and system UI introduced in Android 12 and above. For more detailed information, please refer to the following link: [ Link to Material 3 Information](https://m3.material.io/).

## Syncfusion Material 3 Theme

Syncfusion has introduced the Material theme across all EJ2 Controls. The theme includes light and dark variants and utilizes CSS variables for easy customization of control colors in CSS format. This implementation enables seamless switching between light and dark color schemes, offering users a flexible solution to suit their preferences and application needs.

> Note: Please be aware that in the Material 3 theme, we utilize CSS variables with rgb() values for our color variables. Using hex values in this context may lead to improper functionality. For example, in previous versions of our Material theme or other themes, the primary color variable was defined as follows: `$primary: #6200ee;`. In the Material 3 theme, the primary color variable is defined as follows: `--color-sf-primary: 98, 0, 238;`.

## What are CSS Variables?

CSS variables, also known as custom properties, are a powerful feature in CSS that allows you to define reusable values and apply them throughout your stylesheets. Prefixed with "--," CSS variables can be utilized in any property value within a CSS rule. To retrieve the value of a CSS variable, the var() function is used. CSS variables can access the Document Object Model (DOM), enabling the creation of variables with either local or global scope. For further details, please consult the following link: [Link to CSS Variables Information](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

### How does Syncfusion Theming utilize CSS Variables?

The Material 3 theme in our system incorporates CSS variable support, utilizing CSS variables with rgb() values for color customization.

```CSS
:root {
  --color-sf-black: 0, 0, 0;
  --color-sf-white: 255, 255, 255;
  --color-sf-primary: 103, 80, 164;
  --color-sf-primary-container: 234, 221, 255;
  --color-sf-secondary: 98, 91, 113;
  --color-sf-secondary-container: 232, 222, 248;
  --color-sf-tertiary: 125, 82, 96;
  --color-sf-tertiary-container: 255, 216, 228;
  --color-sf-surface: 255, 255, 255;
  --color-sf-surface-variant: 231, 224, 236;
  --color-sf-background: var(--color-sf-surface);
  --color-sf-on-primary: 255, 255, 255;
  --color-sf-on-primary-container: 33, 0, 94;
  --color-sf-on-secondary: 255, 255, 255;
  --color-sf-on-secondary-container: 30, 25, 43;
  --color-sf-on-tertiary: 255, 255, 255;
}
```

### Exploring Color Customization

Through the utilization of these CSS variables, customization of the color variables becomes remarkably straightforward. For example, to customize the primary color variable in this theme, simply modify its value in the root values.

**Default primary value**

![default primary value](images/material3-default.PNG)

**Customized primary value**

![customized primary value](images/material3-customize.PNG)

With this CSS variable support, you can effortlessly customize the color variable values for our EJ2 controls.

## Dark mode support

The controls in our system now seamlessly transition between light and dark modes without any noticeable delay. This achievement was made by consolidating the configurations of the light theme and dark theme into [material 3 light theme](https://unpkg.com/@syncfusion/ej2@22.1.34/material3.css) file.

![dark mode](images/material3.gif)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/material3-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/material3-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/material3-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/common/material3-cs1" %}

The above example demonstrates the appearance of an application in dark mode. By using CSS variable support, the transition between light and dark mode is smooth and visually pleasing.

```CSS
.e-dark-mode {
  --color-sf-black: 0, 0, 0;
  --color-sf-white: 255, 255, 255;
  --color-sf-primary: 208, 188, 255;
  --color-sf-primary-container: 79, 55, 139;
  --color-sf-secondary: 204, 194, 220;
  --color-sf-secondary-container: 74, 68, 88;
  --color-sf-tertiary: 239, 184, 200;
  --color-sf-tertiary-container: 99, 59, 72;
  --color-sf-surface: 28, 27, 31;
  --color-sf-surface-variant: 28, 27, 31;
  --color-sf-background: var(--color-sf-surface);
  --color-sf-on-primary: 55, 30, 115;
  --color-sf-on-primary-container: 234, 221, 255;
  --color-sf-on-secondary: 51, 45, 65;
  --color-sf-on-secondary-container: 232, 222, 248;
  --color-sf-on-tertiary: 73, 37, 50;
}
```

### How to switch to dark mode

With this CSS variable support, transitioning between light and dark theme modes has become effortless. To switch to dark mode, simply add the `e-dark-mode` class to the body section of your application. Upon adding this class, the theme will seamlessly switch to dark mode. Please refer to the example image below for guidance.

![dark mode](images/material3-dark.PNG)

## ThemeStudio application

The ThemeStudio application now includes seamless integration with the Material 3 theme, offering a comprehensive solution for customization requirements. This enhancement enables users to effortlessly customize and personalize their themes.

Access the Syncfusion ThemeStudio application, featuring the Material 3 theme, via the following link: [Link to Syncfusion ThemeStudio with Material 3 Theme](https://ej2.syncfusion.com/themestudio/?theme=material3)
