---
layout: post
title: Icons in Angular Appearance component | Syncfusion
description: Learn here all about Icons in Syncfusion Angular Appearance component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Icons
documentation: ug
domainurl: ##DomainURL##
---

# Predefined Icons Library in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

Syncfusion<sup style="font-size:70%">&reg;</sup> provides a comprehensive icon library with pre-designed, `base64-encoded` font icons to enhance UI elements consistently across applications. These icons are lightweight, scalable, and theme-aware.

## Including Icons in Angular Applications

Icons are available through two main methods:

* [npm package](#the-npm-package) - Access icons through the npm package.

* [CDN reference](#cdn-reference) - Utilize static web assets for icon access.

### Using the npm Package

The icon styles are bundled in the [@syncfusion/ej2-icons](https://www.npmjs.com/package/@syncfusion/ej2-icons) package.

1. Install the package:

```bash
npm install @syncfusion/ej2-icons
```

2. Import the desired theme's icon CSS in your global styles file (`src/styles.scss` or `src/styles.css`):

```css
@import "../node_modules/@syncfusion/ej2-icons/styles/<theme_name>.css";
```

**Example:**

```css
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
```

**Supported themes include:** material3, bootstrap5, fluent2, tailwind3, highcontrast, etc.

### Using CDN

Syncfusion<sup style="font-size:70%">&reg;</sup> theme icons are also accessible via CDN. Using a cloud CDN instead of local resources helps ensure current and compatible icon versions align with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages.

Add the appropriate CDN link to your application's HTML head section:

```html
<link href="https://cdn.syncfusion.com/ej2/32.1.19/ej2-icons/styles/material.css" rel="stylesheet" />
```
Replace `material.css` with your chosen theme (e.g., `bootstrap5.css`, `fluent2.css`).

> **Best Practice:** Load the main component/theme CSS before the icons CSS to ensure proper font-family inheritance.


## Steps to Use Icons Library

For new projects, create an Angular application using the Angular CLI:

For introductory and configuration guidance, refer to [getting started with the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular application](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli).

### Using Icons Directly in HTML Elements

Render Syncfusion<sup style="font-size:70%">&reg;</sup> icons directly in HTML by assigning the `e-icons` class, encompassing the font-family and shared properties, and including the desired icon class prefixed with `e-`.

Here's how to implement direct icon rendering:

1. Assign `e-icons` to the element you wish to render.

2. Utilize the specific icon class with the desired content. E.g., for the paste icon:

    ```css
    .e-paste:before{
        content:'\e355';
    }
    ```

3. Add `e-icons` and `e-paste` classes to the HTML element.

    ```html
    <span class="e-icons e-paste"></span>
    ```

4. In `~index.html`, link the icons library CDN.

    ```html
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
    ```

Complete implementation example:

    {% tabs %}
    {% highlight ts tabtitle="app.component.ts" %}
    {% include code-snippet/common/icons/src/app.component.ts %}
    {% endhighlight %}
    
    {% highlight ts tabtitle="main.ts" %}
    {% include code-snippet/common/icons/src/main.ts %}
    {% endhighlight %}
    {% endtabs %}
  
    {% previewsample "page.domainurl/samples/common/icons" %}

## Icon Sizing

The `ej2-icons` package allows displaying icons in various size modes. Choose the appropriate size class based on your design requirements:

* `e-small` - Sets icon size to `8px` (ideal for compact UI elements)
* `e-medium` - Sets icon size to `16px` (default size, suitable for most interfaces)
* `e-large` - Sets icon size to `24px` (for enhanced visibility or touch interfaces)

  **Example:**

    ```html
    <span class="e-icons e-small e-search"></span>
    <span class="e-icons e-medium e-search"></span>
    <span class="e-icons e-large e-search"></span>
    ```

    {% tabs %}
    {% highlight ts tabtitle="app.component.ts" %}
    {% include code-snippet/common/icons-size/src/app.component.ts %}
    {% endhighlight %}
    
    {% highlight ts tabtitle="main.ts" %}
    {% include code-snippet/common/icons-size/src/main.ts %}
    {% endhighlight %}
    {% endtabs %}
  
    {% previewsample "page.domainurl/samples/common/icons-size" %}

### Icon Appearance Customization

Customize Syncfusion<sup style="font-size:70%">&reg;</sup> Angular icons for color and size by modifying the `e-icons` class. Tailoring icons can enhance visual appeal and adapt them to match your application's design. Changes like color adjustment to fit a theme, or resizing for better visibility improve the user experience.

    {% tabs %}
    {% highlight ts tabtitle="app.component.ts" %}
    {% include code-snippet/common/icons-customization/src/app.component.ts %}
    {% endhighlight %}
    
    {% highlight ts tabtitle="main.ts" %}
    {% include code-snippet/common/icons-customization/src/main.ts %}
    {% endhighlight %}
    {% endtabs %}
  
    {% previewsample "page.domainurl/samples/common/icons-customization" %}

## Available Icons

Browse the full Essential<sup style="font-size:70%">&reg;</sup> JS 2 icon package below. Icon content references are available in respective content sections.

<!-- markdownlint-disable MD033 -->

### Material 3

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material3/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap 5

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap5/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap 4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap4/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap/demo.html" style="height:1000px;width:100%;"></iframe>

### Material

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material/demo.html" style="height:1000px;width:100%;"></iframe>

### Tailwind CSS

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind/demo.html" style="height:1000px;width:100%;"></iframe>

### Tailwind 3.4
<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind3/demo.html" style="height:1000px;width:100%;"></iframe>

### Office Fabric

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fabric/demo.html" style="height:1000px;width:100%;"></iframe>

### High Contrast

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/highcontrast/demo.html" style="height:1000px;width:100%;"></iframe>

### Fluent 2

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent2/demo.html" style="height:1000px;width:100%;"></iframe>

### Fluent

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent/demo.html" style="height:1000px;width:100%;"></iframe>
