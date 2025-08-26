---
layout: post
title: Ribbon Gallery Items in Angular Ribbon component | Syncfusion
description:  Learn here all about Gallery Items in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Gallery Items in Angular Ribbon component

The Ribbon component supports a gallery feature that displays a collection of related items, such as icons, content, or images, to allow users to perform specific actions. To render a gallery in the Ribbon, use the `<e-ribbon-item>` tag directive with the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property set to `Gallery`.

The gallery can be configured through the [RibbonGallerySettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/), which provides options to manage `groups`, `itemCount`, `popupHeight`, `popupWidth`, and more.

## Groups 

The gallery can be organized into logical groups using the [groups](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#groups) property. Each group can be customized using the [RibbonGalleryGroupModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/), which includes options for `items`, `cssClass`, `header`, and more.

### Adding Gallery Items

Gallery items are defined using the [items](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#items) property. Each item can be configured with the [RibbonGalleryItemModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/), which provides options like `content`, `iconCss`, and `disabled`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/galleryItems" %}

#### Defining Item Content

The [content](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#content) property specifies the text to be displayed for a gallery item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/itemContent/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/itemContent/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/itemContent/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/itemContent" %}

#### Defining Item Icons

To associate an icon with a gallery item, use the [iconCss](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#iconcss) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/galleryIcon/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/galleryIcon/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/galleryIcon/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/galleryIcon" %}

#### Adding HTML Attributes to Items

The [htmlAttributes](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#htmlattributes) property allows you to add custom HTML attributes to a gallery item's element.

The following sample shows how to add a `title` attribute to a gallery item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/htmlAttributes" %}

#### Customizing Item Appearance

To apply a custom style to a gallery item, use the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#cssclass) property.

The following sample demonstrates how to customize the appearance of a gallery item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/classCustomization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/classCustomization/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/classCustomization/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/ribbon/gallery/classCustomization/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/classCustomization" %}

#### Disabling a Gallery Item

To disable a gallery item and prevent user interaction, set its [disabled](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#disabled) property to `true`. By default, this value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/disabledItem/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/disabledItem/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/disabledItem/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/disabledItem" %}

### Defining a Group Header

The [header](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#header) property sets a title for a group of items within the gallery popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/galleryItems" %}

### Setting Item Dimensions

The size of gallery items can be controlled using the [itemWidth](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#itemwidth) and [itemHeight](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#itemheight) properties. When an `itemHeight` is set, items are aligned in rows according to the specified [itemCount](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount).

The following sample demonstrates how to set custom dimensions for gallery items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/itemHeightAndWidth" %}

### Customizing Group Appearance

To apply custom styles to a gallery group container, use the group's [cssClass](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#cssclass) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/groupCustomization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/groupCustomization/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/groupCustomization/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/ribbon/gallery/groupCustomization/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/groupCustomization" %}

## Setting the Displayed Item Count

To control the number of items displayed inline in the Ribbon gallery, use the [itemCount](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) property. By default, the `itemCount` is `3`.

The following example showcases a gallery with `4` items displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/itemCount/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/itemCount/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/itemCount/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/itemCount" %}

## Pre-selecting an Item

The [selectedItemIndex](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#selecteditemindex) property allows you to define the initially selected item in the gallery.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/selectedItemIndex" %}

## Setting Popup Dimensions

The dimensions of the gallery popup can be explicitly set using the [popupHeight](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#popupheight) and [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#popupwidth) properties.

This sample demonstrates how to configure a custom size for the gallery popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/popupHeightWidth" %}

## Template

You can completely redefine the appearance and content of gallery items by using the [template](../api/ribbon/ribbonGallerySettingsModel/#template) property.

### Popup Template

To customize the gallery's popup container, use the [popupTemplate](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#popuptemplate) property.

The example below demonstrates how to implement both an `template` and a `popupTemplate`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/galleryTemplate/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/galleryTemplate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/galleryTemplate/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/ribbon/gallery/galleryTemplate/src/app.component.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryTemplate" %}

> To learn more about other built-in Ribbon item types, refer to the [Ribbon Items](./items) documentation.