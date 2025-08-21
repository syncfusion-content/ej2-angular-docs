---
layout: post
title: Appearance in Angular AI AssistView component | Syncfusion
description: Checkout and learn about Appearance with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular AI AssistView component

The Syncfusion AI AssistView for Angular allows for customization of its dimensions and overall look and feel. This can be achieved by setting the component's width and height or by applying custom CSS styles.

## Setting Component Width

The [width](../api/ai-assistview/#width) property allows you to define the width of the AI AssistView container. You can set this value as a string, using either pixels (e.g., `"500px"`) or a percentage (e.g., `"50%"`). By default, the width is set to `100%`, allowing it to fill its parent container.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/appearance/width/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/appearance/width/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/appearance/width" %}

## Setting Component Height

The [height](../api/ai-assistview/#height) property allows you to define the height of the AI AssistView container. This value can be a string, specified in pixels (e.g., `"600px"`) or as a percentage (e.g., `"100%"`). The default value is `100%`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/appearance/height/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/appearance/height/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/appearance/height" %}

## Applying Custom CSS Styles

For more advanced style customizations, you can use the [cssClass](../api/ai-assistview/#cssclass)  property to apply one or more custom CSS classes to the AI AssistView component's root element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/appearance/cssClass/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/appearance/cssClass/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/appearance/cssClass" %}