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

## Customize badge color

Even though badges come with `8 predefined colors`, you can also customize the color of the badge to suit your needs. Define custom color classes in `styles.css` (for example `.green`, `.blue`, `.purple`, and a `.gradient` background) and apply them to the badge element alongside the `e-badge` classes.

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

Badges are designed to change their size based on the content. To change the size of a badge,
adjust the `font-size` of the badge. Define CSS classes with different `font-size` values in
`styles.css` (for example `.size_1`, `.size_2`, and `.size_3`) and apply the desired class to
the badge element.

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

Even though the badges support the conventional `top` and `bottom` positions, the position of the badges can be repositioned to suit your needs.
This can be done by adding a custom class to the badge element to override the default position applied from the source. Define custom classes
in `styles.css` (for example `.leftTop` and `.leftBottom`) that apply a `transform` to move the badge, and add the class to the badge element.

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
