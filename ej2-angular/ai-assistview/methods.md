---
layout: post
title: Methods in Angular AI AssistView component | Syncfusion
description: Checkout and learn about templates with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Angular AI AssistView component

## Adding prompt response

You can use the `addPromptResponse` public method to add the prompts and responses to the AI AssistView. You can add the it either as a `string` or `object` collection.

### Adding responses as string.

You can add string response, by passing it as argument for the `addPromptResponse('Response')` method which adds as the response of last added prompt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/methods/responseString/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/methods/responseString/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/methods/responseString" %}

### Adding responses as object.

You can add object response, by passing the prompt and response as a collection as argument for the `addPromptResponse({prompt: 'Prompt text', response: 'Response text'})` method which adds as a new prompt and response in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/methods/responseObject/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/methods/responseObject/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/methods/responseObject" %}

## Executing prompt

You can use the `executePrompt` method to execute the prompts dynamically in the AI AssistView. It accepts prompts as string values, which triggers the `promptRequest` event and performs the callback actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/methods/executePrompt/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/methods/executePrompt/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/methods/executePrompt" %}
