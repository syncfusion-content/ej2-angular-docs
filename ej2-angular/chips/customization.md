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

This section explains the customization of styles, leading icons, avatar, and trailing icons in the Chips component

## Styles

The Chips component has the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/chips/#cssclass) property.

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
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/customization/styles-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs1" %}

## Leading Icon

You can add and customize the leading icon of chip using the [`leadingIconCss`](https://ej2.syncfusion.com/angular/documentation/api/chips/#leadingiconcss) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/customization/styles-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs2" %}

## Avatar

You can add and customize the avatar of chip using the [`avatarIconCss`](https://ej2.syncfusion.com/angular/documentation/api/chips/#avatariconcss) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/customization/styles-cs3/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs3" %}

## Avatar Content

You can add and customize the avatar content of chip using the [`avatarText`](https://ej2.syncfusion.com/angular/documentation/api/chips/#avatartext) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/customization/styles-cs4/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs4" %}

## Trailing Icon

You can add and customize the trailing icon of chip using the [`trailingIconCss`](https://ej2.syncfusion.com/angular/documentation/api/chips/#trailingiconcss) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/customization/styles-cs5/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs5" %}

## Outline Chips

Outline chips has the border with the background transparent. It can be set using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/chips/#cssclass) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/customization/styles-cs6/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/customization/styles-cs6" %}

## Template

The [`template`](https://helpej2.syncfusion.com/angular/documentation/api/chips/#template) property of the Chips component allows users to fully customize the layout and design of each chip. By using the `template` property, users can include custom HTML elements, such as links, icons, or additional content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/customization/styles-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/customization/styles-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="style.css" %}
{% include code-snippet/chips/customization/styles-cs7/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chips/customization/styles-cs7" %}
