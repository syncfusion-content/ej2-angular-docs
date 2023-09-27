---
layout: post
title: Add font awesome in Angular Toolbar component | Syncfusion
description: Learn here all about Add font awesome in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add font awesome 
documentation: ug
domainurl: ##DomainURL##
---

# Add font awesome in Angular Toolbar component

You can customize the Toolbar component items by using third-party icons other than the icons available in the Syncfusion library. In the following example, font awesome icons are used as toolbar items.

* Refer to the third-party reference link. Here, the CDN link of font awesome is referred.

  ```html
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  ```

* Add the icons to the toolbar component using ['prefixIcon'](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemDirective/#prefixicon) property

The following sample explains how to use font awesome in the toolbar component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/add-font-awesome-cs1" %}

> We can also use templates for rendering icons based on the requirements.

## Customization

The class “e-icons” is used for standardizing the appearance of the icons to fit into toolbar items. If you wish to override the appearance of the icons used, you could do this by using the following set of classes

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