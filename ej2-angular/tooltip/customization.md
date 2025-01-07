---
layout: post
title: Customization in Angular Tooltip component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Tooltip component

The Tooltip can be customized by using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#cssclass) property, which accepts custom CSS class names that define specific user-defined styles and themes to be applied to the Tooltip element.

## Tip pointer customization

The tip pointer's size, background, and border colors can be styled using the `cssClass` property, as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs6" %}

## Tooltip customization

The complete look and feel of the Tooltip can be customized by changing its background color, opacity, content font, etc.
The following code example demonstrates how to achieve this customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/custom-css-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tooltip/custom-css-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/custom-css-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/custom-css-cs1" %}
