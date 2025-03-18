---
layout: post
title: Appearance in Angular SpeechToText component | Syncfusion
description: Checkout and learn about Appearance with Angular SpeechToText component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## SpeechToText component

## Customizing the button

You can use the `buttonSettings` property to customize the appearance of the start and stop buttons in the speech to text conversion.

### Setting start content

You can use the `content` property to define text content for the listening start state in the SpeechToText button.

### Setting stop content

You can use the `stopContent` property to define text content for the listening stop state in the SpeechToText button.

### Setting iconcss

You can use the `iconCss` property to apply a CSS class to customize the icon appearance for the listening start state.

### Setting stop iconcss

You can use the `stopIconCss` property to apply a CSS class to customize the icon appearance for the listening stop state.

### Setting icon position

You can display the icon on the top, bottom, left, or right side of the button text content using the `iconPosition` property.

### Setting primary

You can use the `isPrimary` property to configure the button as a primary action button.

Below code sample demonstrates how to configure the button with above mentioned properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/appearance/button-settings/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/appearance/button-settings/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/appearance/button-settings/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/appearance/button-settings" %}

## Customizing the tooltips

You can use the `tooltipSettings` property to customize the content and positions of the tooltip.

### Setting start content

You can use the `content` property to customize the content to be displayed in the tooltip when the speech recognition begins.

### Setting stop content

You can use the `stopContent` property to customize the stop button tooltip text which is displayed on-hover.

### Setting tooltip position

You can use the `position` property to determine the placement of tooltips relative to the button.

Below code sample demonstrates how to configure the tooltip with above mentioned properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/appearance/tooltip-settings/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/appearance/tooltip-settings/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/appearance/tooltip-settings/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/appearance/tooltip-settings" %}

## Setting button styles

The SpeechToText component supports the following predefined styles that can be defined using the `cssClass` property. You can customize by adding the cssClass property with the below defined class. 

| cssClass | Description | 
| -------- | -------- | 
| `e-primary` | Used to represent a primary action. | 
| `e-outline` |  Used to represent an appearance of button with outline. | 
| `e-info` |  Used to represent an informative action. | 
| `e-success` | Used to represent a positive action. | 
| `e-warning` | Used to represent an action with caution. | 
| `e-danger` | Used to represent a negative action. |

## Setting cssclass

You can use the `cssClass` property to customize the appearance of the SpeechToText component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/appearance/cssClass/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/appearance/cssClass/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/appearance/cssClass/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/appearance/cssClass" %}