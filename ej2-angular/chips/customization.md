---
layout: post
title: Customization in Angular Chips component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Chips component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Chips component

This section explains the customization of styles, leading icons, avatar, and trailing icons in Chip control.

## Styles

The Chip control has the following predefined styles that can be defined using the `cssClass` property.

| Class | Description |
| -------- | -------- |
| e-primary | Represents a primary chip. |
| e-success | Represents a positive chip. |
| e-info |  Represents an informative chip. |
| e-warning | Represents a chip with caution. |
| e-danger | Represents a negative chip. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs1" %}

## Leading Icon

You can add and customize the leading icon of chip using the `leadingIconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs2" %}

## Avatar

You can add and customize the avatar of chip using the `avatarIconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs3" %}

## Avatar Content

You can add and customize the avatar content of chip using the `avatarText` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs4" %}

## Trailing Icon

You can add and customize the trailing icon of chip using the `trailingIconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs5" %}

## Outline Chip

Outline chip has the border with the background transparent. It can be set using the `cssClass` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs6" %}
