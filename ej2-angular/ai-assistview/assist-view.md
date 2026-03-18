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

The [prompt](https://ej2.syncfusion.com/angular/documentation/api/ai-assistview#prompt) property allows you to define initial or default text that appears in the prompt input area. This property is useful for pre-filling the input with context or guidance for users.

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

The [promptPlaceholder](../api/ai-assistview#promptplaceholder) property defines the placeholder text displayed in the prompt textarea when it's empty. The default placeholder text is `Type prompt for assistance...`.

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

The [prompts](../api/ai-assistview#prompts) property enables you to initialize the component with pre-configured conversation data or retrieve the complete history of user interactions.

> The [prompts](../api/ai-assistview#prompts) collection automatically stores all user inputs and corresponding AI responses generated during the session, providing a complete conversation history that can be accessed programmatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/prompts" %}

### Update response as markdown

The AI AssistView supports rendering responses as **Markdown** content, which is automatically converted to HTML using the built-in [Markdown Converter](https://ej2.syncfusion.com/angular/documentation/markdown-editor/markdown-preview). When you pass markdown-formatted text in the response, it will be displayed as formatted HTML in the AI AssistView. The streaming of markdown content happens seamlessly with built-in support for dynamic rendering.

You can use markdown syntax like **bold**, *italic*, headings, lists, code blocks, and links to format your responses.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/markdown-prompt/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/markdown-prompt/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/markdown-prompt" %}

## Configuring prompt suggestions

The [promptSuggestions](../api/ai-assistview#promptsuggestions) property provides users with helpful suggestions that can appear initially or on-demand. These suggestions help users formulate better prompts and discover available functionality, enhancing the overall user experience.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptSuggestions/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptSuggestions/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/promptSuggestions" %}

### Customizing suggestions header

The [promptSuggestionsHeader](../api/ai-assistview#promptsuggestionsheader) property allows you to set a descriptive header text that appears above the prompt suggestions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptSuggestionsHeader/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/promptSuggestionsHeader/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/promptSuggestionsHeader" %}

## Customizing user avatar appearance

The [promptIconCss](../api/ai-assistview#prompticoncss) property enables customization of the user avatar icon that appears alongside user prompts.

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

The [responseIconCss](../api/ai-assistview#responseiconcss) property allows customization of the AI assistant avatar that appears alongside AI responses. By default, the `e-assistview-icon` class is added as the built-in AI AssistView response icon.

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

The [showClearButton](../api/ai-assistview#showclearbutton) property controls the visibility of the clear button in the prompt input area. By default, its value is `false`, When the clear button is clicked, only the current prompt text is cleared, while the conversation history remains intact.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/showClearButton/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/showClearButton/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/showClearButton" %}

## Enable scroll to bottom icon

You can use the [enableScrollToBottom](../api/ai-assistview#enablescrolltobottom) property to show or hide the scroll-to-bottom indicator. By default, this property is `true`. When enabled, a floating icon/button appears when the user scrolls away from the bottom of the conversation. Clicking this icon smoothly scrolls the view to the bottom to display the latest response.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/scroll-to-bottom/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/scroll-to-bottom/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/scroll-to-bottom" %}