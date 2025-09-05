---
layout: post
title: Templates in Angular AI AssistView component | Syncfusion
description: Checkout and learn about templates with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular AI AssistView component

The AI AssistView component offers several template options to customize the banner, prompt items, response items, suggestions, and footer.

## Banner template

The [bannerTemplate](../api/ai-assistview/#bannertemplate) property allows for the display of custom content, such as a welcome note or introductory instructions, at the top of the AI AssistView's conversation area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/bannerTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/bannerTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/bannerTemplate" %}

## Prompt item template

To customize the appearance of prompt items, use the [promptItemTemplate](../api/ai-assistview/#promptitemtemplate) with an `ng-template` directive. The template's context provides `prompt`, `toolbarItems`, and `index` items for tailored rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/promptItemTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/promptItemTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/promptItemTemplate" %}

## Response item template

The [responseItemTemplate](../api/ai-assistview/#responseitemtemplate) can be utilized with an `ng-template` directive to modify the layout of response items. The available context includes `prompt`, `response`, `index`, `toolbarItems`, and `output`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/responseItemTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/responseItemTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/responseItemTemplate" %}

## Prompt suggestion item template

For customizing the prompt suggestion items, the [promptSuggestionItemTemplate](../api/ai-assistview/#promptsuggestionitemtemplate) can be implemented using an `ng-template` directive. The context for this template includes the `index` and `promptSuggestion` items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/promptSuggestionItemTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/promptSuggestionItemTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/promptSuggestionItemTemplate" %}

## Footer template

The [footerTemplate](../api/ai-assistview/#footertemplate) property offers a way to replace the default footer and manage prompt request actions. This enables the creation of unique footers that can include custom functionalities, such as a character counter or a button to clear the conversation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/footerTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/footerTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/footerTemplate" %}