---
layout: post
title: Speech-to-Text With Angular AI AssistView component | Syncfusion
description:  Checkout and learn about configuration of Speech-to-Text with Azure OpenAI in Angular AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---


# Speech-to-Text in Angular AI AssistView

The Syncfusion Angular AI AssistView component supports `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), enabling conversion of spoken words into text using the device's microphone.

## Prerequisites

Before integrating `Speech-to-Text`, ensure the following:

1. The Syncfusion AI AssistView component is properly set up in your Angular application.
    - [Angular Getting Started Guide](../getting-started)

2. The AI AssistView component is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).

    - [Integration of Azure OpenAI With Angular AI AssistView component](../ai-integrations/openai-integration.md)

## Configure Speech-to-Text

To enable Speech-to-Text functionality, modify the `app.component.ts` file to incorporate the Web Speech API. The SpeechToText component listens for microphone input, transcribes spoken words, and updates the AI AssistView's editable footer with the transcribed text. The transcribed text is then sent as a prompt to the Azure OpenAI service via the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/speech/stt/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/speech/stt/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/speech/stt" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

ng serve

```

Open the hosted link to interact with your AI AssistView.