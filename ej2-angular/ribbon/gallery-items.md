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

The Ribbon supports Gallery view which allows users to perform specific actions by displaying a collection of related items, including icons, content, or images. You can render the gallery Ribbon items by using the `<e-ribbon-item>` tag directive, by specifying the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `Gallery` and customize it by using the [RibbonGallerySettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/), which provides options such as `groups`, `itemCount`, `popupHeight`, `popupWidth` and more.

## Groups 

You can render the groups inside the gallery items by using [groups](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#groups) property and customize the groups using [RibbonGalleryGroupModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/), which provides options such as `items`, `cssClass`, `header` and more.

### Adding items

You can render the gallery items by using [items](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#items) property and customize using the [RibbonGalleryItemModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/), which provides options such as `content`, `iconCss`, `disabled` and more.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/galleryItems" %}

#### Adding content

You can use the [content](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#content) property to define the text content for the gallery item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/itemContent/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/itemContent/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/itemContent/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/itemContent/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/itemContent" %}

#### Adding icons

You can use the [iconCss](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#iconcss) property to define the icons for the gallery item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/galleryIcon/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/galleryIcon/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/galleryIcon/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/galleryIcon/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/galleryIcon" %}

#### Adding html attributes

You can use the [htmlAttributes](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#htmlattributes) property to add HTML attributes to the Ribbon gallery item.

The following sample showcases how to add title attribute to the gallery item using `htmlAttributes` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/htmlAttributes" %}

#### Css class

You can use the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#cssclass) property to customize the gallery item.

The following sample showcases how to customize the appearance of each gallery item using the `cssClass` property .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/classCustomization/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/classCustomization/src/app.module.ts %}
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

#### Disabled

You can use the [disabled](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryItemModel/#disabled) property to disable the Ribbon gallery item. It prevents the user interaction when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/disabledItem/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/disabledItem/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/disabledItem/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/disabledItem/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/disabledItem" %}

### Custom header

You can use the [header](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#header) property to set header for the group items in the Ribbon gallery popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/galleryItems" %}

### Setting item width

You can use the [itemWidth](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#itemwidth) property to specify the width of gallery items.

### Setting item height

You can use the [itemHeight](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#itemheight) property to set the height of the gallery items. If the `itemHeight` of the gallery item is smaller the remaining gallery items are aligned based on the [itemCount](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) specified.

The provided example demonstrates how to customize gallery items using the `itemWidth` and `itemHeight` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/itemHeightAndWidth" %}

### Group styling

You can use the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGalleryGroupModel/#cssclass) property to customize the appearance of gallery groups.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/groupCustomization/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/groupCustomization/src/app.module.ts %}
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

## Setting item count

You can customize the number if items to be displayed in Ribbon gallery by using the [itemCount](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) property. By default the `itemCount` will be `3`.

The following example showcases the utilization of the `itemCount` property, displaying a ribbon gallery with `4` items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/itemCount/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/itemCount/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/itemCount/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/itemCount/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/itemCount" %}

## Setting selected item

You can use the [selectedItemIndex](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#selecteditemindex) property to define the currently selected item in the Ribbon gallery items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/selectedItemIndex" %}

## Setting popup height

You can specify the height of the gallery popup by using the [popupHeight](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#popupheight) property.

## Setting popup width

you can specify the width of the gallery popup by using the [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGallerySettingsModel/#popupwidth) propery.

The example demonstrates the customization of popup with `popupHeight` and `popupWidth` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/gallery/popupHeightWidth" %}

> To know more about the built-in Ribbon items, please refer to the [Ribbon Items](./items) section.