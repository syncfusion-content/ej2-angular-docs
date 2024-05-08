---
layout: post
title: Dimension in Angular Predefined dialogs component | Syncfusion
description: Learn here all about Dimension in Syncfusion Angular Predefined dialogs component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Dimension in Angular Predefined dialogs component

Customize the predefined dialogs dimensions using the `height` and `width` properties.
You can specify the dimension values in both pixels and percentage format to change the default dialog width and height values.

## Alert dimension

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/alert-dimension-cs1" %}

## Confirm dimension

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/confirm-dimension-cs1" %}

## Prompt dimension

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/prompt-dimension-cs1" %}

## Max-width and max-height

To have a restricted max-width and max-height dialog dimension, you need to specify the max-width, max-height CSS properties for the component’s container element by using the `cssClass` property. The max-height value is calculated in source level and set to the dialog. so, need to override the max-height property.

Use the following code to customize the max-width and max-height for alert dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/max-width-height-cs1" %}

## Min-width and min-height

To have a restricted min-width and min-height dialog dimension, you need to specify the min-width, min-height CSS properties for the component’s container element by using the `cssClass` property.

Use the following code to customize the min-width and min-height for alert dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/min-width-height-cs1" %}
