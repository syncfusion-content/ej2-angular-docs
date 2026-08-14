---
layout: post
title: Dimension in Angular Predefined Dialogs | Syncfusion
description: Set the width and height of Syncfusion Angular Predefined Dialogs in pixels or percentages, and limit them with max-width, max-height, min-width, and min-height.
platform: ej2-angular
control: Dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Dimension in Angular Predefined Dialogs

Customize predefined dialog dimensions using the `height` and `width` properties. Specify dimension values in pixels or percentage format to change the default dialog width and height.

## Alert dimension

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/alert-dimension-cs1" %}

## Confirm dimension

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/confirm-dimension-cs1" %}

## Prompt dimension

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/prompt-dimension-cs1" %}

## Max-width and max-height

To restrict the maximum dialog dimensions, specify the `max-width` and `max-height` CSS properties for the component's container element using the `cssClass` property. The `max-height` value is calculated at the source level and applied to the dialog, so you may need to override it.

The following code customizes the `max-width` and `max-height` for the alert dialog:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/max-width-height-cs1" %}

## Min-width and min-height

To restrict the minimum dialog dimensions, specify the `min-width` and `min-height` CSS properties for the component's container element using the `cssClass` property.

The following code customizes the `min-width` and `min-height` for the alert dialog:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/min-width-height-cs1" %}
