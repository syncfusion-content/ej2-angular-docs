---
layout: post
title: How to add font awesome icons in Angular Toolbar | Syncfusion
description: Use Font Awesome or other third-party icon sets in the Angular Toolbar items by setting the prefixIcon CSS class.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# How to add font awesome icons in Angular Toolbar

You can customize the Toolbar component items by using third-party icons other than the icons available in the Syncfusion<sup style="font-size:70%">&reg;</sup> library. In the following example, Font Awesome icons are used as Toolbar items.

* Add the Font Awesome CSS to your project. You can use the CDN link, or install via npm and reference the stylesheet through `angular.json`:

  ```html
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  ```

* Add the icons to the toolbar component using the [`prefixIcon`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemDirective/#prefixicon) or [`suffixIcon`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemDirective/#suffixicon) property. These properties allow you to specify the CSS class name of the third-party icon that will be displayed before or after the text in each toolbar item.

The following sample explains how to use Font Awesome icons in the toolbar component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/add-font-awesome-cs1" %}

> Templates can also be used for rendering icons based on specific requirements, providing greater flexibility for complex icon scenarios.

## Icon customization

The class `e-icons` standardizes the appearance of the icons to fit into toolbar items. You can override the icon appearance with the CSS classes below. Aim for higher specificity in your component styles rather than `!important` overrides, since `!important` may interfere with theme variables.

Use the following CSS to set the color of icons.

```css

    .e-toolbar .e-icons {
        color: #e3165b !important;
    }

```

Use the following CSS to set the font size of icons.

```css

    .e-toolbar .e-btn .e-icons.e-btn-icon {
        font-size: 14px !important;
    }

```