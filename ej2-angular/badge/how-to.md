---
layout: post
title: How to in Angular Badge component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Badge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to 
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Badge component

The badge is a completely customizable and integral component, and this section shows how to customize and integrate badges with other components.

## Customize badges

### Colour customization

Even though badges come with `8 predefined colors`, you can also customize the colour of the badge as desired.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/color-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/color-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/color-cs1" %}

### Customize badge size

Badges are designed to change its size based on the content. To change the size of a badge,
adjust the `font size` of the badge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/size-cs1" %}

### Custom position

Even though the badges support the conventional `top` and `bottom` positions, the position of the badges can be changed as desired.
This can be done by adding a custom class to the badge element to override the default position applied from the source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/custom-position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/custom-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/custom-position-cs1" %}

## Integration

### Listview

The badges can be integrated with the `listview` component to indicate new notification with colour based on priority.

In the following sample, `default` badges are used and there is no need to customize the
badge size. The component will automatically adjust the size based on the container element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/listview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/listview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/listview-cs1" %}

## Dynamic Content

Badges in real-time needs to be updated dynamically based on the requirements. In this sample, using Angular data binding the badges content will be updated dynamically. Click the increment button to change the badge value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/dynamic-badge-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/dynamic-badge-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/dynamic-badge-cs1" %}
