---
layout: post
title: How to customize badge in Angular Badge | Syncfusion
description: Customize Syncfusion Angular Badge color, size, and position with custom CSS or font-size to match your application's visual design.
platform: ej2-angular
control: Badge customization 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize badge in Angular Badge

## Color customization

Even though badges come with `8 predefined colors`, you can also customize the color of the badge as desired.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/badge/color-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/badge/color-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/color-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/color-cs2" %}

## Customize badge size

Badges are designed to change its size based on the content. To change the size of a badge,
adjust the `font size` of the badge.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/badge/size-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/badge/size-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/size-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/size-cs2" %}

## Custom position

Even though the badges support the conventional `top` and `bottom` positions, the position of the badges can be changed as desired.
This can be done by adding a custom class to the badge element to override the default position applied from the source.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/badge/custom-position-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/badge/custom-position-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/custom-position-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/custom-position-cs2" %}
