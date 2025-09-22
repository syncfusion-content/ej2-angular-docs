---
layout: post
title: Size and color in Angular AppBar component | Syncfusion
description: Learn here all about Size and color in Syncfusion Angular AppBar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AppBar
documentation: ug
domainurl: ##DomainURL##
---

# Size and color in Angular AppBar component

The Angular AppBar component provides flexible sizing and color customization options through the `mode` and `colorMode` properties. These properties allow developers to create AppBars that fit various design requirements and application contexts.

## Size

The AppBar size can be configured using the [mode](https://ej2.syncfusion.com/angular/documentation/api/appbar/#mode) property. The AppBar supports three distinct size modes to accommodate different content requirements and design preferences:

* Regular AppBar
* Prominent AppBar
* Dense AppBar

### Regular AppBar

This mode is the default one in which the AppBar is displayed with the default height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/regular-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/regular-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/regular-cs1" %}

### Prominent AppBar

This height mode can be set to the AppBar by setting `Prominent` to the property [mode](https://ej2.syncfusion.com/angular/documentation/api/appbar/#mode). The prominent AppBar is displayed with a longer height and can be used for larger titles, images, or texts. It is also longer than the regular AppBar. In the following example, we have customized the prominent text using align-self and white-space CSS properties. You can change the prominent AppBar height if larger titles, images, or texts are used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/prominent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/prominent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/prominent-cs1" %}

### Dense AppBar

This height mode can be set to the AppBar by setting `Dense` to the property [mode](https://ej2.syncfusion.com/angular/documentation/api/appbar/#mode). Dense AppBar is displayed with shorter height which is denser to accommodate all the AppBar content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/dense-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/dense-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/dense-cs1" %}

## Color

The background and font colors can be set using the [colorMode](https://ej2.syncfusion.com/angular/documentation/api/appbar/#colormode) property. The available types of background color for the AppBar are as follows:

* Light AppBar
* Dark AppBar
* Primary AppBar
* Inherit AppBar

### Light AppBar

This color mode is the default one in which the AppBar can be displayed with a light background and its corresponding font color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/light-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/light-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/light-cs1" %}

### Dark AppBar

This color mode can be set to the AppBar by setting `Dark` to the property [colorMode](https://ej2.syncfusion.com/angular/documentation/api/appbar/#colormode). A dark AppBar can be displayed with a dark background and its corresponding font color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/dark-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/dark-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/dark-cs1" %}

### Primary AppBar

This color mode can be set to the AppBar by setting `Primary` to the property [colorMode](https://ej2.syncfusion.com/angular/documentation/api/appbar/#colormode). The primary AppBar can be displayed with primary colors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/primary-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/primary-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/primary-cs1" %}

### Inherit AppBar

This color mode can be set to the AppBar by setting `Inherit` to the property [colorMode](https://ej2.syncfusion.com/angular/documentation/api/appbar/#colormode). The AppBar inherits the background and font color from its parent element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/inherit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/inherit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/inherit-cs1" %}