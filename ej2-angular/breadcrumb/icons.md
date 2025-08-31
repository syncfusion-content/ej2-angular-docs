---
layout: post
title: Icons in Angular Breadcrumb component | Syncfusion
description: Learn here all about Icons in Syncfusion Angular Breadcrumb component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Breadcrumb 
documentation: ug
domainurl: ##DomainURL##
---

# Icons in Angular Breadcrumb component

The Breadcrumb component supports icons and images to provide visual representation and enhance navigation context for each item. Icons can be implemented using font icons, custom images, or SVG graphics through the `iconCss` property, with flexible positioning options to suit different design requirements.

## Loading icon in Breadcrumb items

To load icons on breadcrumb items, configure the `iconCss` property with the appropriate CSS class or styling.

### Breadcrumb with Font Icon

To place font icons on breadcrumb items, set the `iconCss` property to `e-icons` with the required icon CSS class. By default, icons are positioned to the left side of the item text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/icons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/icons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/icons-cs1" %}

### Breadcrumb with Image

In the Breadcrumb component, images can be added to items using the `iconCss` property. In the following example, an image is added to the breadcrumb item using the iconCss class `e-image-home` with specified height and width dimensions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/icons-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/icons-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/icons-cs2" %}

### Breadcrumb with SVG Image

In the Breadcrumb component, SVG images can be added to items using the `iconCss` property. In the following example, an SVG image is added to the breadcrumb item using the iconCss class `e-svg-home` with specified height and width dimensions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/icons-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/icons-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/icons-cs3" %}

## Icon Position

By default, icons are positioned to the left side of the item text in the Breadcrumb component. To position icons to the right of breadcrumb items, add the `e-icon-right` class to the required item. In the following example, the `e-icon-right` class is added to breadcrumb items using the `beforeItemRender` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/icons-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/icons-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/icons-cs4" %}

## Icon Only

To display only icons for items without text, add icons using the `iconCss` property while omitting the `text` property. In the following example, breadcrumb items are demonstrated with only icons by providing the `iconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/icons-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/icons-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/icons-cs5" %}

## Show icon only for first item

To display an icon only for the first item in the Breadcrumb component, add icons to the first item using the `iconCss` property while leaving other items without icons. In the following example, the icon is provided only for the first item by setting the `iconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/icons-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/icons-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/icons-cs6" %}