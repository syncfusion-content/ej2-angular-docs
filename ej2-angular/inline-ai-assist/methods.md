---
layout: post
title: Methods in Angular Inline AI Assist | Syncfusion
description:  Checkout and learn about methods with Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Angular Inline AI Assist component

## Adding response

You can use the [addResponse](../api/inline-ai-assist#addresponse) public method to add the response to the Inline AI Assist.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/methods/add-response/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/methods/add-response/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/methods/add-response/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/methods/add-response/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/methods/add-response" %}

## Executing prompt

You can use the [executePrompt](../api/inline-ai-assist#executeprompt) method to execute the prompts dynamically in the Inline AI Assist. It accepts prompts as string values, which triggers the [promptRequest](../api/inline-ai-assist#promptrequest) event and performs the callback actions.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/methods/execute-prompt" %}

## Showing popup

You can use [showPopup](../api/inline-ai-assist#showPopup) method to open the Inline AI Assist popup and optionally position it at specified coordinates.

## Hiding popup

You can use [hidePopup](../api/inline-ai-assist#hidePopup) method to close the Inline AI Assist popup.

Below sample demonstrates the usage of `showPopup` and `hidePopup` methods in Inline Assist component.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/methods/show-hide-commandpopup" %}

## Showing command popup

Use [showCommandPopup](../api/inline-ai-assist#showCommandPopup) to open the command action popup; it only opens when the Inline AI Assist popup is already opened.

## Hiding command popup

You can use [hideCommandPopup](../api/inline-ai-assist#hideCommandPopup) to close the command action popup in the Inline AI Assist component.

Below sample demonstrates the usage of `showCommandPopup` and `hideCommandPopup` methods in Inline Assist component.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/methods/show-hide-componentpopup" %}
