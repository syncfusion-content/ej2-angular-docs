---
layout: post
title: Icons and separator in Angular Split button component | Syncfusion
description: Learn here all about Icons and separator in Syncfusion Angular Split button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Icons and separator 
documentation: ug
domainurl: ##DomainURL##
---

# Icons and separator in Angular Split button component

## SplitButton Icons

SplitButton can have an icon to provide the visual representation of the action. To place the icon on a SplitButton, set the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/split-button#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the SplitButton. You can customize the icon's position by using the [`iconPosition`](https://ej2.syncfusion.com/angular/documentation/api/split-button#iconposition) property

The following example illustrates how to place icon in SplitButton component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/icon-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/split-button/icon-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/icon-cs1" %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element.
You can also use third party icons on the splitBtn using the `iconCss`property.

### Vertical Button

Vertical Button in SplitButton can be achieved by adding `e-vertical` class using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/split-button#cssclass) property.

The following example illustrates how to vertical support in SplitButton component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/vertical-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/split-button/vertical-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/vertical-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/vertical-cs1" %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element.
You can also use third party icons on the SplitButton using the `iconCss`property.

## Separator

SplitButton component has Separator support. This can be achieved by setting `separator` as `true`.

The following example illustrates how to enable separator support in SplitButton component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/separator-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/split-button/separator-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/separator-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/separator-cs1" %}

## See Also

* [SplitButton popup with icons](./popup-items#icons)
