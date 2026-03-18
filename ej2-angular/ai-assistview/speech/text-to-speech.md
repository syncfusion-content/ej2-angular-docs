---
layout: post
title: Text-to-Speech With Angular AI AssistView component | Syncfusion
description:  Checkout and learn about configuration of Text-to-Speech with Azure OpenAI in Angular AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---


# Text-to-Speech in Angular AI AssistView

The Syncfusion Angular AI AssistView component integrates `Text-to-Speech` (TTS) functionality using the browser's Web Speech API, specifically the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface. This allows AI-generated responses to be converted into spoken audio, enhancing accessibility and user interaction.

## Prerequisites

Before integrating `Text-to-Speech`, ensure the following:

1. The Syncfusion AI AssistView component is properly set up in your Angular application.
    - [Angular Getting Started Guide](../getting-started)

2. The AI AssistView component is integrated with [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/).
    - [Integration of Azure OpenAI With Angular AI AssistView component](../ai-integrations/openai-integration.md)

## Configure Text-to-Speech

To enable Text-to-Speech functionality, modify the `app.component.ts` file to incorporate the Web Speech API. A custom `Read Aloud` button is added to the response toolbar using the [responseToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/ai-assistview#responsetoolbarsettings) property. When clicked, the [itemClicked](https://ej2.syncfusion.com/angular/documentation/api/ai-assistview/responseToolbarSettingsModel#itemclicked) event extracts plain text from the generated AI response and use the browser SpeechSynthesis API to read it aloud.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/speech/tts/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/speech/tts/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/speech/tts" %}

## See Also

* [Speech-to-Text](./speech-to-text.md)