---
layout: post
title: Text-to-Speech With Angular AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of Text-to-Speech with Azure OpenAI in Angular AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---


# Integration of Text-to-Speech with Azure OpenAI in AI AssistView

The Syncfusion Angular AI AssistView component supports `Text-to-Speech` (TTS) functionality using the browser's Web Speech API specifically using the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface to convert AI-generated response into spoken audio.

The Syncfusion AI AssistView supports integration with a `Text-to-Speech` (TTS) feature, which uses the browser's built-in [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to convert the AI's response into speech.

## Prerequisites

Before integrating `Text-to-Speech`, ensure the following:

1. The Syncfusion AI AssistView component is properly set up in your Angular application.
    - [Angular Getting Started Guide](../getting-started)

2. The AI AssistView component is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).

    - [Integration of Azure Open AI With Angular AI AssistView component](../ai-integrations/openai-integration.md)

## Integrating Text-to-Speech with AI AssistView

To enable Text-to-Speech functionality, modify the `app.component.ts` file to incorporate the Web Speech API. A custom `Read Aloud` button is added to the response toolbar using the [responseToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/ai-assistview/#responsetoolbarsettings) property. When clicked, the `onResponseToolbarItemClicked` event extracts plain text from the generated AI response and use the browser SpeechSynthesis API to read it aloud.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/speech/tts/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/speech/tts/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/speech/tts" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

ng serve

```

Open the hosted link to interact with your AI AssistView. After a response is received, click the `Read Aloud` icon on the response toolbar to hear it spoken.