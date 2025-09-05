---
layout: post
title: Customization in Angular Timeline component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Timeline component

The Timeline component offers extensive customization options for visual styling including dot appearance, connector lines, borders, spacing, and color schemes. This section demonstrates various approaches to customize Timeline items and create visually distinctive event displays.

## Connector styling
### Common styling

Define styles that apply to all Timeline item connectors for consistent visual presentation across the entire Timeline.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/customization/connector-common/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/customization/connector-common/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/customization/connector-common/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/customization/connector-common/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/customization/connector-common" %}

### Individual styling

Apply unique styles to specific connectors to differentiate particular items within the Timeline sequence.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/customization/connector-individual/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/customization/connector-individual/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/customization/connector-individual/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/customization/connector-individual/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/customization/connector-individual" %}

## Dot styling
### Dot color

You can modify the color of the dots to highlight the specific Timeline items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/customization/dot-color/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/customization/dot-color/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/customization/dot-color/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/customization/dot-color/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/customization/dot-color" %}

### Dot size

Adjust dot dimensions using the `--dot-size` CSS custom property to create visual emphasis or maintain design consistency with different Timeline layouts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/customization/dot-size/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/customization/dot-size/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/customization/dot-size/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/customization/dot-size/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/customization/dot-size" %}

### Dot shadow

Create visually engaging Timeline dots by adding shadow effects using the `--dot-outer-space` and `--dot-border` CSS custom properties. These properties control the outer spacing and border appearance of Timeline dots.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/customization/dot-shadow/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/customization/dot-shadow/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/customization/dot-shadow/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/customization/dot-shadow/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/customization/dot-shadow" %}

### Dot variant

Create different dot appearances by customizing border, outline, and background color properties of Timeline dots. This enables distinct visual styles for different types of events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/customization/dot-variant/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/customization/dot-variant/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/customization/dot-variant/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/customization/dot-variant/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/customization/dot-variant" %}

### Dot outline

Apply the `e-outline` class to the Timeline [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/timeline/#cssclass) property to enable outline-style dots to have an outline state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/customization/dot-outline/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/customization/dot-outline/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/customization/dot-outline/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/customization/dot-outline/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/customization/dot-outline" %}