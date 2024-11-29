---
layout: post
title: Assist view in Angular AI AssistView component | Syncfusion
description: Checkout and learn about Assist view with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Assist view in Angular AI AssistView component

## Setting prompt text

You can use the [prompt](../api/ai-assistview#prompt) property to define the prompt text for the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptText/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptText/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/promptText" %}

## Setting prompt placeholder

You can use the [promptPlaceholder](../api/ai-assistview#promptplaceholder) property to set the placeholder text for the prompt textarea. The default value is `Type prompt for assistance...`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptPlaceholder/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptPlaceholder/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/promptPlaceholder" %}

## Prompt-response collection

You can use the [prompts](../api/ai-assistview#prompts) property to initialize the component with the configured data as a collection of prompts and responses or individual entries.

> The [prompts](../api/ai-assistview#prompts) collection stores all the prompts and responses generated.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/prompts" %}

## Adding prompt suggestions

You can use the [promptSuggestions](../api/ai-assistview#promptsuggestions) property, to add the suggestions in both initial and on-demand which help users to refine their prompts. Additionally, custom header can be set for suggestions further enhancing the user experience.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptSuggestions/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptSuggestions/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/promptSuggestions" %}

### Adding suggestions header

You can use the [promptSuggestionsHeader](../api/ai-assistview#promptsuggestionsheader) property to set the header text for the prompt suggestions in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptSuggestionsHeader/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptSuggestionsHeader/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/promptSuggestionsHeader" %}

## Adding prompt iconCss

You can customize the appearance of the prompter avatar by using the [promptIconCss](../api/ai-assistview#prompticoncss) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptIconCss/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptIconCss/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/promptIconCss" %}

## Adding response iconCss

You can use the [responseIconCss](../api/ai-assistview#responseiconcss) property to customize the appearance of the responder avatar. By default, the `e-assistview-icon` class is added as the built-in AI AssistView response icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/responseIconCss/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/responseIconCss/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/responseIconCss" %}

## Show or hide clear button

You can use the [showClearButton](../api/ai-assistview#showclearbutton) property to show or hide the clear button. By default, its value is `false`, when the clear button is clicked, the prompt text entered will be cleared.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/showClearButton/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/showClearButton/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/showClearButton" %}
