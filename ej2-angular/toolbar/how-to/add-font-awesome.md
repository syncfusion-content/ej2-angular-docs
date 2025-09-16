---
layout: post
title: Add font awesome in Angular Toolbar component | Syncfusion
description: Learn here all about Add font awesome in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Add font awesome in Angular Toolbar component

You can customize the Toolbar component items by using third-party icons other than the icons available in the Syncfusion<sup style="font-size:70%">&reg;</sup> library. In the following example, Font Awesome icons are used as toolbar items.

* Refer to the third-party reference link. Here, the CDN link of Font Awesome is referenced.

  ```html
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  ```

* Add the icons to the toolbar component using the [`prefixIcon`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemDirective/#prefixicon) property. This property allows you to specify the CSS class name of the third-party icon that will be displayed before the text in each toolbar item.

The following sample explains how to use Font Awesome icons in the toolbar component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/add-font-awesome-cs1" %}

> Templates can also be used for rendering icons based on specific requirements, providing greater flexibility for complex icon scenarios.

## Icon customization

The class "e-icons" is used for standardizing the appearance of the icons to fit into toolbar items. You can override the appearance of the icons by using the following CSS classes in your component's stylesheet or global styles.

Use the following CSS to set the color of icons.

```CSS

    .e-toolbar .e-icons {
        color: #e3165b !important;
    }

```

Use the following CSS to set the font size of icons.

```CSS

    .e-toolbar .e-btn .e-icons.e-btn-icon {
        font-size: 14px !important;
    }

```