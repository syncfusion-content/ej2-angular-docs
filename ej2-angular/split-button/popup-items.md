---
layout: post
title: Popup items in Angular Split button component | Syncfusion
description: Learn here all about Popup items in Syncfusion Angular Split button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Popup items 
documentation: ug
domainurl: ##DomainURL##
---

# Popup items in Angular Split button component

## Icons

The Popup action item have an icon or image to provide visual representation of the action. To place the icon on a popup item, set the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/split-button#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the popup action item.

In the following sample, the icons for Cut, Copy and Paste menu items are
added using the iconCss property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/popup-icon-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/split-button/popup-icon-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/popup-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/popup-icon-cs1" %}

## Template

### Item Templating

Popup items can be customized by using the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/split-button#beforeitemrender) event. The item render event triggers while rendering each Popup action item. The event argument will be used to identify the action item and customize it based on the requirement.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/split-button/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/template-cs1" %}

### Popup Templating

The whole popup can be customized as per the requirement. In the following example, the popup can be customized by handling it in [`target`](https://ej2.syncfusion.com/angular/documentation/api/split-button#target) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/popup-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/split-button/popup-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/popup-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/popup-template-cs1" %}

## See Also

* [Popup items grouping](./how-to/group-items-in-popup)
* [SplitButton popup with separator](./icons-and-separator#separator)