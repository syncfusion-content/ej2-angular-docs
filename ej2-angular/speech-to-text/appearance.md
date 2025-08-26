---
layout: post
title: Appearance in Angular SpeechToText Component | Syncfusion
description: Checkout and learn about appearance in Syncfusion Essential Angular SpeechToText component, its elements, and more details.
platform: ej2-angular
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## SpeechToText component

## Customizing the button

You can use the [buttonSettings](../api/speech-to-text/#buttonSettings) property to customize the appearance of the start and stop buttons in the speech to text conversion.

### Setting start content

You can use the [content](../api/speech-to-text/buttonSettingsModel/#content) property to define text content for the listening start state in the SpeechToText button.

### Setting stop content

You can use the [stopContent](../api/speech-to-text/buttonSettingsModel/#stopContent) property to define text content for the listening stop state in the SpeechToText button.

### Setting iconcss

You can use the [iconCss](../api/speech-to-text/buttonSettingsModel/#iconCss) property to apply a CSS class to customize the icon appearance for the listening start state.

### Setting stop iconcss

You can use the [stopIconCss](../api/speech-to-text/buttonSettingsModel/#stopIconCss) property to apply a CSS class to customize the icon appearance for the listening stop state.

### Positioning the button icon

The [iconPosition](../api/speech-to-text/buttonSettingsModel/#iconPosition) property controls the icon's placement, allowing it to be displayed on the top, bottom, left, or right side of the button's text.

### Configuring the primary button

The [isPrimary](../api/speech-to-text/buttonSettingsModel/#isPrimary) property configures the button's appearance to indicate a primary action. Setting this to `true` makes the button more prominent. This is a convenient alternative to manually adding the `e-primary` style via the `cssClass` property.

The following code sample demonstrates how to configure these button properties.

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

{% previewsample "page.domainurl/samples/speech-to-text/appearance/button-settings/index" %}

## Customizing the Tooltip Display

The [tooltipSettings](../api/speech-to-text/#tooltipSettings) property allows customization of the tooltip's content and position.

### Setting start content

You can use the [content](../api/speech-to-text/tooltipSettingsModel/#content) property to customize the content to be displayed in the tooltip when the speech recognition begins.

### Setting stop content

You can use the [stopContent](../api/speech-to-text/tooltipSettingsModel/#stopContent) property to customize the stop button tooltip text which is displayed on-hover.

### Positioning the tooltip

The [position](../api/speech-to-text/tooltipSettingsModel/#position) property determines the placement of the tooltip relative to the button.

The following example shows how to configure the tooltip settings.

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

{% previewsample "page.domainurl/samples/speech-to-text/appearance/tooltip-settings/index" %}

## Applying Custom Styles with cssClass

The [cssClass](../api/speech-to-text/#cssClass) property provides a way to apply custom styling to the Speech-to-Text component. This property can be used to add custom user-defined classes or apply predefined styles. You can customize by adding the cssClass property with the below defined class. 

| cssClass | Description | 
|---|---|
| `e-primary` | Represents a primary action. |
| `e-outline` | Renders the button with an outline style. |
| `e-info` | Indicates an informative action. |
| `e-success` | Indicates a positive action. |
| `e-warning` | Warns the user of a potential issue. |
| `e-danger` | Indicates a destructive or negative action. |

## Setting cssclass

You can use the [cssClass](../api/speech-to-text/#cssClass) property to customize the appearance of the SpeechToText component.

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

{% previewsample "page.domainurl/samples/speech-to-text/appearance/cssClass/index" %}